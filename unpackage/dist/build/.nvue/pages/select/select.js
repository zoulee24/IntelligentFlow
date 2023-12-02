import { _ as _export_sfc, o as onShow, f as formatAppLog, a as onHide } from "../../_plugin-vue_export-helper.js";
import { openBlock, createElementBlock, withKeys, createElementVNode, toDisplayString, ref, Fragment, renderList, createVNode, unref, normalizeStyle } from "vue";
import { g as get_all_shop_location, _ as _imports_0 } from "../../interface.js";
import "pinia";
const _style_0$1 = { "card": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "transitionProperty": "boxShadow", "transitionDuration": 300 } }, "text": { "": { "fontSize": 24, "fontWeight": "600" } }, "@TRANSITION": { "card": { "property": "boxShadow", "duration": 300 } } };
const _sfc_main$1 = {
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
      return openBlock(), createElementBlock("view", {
        class: "card",
        onKeydown: _cache[0] || (_cache[0] = withKeys((...args) => _ctx.handleKeyPress && _ctx.handleKeyPress(...args), ["enter"])),
        renderWhole: true
      }, [
        createElementVNode("u-text", { class: "text" }, toDisplayString(props.title), 1)
      ], 32);
    };
  }
};
const TvCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);
const _style_0 = { "contain": { "": { "width": 962, "height": 542, "overflow": "hidden" } }, "background": { "": { "position": "absolute", "zIndex": -2 } }, "bg-img-1": { "": { "top": 0, "left": 0, "width": 962, "height": 542 } }, "title": { "": { "fontSize": 36, "fontWeight": "800", "textAlign": "center", "color": "#00bfff" } }, "sub-title": { "": { "fontSize": 28, "fontWeight": "600", "textAlign": "center", "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "color": "#00bfff" } }, "card-box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "card-item": { "": { "marginTop": 4, "marginRight": 4, "marginBottom": 4, "marginLeft": 4, "backgroundColor": "#FFE4C4", "borderColor": "#ff0000", "borderRadius": 10 } } };
const _sfc_main = {
  __name: "select",
  setup(__props) {
    const all_camera_info = ref([]);
    var select2 = 0;
    var card_styles = ref([]);
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
          title: `跳转 => ${all_camera_info.value[select2].location}`,
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
      const response = get_all_shop_location();
      response.then((data) => {
        card_styles.value = [];
        if (Array.isArray(data) && data.length > 0) {
          select2 = 0;
          data.forEach(() => {
            card_styles.value.push("");
          });
          card_styles.value[select2] = select_style;
          all_camera_info.value = data;
        } else {
          formatAppLog("warn", "at pages/select/select.nvue:114", "数据不对");
        }
      });
    });
    onHide(() => {
      plus.key.removeEventListener("keydown", key_event);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createElementVNode("view", { class: "contain" }, [
          createElementVNode("u-image", {
            class: "background bg-img-1",
            src: _imports_0,
            mode: "scaleToFill"
          }),
          createElementVNode("u-text", { class: "title" }, "PowerHaven"),
          createElementVNode("u-text", { class: "sub-title" }, "选择店铺"),
          (openBlock(true), createElementBlock(Fragment, null, renderList(all_camera_info.value, (item, idx) => {
            return openBlock(), createElementBlock("view", {
              class: "card-box",
              key: idx
            }, [
              createVNode(unref(TvCard), {
                class: "card-item",
                style: normalizeStyle(unref(card_styles)[idx]),
                title: item.location
              }, null, 8, ["style", "title"])
            ]);
          }), 128))
        ])
      ]);
    };
  }
};
const select = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  select as default
};
