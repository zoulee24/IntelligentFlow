"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // pinia-ns:pinia
  var require_pinia = __commonJS({
    "pinia-ns:pinia"(exports, module) {
      module.exports = uni.Pinia;
    }
  });

  // D:/code/HBuilderProjects/IntelligentFlow/unpackage/dist/dev/.nvue/pages/Setting/index.js
  var import_vue2 = __toESM(require_vue());

  // D:/code/HBuilderProjects/IntelligentFlow/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var import_vue = __toESM(require_vue());
  var import_pinia = __toESM(require_pinia());
  var ON_SHOW = "onShow";
  var ON_READY = "onReady";
  var createHook = (lifecycle) => (hook, target = (0, import_vue.getCurrentInstance)()) => {
    !import_vue.isInSSRComponentSetup && (0, import_vue.injectHook)(lifecycle, hook, target);
  };
  var onShow = /* @__PURE__ */ createHook(ON_SHOW);
  var onReady = /* @__PURE__ */ createHook(ON_READY);
  var useSettingStore = (0, import_pinia.defineStore)("setting", () => {
    let temp = uni.getStorageSync("setting");
    if (!temp) {
      temp = {
        ip: "127.0.0.1",
        port: 8080
      };
    }
    const setting = (0, import_vue.ref)(temp);
    temp = uni.getStorageSync("text");
    if (!temp) {
      temp = {
        topTitle: "\u667A\u6167\u5BA2\u6D41",
        leftTitle: "\u5BA2\u6D41\u5206\u5E03",
        rightTitle: "\u8FD1\u671F\u5BA2\u6D41",
        centre: {
          title: "\u666F\u533A\u4EBA\u6570",
          text: "\u4ECA\u65E5\u5165\u56ED"
        },
        bottomTitle: "\u5206\u65F6\u5BA2\u6D41"
      };
    }
    const textConfig = (0, import_vue.ref)(temp);
    const updateSetting = (newValue) => {
      if (!newValue)
        return;
      Object.assign(setting.value, newValue);
      uni.setStorageSync("setting", setting.value);
    };
    const updateText = (text_config) => {
      Object.assign(textConfig.value, text_config);
    };
    const baseUrl = (0, import_vue.computed)(() => {
      if (setting.value === void 0) {
        setting.value = {
          ip: "127.0.0.1",
          port: 8080
        };
      }
      return `http://${setting.value.ip}:${setting.value.port}/power-haven`;
    });
    return {
      setting,
      textConfig,
      updateText,
      updateSetting,
      baseUrl
    };
  });
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // D:/code/HBuilderProjects/IntelligentFlow/unpackage/dist/dev/.nvue/pages/Setting/index.js
  var import_pinia2 = __toESM(require_pinia());
  var _sfc_main = /* @__PURE__ */ (0, import_vue2.defineComponent)({
    __name: "index",
    setup(__props) {
      const setting = (0, import_vue2.ref)({
        ip: "127.0.0.1",
        port: 8080
      });
      const text_config = (0, import_vue2.ref)({
        topTitle: "\u667A\u6167\u5BA2\u6D41",
        leftTitle: "\u5BA2\u6D41\u5206\u5E03",
        rightTitle: "\u8FD1\u671F\u5BA2\u6D41",
        centre: {
          title: "\u666F\u533A\u4EBA\u6570",
          text: "\u4ECA\u65E5\u5165\u56ED"
        },
        bottomTitle: "\u5206\u65F6\u5BA2\u6D41"
      });
      const keyMap = {
        left: 21,
        right: 22,
        top: 19,
        bottom: 20,
        confirm: 23,
        menu: 82
      };
      const idx = (0, import_vue2.ref)(0);
      const ipRef = (0, import_vue2.ref)(null);
      const portRef = (0, import_vue2.ref)(null);
      const topTitle = (0, import_vue2.ref)(null);
      const leftTitle = (0, import_vue2.ref)(null);
      const centreTitle = (0, import_vue2.ref)(null);
      const centreText = (0, import_vue2.ref)(null);
      const rightTitle = (0, import_vue2.ref)(null);
      const bottomTitle = (0, import_vue2.ref)(null);
      const settingStore = useSettingStore();
      onReady(() => {
        setting.value = settingStore.setting;
        text_config.value = settingStore.textConfig;
      });
      onShow(() => {
        plus.key.removeEventListener("keydown", () => {
        });
        plus.key.addEventListener("keydown", key_event, false);
      });
      function key_event(event) {
        switch (event.keyCode) {
          case keyMap.top:
            idx.value = Math.max(0, idx.value - 1);
            break;
          case keyMap.bottom:
            idx.value = Math.min(7, idx.value + 1);
            break;
          case keyMap.confirm:
            switch (idx.value) {
              case 0:
                ipRef.value.focus();
                break;
              case 1:
                portRef.value.focus();
                break;
              case 2:
                topTitle.value.focus();
                break;
              case 3:
                leftTitle.value.focus();
                break;
              case 4:
                centreTitle.value.focus();
                break;
              case 5:
                centreText.value.focus();
                break;
              case 6:
                rightTitle.value.focus();
                break;
              case 7:
                bottomTitle.value.focus();
                break;
            }
            break;
          case keyMap.menu:
            uni.showToast({
              title: "\u4FDD\u5B58\u6210\u529F",
              mask: true
            });
            settingStore.updateSetting(setting.value);
            settingStore.updateText(text_config.value);
            break;
        }
      }
      return (_ctx, _cache) => {
        const _component_form = (0, import_vue2.resolveComponent)("form");
        return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
          scrollY: true,
          showScrollbar: true,
          enableBackToTop: true,
          bubble: "true",
          style: { flexDirection: "column" }
        }, [
          (0, import_vue2.createElementVNode)("view", { class: "contain" }, [
            (0, import_vue2.createVNode)(_component_form, { action: "" }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)(
                    "u-text",
                    null,
                    "\u9009\u62E9\u7684\u662F\uFF1A" + (0, import_vue2.toDisplayString)(idx.value + 1),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[1] IP\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "ipRef",
                    ref: ipRef,
                    type: "number",
                    modelValue: setting.value.ip,
                    onInput: _cache[0] || (_cache[0] = ($event) => setting.value.ip = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[2] \u7AEF\u53E3\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "portRef",
                    ref: portRef,
                    type: "number",
                    modelValue: setting.value.port,
                    onInput: _cache[1] || (_cache[1] = ($event) => setting.value.port = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[3] \u6807\u9898\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "topTitle",
                    ref: topTitle,
                    type: "text",
                    modelValue: text_config.value.topTitle,
                    onInput: _cache[2] || (_cache[2] = ($event) => text_config.value.topTitle = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[4] \u5DE6\u6807\u9898\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "leftTitle",
                    ref: leftTitle,
                    type: "text",
                    modelValue: text_config.value.leftTitle,
                    onInput: _cache[3] || (_cache[3] = ($event) => text_config.value.leftTitle = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[5] \u4E2D\u95F4\u6807\u9898\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "centreTitle",
                    ref: centreTitle,
                    type: "text",
                    modelValue: text_config.value.centre.title,
                    onInput: _cache[4] || (_cache[4] = ($event) => text_config.value.centre.title = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[6] \u4E2D\u5FC3\u6587\u5B57\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "centreText",
                    ref: centreText,
                    type: "text",
                    modelValue: text_config.value.centre.text,
                    onInput: _cache[5] || (_cache[5] = ($event) => text_config.value.centre.text = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[7] \u53F3\u6807\u9898\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "rightTitle",
                    ref: rightTitle,
                    type: "text",
                    modelValue: text_config.value.rightTitle,
                    onInput: _cache[6] || (_cache[6] = ($event) => text_config.value.rightTitle = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ]),
                (0, import_vue2.createElementVNode)("view", { class: "label" }, [
                  (0, import_vue2.createElementVNode)("u-text", null, "[8] \u5E95\u90E8\u6807\u9898\uFF1A"),
                  (0, import_vue2.createElementVNode)("u-input", {
                    class: "input",
                    ref_key: "bottomTitle",
                    ref: bottomTitle,
                    type: "text",
                    modelValue: text_config.value.bottomTitle,
                    onInput: _cache[7] || (_cache[7] = ($event) => text_config.value.bottomTitle = $event.detail.value)
                  }, null, 40, ["modelValue"])
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]);
      };
    }
  });
  var _style_0 = { "contain": { "": { "width": 962, "height": 542, "overflow": "hidden", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "input": { "": { "backgroundColor": "#d0d0d0", "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5, "marginTop": 5, "marginRight": 5, "marginBottom": 5, "marginLeft": 5, "width": 200, "height": 40, "borderRadius": 10, "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "label": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } } };
  var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "D:/code/HBuilderProjects/IntelligentFlow/pages/Setting/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/Setting/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
