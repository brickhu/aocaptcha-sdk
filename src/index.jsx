
import { render } from "solid-js/web";
import App from "./app"
import {connect,createSigner} from "https://unpkg.com/@permaweb/aoconnect@latest/dist/browser.js";

// export const formatMessageTags = (tags) =>{
//   if(tags instanceof Array){
//     return tags.map(item=>{return {name:item[0],value:item[1]}})
//   }else{
//     const arr = Object.entries(tags)
//     return arr.map(item=>{return {name:item[0],value:item[1]}})
//   }
// }

// export const tagsArrayToObject = (arr) =>{
//   let tags = {}
//   arr.map((item)=>{
//     tags[item.name] = item.value
//   })
//   return tags
// }


let _captcha_box
render(() => <App ref={_captcha_box} />, document.body);

export class AoCaptcha {
  constructor(process,options) {
    this.process = process
    this.recipient = options?.recipient || options?.Recipient
    this.type = options?.type || options?.Type || "DEFAULT"
    this.wallet = options?.wallet || options?.Wallet
    this.latest_request = null
    this.MU_URL = options?.ao?.MU_URL || "https://mu.ao-testnet.xyz",
    this.CU_URL = options?.ao?.CU_URL || "https://cu.ao-testnet.xyz",
    this.GATEWAY_URL = options?.ao?.GATEWAY_URL || "https://arweave.net"
    this.MODE = options?.ao?.MODE || "mainnet"
    this.URL = options?.ao?.URL || "https://push.forward.computer",
    this.SCHEDULER = options?.ao?.SCHEDULER || "n_XZJhUnmldNFo4dhajoPZWhBXuJk-OcQr5JQ49c4Zo"

  }
  pushMsg = async (params,data,wallet) => {
    const {request} = connect({
        MODE: 'mainnet',
        URL: this.URL || "https://push.forward.computer",
        SCHEDULER : this.SCHEDULER || "n_XZJhUnmldNFo4dhajoPZWhBXuJk-OcQr5JQ49c4Zo",
        signer: createSigner(wallet || this.wallet)
      })
      return await request({
        path: `/${this.process}~process@1.0/push`,
        target: this.process,
        data,
        method: 'POST',
        'signing-format': 'ans104',
        'accept-bundle': 'true',
        'accept-codec': 'httpsig@1.0',
        'require-codec': 'application/json',
        ...params
      })

  };
  getLatestRequest() {
    return this.latest_request
  }
  request(params,wallet) {
    return new Promise(async (resolve, reject) => {
      const now = Date.now()
      console.log("Requseting at " + now)
      this.wallet = wallet
      this.recipient = params.recipient || params.Recipient  || this.recipient
      this.type = params['Request-Type'] || params?.type || params?.Type || this.type || "DEFAULT"
      if (!this.process) { reject("missed the captcha process id") }
      if (!this.recipient) { reject("missed the request process id") }
      if (!this.wallet) { reject("missed wallet") }
      if (this.latest_request && (now - this.latest_request?.timestamp) < this.latest_request.duration) {
        resolve(this.latest_request)
        return
      }
      params['Action'] = "Request-Captcha"
      params['Recipient'] = params['Recipient'] || this.recipient 
      params['Request-Type'] = params['Request-Type'] || this.type
      delete params.Type
      delete params.type

      const response = await this.pushMsg(params,"a aocaptcha request",wallet)

      if(!response?.ok){
        throw new Error("fetch captcha faild.")
      }
      
      const {outbox} = await response?.json()

      if(outbox?.[1]){
        const r = outbox?.[1]
        const request = {
          id: r['Request-Id'],
          paths: r?.Data && JSON.parse(r.Data),
          timestamp: Number(r['Request-Time']),
          duration: Number(r['Request-Duration']),
          type: r['Captcha-Type'],
          digits: Number(r["Captcha-Digits"]),
          request_type : r["Request-Type"],
          recipient : this.recipient
        }

        console.log("request",request)
        this.latest_request = request
        resolve(request)
      }else{
        throw new Error("fetch captcha faild.")
      }
      
    });
  }
  verify(request, wallet) {
    return new Promise(async (resolve, reject) => {
      const now = Date.now()
      this.signer = createSigner(wallet)
      if (!this.process) { reject("missed the captcha process id") }
      if (!request) { reject("missed request data.") }
      if (!request.paths) { reject("missed captcha data.") }
      if (!request.timestamp || (request?.timestamp + request?.duration) < now) {
        reject("the captcha is expired.")
      }
      if (!this.wallet && !wallet) { reject("missed wallet") }
      _captcha_box.show(request, async(input) => {
        try {
          const params = {
            Action : "Verify-Captcha" ,
            ['Request-Id'] : request?.id,
            ["Pushed-For"] : request?.id,
            ["App-Name"] : "AoCaptcha"
          }

          const response = await this.pushMsg(params,input,wallet)
          console.log('verify response: ', response);

          if(!response?.ok){
            throw new Error("fetch captcha faild.")
          }
          
          const {outbox} = await response?.json()

          if (outbox?.[1]) {
            const r = outbox?.[1]
            const verification = {
              id: r['Verify-Id'] || id,
              request_id: r['Request-Id'],
              request_time: r["Request-Time"],
              request_type: r["Request-Type"],
              verified_time: r['Verified-Time'],
              verified: true
            }
            console.log('AoCaptcha Verified Id: ', verification?.id);
            this.latest_request = null
            resolve(verification)
          } else {
            this.latest_request = null
            throw ("verify failed")
          }
        } catch (err) {
          throw (err)
        }
      }, () => {
        reject("cancelled")
      })
    })
  }
}

