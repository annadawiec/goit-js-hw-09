!function(){var t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.buttonStart.addEventListener("click",(function(n){t.buttonStop.disabled=!1,t.buttonStart.disabled=!0,o=setInterval((function(){var o="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.body.style.backgroundColor=o}),1e3)})),t.buttonStop.addEventListener("click",(function(){clearInterval(o),t.buttonStop.disabled=!0,t.buttonStart.disabled=!1}));var o=null}();
//# sourceMappingURL=01-color-switcher.b377c2f3.js.map
