(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._outter_1ymef_4{position:fixed;top:0;left:0;z-index:1000;width:0;height:0;all:initial;font-family:system-ui,sans-serif;font-size:1rem}@media (prefers-color-scheme: dark){._outter_1ymef_4 *{--color-base-0: rgb(0, 0, 0);--color-base-100: #171717;--color-base-200: #343434;--color-base-content: #c2c2c2;--color-primary: rgb(1, 136, 127);--color-primary-content: rgb(227, 218, 237)}}@media (prefers-color-scheme: light){._outter_1ymef_4 *{--color-base-0: rgb(255, 255, 255);--color-base-100: #e9e9e9;--color-base-200: #c9c9c9;--color-base-content: #171717;--color-primary: rgb(3, 187, 175);--color-primary-content: rgb(227, 218, 237)}}._backdrop_1ymef_47{background:rgb(from var(--color-base-0) r g b / 60%);width:100vw;height:100vh;position:fixed;top:0;left:0;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:1000}._container_1ymef_59{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--color-base-content);z-index:1001}._container_1ymef_59 button{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-200) r g b / 60%);--color-text: var(--color-base-content);border:none;cursor:pointer;background:transparent;padding:.5em 1em;box-sizing:border-box;color:var(--color-text);transition:all;transition-duration:.15s}._container_1ymef_59 button:hover{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-0) r g b / 100%);--color-text: var(--color-base-content)}._container_1ymef_59 button:disabled{opacity:50%}._container_1ymef_59 button._btn_1ymef_92{background-color:var(--color-bg);color:var(--color-text);border:solid 1px var(--color-border);padding:.5em 1em;border-radius:.4em;display:inline-flex;justify-content:center;align-items:center}._container_1ymef_59 a{color:var(--color-primary)}._container_1ymef_59 a:hover{color:var(--color-base-content);text-decoration:underline}input{border:solid 1px var(--color-border);color:var(--color-text)}._outter_1ymef_4,._container_1ymef_59,._content_1ymef_120,._backdrop_1ymef_47{transition:all;transition-duration:.15s}._content_1ymef_120{max-width:320px;width:320px;background-color:rgb(from var(--color-base-100) r g b / 60%);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:block;box-sizing:border-box;border-radius:1em;box-shadow:0 14px 47px -13px #0000000d;-webkit-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);-moz-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);border:solid 1px rgb(from var(--color-base-200) r g b / 60%)}._content_1ymef_120 ._head_1ymef_139{display:flex;width:100%;justify-content:space-between;align-items:center;padding:1em;box-sizing:border-box}._content_1ymef_120 ._main_1ymef_147{padding:1em 1.5em}._content_1ymef_120 ._foot_1ymef_150{padding:.5em 1em 1.5em;text-align:center;display:flex;justify-content:space-between;align-items:center}._content_1ymef_120 h3{font-size:1.1rem;line-height:1.2rem;padding:0;margin:0}._content_1ymef_120:hover{border:solid 1px rgb(from var(--color-base-200) r g b / 100%)}._captchabox_1ymef_171{display:flex;background-color:var(--color-base-200);justify-content:center;align-items:center;gap:.5em;padding:.5em;border-radius:.5em;width:100%}._svgbox_1ymef_182{width:fit-content}._svgbox_1ymef_182 svg{width:1em;object-fit:contain}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var ie = Object.defineProperty;
var ae = (i, r, e) => r in i ? ie(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[r] = e;
var X = (i, r, e) => ae(i, typeof r != "symbol" ? r + "" : r, e);
import { template as b, effect as x, memo as K, delegateEvents as le, createComponent as _, Portal as ne, insert as p, className as w, setAttribute as F, Show as se, render as ce } from "solid-js/web";
import { createSignal as $, createMemo as ee, createEffect as oe, onCleanup as te, onMount as de, batch as V, Switch as he, Match as G, For as ue } from "solid-js";
import { connect as ve, createSigner as Y } from "https://unpkg.com/@permaweb/aoconnect@latest/dist/browser.js";
const fe = "_outter_1ymef_4", ye = "_backdrop_1ymef_47", me = "_container_1ymef_59", ge = "_btn_1ymef_92", we = "_content_1ymef_120", _e = "_head_1ymef_139", be = "_main_1ymef_147", Ce = "_foot_1ymef_150", Pe = "_captchabox_1ymef_171", ke = "_svgbox_1ymef_182", g = {
  outter: fe,
  backdrop: ye,
  container: me,
  btn: ge,
  content: we,
  head: _e,
  main: be,
  foot: Ce,
  captchabox: Pe,
  svgbox: ke
};
var xe = /* @__PURE__ */ b('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><g fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.7><path stroke-dasharray=16 stroke-dashoffset=16 d="M12 3c4.97 0 9 4.03 9 9"><animate fill=freeze attributeName=stroke-dashoffset dur=0.645s values=16;0></animate><animateTransform attributeName=transform dur=3.225s repeatCount=indefinite type=rotate values="0 12 12;360 12 12"></animateTransform></path><path stroke-dasharray=64 stroke-dashoffset=64 stroke-opacity=0.3 d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill=freeze attributeName=stroke-dashoffset dur=2.58s values=64;0>');
const j = (i) => (() => {
  var r = xe();
  return x((e) => {
    var c = (i == null ? void 0 : i.size) || "1em", n = (i == null ? void 0 : i.size) || "1em";
    return c !== e.e && ((e.e = c) != null ? r.style.setProperty("width", c) : r.style.removeProperty("width")), n !== e.t && ((e.t = n) != null ? r.style.setProperty("height", n) : r.style.removeProperty("height")), e;
  }, {
    e: void 0,
    t: void 0
  }), r;
})(), Re = (i) => {
  let r;
  const [e, c] = $(), n = ee(() => {
    let o = Math.floor(e() / 60 / 60 / 24).toString().padStart(2, "0"), l = Math.floor(e() / 60 / 60 % 24).toString().padStart(2, "0"), d = Math.floor(e() / 60 % 60).toString().padStart(2, "0"), s = Math.floor(e() % 60).toString().padStart(2, "0");
    return o != "00" ? `${o}:${l}:${d}:${s}` : `${l}:${d}:${s}`;
  }), h = () => {
    const o = Date.now(), l = ((i == null ? void 0 : i.end) - o) / 1e3;
    l <= 0 || (c(l), r = requestAnimationFrame(h));
  };
  return oe(() => {
    r = requestAnimationFrame(h), te(() => cancelAnimationFrame(r)), e() && e() <= 0 && (i != null && i.onTimeout) && (i == null || i.onTimeout(e()));
  }), K(n);
};
var pe = /* @__PURE__ */ b('<svg viewBox="0 0 277 277"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M119.455 25.881C127.686 10.0406 150.326 10.0388 158.556 25.881L265.485 231.76C273.113 246.446 262.469 264 245.935 264H32.0652C15.5311 264 4.88687 246.446 12.5149 231.76L119.455 25.881ZM139.005 98.5468C132.92 98.5468 127.988 103.485 127.988 109.577V155.615C115.155 160.161 105.952 172.385 105.952 186.789C105.952 205.064 120.751 219.879 139.005 219.879C157.259 219.877 172.059 205.063 172.059 186.789C172.059 172.386 162.854 160.162 150.023 155.615V109.577C150.023 103.486 145.089 98.5486 139.005 98.5468Z"fill=currentColor>');
const $e = (i) => (() => {
  var r = pe();
  return r.style.setProperty("height", "1em"), r;
})();
var Le = /* @__PURE__ */ b("<span>Verifying..."), Se = /* @__PURE__ */ b("<span>AoCaptcha"), Te = /* @__PURE__ */ b('<input placeholder="input the code above"type=text required>'), Ee = /* @__PURE__ */ b("<button>"), Ue = /* @__PURE__ */ b('<div id=ao-captcha-sdk><div><div><div><p></p><button><svg xmlns=http://www.w3.org/2000/svg width=1.5em height=1.5em viewBox="0 0 24 24"><path fill=currentColor d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"></path></svg></button></div><div><div></div><div>Expired in:</div></div><div></div></div></div><div>'), Me = /* @__PURE__ */ b("<div>loading..."), Ae = /* @__PURE__ */ b("<div><svg xmlns=http://www.w3.org/2000/svg><path fill=currentColor>"), De = /* @__PURE__ */ b("<div>"), qe = /* @__PURE__ */ b('<svg xmlns=http://www.w3.org/2000/svg width=2em height=2em viewBox="0 0 24 24"><path fill=none stroke=currentColor stroke-dasharray=24 stroke-dashoffset=24 stroke-linecap=round stroke-linejoin=round stroke-width=1.7 d="M5 11l6 6l10 -10"><animate fill=freeze attributeName=stroke-dashoffset dur=0.86s values=24;0>');
function Ne(i) {
  let r = null, e = null;
  const [c, n] = $(), [h, o] = $(!1), [l, d] = $(!1), [s, u] = $(), [P, E] = $(), Z = ee(() => {
    var v, y;
    return c() != null && P() != null && ((v = P()) == null ? void 0 : v.length) == (((y = c()) == null ? void 0 : y.digits) || 3);
  }), re = () => {
    Z() && (d(!0), r(P()).then((v) => V(() => {
      o(!1), E(null);
    })).catch((v) => {
      console.error(v), u("verify failed"), o(!1);
    }).finally(() => d(!1)));
  };
  return de(() => {
    i == null || i.ref({
      show: (v, y, U) => {
        r = y, e = U, V(() => {
          d(!1), n(v), E(null), u(null), o(!0);
        });
      },
      close: (v) => {
        V(() => {
          d(!1), n(null), E(null), u(null), o(!1);
        });
      }
    });
  }), te(() => {
    console.log("aocaptcha is removed");
  }), _(ne, {
    get children() {
      var v = Ue(), y = v.firstChild, U = y.firstChild, M = U.firstChild, R = M.firstChild, B = R.nextSibling, A = M.nextSibling, D = A.firstChild, L = D.nextSibling;
      L.firstChild;
      var I = A.nextSibling, q = y.nextSibling;
      return R.style.setProperty("display", "flex"), R.style.setProperty("justifyContent", "start"), R.style.setProperty("alignItems", "center"), R.style.setProperty("gap", "0.5em"), p(R, _(he, {
        get children() {
          return [_(G, {
            get when() {
              return l();
            },
            get children() {
              return [_(j, {}), " ", Le()];
            }
          }), _(G, {
            get when() {
              return !l();
            },
            get children() {
              return [_($e, {}), " ", Se()];
            }
          })];
        }
      })), B.$$click = () => {
        o(!1), e();
      }, p(D, _(ue, {
        get each() {
          var t;
          return (t = c()) == null ? void 0 : t.paths;
        },
        get fallback() {
          return Me();
        },
        children: (t) => (() => {
          var a = Ae(), m = a.firstChild, C = m.firstChild;
          return x((f) => {
            var k = g.svgbox, S = t == null ? void 0 : t[0], T = t == null ? void 0 : t[1];
            return k !== f.e && w(a, f.e = k), S !== f.t && F(m, "viewBox", f.t = S), T !== f.a && F(C, "d", f.a = T), f;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          }), a;
        })()
      })), L.style.setProperty("font-size", "0.8em"), L.style.setProperty("text-align", "center"), L.style.setProperty("padding-top", "0.2em"), p(L, _(Re, {
        get end() {
          var t, a;
          return ((t = c()) == null ? void 0 : t.timestamp) + ((a = c()) == null ? void 0 : a.duration);
        },
        onTimeout: () => {
          u("The captcha has been exipred!");
        }
      }), null), p(I, _(se, {
        get when() {
          return !s();
        },
        get fallback() {
          return (() => {
            var t = De();
            return p(t, s), x(() => t.className = g.error), t;
          })();
        },
        get children() {
          return [(() => {
            var t = Te();
            return t.$$input = (a) => {
              E(a.target.value);
            }, t.style.setProperty("padding", "4px 4px 4px 4px"), t.style.setProperty("min-width", "20px"), t.style.setProperty("min-width", "5em"), t.style.setProperty("font-size", "1.2em"), x((a) => {
              var k;
              var m = g.input, C = ((k = c()) == null ? void 0 : k.digits) || 3, f = l();
              return m !== a.e && w(t, a.e = m), C !== a.t && F(t, "minlength", a.t = C), f !== a.a && (t.disabled = a.a = f), a;
            }, {
              e: void 0,
              t: void 0,
              a: void 0
            }), x(() => t.value = P()), t;
          })(), (() => {
            var t = Ee();
            return t.$$click = re, t.style.setProperty("--color-border", "var(--color-primary)"), t.style.setProperty("--color-bg", "var(--color-primary)"), t.style.setProperty("--color-text", "var(--color-primary-content)"), t.style.setProperty("border-radius", "100% 100% 100% 100%"), t.style.setProperty("width", "3em"), t.style.setProperty("height", "3em"), p(t, (() => {
              var a = K(() => !!l());
              return () => a() ? _(j, {
                size: "2em"
              }) : qe();
            })()), x((a) => {
              var m = g.btn, C = !Z();
              return m !== a.e && w(t, a.e = m), C !== a.t && (t.disabled = a.t = C), a;
            }, {
              e: void 0,
              t: void 0
            }), t;
          })()];
        }
      })), x((t) => {
        var a = g.outter, m = `${h() ? "visible" : "hidden"}`, C = g.container, f = `${h() ? "0% 0%" : "0% 50%"}`, k = `${h() ? "100" : "0"}`, S = g.content, T = g.head, J = l(), O = g.main, H = g.captchabox, W = g.foot, Q = g.backdrop, N = `${h() ? "100" : "0"}`;
        return a !== t.e && w(v, t.e = a), m !== t.t && ((t.t = m) != null ? v.style.setProperty("visibility", m) : v.style.removeProperty("visibility")), C !== t.a && w(y, t.a = C), f !== t.o && ((t.o = f) != null ? y.style.setProperty("translate", f) : y.style.removeProperty("translate")), k !== t.i && ((t.i = k) != null ? y.style.setProperty("opacity", k) : y.style.removeProperty("opacity")), S !== t.n && w(U, t.n = S), T !== t.s && w(M, t.s = T), J !== t.h && (B.disabled = t.h = J), O !== t.r && w(A, t.r = O), H !== t.d && w(D, t.d = H), W !== t.l && w(I, t.l = W), Q !== t.u && w(q, t.u = Q), N !== t.c && ((t.c = N) != null ? q.style.setProperty("opacity", N) : q.style.removeProperty("opacity")), t;
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
        c: void 0
      }), v;
    }
  });
}
le(["click", "input"]);
let z;
ce(() => _(Ne, {
  ref(i) {
    var r = z;
    typeof r == "function" ? r(i) : z = i;
  }
}), document.body);
class Be {
  constructor(r, e) {
    X(this, "pushMsg", async (r, e, c) => {
      const {
        request: n
      } = ve({
        MODE: "mainnet",
        URL: this.URL || "https://push.forward.computer",
        SCHEDULER: this.SCHEDULER || "n_XZJhUnmldNFo4dhajoPZWhBXuJk-OcQr5JQ49c4Zo",
        signer: Y(c || this.wallet)
      });
      return await n({
        path: `/${this.process}~process@1.0/push`,
        target: this.process,
        data: e,
        method: "POST",
        "signing-format": "ans104",
        "accept-bundle": "true",
        "accept-codec": "httpsig@1.0",
        "require-codec": "application/json",
        ...r
      });
    });
    var c, n, h, o, l, d;
    this.process = r, this.recipient = (e == null ? void 0 : e.recipient) || (e == null ? void 0 : e.Recipient), this.type = (e == null ? void 0 : e.type) || (e == null ? void 0 : e.Type) || "DEFAULT", this.wallet = (e == null ? void 0 : e.wallet) || (e == null ? void 0 : e.Wallet), this.latest_request = null, this.MU_URL = ((c = e == null ? void 0 : e.ao) == null ? void 0 : c.MU_URL) || "https://mu.ao-testnet.xyz", this.CU_URL = ((n = e == null ? void 0 : e.ao) == null ? void 0 : n.CU_URL) || "https://cu.ao-testnet.xyz", this.GATEWAY_URL = ((h = e == null ? void 0 : e.ao) == null ? void 0 : h.GATEWAY_URL) || "https://arweave.net", this.MODE = ((o = e == null ? void 0 : e.ao) == null ? void 0 : o.MODE) || "mainnet", this.URL = ((l = e == null ? void 0 : e.ao) == null ? void 0 : l.URL) || "https://push.forward.computer", this.SCHEDULER = ((d = e == null ? void 0 : e.ao) == null ? void 0 : d.SCHEDULER) || "n_XZJhUnmldNFo4dhajoPZWhBXuJk-OcQr5JQ49c4Zo";
  }
  getLatestRequest() {
    return this.latest_request;
  }
  request(r, e) {
    return new Promise(async (c, n) => {
      var d;
      const h = Date.now();
      if (console.log("Requseting at " + h), this.wallet = e, this.recipient = r.recipient || r.Recipient || this.recipient, this.type = r["Request-Type"] || (r == null ? void 0 : r.type) || (r == null ? void 0 : r.Type) || this.type || "DEFAULT", this.process || n("missed the captcha process id"), this.recipient || n("missed the request process id"), this.wallet || n("missed wallet"), this.latest_request && h - ((d = this.latest_request) == null ? void 0 : d.timestamp) < this.latest_request.duration) {
        c(this.latest_request);
        return;
      }
      r.Action = "Request-Captcha", r.Recipient = r.Recipient || this.recipient, r["Request-Type"] = r["Request-Type"] || this.type, delete r.Type, delete r.type;
      const o = await this.pushMsg(r, "a aocaptcha request", e);
      if (!(o != null && o.ok))
        throw new Error("fetch captcha faild.");
      const {
        outbox: l
      } = await (o == null ? void 0 : o.json());
      if (l != null && l[1]) {
        const s = l == null ? void 0 : l[1], u = {
          id: s["Request-Id"],
          paths: (s == null ? void 0 : s.Data) && JSON.parse(s.Data),
          timestamp: Number(s["Request-Time"]),
          duration: Number(s["Request-Duration"]),
          type: s["Captcha-Type"],
          digits: Number(s["Captcha-Digits"]),
          request_type: s["Request-Type"],
          recipient: this.recipient
        };
        console.log("request", u), this.latest_request = u, c(u);
      } else
        throw new Error("fetch captcha faild.");
    });
  }
  verify(r, e) {
    return new Promise(async (c, n) => {
      const h = Date.now();
      this.signer = Y(e), this.process || n("missed the captcha process id"), r || n("missed request data."), r.paths || n("missed captcha data."), (!r.timestamp || (r == null ? void 0 : r.timestamp) + (r == null ? void 0 : r.duration) < h) && n("the captcha is expired."), !this.wallet && !e && n("missed wallet"), z.show(r, async (o) => {
        try {
          const l = {
            Action: "Verify-Captcha",
            "Request-Id": r == null ? void 0 : r.id,
            "Pushed-For": r == null ? void 0 : r.id,
            "App-Name": "AoCaptcha"
          }, d = await this.pushMsg(l, o, e);
          if (console.log("verify response: ", d), !(d != null && d.ok))
            throw new Error("fetch captcha faild.");
          const {
            outbox: s
          } = await (d == null ? void 0 : d.json());
          if (s != null && s[1]) {
            const u = s == null ? void 0 : s[1], P = {
              id: u["Verify-Id"] || id,
              request_id: u["Request-Id"],
              request_time: u["Request-Time"],
              request_type: u["Request-Type"],
              verified_time: u["Verified-Time"],
              verified: !0
            };
            console.log("AoCaptcha Verified Id: ", P == null ? void 0 : P.id), this.latest_request = null, c(P);
          } else
            throw this.latest_request = null, "verify failed";
        } catch (l) {
          throw l;
        }
      }, () => {
        n("cancelled");
      });
    });
  }
}
export {
  Be as AoCaptcha
};
