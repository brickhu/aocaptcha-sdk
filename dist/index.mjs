(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._outter_1ymef_4{position:fixed;top:0;left:0;z-index:1000;width:0;height:0;all:initial;font-family:system-ui,sans-serif;font-size:1rem}@media (prefers-color-scheme: dark){._outter_1ymef_4 *{--color-base-0: rgb(0, 0, 0);--color-base-100: #171717;--color-base-200: #343434;--color-base-content: #c2c2c2;--color-primary: rgb(1, 136, 127);--color-primary-content: rgb(227, 218, 237)}}@media (prefers-color-scheme: light){._outter_1ymef_4 *{--color-base-0: rgb(255, 255, 255);--color-base-100: #e9e9e9;--color-base-200: #c9c9c9;--color-base-content: #171717;--color-primary: rgb(3, 187, 175);--color-primary-content: rgb(227, 218, 237)}}._backdrop_1ymef_47{background:rgb(from var(--color-base-0) r g b / 60%);width:100vw;height:100vh;position:fixed;top:0;left:0;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:1000}._container_1ymef_59{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--color-base-content);z-index:1001}._container_1ymef_59 button{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-200) r g b / 60%);--color-text: var(--color-base-content);border:none;cursor:pointer;background:transparent;padding:.5em 1em;box-sizing:border-box;color:var(--color-text);transition:all;transition-duration:.15s}._container_1ymef_59 button:hover{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-0) r g b / 100%);--color-text: var(--color-base-content)}._container_1ymef_59 button:disabled{opacity:50%}._container_1ymef_59 button._btn_1ymef_92{background-color:var(--color-bg);color:var(--color-text);border:solid 1px var(--color-border);padding:.5em 1em;border-radius:.4em;display:inline-flex;justify-content:center;align-items:center}._container_1ymef_59 a{color:var(--color-primary)}._container_1ymef_59 a:hover{color:var(--color-base-content);text-decoration:underline}input{border:solid 1px var(--color-border);color:var(--color-text)}._outter_1ymef_4,._container_1ymef_59,._content_1ymef_120,._backdrop_1ymef_47{transition:all;transition-duration:.15s}._content_1ymef_120{max-width:320px;width:320px;background-color:rgb(from var(--color-base-100) r g b / 60%);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:block;box-sizing:border-box;border-radius:1em;box-shadow:0 14px 47px -13px #0000000d;-webkit-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);-moz-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);border:solid 1px rgb(from var(--color-base-200) r g b / 60%)}._content_1ymef_120 ._head_1ymef_139{display:flex;width:100%;justify-content:space-between;align-items:center;padding:1em;box-sizing:border-box}._content_1ymef_120 ._main_1ymef_147{padding:1em 1.5em}._content_1ymef_120 ._foot_1ymef_150{padding:.5em 1em 1.5em;text-align:center;display:flex;justify-content:space-between;align-items:center}._content_1ymef_120 h3{font-size:1.1rem;line-height:1.2rem;padding:0;margin:0}._content_1ymef_120:hover{border:solid 1px rgb(from var(--color-base-200) r g b / 100%)}._captchabox_1ymef_171{display:flex;background-color:var(--color-base-200);justify-content:center;align-items:center;gap:.5em;padding:.5em;border-radius:.5em;width:100%}._svgbox_1ymef_182{width:fit-content}._svgbox_1ymef_182 svg{width:1em;object-fit:contain}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var _e = Object.defineProperty;
var be = (i, e, t) => e in i ? _e(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var u = (i, e, t) => be(i, typeof e != "symbol" ? e + "" : e, t);
import { template as T, effect as V, memo as fe, delegateEvents as Ce, createComponent as x, Portal as Pe, insert as O, className as g, setAttribute as Q, render as xe } from "solid-js/web";
import { createSignal as q, createMemo as we, createEffect as Re, onCleanup as ve, onMount as ke, batch as se, Switch as Ae, Match as ce, For as Te } from "solid-js";
import * as ge from "https://unpkg.com/@permaweb/aoconnect@latest/dist/browser.js";
const Ue = "_outter_1ymef_4", $e = "_backdrop_1ymef_47", Le = "_container_1ymef_59", qe = "_btn_1ymef_92", Me = "_content_1ymef_120", me = "_head_1ymef_139", Se = "_main_1ymef_147", Ee = "_foot_1ymef_150", Ne = "_captchabox_1ymef_171", Oe = "_svgbox_1ymef_182", _ = {
  outter: Ue,
  backdrop: $e,
  container: Le,
  btn: qe,
  content: Me,
  head: me,
  main: Se,
  foot: Ee,
  captchabox: Ne,
  svgbox: Oe
};
var ze = /* @__PURE__ */ T('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><g fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.7><path stroke-dasharray=16 stroke-dashoffset=16 d="M12 3c4.97 0 9 4.03 9 9"><animate fill=freeze attributeName=stroke-dashoffset dur=0.645s values=16;0></animate><animateTransform attributeName=transform dur=3.225s repeatCount=indefinite type=rotate values="0 12 12;360 12 12"></animateTransform></path><path stroke-dasharray=64 stroke-dashoffset=64 stroke-opacity=0.3 d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill=freeze attributeName=stroke-dashoffset dur=2.58s values=64;0>');
const he = (i) => (() => {
  var e = ze();
  return V((t) => {
    var l = (i == null ? void 0 : i.size) || "1em", n = (i == null ? void 0 : i.size) || "1em";
    return l !== t.e && ((t.e = l) != null ? e.style.setProperty("width", l) : e.style.removeProperty("width")), n !== t.t && ((t.t = n) != null ? e.style.setProperty("height", n) : e.style.removeProperty("height")), t;
  }, {
    e: void 0,
    t: void 0
  }), e;
})(), De = (i) => {
  let e;
  const [t, l] = q(), n = we(() => {
    let s = Math.floor(t() / 60 / 60 / 24).toString().padStart(2, "0"), c = Math.floor(t() / 60 / 60 % 24).toString().padStart(2, "0"), a = Math.floor(t() / 60 % 60).toString().padStart(2, "0"), A = Math.floor(t() % 60).toString().padStart(2, "0");
    return s != "00" ? `${s}:${c}:${a}:${A}` : `${c}:${a}:${A}`;
  }), o = () => {
    const s = Date.now(), c = ((i == null ? void 0 : i.end) - s) / 1e3;
    l(c), e = requestAnimationFrame(o);
  };
  return Re(() => {
    e = requestAnimationFrame(o), ve(() => cancelAnimationFrame(e)), t() && t() <= 0 && (i != null && i.onTimeout) && (i == null || i.onTimeout(t()));
  }), fe(n);
};
var Ve = /* @__PURE__ */ T('<svg viewBox="0 0 277 277"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M119.455 25.881C127.686 10.0406 150.326 10.0388 158.556 25.881L265.485 231.76C273.113 246.446 262.469 264 245.935 264H32.0652C15.5311 264 4.88687 246.446 12.5149 231.76L119.455 25.881ZM139.005 98.5468C132.92 98.5468 127.988 103.485 127.988 109.577V155.615C115.155 160.161 105.952 172.385 105.952 186.789C105.952 205.064 120.751 219.879 139.005 219.879C157.259 219.877 172.059 205.063 172.059 186.789C172.059 172.386 162.854 160.162 150.023 155.615V109.577C150.023 103.486 145.089 98.5486 139.005 98.5468Z"fill=currentColor>');
const Fe = (i) => (() => {
  var e = Ve();
  return e.style.setProperty("height", "1em"), e;
})();
var Ge = /* @__PURE__ */ T("<span>Verifying..."), Ie = /* @__PURE__ */ T("<span>AoCaptcha"), Be = /* @__PURE__ */ T('<div id=ao-captcha-sdk><div><div><div><p></p><button><svg xmlns=http://www.w3.org/2000/svg width=1.5em height=1.5em viewBox="0 0 24 24"><path fill=currentColor d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"></path></svg></button></div><div><div></div><div>Expired in:</div></div><div><input placeholder="input the code above"type=text required><button></button></div></div></div><div>'), We = /* @__PURE__ */ T("<div>loading..."), Qe = /* @__PURE__ */ T("<div><svg xmlns=http://www.w3.org/2000/svg><path fill=currentColor>"), Ze = /* @__PURE__ */ T('<svg xmlns=http://www.w3.org/2000/svg width=2em height=2em viewBox="0 0 24 24"><path fill=none stroke=currentColor stroke-dasharray=24 stroke-dashoffset=24 stroke-linecap=round stroke-linejoin=round stroke-width=1.7 d="M5 11l6 6l10 -10"><animate fill=freeze attributeName=stroke-dashoffset dur=0.86s values=24;0>');
function Ye(i) {
  let e = null, t = null;
  const [l, n] = q(), [o, s] = q(!1), [c, a] = q(!1), [A, y] = q(), [R, f] = q(), b = we(() => {
    var h, w;
    return l() != null && R() != null && ((h = R()) == null ? void 0 : h.length) == (((w = l()) == null ? void 0 : w.digits) || 3);
  }), d = () => {
    b() && (a(!0), e(R()).then((h) => se(() => {
      s(!1), f(null);
    })).catch((h) => {
      console.error(h), y("verify failed"), s(!1);
    }).finally(() => a(!1)));
  };
  return ke(() => {
    i == null || i.ref({
      show: (h, w, E) => {
        e = w, t = E, se(() => {
          a(!1), n(h), f(null), y(null), s(!0);
        });
      },
      close: (h) => {
        s(!1);
      }
    });
  }), ve(() => {
    console.log("aocaptcha is removed");
  }), x(Pe, {
    get children() {
      var h = Be(), w = h.firstChild, E = w.firstChild, F = E.firstChild, U = F.firstChild, j = U.nextSibling, G = F.nextSibling, I = G.firstChild, M = I.nextSibling;
      M.firstChild;
      var H = G.nextSibling, C = H.firstChild, P = C.nextSibling, B = w.nextSibling;
      return U.style.setProperty("display", "flex"), U.style.setProperty("justifyContent", "start"), U.style.setProperty("alignItems", "center"), U.style.setProperty("gap", "0.5em"), O(U, x(Ae, {
        get children() {
          return [x(ce, {
            get when() {
              return c();
            },
            get children() {
              return [x(he, {}), " ", Ge()];
            }
          }), x(ce, {
            get when() {
              return !c();
            },
            get children() {
              return [x(Fe, {}), " ", Ie()];
            }
          })];
        }
      })), j.$$click = () => {
        s(!1), t();
      }, O(I, x(Te, {
        get each() {
          var r;
          return (r = l()) == null ? void 0 : r.paths;
        },
        get fallback() {
          return We();
        },
        children: (r) => (() => {
          var k = Qe(), $ = k.firstChild, N = $.firstChild;
          return V((v) => {
            var L = _.svgbox, m = r == null ? void 0 : r[0], S = r == null ? void 0 : r[1];
            return L !== v.e && g(k, v.e = L), m !== v.t && Q($, "viewBox", v.t = m), S !== v.a && Q(N, "d", v.a = S), v;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          }), k;
        })()
      })), M.style.setProperty("font-size", "0.8em"), M.style.setProperty("text-align", "center"), M.style.setProperty("padding-top", "0.2em"), O(M, x(De, {
        get end() {
          var r, k;
          return ((r = l()) == null ? void 0 : r.timestamp) + ((k = l()) == null ? void 0 : k.duration);
        }
      }), null), C.$$input = (r) => {
        f(r.target.value);
      }, C.style.setProperty("padding", "4px 4px 4px 4px"), C.style.setProperty("min-width", "20px"), C.style.setProperty("min-width", "5em"), C.style.setProperty("font-size", "1.2em"), P.$$click = d, P.style.setProperty("--color-border", "var(--color-primary)"), P.style.setProperty("--color-bg", "var(--color-primary)"), P.style.setProperty("--color-text", "var(--color-primary-content)"), P.style.setProperty("border-radius", "100% 100% 100% 100%"), P.style.setProperty("width", "3em"), P.style.setProperty("height", "3em"), O(P, (() => {
        var r = fe(() => !!c());
        return () => r() ? x(he, {
          size: "2em"
        }) : Ze();
      })()), V((r) => {
        var oe;
        var k = _.outter, $ = `${o() ? "visible" : "hidden"}`, N = _.container, v = `${o() ? "0% 0%" : "0% 50%"}`, L = `${o() ? "100" : "0"}`, m = _.content, S = _.head, J = c(), X = _.main, K = _.captchabox, p = _.foot, ee = _.input, te = ((oe = l()) == null ? void 0 : oe.digits) || 3, ne = c(), re = _.btn, ie = !b(), le = _.backdrop, W = `${o() ? "100" : "0"}`;
        return k !== r.e && g(h, r.e = k), $ !== r.t && ((r.t = $) != null ? h.style.setProperty("visibility", $) : h.style.removeProperty("visibility")), N !== r.a && g(w, r.a = N), v !== r.o && ((r.o = v) != null ? w.style.setProperty("translate", v) : w.style.removeProperty("translate")), L !== r.i && ((r.i = L) != null ? w.style.setProperty("opacity", L) : w.style.removeProperty("opacity")), m !== r.n && g(E, r.n = m), S !== r.s && g(F, r.s = S), J !== r.h && (j.disabled = r.h = J), X !== r.r && g(G, r.r = X), K !== r.d && g(I, r.d = K), p !== r.l && g(H, r.l = p), ee !== r.u && g(C, r.u = ee), te !== r.c && Q(C, "minlength", r.c = te), ne !== r.w && (C.disabled = r.w = ne), re !== r.m && g(P, r.m = re), ie !== r.f && (P.disabled = r.f = ie), le !== r.y && g(B, r.y = le), W !== r.g && ((r.g = W) != null ? B.style.setProperty("opacity", W) : B.style.removeProperty("opacity")), r;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0,
        i: void 0,
        n: void 0,
        s: void 0,
        h: void 0,
        r: void 0,
        d: void 0,
        l: void 0,
        u: void 0,
        c: void 0,
        w: void 0,
        m: void 0,
        f: void 0,
        y: void 0,
        g: void 0
      }), V(() => C.value = R()), h;
    }
  });
}
Ce(["click", "input"]);
const { createSigner: ae, connect: je, createDataItemSigner: z } = ge, ue = {
  goldsky: "https://arweave-search.goldsky.com/graphql",
  arweave: "https://arweave.net/graphql"
}, D = /* @__PURE__ */ new Map(), He = async (i, e, t) => {
  const { retry: l, retryMs: n } = t;
  let o = 0;
  for (; ; )
    try {
      return await fetch(i, e);
    } catch (s) {
      if (o++ < l) {
        console.warn(`[ar-gql] waiting ${n}ms before retrying ${o} of ${l}`), await new Promise((c) => setTimeout(c, n));
        continue;
      }
      throw new TypeError(`Failed to fetch from ${i} after ${l} retries`, { cause: s });
    }
};
function Je(i) {
  const t = { ...{
    endpointUrl: "https://arweave-search.goldsky.com/graphql",
    retries: 0,
    retryMs: 1e4
  }, ...i };
  if (!t.endpointUrl.match(/^https?:\/\/.*\/graphql*/))
    throw new Error(`string doesn't appear to be a URL of the form <http(s)://some-domain/graphql>'. You entered "${t.endpointUrl}"`);
  return {
    run: async (n, o) => {
      const s = JSON.stringify({
        query: n,
        variables: o
      }), c = await He(
        t.endpointUrl,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: s
        },
        {
          retry: t.retries,
          retryMs: t.retryMs
        }
      );
      if (!c.ok)
        throw new Error(c.statusText, { cause: c.status });
      return await c.json();
    }
  };
}
const Z = (i) => i instanceof Array ? i.map((e) => ({ name: e[0], value: e[1] })) : Object.entries(i).map((t) => ({ name: t[0], value: t[1] }));
class Xe {
  constructor(e) {
    u(this, "message", async function(e, t, l, n) {
      return this.wallet = (n == null ? void 0 : n.wallet) || this.wallet, await this.aoconnect.message({
        process: e,
        tags: t ? Z(t) : [],
        data: l || "",
        signer: z(this.wallet)
      });
    });
    u(this, "result", async function(e) {
      return await this.aoconnect.result({
        process: e == null ? void 0 : e.process,
        message: e == null ? void 0 : e.message
      });
    });
    u(this, "read", async function(e, t) {
      var l;
      try {
        const n = await fetch(`${this.hyberbeam_url}/${e}~process@1.0/compute&id=${t}/results?accept=application/json&accept-bundle=true`), { body: o } = await n.json();
        return JSON.parse((l = o == null ? void 0 : o.json) == null ? void 0 : l.body);
      } catch (n) {
        throw n;
      }
    });
    u(this, "checkMessage", async function([e, t], l) {
      if (typeof l != "function") return [!1, null];
      if (!e) return [!1, null];
      if (!t) return [!1, null];
      const n = await this.aoconnect.result({
        process: e,
        message: t
      });
      if (n.Error) return [!1, null];
      const o = await l(n);
      return console.log(o), [o, n];
    });
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
    u(this, "dryrun", function(e, t, l, n) {
      if (!e) return;
      const s = (D.get(e) || Promise.resolve()).then(async () => this.aoconnect.dryrun({
        process: e,
        tags: t ? Z(t) : [],
        data: l || "",
        anchor: n || ""
      })).then((c) => (D.get(e) === s && D.delete(e), c));
      return D.set(e, s), s;
    });
    u(this, "spawn", async function(e) {
      return this.module = (e == null ? void 0 : e.module) || this.module, this.scheduler = (e == null ? void 0 : e.scheduler) || this.scheduler || "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA", this.wallet = (e == null ? void 0 : e.wallet) || this.wallet, await this.aoconnect.spawn({
        module: this.module,
        scheduler: this.scheduler,
        tags: e != null && e.tags ? Z(e == null ? void 0 : e.tags) : [],
        data: (e == null ? void 0 : e.data) || "",
        signer: z(this.wallet)
      });
    });
    u(this, "monitor", async function(e) {
      return this.process = (e == null ? void 0 : e.process) || this.process, this.wallet = (e == null ? void 0 : e.wallet) || this.wallet, await this.aoconnect.monitor({
        process: this.process,
        signer: z(this.wallet)
      });
    });
    u(this, "unmonitor", async function(e) {
      return this.wallet = (e == null ? void 0 : e.wallet) || this.wallet, await this.aoconnect.unmonitor({
        process: e == null ? void 0 : e.process,
        signer: z(this.wallet)
      });
    });
    u(this, "assign", async function(e) {
      return await this.aoconnect.assign({
        process: e == null ? void 0 : e.process,
        message: e == null ? void 0 : e.msgid,
        baseLayer: (e == null ? void 0 : e.baseLayer) || !1,
        exclude: (e == null ? void 0 : e.exclude) || []
      });
    });
    u(this, "query", async function(e, t) {
      var o, s;
      let n = await Je({ endpointUrl: this.gqlUrl || ue.goldsky }).run(e || "");
      return (s = (o = n == null ? void 0 : n.data) == null ? void 0 : o.transactions) == null ? void 0 : s.edges;
    });
    u(this, "fetch", async function(e, t) {
      return await fetch(`${this.hyberbeam_url}${e}`, t);
    });
    u(this, "post", async function(e, t, l) {
      try {
        if (!e) throw new Error("missed process id");
        const { request: n } = je({
          MODE: "mainnet",
          URL: (l == null ? void 0 : l.hyberbeam_url) || this.hyberbeam_url,
          signer: ae(this.wallet)
        }), o = {
          path: `/${e}~process@1.0/push/serialize~json@1.0`,
          method: "POST",
          target: e,
          signingFormat: "ANS-104"
        };
        for (const [s, c] of Object.entries(t))
          o[s] = c;
        return console.log("req", o), await n(o);
      } catch (n) {
        throw new Error(n);
      }
    });
    this.gateWayUrl = (e == null ? void 0 : e.gateWayUrl) || void 0 || "https://arweave.net", this.gqlUrl = ue.arweave, this.aoconnect = ge.connect({
      MODE: e != null && e.wallet && (e != null && e.url) ? "mainnet" : "",
      URL: (e == null ? void 0 : e.url) || void 0 || "http://node.arweaveoasis.com:8734",
      MU_URL: (e == null ? void 0 : e.cu) || void 0 || "https://mu.ao-testnet.xyz",
      CU_URL: (e == null ? void 0 : e.mu) || void 0 || "https://cu.ao-testnet.xyz",
      GATEWAY_URL: this.gateWayUrl,
      GRAPHQL_URL: this.gqlUrl,
      GRAPHQL_MAX_RETRIES: 3,
      GRAPHQL_RETRY_INTERVAL: 1e3,
      signer: (e == null ? void 0 : e.wallet) && ae(e == null ? void 0 : e.wallet)
    }), this.wallet = e == null ? void 0 : e.wallet, this.scheduler = "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA", this.module = void 0, this.hyberbeam_url = (e == null ? void 0 : e.url) || void 0 || "http://node.arweaveoasis.com:8734";
  }
}
const de = (i) => i instanceof Array ? i.map((e) => ({
  name: e[0],
  value: e[1]
})) : Object.entries(i).map((t) => ({
  name: t[0],
  value: t[1]
})), ye = (i) => {
  let e = {};
  return i.map((t) => {
    e[t.name] = t.value;
  }), e;
};
let Y;
xe(() => x(Ye, {
  ref(i) {
    var e = Y;
    typeof e == "function" ? e(i) : Y = i;
  }
}), document.body);
class tt {
  constructor(e, t) {
    u(this, "m", async (e, t, l) => {
      try {
        this.wallet || reject("missed wallet");
        const {
          id: n,
          body: o
        } = await this.hb.send({
          target: e,
          data: l || "",
          ...t
        }, this.wallet);
        return [n, o];
      } catch (n) {
        throw n;
      }
    });
    var l, n, o, s;
    this.process = e, this.recipient = (t == null ? void 0 : t.recipient) || (t == null ? void 0 : t.Recipient), this.type = (t == null ? void 0 : t.type) || (t == null ? void 0 : t.Type) || "DEFAULT", this.wallet = (t == null ? void 0 : t.wallet) || (t == null ? void 0 : t.Wallet), this.latest_request = null, this.MU_URL = ((l = t == null ? void 0 : t.ao) == null ? void 0 : l.MU_URL) || "https://mu.ao-testnet.xyz", this.CU_URL = ((n = t == null ? void 0 : t.ao) == null ? void 0 : n.CU_URL) || "https://cu.ao-testnet.xyz", this.GATEWAY_URL = ((o = t == null ? void 0 : t.ao) == null ? void 0 : o.GATEWAY_URL) || "https://arweave.net", this.MODE = ((s = t == null ? void 0 : t.ao) == null ? void 0 : s.GATEWAY_URL) || "legacy", this.URL = "http://node.arweaveoasis.com:8734", this.hb = new Xe({
      url: this.URL || "http://node.arweaveoasis.com:8734",
      wallet: this.wallet || (t == null ? void 0 : t.wallet)
    });
  }
  getLatestRequest() {
    return this.latest_request;
  }
  request(e, t) {
    return new Promise(async (l, n) => {
      var A, y, R;
      const o = Date.now();
      if (this.wallet = t || this.wallet, this.recipient = e.recipient || e.Recipient || this.recipient, this.type = e["Request-Type"] || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.Type) || this.type || "DEFAULT", this.process || n("missed the captcha process id"), this.recipient || n("missed the request process id"), this.wallet || n("missed wallet"), this.latest_request && o - ((A = this.latest_request) == null ? void 0 : A.timestamp) < this.latest_request.duration) {
        l(this.latest_request);
        return;
      }
      e.Action = "Request-Captcha", e.Recipient = e.Recipient || this.recipient, e["Request-Type"] = e["Request-Type"] || this.type, delete e.Type, delete e.type;
      const s = de(e), [c, a] = await this.m(this.process, s, "a aocaptcha request").catch((f) => n(f));
      if ((y = a == null ? void 0 : a.Messages) != null && y[0]) {
        const {
          Data: f,
          Tags: b
        } = (R = a == null ? void 0 : a.Messages) == null ? void 0 : R[0], d = ye(b), h = {
          id: c,
          paths: f && JSON.parse(f),
          timestamp: Number(d["Request-Time"]),
          duration: Number(d["Request-Duration"]),
          type: d["Captcha-Type"],
          digits: Number(d["Captcha-Digits"]),
          request_type: d["Request-Type"],
          recipient: this.recipient
        };
        console.log("AoCaptcha Request Id : ", c), this.latest_request = h, l(h);
      } else
        throw new Error("fetch captcha faild.");
    });
  }
  verify(e, t) {
    return new Promise(async (l, n) => {
      const o = Date.now();
      this.wallet = t || this.wallet, this.process || n("missed the captcha process id"), e || n("missed request data."), e.paths || n("missed captcha data."), (!e.timestamp || (e == null ? void 0 : e.timestamp) + (e == null ? void 0 : e.duration) < o) && n("the captcha is expired."), !this.wallet && !t && n("missed wallet"), Y.show(e, async (s) => {
        try {
          const c = de({
            Action: "Verify-Captcha",
            "Request-Id": e == null ? void 0 : e.id,
            "Pushed-For": e == null ? void 0 : e.id,
            "App-Name": "AoCaptcha"
          }), [a, A] = await this.m(this.process, c, s).catch((f) => n(f)), {
            Messages: y,
            Output: R
          } = A;
          if (y != null && y[0]) {
            const {
              Tags: f
            } = y == null ? void 0 : y[0], b = ye(f), d = {
              id: b["Verify-Id"] || a,
              request_id: b["Request-Id"],
              request_time: b["Request-Time"],
              request_type: b["Request-Type"],
              verified_time: b["Verified-Time"],
              verified: !0,
              output: R
            };
            return console.log("AoCaptcha Verified Id: ", d == null ? void 0 : d.id), this.latest_request = null, l(d), d;
          } else
            throw n("verify failed"), this.latest_request = null, "failed";
        } catch (c) {
          throw c;
        }
      }, () => {
        n("cancelled");
      });
    });
  }
}
export {
  tt as AoCaptcha,
  de as formatMessageTags,
  ye as tagsArrayToObject
};
