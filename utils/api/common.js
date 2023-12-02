import {
  useSettingStore
} from '../store'


export function post(endpoint, data) {
  const settingStore = useSettingStore()
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

export function get(endpoint, data = null) {
  const settingStore = useSettingStore()
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