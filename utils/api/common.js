const ip = '10.64.45.143';
const port = '8080';
export const basrUrl = `http://${ip}:${port}/power-haven`;

export function post(endpoint, data) {
  return new Promise((resolve, reject) => {
    uni.request({
      method: "POST",
      url: basrUrl + endpoint,
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
  return new Promise((resolve, reject) => {
    uni.request({
      method: "GET",
      url: basrUrl + endpoint,
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