(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._outter_1ymef_4{position:fixed;top:0;left:0;z-index:1000;width:0;height:0;all:initial;font-family:system-ui,sans-serif;font-size:1rem}@media (prefers-color-scheme: dark){._outter_1ymef_4 *{--color-base-0: rgb(0, 0, 0);--color-base-100: #171717;--color-base-200: #343434;--color-base-content: #c2c2c2;--color-primary: rgb(1, 136, 127);--color-primary-content: rgb(227, 218, 237)}}@media (prefers-color-scheme: light){._outter_1ymef_4 *{--color-base-0: rgb(255, 255, 255);--color-base-100: #e9e9e9;--color-base-200: #c9c9c9;--color-base-content: #171717;--color-primary: rgb(3, 187, 175);--color-primary-content: rgb(227, 218, 237)}}._backdrop_1ymef_47{background:rgb(from var(--color-base-0) r g b / 60%);width:100vw;height:100vh;position:fixed;top:0;left:0;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:1000}._container_1ymef_59{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--color-base-content);z-index:1001}._container_1ymef_59 button{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-200) r g b / 60%);--color-text: var(--color-base-content);border:none;cursor:pointer;background:transparent;padding:.5em 1em;box-sizing:border-box;color:var(--color-text);transition:all;transition-duration:.15s}._container_1ymef_59 button:hover{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-0) r g b / 100%);--color-text: var(--color-base-content)}._container_1ymef_59 button:disabled{opacity:50%}._container_1ymef_59 button._btn_1ymef_92{background-color:var(--color-bg);color:var(--color-text);border:solid 1px var(--color-border);padding:.5em 1em;border-radius:.4em;display:inline-flex;justify-content:center;align-items:center}._container_1ymef_59 a{color:var(--color-primary)}._container_1ymef_59 a:hover{color:var(--color-base-content);text-decoration:underline}input{border:solid 1px var(--color-border);color:var(--color-text)}._outter_1ymef_4,._container_1ymef_59,._content_1ymef_120,._backdrop_1ymef_47{transition:all;transition-duration:.15s}._content_1ymef_120{max-width:320px;width:320px;background-color:rgb(from var(--color-base-100) r g b / 60%);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:block;box-sizing:border-box;border-radius:1em;box-shadow:0 14px 47px -13px #0000000d;-webkit-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);-moz-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);border:solid 1px rgb(from var(--color-base-200) r g b / 60%)}._content_1ymef_120 ._head_1ymef_139{display:flex;width:100%;justify-content:space-between;align-items:center;padding:1em;box-sizing:border-box}._content_1ymef_120 ._main_1ymef_147{padding:1em 1.5em}._content_1ymef_120 ._foot_1ymef_150{padding:.5em 1em 1.5em;text-align:center;display:flex;justify-content:space-between;align-items:center}._content_1ymef_120 h3{font-size:1.1rem;line-height:1.2rem;padding:0;margin:0}._content_1ymef_120:hover{border:solid 1px rgb(from var(--color-base-200) r g b / 100%)}._captchabox_1ymef_171{display:flex;background-color:var(--color-base-200);justify-content:center;align-items:center;gap:.5em;padding:.5em;border-radius:.5em;width:100%}._svgbox_1ymef_182{width:fit-content}._svgbox_1ymef_182 svg{width:1em;object-fit:contain}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { template as w, effect as S, memo as se, delegateEvents as le, createComponent as m, Portal as ce, insert as q, className as u, setAttribute as I, render as de } from "solid-js/web";
import { connect as he, createDataItemSigner as ue } from "@permaweb/aoconnect/browser";
import { createSignal as L, createMemo as oe, createEffect as ve, onCleanup as ne, onMount as ye, batch as te, Switch as fe, Match as re, For as me } from "solid-js";
const pe = "_outter_1ymef_4", ge = "_backdrop_1ymef_47", we = "_container_1ymef_59", _e = "_btn_1ymef_92", be = "_content_1ymef_120", xe = "_head_1ymef_139", Ce = "_main_1ymef_147", Pe = "_foot_1ymef_150", ke = "_captchabox_1ymef_171", Re = "_svgbox_1ymef_182", v = {
  outter: pe,
  backdrop: ge,
  container: we,
  btn: _e,
  content: be,
  head: xe,
  main: Ce,
  foot: Pe,
  captchabox: ke,
  svgbox: Re
};
var Le = /* @__PURE__ */ w('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><g fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.7><path stroke-dasharray=16 stroke-dashoffset=16 d="M12 3c4.97 0 9 4.03 9 9"><animate fill=freeze attributeName=stroke-dashoffset dur=0.645s values=16;0></animate><animateTransform attributeName=transform dur=3.225s repeatCount=indefinite type=rotate values="0 12 12;360 12 12"></animateTransform></path><path stroke-dasharray=64 stroke-dashoffset=64 stroke-opacity=0.3 d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill=freeze attributeName=stroke-dashoffset dur=2.58s values=64;0>');
const ie = (o) => (() => {
  var e = Le();
  return S((r) => {
    var s = o?.size || "1em", i = o?.size || "1em";
    return s !== r.e && ((r.e = s) != null ? e.style.setProperty("width", s) : e.style.removeProperty("width")), i !== r.t && ((r.t = i) != null ? e.style.setProperty("height", i) : e.style.removeProperty("height")), r;
  }, {
    e: void 0,
    t: void 0
  }), e;
})(), Ue = (o) => {
  let e;
  const [r, s] = L(), i = oe(() => {
    let n = Math.floor(r() / 60 / 60 / 24).toString().padStart(2, "0"), a = Math.floor(r() / 60 / 60 % 24).toString().padStart(2, "0"), p = Math.floor(r() / 60 % 60).toString().padStart(2, "0"), _ = Math.floor(r() % 60).toString().padStart(2, "0");
    return n != "00" ? `${n}:${a}:${p}:${_}` : `${a}:${p}:${_}`;
  }), l = () => {
    const n = Date.now(), a = (o?.end - n) / 1e3;
    s(a), e = requestAnimationFrame(l);
  };
  return ve(() => {
    e = requestAnimationFrame(l), ne(() => cancelAnimationFrame(e)), r() && r() <= 0 && o?.onTimeout && o?.onTimeout(r());
  }), se(i);
};
var $e = /* @__PURE__ */ w('<svg viewBox="0 0 277 277"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M119.455 25.881C127.686 10.0406 150.326 10.0388 158.556 25.881L265.485 231.76C273.113 246.446 262.469 264 245.935 264H32.0652C15.5311 264 4.88687 246.446 12.5149 231.76L119.455 25.881ZM139.005 98.5468C132.92 98.5468 127.988 103.485 127.988 109.577V155.615C115.155 160.161 105.952 172.385 105.952 186.789C105.952 205.064 120.751 219.879 139.005 219.879C157.259 219.877 172.059 205.063 172.059 186.789C172.059 172.386 162.854 160.162 150.023 155.615V109.577C150.023 103.486 145.089 98.5486 139.005 98.5468Z"fill=currentColor>');
const Ae = (o) => (() => {
  var e = $e();
  return e.style.setProperty("height", "1em"), e;
})();
var Me = /* @__PURE__ */ w("<span>Verifying..."), Te = /* @__PURE__ */ w("<span>AoCaptcha"), qe = /* @__PURE__ */ w('<div id=ao-captcha-sdk><div><div><div><p></p><button><svg xmlns=http://www.w3.org/2000/svg width=1em height=1em viewBox="0 0 24 24"><path fill=currentColor d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"></path></svg></button></div><div><div></div><div>Expired in:</div></div><div><input placeholder="input the code above"type=text required><button></button></div></div></div><div>'), Se = /* @__PURE__ */ w("<div>loading..."), Ee = /* @__PURE__ */ w("<div><svg xmlns=http://www.w3.org/2000/svg><path fill=currentColor>"), ze = /* @__PURE__ */ w('<svg xmlns=http://www.w3.org/2000/svg width=2em height=2em viewBox="0 0 24 24"><path fill=none stroke=currentColor stroke-dasharray=24 stroke-dashoffset=24 stroke-linecap=round stroke-linejoin=round stroke-width=1.7 d="M5 11l6 6l10 -10"><animate fill=freeze attributeName=stroke-dashoffset dur=0.86s values=24;0>');
function Ve(o) {
  let e = null, r = null;
  const [s, i] = L(), [l, n] = L(!1), [a, p] = L(!1), [_, E] = L(), [b, c] = L(), x = oe(() => s() != null && b() != null && b()?.length == (s()?.digits || 3)), ae = () => {
    x() && (p(!0), e(b()).then((d) => te(() => {
      n(!1), c(null);
    })).catch((d) => {
      console.error(d), E("verify failed"), n(!1);
    }).finally(() => p(!1)));
  };
  return ye(() => {
    o?.ref({
      show: (d, g, M) => {
        e = g, r = M, te(() => {
          p(!1), i(d), c(null), E(null), n(!0);
        });
      },
      close: (d) => {
        n(!1);
      }
    });
  }), ne(() => {
    console.log("aocaptcha is removed");
  }), m(ce, {
    get children() {
      var d = qe(), g = d.firstChild, M = g.firstChild, z = M.firstChild, C = z.firstChild, W = C.nextSibling, V = z.nextSibling, D = V.firstChild, U = D.nextSibling;
      U.firstChild;
      var G = V.nextSibling, y = G.firstChild, f = y.nextSibling, F = g.nextSibling;
      return C.style.setProperty("display", "flex"), C.style.setProperty("justifyContent", "start"), C.style.setProperty("alignItems", "center"), C.style.setProperty("gap", "0.5em"), q(C, m(fe, {
        get children() {
          return [m(re, {
            get when() {
              return a();
            },
            get children() {
              return [m(ie, {}), " ", Me()];
            }
          }), m(re, {
            get when() {
              return !a();
            },
            get children() {
              return [m(Ae, {}), " ", Te()];
            }
          })];
        }
      })), W.$$click = () => {
        n(!1), r();
      }, q(D, m(me, {
        get each() {
          return s()?.paths;
        },
        get fallback() {
          return Se();
        },
        children: (t) => (() => {
          var P = Ee(), k = P.firstChild, T = k.firstChild;
          return S((h) => {
            var R = v.svgbox, $ = t?.[0], A = t?.[1];
            return R !== h.e && u(P, h.e = R), $ !== h.t && I(k, "viewBox", h.t = $), A !== h.a && I(T, "d", h.a = A), h;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          }), P;
        })()
      })), U.style.setProperty("font-size", "0.8em"), U.style.setProperty("text-align", "center"), U.style.setProperty("padding-top", "0.2em"), q(U, m(Ue, {
        get end() {
          return s()?.timestamp + s()?.duration;
        }
      }), null), y.$$input = (t) => {
        c(t.target.value);
      }, y.style.setProperty("padding", "4px 4px 4px 4px"), y.style.setProperty("min-width", "20px"), y.style.setProperty("min-width", "5em"), y.style.setProperty("font-size", "1.2em"), f.$$click = ae, f.style.setProperty("--color-border", "var(--color-primary)"), f.style.setProperty("--color-bg", "var(--color-primary)"), f.style.setProperty("--color-text", "var(--color-primary-content)"), f.style.setProperty("border-radius", "100% 100% 100% 100%"), f.style.setProperty("width", "3em"), f.style.setProperty("height", "3em"), q(f, (() => {
        var t = se(() => !!a());
        return () => t() ? m(ie, {
          size: "2em"
        }) : ze();
      })()), S((t) => {
        var P = v.outter, k = `${l() ? "visible" : "hidden"}`, T = v.container, h = `${l() ? "0% 0%" : "0% 50%"}`, R = `${l() ? "100" : "0"}`, $ = v.content, A = v.head, Y = a(), O = v.main, H = v.captchabox, Z = v.foot, J = v.input, K = s()?.digits || 3, Q = a(), X = v.btn, j = !x(), ee = v.backdrop, B = `${l() ? "100" : "0"}`;
        return P !== t.e && u(d, t.e = P), k !== t.t && ((t.t = k) != null ? d.style.setProperty("visibility", k) : d.style.removeProperty("visibility")), T !== t.a && u(g, t.a = T), h !== t.o && ((t.o = h) != null ? g.style.setProperty("translate", h) : g.style.removeProperty("translate")), R !== t.i && ((t.i = R) != null ? g.style.setProperty("opacity", R) : g.style.removeProperty("opacity")), $ !== t.n && u(M, t.n = $), A !== t.s && u(z, t.s = A), Y !== t.h && (W.disabled = t.h = Y), O !== t.r && u(V, t.r = O), H !== t.d && u(D, t.d = H), Z !== t.l && u(G, t.l = Z), J !== t.u && u(y, t.u = J), K !== t.c && I(y, "minlength", t.c = K), Q !== t.w && (y.disabled = t.w = Q), X !== t.m && u(f, t.m = X), j !== t.f && (f.disabled = t.f = j), ee !== t.y && u(F, t.y = ee), B !== t.g && ((t.g = B) != null ? F.style.setProperty("opacity", B) : F.style.removeProperty("opacity")), t;
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
      }), S(() => y.value = b()), d;
    }
  });
}
le(["click", "input"]);
const De = (o) => o instanceof Array ? o.map((e) => ({
  name: e[0],
  value: e[1]
})) : Object.entries(o).map((r) => ({
  name: r[0],
  value: r[1]
}));
let N;
de(() => m(Ve, {
  ref(o) {
    var e = N;
    typeof e == "function" ? e(o) : N = o;
  }
}), document.body);
class Ne {
  constructor(e, r) {
    this.process = e, this.recipient = r?.recipient || r?.Recipient, this.type = r?.type || r?.Type || "DEFAULT", this.wallet = r?.wallet || r?.Wallet, this.latest_request = null, this.MU_URL = r?.ao?.MU_URL || "https://mu.ao-testnet.xyz", this.CU_URL = r?.ao?.CU_URL || "https://cu.ao-testnet.xyz", this.GATEWAY_URL = r?.ao?.GATEWAY_URL || "https://arweave.net", this.MODE = r?.ao?.GATEWAY_URL || "legacy", this.URL = "http://node.arweaveoasis.com:8734";
  }
  m = async (e, r, s) => {
    try {
      this.wallet || reject("missed wallet");
      const {
        message: i,
        result: l
      } = he({
        MODE: this.MODE,
        MU_URL: this.MU_URL || "https://mu.ao-testnet.xyz",
        CU_URL: this.CU_URL || "https://cu.ao-testnet.xyz",
        GATEWAY_URL: this.GATEWAY_URL || "https://arweave.net"
      }), n = await i({
        process: e,
        tags: r,
        data: s || "",
        signer: ue(this.wallet)
      });
      if (!n)
        throw "send message faild or canceled";
      const a = await l({
        message: n,
        process: this.process
      });
    } catch (i) {
      throw i;
    }
  };
  getLatestRequest() {
    return this.latest_request;
  }
  request(e, r) {
    return new Promise(async (s, i) => {
      const l = Date.now();
      if (this.wallet = r || this.wallet, this.recipient = e.recipient || e.Recipient || this.recipient, this.type = e["Request-Type"] || e?.type || e?.Type || this.type || "DEFAULT", this.process || i("missed the captcha process id"), this.recipient || i("missed the request process id"), this.wallet || i("missed wallet"), this.latest_request && l - this.latest_request?.timestamp < this.latest_request.duration) {
        s(this.latest_request);
        return;
      }
      e.Action = "Request-Captcha", e.Recipient = e.Recipient || this.recipient, e["Request-Type"] = e["Request-Type"] || this.type, console.log(De(e));
    });
  }
  verify(e, r) {
    return new Promise(async (s, i) => {
      const l = Date.now();
      this.wallet = r || this.wallet, this.process || i("missed the captcha process id"), e || i("missed request data."), e.paths || i("missed captcha data."), (!e.timestamp || e?.timestamp + e?.duration < l) && i("the captcha is expired."), !this.wallet && !r && i("missed wallet"), N.show(e, async (n) => {
        try {
          const a = {
            Action: "Verify-Captcha",
            "Request-Id": e?.id,
            "Pushed-For": e?.id,
            "App-Name": "AoCaptcha"
          }, {
            id: p,
            outbox: _
          } = await this.m(this.process, a, n).catch((c) => i(c)), b = await (this.hb || new HB({
            url: this.URL
          })).fetch(`/${e?.recipient}~process@1.0/compute&id=${p}/results/serialize~json@1.0`);
          if (_?.["1"]) {
            const c = _?.["1"], x = {
              id: c["Verify-Id"] || p,
              request_id: c["Request-Id"],
              request_time: c["Request-Time"],
              request_type: c["Request-Type"],
              verified_time: c["Verified-Time"],
              verified: !0,
              result: b
            };
            return console.log("verify sucessed: ", x?.id), this.latest_request = null, s(x), x;
          } else
            throw i("verify failed"), this.latest_request = null, "failed";
        } catch (a) {
          throw a;
        }
      }, () => {
        i("cancelled");
      });
    });
  }
}
export {
  Ne as AoCaptcha,
  De as formatMessageTags
};
