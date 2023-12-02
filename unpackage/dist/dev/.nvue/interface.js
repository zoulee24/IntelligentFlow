import { u as useSettingStore, f as formatAppLog } from "./_plugin-vue_export-helper.js";
const _imports_0 = "/static/background.png";
function post(endpoint, data) {
  const settingStore = useSettingStore();
  return new Promise((resolve, reject) => {
    uni.request({
      method: "POST",
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
function update_minutes_flow_data(cameraId) {
  const endpoint = "/bigscreen/person/line/minute10";
  return post(endpoint, {
    cameraId
  }).catch((reason) => {
    formatAppLog("error", "at utils/api/interface.js:18", "update_minutes_flow_data ", reason);
  });
}
function update_recent_flow_data(cameraId) {
  const endpoint = "/bigscreen/person/bar/hour4";
  return post(endpoint, {
    cameraId
  }).catch((reason) => {
    formatAppLog("error", "at utils/api/interface.js:28", "update_recent_flow_data ", reason);
  });
}
function update_calendar_flow_data(cameraId) {
  const endpoint = "/bigscreen/person/line/month2";
  return post(endpoint, {
    cameraId
  }).catch((reason) => {
    formatAppLog("error", "at utils/api/interface.js:38", "update_calendar_flow_data ", reason);
  });
}
export {
  _imports_0 as _,
  update_recent_flow_data as a,
  update_calendar_flow_data as b,
  get_all_shop_location as g,
  update_minutes_flow_data as u
};
