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

  // D:/code/HBuilderProjects/IntelligentFlow/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var import_vue = __toESM(require_vue());
  var import_pinia = __toESM(require_pinia());
  var ON_SHOW = "onShow";
  var ON_HIDE = "onHide";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var createHook = (lifecycle) => (hook, target = (0, import_vue.getCurrentInstance)()) => {
    !import_vue.isInSSRComponentSetup && (0, import_vue.injectHook)(lifecycle, hook, target);
  };
  var onShow = /* @__PURE__ */ createHook(ON_SHOW);
  var onHide = /* @__PURE__ */ createHook(ON_HIDE);
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

  // D:/code/HBuilderProjects/IntelligentFlow/unpackage/dist/dev/.nvue/pages/select/select.js
  var import_vue2 = __toESM(require_vue());

  // D:/code/HBuilderProjects/IntelligentFlow/unpackage/dist/dev/.nvue/interface.js
  var _imports_0 = "/static/background.png";
  function get(endpoint, data = null) {
    const settingStore = useSettingStore();
    return new Promise((resolve, reject) => {
      uni.request({
        method: "GET",
        url: settingStore.baseUrl + endpoint,
        data,
        success(temp) {
          if (temp.statusCode == 200) {
            response = temp.data;
            if (response.code == 0) {
              resolve(response.data);
            } else {
              reject(response.msg);
            }
          } else {
            reject(temp.errMsg);
          }
        },
        fail(temp) {
          reject(temp);
        }
      });
    });
  }
  function get_all_shop_location() {
    const endpoint = "/camera/selectshop";
    return get(endpoint);
  }

  // D:/code/HBuilderProjects/IntelligentFlow/unpackage/dist/dev/.nvue/pages/select/select.js
  var import_pinia2 = __toESM(require_pinia());
  var _style_0$1 = { "card": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "transitionProperty": "boxShadow", "transitionDuration": 300 } }, "text": { "": { "fontSize": 24, "fontWeight": "600" } }, "@TRANSITION": { "card": { "property": "boxShadow", "duration": 300 } } };
  var _sfc_main$1 = {
    __name: "TvCard",
    props: {
      title: {
        type: String,
        require: true
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            class: "card",
            onKeydown: _cache[0] || (_cache[0] = (0, import_vue2.withKeys)((...args) => _ctx.handleKeyPress && _ctx.handleKeyPress(...args), ["enter"])),
            renderWhole: true
          },
          [
            (0, import_vue2.createElementVNode)(
              "u-text",
              { class: "text" },
              (0, import_vue2.toDisplayString)(props.title),
              1
              /* TEXT */
            )
          ],
          32
          /* HYDRATE_EVENTS */
        );
      };
    }
  };
  var TvCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]], ["__file", "D:/code/HBuilderProjects/IntelligentFlow/component/TvCard.nvue"]]);
  var _style_0 = { "contain": { "": { "width": 962, "height": 542, "overflow": "hidden" } }, "background": { "": { "position": "absolute", "zIndex": -2 } }, "bg-img-1": { "": { "top": 0, "left": 0, "width": 962, "height": 542 } }, "title": { "": { "fontSize": 36, "fontWeight": "800", "textAlign": "center", "color": "#00bfff" } }, "sub-title": { "": { "fontSize": 28, "fontWeight": "600", "textAlign": "center", "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "color": "#00bfff" } }, "card-box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "card-item": { "": { "marginTop": 4, "marginRight": 4, "marginBottom": 4, "marginLeft": 4, "backgroundColor": "#FFE4C4", "borderColor": "#ff0000", "borderRadius": 10 } } };
  var _sfc_main = {
    __name: "select",
    setup(__props) {
      const all_camera_info = (0, import_vue2.ref)([]);
      var select2 = 0;
      var card_styles = (0, import_vue2.ref)([]);
      const select_style = "border-width: 4px; margin: 0px;";
      const keyMap = {
        left: 21,
        right: 22,
        top: 19,
        bottom: 20,
        confirm: 23,
        menu: 82
      };
      function key_event(event) {
        if (event.keyCode === keyMap.bottom) {
          card_styles.value[select2] = "";
          select2 = Math.min(select2 + 1, all_camera_info.value.length);
          card_styles.value[select2] = select_style;
        } else if (event.keyCode === keyMap.top) {
          card_styles.value[select2] = "";
          select2 = Math.max(select2 - 1, 0);
          card_styles.value[select2] = select_style;
        } else if (event.keyCode === keyMap.confirm && all_camera_info.value.length > 0) {
          uni.showToast({
            title: `\u8DF3\u8F6C => ${all_camera_info.value[select2].location}`,
            mask: true,
            icon: "none",
            duration: 500
          });
          setTimeout(() => {
            uni.navigateTo({
              url: `/pages/index/index?cameraId=${all_camera_info.value[select2].cameraId}`
            });
          }, 200);
        } else if (event.keyCode === keyMap.menu) {
          uni.navigateTo({
            url: "/pages/Setting/index",
            fail: (err) => {
              formatAppLog("error", "at pages/select/select.nvue:86", "err= ", err);
            }
          });
        }
      }
      onShow(() => {
        plus.key.removeEventListener("keydown", () => {
        }, false);
        plus.key.addEventListener("keydown", key_event, false);
        const response2 = get_all_shop_location();
        response2.then((data) => {
          card_styles.value = [];
          if (Array.isArray(data) && data.length > 0) {
            select2 = 0;
            data.forEach(() => {
              card_styles.value.push("");
            });
            card_styles.value[select2] = select_style;
            all_camera_info.value = data;
          } else {
            formatAppLog("warn", "at pages/select/select.nvue:114", "\u6570\u636E\u4E0D\u5BF9");
          }
        });
      });
      onHide(() => {
        plus.key.removeEventListener("keydown", key_event);
      });
      return (_ctx, _cache) => {
        return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
          scrollY: true,
          showScrollbar: true,
          enableBackToTop: true,
          bubble: "true",
          style: { flexDirection: "column" }
        }, [
          (0, import_vue2.createElementVNode)("view", { class: "contain" }, [
            (0, import_vue2.createElementVNode)("u-image", {
              class: "background bg-img-1",
              src: _imports_0,
              mode: "scaleToFill"
            }),
            (0, import_vue2.createElementVNode)("u-text", { class: "title" }, "PowerHaven"),
            (0, import_vue2.createElementVNode)("u-text", { class: "sub-title" }, "\u9009\u62E9\u5E97\u94FA"),
            ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
              import_vue2.Fragment,
              null,
              (0, import_vue2.renderList)(all_camera_info.value, (item, idx) => {
                return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  class: "card-box",
                  key: idx
                }, [
                  (0, import_vue2.createVNode)((0, import_vue2.unref)(TvCard), {
                    class: "card-item",
                    style: (0, import_vue2.normalizeStyle)((0, import_vue2.unref)(card_styles)[idx]),
                    title: item.location
                  }, null, 8, ["style", "title"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  var select = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "D:/code/HBuilderProjects/IntelligentFlow/pages/select/select.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/select/select";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    select.mpType = "page";
    const app = Vue.createPageApp(select, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...select.styles || []]));
    app.mount("#root");
  }
})();
