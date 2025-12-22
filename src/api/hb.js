import * as aoconnect from "https://unpkg.com/@permaweb/aoconnect@latest/dist/browser.js";
const { createSigner, connect, createDataItemSigner } = aoconnect;

export const DEFAULT_HYPERBEAM_NODE_URL = "http://forward.computer"

export const GQLUrls = {
  goldsky: 'https://arweave-search.goldsky.com/graphql' ,
  arweave: 'https://arweave.net/graphql',
}


const processQueue = new Map();


const fetchRetry = async (
	input,
	init,
	opts
) => {
	const { retry, retryMs } = opts
	let tries = 0;
	while (true) {
		try {
			return await fetch(input, init);
		} catch (e) {
			if (tries++ < retry) {
				console.warn(`[ar-gql] waiting ${retryMs}ms before retrying ${tries} of ${retry}`)
				await new Promise((resolve) => setTimeout(resolve, retryMs))
				continue
			}
			throw new TypeError(`Failed to fetch from ${input} after ${retry} retries`, { cause: e })
		}
	}
}

export function arGql(options){
  const defaultOpts = {
    endpointUrl: 'https://arweave-search.goldsky.com/graphql',
    retries: 0,
    retryMs: 10_000,
  }
  const opts = { ...defaultOpts, ...options }
  //sanity check
  if (!opts.endpointUrl.match(/^https?:\/\/.*\/graphql*/)) {
    throw new Error(`string doesn't appear to be a URL of the form <http(s)://some-domain/graphql>'. You entered "${opts.endpointUrl}"`)
  }

  const run = async (
    query,
    variables
  ) => {
    const graphql = JSON.stringify({
      query,
      variables,
    });

    const res = await fetchRetry(
      opts.endpointUrl,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: graphql,
      },
      {
        retry: opts.retries,
        retryMs: opts.retryMs,
      }
    );

    if (!res.ok) {
      throw new Error(res.statusText, { cause: res.status })
    }

    return await res.json();
  };

 

  return {
    run
  }
}




export const formatMessageTags = (tags) =>{
  if(tags instanceof Array){
    return tags.map(item=>{return {name:item[0],value:item[1]}})
  }else{
    const arr = Object.entries(tags)
    return arr.map(item=>{return {name:item[0],value:item[1]}})
  }
}

export const tagsArrayToObject = (arr) =>{
  let tags = {}
  arr.map((item)=>{
    tags[item.name] = item.value
  })
  return tags
}

/**
 * 
 * @param {array} keys 
 * @param {array} arr 
 * @returns {array}
 */
export const findTagItemValues = (keys,arr) =>{
  const res = []
  for (const key of keys) {
    const tag_obj = arr.find(item => item.name === key);
    res.push(tag_obj?.value||null)
  }
  return res
}

export class AO {
  constructor(params) {
    this.gateWayUrl = params?.gateWayUrl || import.meta.env.VITE_GATEWAY_URL || "https://arweave.net";
    this.gqlUrl = import.meta.env.VITE_GQL_ENDPOINT || GQLUrls.arweave || GQLUrls.goldsky
    this.aoconnect = aoconnect.connect({
      MODE : params?.wallet && params?.url? "mainnet" : "",
      URL : params?.url || import.meta.env.VITE_HYPERBEAM_URL || "http://node.arweaveoasis.com:8734",
      MU_URL: params?.cu || import.meta.env.VITE_MU_URL || "https://mu.ao-testnet.xyz",
      CU_URL: params?.mu || import.meta.env.VITE_CU_URL || "https://cu.ao-testnet.xyz",
      GATEWAY_URL: this.gateWayUrl,
      GRAPHQL_URL: this.gqlUrl,
      GRAPHQL_MAX_RETRIES: 3,
      GRAPHQL_RETRY_INTERVAL: 1000,
      signer : params?.wallet && createSigner(params?.wallet)
    });
    this.wallet = params?.wallet;
    this.scheduler = import.meta.env.VITE_SCHEDULER ||  "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA";
    this.module = import.meta.env.VITE_AO_MODULE,
    this.hyberbeam_url = params?.url || import.meta.env.VITE_HYPERBEAM_URL || "http://node.arweaveoasis.com:8734"
  }

  message = async function(pid,tags,data,params) {
    this.wallet = params?.wallet || this.wallet
    return await this.aoconnect.message({
      process: pid,
      tags: tags?formatMessageTags(tags):[],
      data: data || "",
      signer: createDataItemSigner(this.wallet)
    })
  };

  result = async function(params) {
    return await this.aoconnect.result({
      process: params?.process,
      message: params?.message 
    })
  };

  read = async function(pid,msgid) {
    try {
      const response = await fetch(`${this.hyberbeam_url}/${pid}~process@1.0/compute&id=${msgid}/results?accept=application/json&accept-bundle=true`)
      const {body} = await response.json()
      return JSON.parse(body?.json?.body)
    } catch (error) {
      throw error
    }
    
  }

  checkMessage = async function([pid,msg],fn) {
    if(typeof(fn)!=="function") return [false,null]
    if(!pid) return [false,null]
    if(!msg) return [false,null]
    const res = await this.aoconnect.result({
      process: pid,
      message: msg
    })
    if(res.Error) return [false,null]
    const checked = await fn(res)
    console.log(checked)
    return [checked,res]
  }

  /**
   * Executes a dry run for a specific process with optional tags, data, and anchor.
   * Ensures that the process is queued and executed sequentially.
   *
   * @function
   * @param {string} pid - The process ID to execute the dry run for. Required.
   * @param {Array<string>} [tags] - Optional tags to include in the dry run request.
   * @param {string} [data] - Optional data payload for the dry run request.
   * @param {string} [anchor] - Optional anchor value for the dry run request.
   * @returns {Promise<any>} A promise that resolves with the result of the dry run.
   */
  dryrun = function(pid,tags,data,anchor) {
    if (!pid) return
    const lastPromise = processQueue.get(pid) || Promise.resolve();
    const fetchPromise = lastPromise.then(async () => this.aoconnect.dryrun({
      process: pid,
      tags: tags ? formatMessageTags(tags) : [],
      data: data || "",
      anchor: anchor || ""
    })).then(result => {
      if (processQueue.get(pid) === fetchPromise) {
        processQueue.delete(pid);
      }
      return result;
    })
    processQueue.set(pid, fetchPromise);
    return fetchPromise;
  }

  spawn = async function(params) {
    this.module = params?.module || this.module
    this.scheduler = params?.scheduler || this.scheduler || "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA"
    this.wallet = params?.wallet || this.wallet
    return await this.aoconnect.spawn({
      module: this.module,
      scheduler: this.scheduler,
      tags: params?.tags?formatMessageTags(params?.tags):[],
      data: params?.data || "",
      signer: createDataItemSigner(this.wallet),
    })
  }

  monitor = async function (params) {
    this.process = params?.process || this.process
    this.wallet = params?.wallet || this.wallet
    return await this.aoconnect.monitor({
      process: this.process,
      signer: createDataItemSigner(this.wallet),
    })
  }

  unmonitor = async function(params) {
    this.wallet = params?.wallet || this.wallet
    return await this.aoconnect.unmonitor({
      process: params?.process ,
      signer: createDataItemSigner(this.wallet)
    })
  };
  
  assign = async function(params) {
    return await this.aoconnect.assign({
      process: params?.process,
      message: params?.msgid,
      baseLayer: params?.baseLayer || false,
      exclude: params?.exclude || []
    })
  };

  query = async function(query,options) {
    const gql = arGql({endpointUrl: this.gqlUrl || GQLUrls.goldsky})
    let res = await gql.run(query||'');
    return res?.data?.transactions?.edges
  }

  fetch = async function (path,params) {
    return await fetch(`${this.hyberbeam_url}${path}`,params)
  }

  post = async function(pid,tags,options) {
    try {
      if(!pid) throw new Error("missed process id")
      const { request } = connect({
        MODE: "mainnet",
        URL: options?.hyberbeam_url || this.hyberbeam_url,
        signer: createSigner(this.wallet)
      });

      const req = {
        path: `/${pid}~process@1.0/push/serialize~json@1.0`,
        method: "POST",
        target: pid,
        signingFormat: "ANS-104",
      }

      for (const [key, value] of Object.entries(tags)) {
        req[key] = value
      }

      console.log("req",req)

      // return null

      return await request(req);
      
    } catch (error) {
      throw new Error(error)
    }
    

  }

}

