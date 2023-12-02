import { defineComponent, ref, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, toDisplayString } from "vue";
import { u as useSettingStore, d as onReady, o as onShow, _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
import "pinia";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const setting = ref({
      ip: "127.0.0.1",
      port: 8080
    });
    const text_config = ref({
      topTitle: "智慧客流",
      leftTitle: "客流分布",
      rightTitle: "近期客流",
      centre: {
        title: "景区人数",
        text: "今日入园"
      },
      bottomTitle: "分时客流"
    });
    const keyMap = {
      left: 21,
      right: 22,
      top: 19,
      bottom: 20,
      confirm: 23,
      menu: 82
    };
    const idx = ref(0);
    const ipRef = ref(null);
    const portRef = ref(null);
    const topTitle = ref(null);
    const leftTitle = ref(null);
    const centreTitle = ref(null);
    const centreText = ref(null);
    const rightTitle = ref(null);
    const bottomTitle = ref(null);
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
            title: "保存成功",
            mask: true
          });
          settingStore.updateSetting(setting.value);
          settingStore.updateText(text_config.value);
          break;
      }
    }
    return (_ctx, _cache) => {
      const _component_form = resolveComponent("form");
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createElementVNode("view", { class: "contain" }, [
          createVNode(_component_form, { action: "" }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "label" }, [
                createElementVNode(
                  "u-text",
                  null,
                  "选择的是：" + toDisplayString(idx.value + 1),
                  1
                  /* TEXT */
                )
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[1] IP："),
                createElementVNode("u-input", {
                  class: "input",
                  ref_key: "ipRef",
                  ref: ipRef,
                  type: "number",
                  modelValue: setting.value.ip,
                  onInput: _cache[0] || (_cache[0] = ($event) => setting.value.ip = $event.detail.value)
                }, null, 40, ["modelValue"])
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[2] 端口："),
                createElementVNode("u-input", {
                  class: "input",
                  ref_key: "portRef",
                  ref: portRef,
                  type: "number",
                  modelValue: setting.value.port,
                  onInput: _cache[1] || (_cache[1] = ($event) => setting.value.port = $event.detail.value)
                }, null, 40, ["modelValue"])
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[3] 标题："),
                createElementVNode("u-input", {
                  class: "input",
                  ref_key: "topTitle",
                  ref: topTitle,
                  type: "text",
                  modelValue: text_config.value.topTitle,
                  onInput: _cache[2] || (_cache[2] = ($event) => text_config.value.topTitle = $event.detail.value)
                }, null, 40, ["modelValue"])
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[4] 左标题："),
                createElementVNode("u-input", {
                  class: "input",
                  ref_key: "leftTitle",
                  ref: leftTitle,
                  type: "text",
                  modelValue: text_config.value.leftTitle,
                  onInput: _cache[3] || (_cache[3] = ($event) => text_config.value.leftTitle = $event.detail.value)
                }, null, 40, ["modelValue"])
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[5] 中间标题："),
                createElementVNode("u-input", {
                  class: "input",
                  ref_key: "centreTitle",
                  ref: centreTitle,
                  type: "text",
                  modelValue: text_config.value.centre.title,
                  onInput: _cache[4] || (_cache[4] = ($event) => text_config.value.centre.title = $event.detail.value)
                }, null, 40, ["modelValue"])
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[6] 中心文字："),
                createElementVNode("u-input", {
                  class: "input",
                  ref_key: "centreText",
                  ref: centreText,
                  type: "text",
                  modelValue: text_config.value.centre.text,
                  onInput: _cache[5] || (_cache[5] = ($event) => text_config.value.centre.text = $event.detail.value)
                }, null, 40, ["modelValue"])
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[7] 右标题："),
                createElementVNode("u-input", {
                  class: "input",
                  ref_key: "rightTitle",
                  ref: rightTitle,
                  type: "text",
                  modelValue: text_config.value.rightTitle,
                  onInput: _cache[6] || (_cache[6] = ($event) => text_config.value.rightTitle = $event.detail.value)
                }, null, 40, ["modelValue"])
              ]),
              createElementVNode("view", { class: "label" }, [
                createElementVNode("u-text", null, "[8] 底部标题："),
                createElementVNode("u-input", {
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
const _style_0 = { "contain": { "": { "width": 962, "height": 542, "overflow": "hidden", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "input": { "": { "backgroundColor": "#d0d0d0", "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5, "marginTop": 5, "marginRight": 5, "marginBottom": 5, "marginLeft": 5, "width": 200, "height": 40, "borderRadius": 10, "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "label": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } } };
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "D:/code/HBuilderProjects/IntelligentFlow/pages/Setting/index.nvue"]]);
export {
  index as default
};
