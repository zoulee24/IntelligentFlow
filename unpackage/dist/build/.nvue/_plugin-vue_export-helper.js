import { isInSSRComponentSetup, injectHook, getCurrentInstance, ref, computed } from "vue";
import { defineStore } from "pinia";
const isString = (val) => typeof val === "string";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
function resolveEasycom(component, easycom) {
  return isString(component) ? easycom : component;
}
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createHook(ON_SHOW);
const onHide = /* @__PURE__ */ createHook(ON_HIDE);
const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
const onReady = /* @__PURE__ */ createHook(ON_READY);
const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
const useSettingStore = defineStore("setting", () => {
  let temp = uni.getStorageSync("setting");
  if (!temp) {
    temp = {
      ip: "127.0.0.1",
      port: 8080
    };
  }
  const setting = ref(temp);
  temp = uni.getStorageSync("text");
  if (!temp) {
    temp = {
      topTitle: "智慧客流",
      leftTitle: "客流分布",
      rightTitle: "近期客流",
      centre: {
        title: "景区人数",
        text: "今日入园"
      },
      bottomTitle: "分时客流"
    };
  }
  const textConfig = ref(temp);
  const updateSetting = (newValue) => {
    if (!newValue)
      return;
    Object.assign(setting.value, newValue);
    uni.setStorageSync("setting", setting.value);
  };
  const updateText = (text_config) => {
    Object.assign(textConfig.value, text_config);
  };
  const baseUrl = computed(() => {
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
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  onHide as a,
  onLoad as b,
  onUnload as c,
  onReady as d,
  formatAppLog as f,
  onShow as o,
  resolveEasycom as r,
  useSettingStore as u
};
