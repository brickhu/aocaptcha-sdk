(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._outter_1ymef_4{position:fixed;top:0;left:0;z-index:1000;width:0;height:0;all:initial;font-family:system-ui,sans-serif;font-size:1rem}@media (prefers-color-scheme: dark){._outter_1ymef_4 *{--color-base-0: rgb(0, 0, 0);--color-base-100: #171717;--color-base-200: #343434;--color-base-content: #c2c2c2;--color-primary: rgb(1, 136, 127);--color-primary-content: rgb(227, 218, 237)}}@media (prefers-color-scheme: light){._outter_1ymef_4 *{--color-base-0: rgb(255, 255, 255);--color-base-100: #e9e9e9;--color-base-200: #c9c9c9;--color-base-content: #171717;--color-primary: rgb(3, 187, 175);--color-primary-content: rgb(227, 218, 237)}}._backdrop_1ymef_47{background:rgb(from var(--color-base-0) r g b / 60%);width:100vw;height:100vh;position:fixed;top:0;left:0;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:1000}._container_1ymef_59{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--color-base-content);z-index:1001}._container_1ymef_59 button{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-200) r g b / 60%);--color-text: var(--color-base-content);border:none;cursor:pointer;background:transparent;padding:.5em 1em;box-sizing:border-box;color:var(--color-text);transition:all;transition-duration:.15s}._container_1ymef_59 button:hover{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-0) r g b / 100%);--color-text: var(--color-base-content)}._container_1ymef_59 button:disabled{opacity:50%}._container_1ymef_59 button._btn_1ymef_92{background-color:var(--color-bg);color:var(--color-text);border:solid 1px var(--color-border);padding:.5em 1em;border-radius:.4em;display:inline-flex;justify-content:center;align-items:center}._container_1ymef_59 a{color:var(--color-primary)}._container_1ymef_59 a:hover{color:var(--color-base-content);text-decoration:underline}input{border:solid 1px var(--color-border);color:var(--color-text)}._outter_1ymef_4,._container_1ymef_59,._content_1ymef_120,._backdrop_1ymef_47{transition:all;transition-duration:.15s}._content_1ymef_120{max-width:320px;width:320px;background-color:rgb(from var(--color-base-100) r g b / 60%);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:block;box-sizing:border-box;border-radius:1em;box-shadow:0 14px 47px -13px #0000000d;-webkit-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);-moz-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);border:solid 1px rgb(from var(--color-base-200) r g b / 60%)}._content_1ymef_120 ._head_1ymef_139{display:flex;width:100%;justify-content:space-between;align-items:center;padding:1em;box-sizing:border-box}._content_1ymef_120 ._main_1ymef_147{padding:1em 1.5em}._content_1ymef_120 ._foot_1ymef_150{padding:.5em 1em 1.5em;text-align:center;display:flex;justify-content:space-between;align-items:center}._content_1ymef_120 h3{font-size:1.1rem;line-height:1.2rem;padding:0;margin:0}._content_1ymef_120:hover{border:solid 1px rgb(from var(--color-base-200) r g b / 100%)}._captchabox_1ymef_171{display:flex;background-color:var(--color-base-200);justify-content:center;align-items:center;gap:.5em;padding:.5em;border-radius:.5em;width:100%}._svgbox_1ymef_182{width:fit-content}._svgbox_1ymef_182 svg{width:1em;object-fit:contain}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { template as C, effect as z, memo as nt, delegateEvents as dt, createComponent as w, Portal as ht, insert as E, className as y, setAttribute as O, render as ut } from "solid-js/web";
import { connect as yt, createDataItemSigner as vt } from "@permaweb/aoconnect/browser";
import { createSignal as A, createMemo as lt, createEffect as ft, onCleanup as ct, onMount as pt, batch as rt, Switch as mt, Match as st, For as gt } from "solid-js";
const wt = "_outter_1ymef_4", _t = "_backdrop_1ymef_47", bt = "_container_1ymef_59", Ct = "_btn_1ymef_92", xt = "_content_1ymef_120", Pt = "_head_1ymef_139", Rt = "_main_1ymef_147", kt = "_foot_1ymef_150", qt = "_captchabox_1ymef_171", At = "_svgbox_1ymef_182", v = {
  outter: wt,
  backdrop: _t,
  container: bt,
  btn: Ct,
  content: xt,
  head: Pt,
  main: Rt,
  foot: kt,
  captchabox: qt,
  svgbox: At
};
var Tt = /* @__PURE__ */ C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><g fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.7><path stroke-dasharray=16 stroke-dashoffset=16 d="M12 3c4.97 0 9 4.03 9 9"><animate fill=freeze attributeName=stroke-dashoffset dur=0.645s values=16;0></animate><animateTransform attributeName=transform dur=3.225s repeatCount=indefinite type=rotate values="0 12 12;360 12 12"></animateTransform></path><path stroke-dasharray=64 stroke-dashoffset=64 stroke-opacity=0.3 d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill=freeze attributeName=stroke-dashoffset dur=2.58s values=64;0>');
const it = (i) => (() => {
  var t = Tt();
  return z((r) => {
    var o = i?.size || "1em", s = i?.size || "1em";
    return o !== r.e && ((r.e = o) != null ? t.style.setProperty("width", o) : t.style.removeProperty("width")), s !== r.t && ((r.t = s) != null ? t.style.setProperty("height", s) : t.style.removeProperty("height")), r;
  }, {
    e: void 0,
    t: void 0
  }), t;
})(), Lt = (i) => {
  let t;
  const [r, o] = A(), s = lt(() => {
    let n = Math.floor(r() / 60 / 60 / 24).toString().padStart(2, "0"), a = Math.floor(r() / 60 / 60 % 24).toString().padStart(2, "0"), d = Math.floor(r() / 60 % 60).toString().padStart(2, "0"), f = Math.floor(r() % 60).toString().padStart(2, "0");
    return n != "00" ? `${n}:${a}:${d}:${f}` : `${a}:${d}:${f}`;
  }), l = () => {
    const n = Date.now(), a = (i?.end - n) / 1e3;
    o(a), t = requestAnimationFrame(l);
  };
  return ft(() => {
    t = requestAnimationFrame(l), ct(() => cancelAnimationFrame(t)), r() && r() <= 0 && i?.onTimeout && i?.onTimeout(r());
  }), nt(s);
};
var Mt = /* @__PURE__ */ C('<svg viewBox="0 0 277 277"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M119.455 25.881C127.686 10.0406 150.326 10.0388 158.556 25.881L265.485 231.76C273.113 246.446 262.469 264 245.935 264H32.0652C15.5311 264 4.88687 246.446 12.5149 231.76L119.455 25.881ZM139.005 98.5468C132.92 98.5468 127.988 103.485 127.988 109.577V155.615C115.155 160.161 105.952 172.385 105.952 186.789C105.952 205.064 120.751 219.879 139.005 219.879C157.259 219.877 172.059 205.063 172.059 186.789C172.059 172.386 162.854 160.162 150.023 155.615V109.577C150.023 103.486 145.089 98.5486 139.005 98.5468Z"fill=currentColor>');
const Ut = (i) => (() => {
  var t = Mt();
  return t.style.setProperty("height", "1em"), t;
})();
var $t = /* @__PURE__ */ C("<span>Verifying..."), St = /* @__PURE__ */ C("<span>AoCaptcha"), Et = /* @__PURE__ */ C('<div id=ao-captcha-sdk><div><div><div><p></p><button><svg xmlns=http://www.w3.org/2000/svg width=1em height=1em viewBox="0 0 24 24"><path fill=currentColor d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"></path></svg></button></div><div><div></div><div>Expired in:</div></div><div><input placeholder="input the code above"type=text required><button></button></div></div></div><div>'), zt = /* @__PURE__ */ C("<div>loading..."), Dt = /* @__PURE__ */ C("<div><svg xmlns=http://www.w3.org/2000/svg><path fill=currentColor>"), Vt = /* @__PURE__ */ C('<svg xmlns=http://www.w3.org/2000/svg width=2em height=2em viewBox="0 0 24 24"><path fill=none stroke=currentColor stroke-dasharray=24 stroke-dashoffset=24 stroke-linecap=round stroke-linejoin=round stroke-width=1.7 d="M5 11l6 6l10 -10"><animate fill=freeze attributeName=stroke-dashoffset dur=0.86s values=24;0>');
function Nt(i) {
  let t = null, r = null;
  const [o, s] = A(), [l, n] = A(!1), [a, d] = A(!1), [f, x] = A(), [c, p] = A(), b = lt(() => o() != null && c() != null && c()?.length == (o()?.digits || 3)), T = () => {
    b() && (d(!0), t(c()).then((h) => rt(() => {
      n(!1), p(null);
    })).catch((h) => {
      console.error(h), x("verify failed"), n(!1);
    }).finally(() => d(!1)));
  };
  return pt(() => {
    i?.ref({
      show: (h, _, $) => {
        t = _, r = $, rt(() => {
          d(!1), s(h), p(null), x(null), n(!0);
        });
      },
      close: (h) => {
        n(!1);
      }
    });
  }), ct(() => {
    console.log("aocaptcha is removed");
  }), w(ht, {
    get children() {
      var h = Et(), _ = h.firstChild, $ = _.firstChild, D = $.firstChild, P = D.firstChild, B = P.nextSibling, V = D.nextSibling, N = V.firstChild, L = N.nextSibling;
      L.firstChild;
      var G = V.nextSibling, m = G.firstChild, g = m.nextSibling, F = _.nextSibling;
      return P.style.setProperty("display", "flex"), P.style.setProperty("justifyContent", "start"), P.style.setProperty("alignItems", "center"), P.style.setProperty("gap", "0.5em"), E(P, w(mt, {
        get children() {
          return [w(st, {
            get when() {
              return a();
            },
            get children() {
              return [w(it, {}), " ", $t()];
            }
          }), w(st, {
            get when() {
              return !a();
            },
            get children() {
              return [w(Ut, {}), " ", St()];
            }
          })];
        }
      })), B.$$click = () => {
        n(!1), r();
      }, E(N, w(gt, {
        get each() {
          return o()?.paths;
        },
        get fallback() {
          return zt();
        },
        children: (e) => (() => {
          var R = Dt(), k = R.firstChild, S = k.firstChild;
          return z((u) => {
            var q = v.svgbox, M = e?.[0], U = e?.[1];
            return q !== u.e && y(R, u.e = q), M !== u.t && O(k, "viewBox", u.t = M), U !== u.a && O(S, "d", u.a = U), u;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          }), R;
        })()
      })), L.style.setProperty("font-size", "0.8em"), L.style.setProperty("text-align", "center"), L.style.setProperty("padding-top", "0.2em"), E(L, w(Lt, {
        get end() {
          return o()?.timestamp + o()?.duration;
        }
      }), null), m.$$input = (e) => {
        p(e.target.value);
      }, m.style.setProperty("padding", "4px 4px 4px 4px"), m.style.setProperty("min-width", "20px"), m.style.setProperty("min-width", "5em"), m.style.setProperty("font-size", "1.2em"), g.$$click = T, g.style.setProperty("--color-border", "var(--color-primary)"), g.style.setProperty("--color-bg", "var(--color-primary)"), g.style.setProperty("--color-text", "var(--color-primary-content)"), g.style.setProperty("border-radius", "100% 100% 100% 100%"), g.style.setProperty("width", "3em"), g.style.setProperty("height", "3em"), E(g, (() => {
        var e = nt(() => !!a());
        return () => e() ? w(it, {
          size: "2em"
        }) : Vt();
      })()), z((e) => {
        var R = v.outter, k = `${l() ? "visible" : "hidden"}`, S = v.container, u = `${l() ? "0% 0%" : "0% 50%"}`, q = `${l() ? "100" : "0"}`, M = v.content, U = v.head, Y = a(), Z = v.main, H = v.captchabox, J = v.foot, K = v.input, Q = o()?.digits || 3, X = a(), j = v.btn, tt = !b(), et = v.backdrop, I = `${l() ? "100" : "0"}`;
        return R !== e.e && y(h, e.e = R), k !== e.t && ((e.t = k) != null ? h.style.setProperty("visibility", k) : h.style.removeProperty("visibility")), S !== e.a && y(_, e.a = S), u !== e.o && ((e.o = u) != null ? _.style.setProperty("translate", u) : _.style.removeProperty("translate")), q !== e.i && ((e.i = q) != null ? _.style.setProperty("opacity", q) : _.style.removeProperty("opacity")), M !== e.n && y($, e.n = M), U !== e.s && y(D, e.s = U), Y !== e.h && (B.disabled = e.h = Y), Z !== e.r && y(V, e.r = Z), H !== e.d && y(N, e.d = H), J !== e.l && y(G, e.l = J), K !== e.u && y(m, e.u = K), Q !== e.c && O(m, "minlength", e.c = Q), X !== e.w && (m.disabled = e.w = X), j !== e.m && y(g, e.m = j), tt !== e.f && (g.disabled = e.f = tt), et !== e.y && y(F, e.y = et), I !== e.g && ((e.g = I) != null ? F.style.setProperty("opacity", I) : F.style.removeProperty("opacity")), e;
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
      }), z(() => m.value = c()), h;
    }
  });
}
dt(["click", "input"]);
const ot = (i) => i instanceof Array ? i.map((t) => ({
  name: t[0],
  value: t[1]
})) : Object.entries(i).map((r) => ({
  name: r[0],
  value: r[1]
})), at = (i) => {
  let t = {};
  return i.map((r) => {
    t[r.name] = r.value;
  }), t;
};
let W;
ut(() => w(Nt, {
  ref(i) {
    var t = W;
    typeof t == "function" ? t(i) : W = i;
  }
}), document.body);
class Wt {
  constructor(t, r) {
    this.process = t, this.recipient = r?.recipient || r?.Recipient, this.type = r?.type || r?.Type || "DEFAULT", this.wallet = r?.wallet || r?.Wallet, this.latest_request = null, this.MU_URL = r?.ao?.MU_URL || "https://mu.ao-testnet.xyz", this.CU_URL = r?.ao?.CU_URL || "https://cu.ao-testnet.xyz", this.GATEWAY_URL = r?.ao?.GATEWAY_URL || "https://arweave.net", this.MODE = r?.ao?.GATEWAY_URL || "legacy", this.URL = "http://node.arweaveoasis.com:8734", this.ao = yt({
      MODE: this.MODE,
      MU_URL: this.MU_URL || "https://mu.ao-testnet.xyz",
      CU_URL: this.CU_URL || "https://cu.ao-testnet.xyz",
      GATEWAY_URL: this.GATEWAY_URL || "https://arweave.net"
    });
  }
  m = async (t, r, o) => {
    console.log("pid: ", t), console.log("tags: ", r);
    try {
      this.wallet || reject("missed wallet");
      const {
        message: s,
        result: l
      } = this.ao, n = await s({
        process: t,
        tags: r,
        data: o || "",
        signer: vt(this.wallet)
      });
      if (!n)
        throw "send message faild or canceled";
      const a = await l({
        message: n,
        process: this.process
      });
      return [n, a];
    } catch (s) {
      throw s;
    }
  };
  getLatestRequest() {
    return this.latest_request;
  }
  request(t, r) {
    return new Promise(async (o, s) => {
      const l = Date.now();
      if (this.wallet = r || this.wallet, this.recipient = t.recipient || t.Recipient || this.recipient, this.type = t["Request-Type"] || t?.type || t?.Type || this.type || "DEFAULT", this.process || s("missed the captcha process id"), this.recipient || s("missed the request process id"), this.wallet || s("missed wallet"), this.latest_request && l - this.latest_request?.timestamp < this.latest_request.duration) {
        o(this.latest_request);
        return;
      }
      t.Action = "Request-Captcha", t.Recipient = t.Recipient || this.recipient, t["Request-Type"] = t["Request-Type"] || this.type, delete t.Type, delete t.type;
      const n = ot(t), [a, d] = await this.m(this.process, n, "a aocaptcha request").catch((f) => s(f));
      if (d?.Messages?.[0]) {
        const {
          Data: f,
          Tags: x
        } = d?.Messages?.[0], c = at(x), p = {
          id: a,
          paths: f && JSON.parse(f),
          timestamp: Number(c["Request-Time"]),
          duration: Number(c["Request-Duration"]),
          type: c["Captcha-Type"],
          digits: Number(c["Captcha-Digits"]),
          request_type: c["Request-Type"],
          recipient: this.recipient
        };
        console.log("AoCaptcha Request Id : ", a), this.latest_request = p, o(p);
      } else
        throw new Error("fetch captcha faild.");
    });
  }
  verify(t, r) {
    return new Promise(async (o, s) => {
      const l = Date.now();
      this.wallet = r || this.wallet, this.process || s("missed the captcha process id"), t || s("missed request data."), t.paths || s("missed captcha data."), (!t.timestamp || t?.timestamp + t?.duration < l) && s("the captcha is expired."), !this.wallet && !r && s("missed wallet"), W.show(t, async (n) => {
        try {
          const a = ot({
            Action: "Verify-Captcha",
            "Request-Id": t?.id,
            "Pushed-For": t?.id,
            "App-Name": "AoCaptcha"
          }), [d, f] = await this.m(this.process, a, n).catch((p) => s(p)), {
            Messages: x,
            Output: c
          } = f;
          if (x?.[0]) {
            const {
              Tags: p
            } = x?.[0], b = at(p), T = {
              id: b["Verify-Id"] || d,
              request_id: b["Request-Id"],
              request_time: b["Request-Time"],
              request_type: b["Request-Type"],
              verified_time: b["Verified-Time"],
              verified: !0,
              output: c
            };
            return console.log("AoCaptcha Verified Id: ", T?.id), this.latest_request = null, o(T), T;
          } else
            throw s("verify failed"), this.latest_request = null, "failed";
        } catch (a) {
          throw a;
        }
      }, () => {
        s("cancelled");
      });
    });
  }
}
export {
  Wt as AoCaptcha,
  ot as formatMessageTags,
  at as tagsArrayToObject
};
