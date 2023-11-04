import {
  post,
  get
} from './common.js';


function get_all_shop_location() {
  const endpoint = '/camera/selectshop';
  return get(endpoint);
}

function update_minutes_flow_data(cameraId) {
  const endpoint = '/bigscreen/person/line/minute10';

  return post(endpoint, {
    cameraId
  }).catch((reason) => {
    console.error("update_minutes_flow_data ", reason);
  });
}

function update_recent_flow_data(cameraId) {
  const endpoint = '/bigscreen/person/bar/hour4';

  return post(endpoint, {
    cameraId
  }).catch((reason) => {
    console.error("update_recent_flow_data ", reason);
  });
}

function update_calendar_flow_data(cameraId) {
  const endpoint = '/bigscreen/person/line/month2';

  return post(endpoint, {
    cameraId
  }).catch((reason) => {
    console.error("update_calendar_flow_data ", reason);
  });
}


export {
  get_all_shop_location,
  update_minutes_flow_data,
  update_recent_flow_data,
  update_calendar_flow_data
}