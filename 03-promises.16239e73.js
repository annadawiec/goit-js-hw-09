!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var r=u("6JpON"),i={form:document.querySelector(".form"),button:document.querySelector(".js-submit"),inputDelay:document.querySelector(".js-delay"),inputStep:document.querySelector(".js-step"),inputAmount:document.querySelector(".js-amount")};i.form.addEventListener("submit",(function(t){var n=function(t){var n,i;(n=t,i=o,new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:n,delay:i}):t({position:n,delay:i})}),i)}))).then((function(n){n.position;var o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){n.position;var o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),o+=u};t.preventDefault();for(var o=i.inputDelay.valueAsNumber,u=i.inputStep.valueAsNumber,a=i.inputAmount.valueAsNumber,l=1;l<=a;l++)n(l)}))}();
//# sourceMappingURL=03-promises.16239e73.js.map
