import mqtt from 'mqtt/dist/mqtt.js';

const mqttOption = {
  keepalive: 60,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  protocolId: 'MQTT',
  protocolVersion: 4, // MQTT 3.1.1
  clean: true,
  reconnectPeriod: 2000, // 2s
  connectTimeout: 10 * 1000, // 10s
}

// var client = null;

function subscribe(client) {
  if (!is_mqtt_connect(client)) {
    console.error("mqtt client 未连接 禁止订阅");
    return;
  }
  const topics = ['alarm/flow'];

  topics.forEach((topic) => {
    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(`MQTT 订阅 ${topic}`);
        // client.publish(topic, `{"status": true, "msg": "订阅 ${topic} 成功!"}`);
      } else {
        console.error(`MQTT 订阅 ${topic} 失败`);
      }
    });
  })
}

function is_mqtt_connect(client) {
  if (client && client.connected) {
    return true;
  } else {
    return false
  }
}


function mqtt_connect(client = null) {
  if (is_mqtt_connect(client)) {
    console.warn("mqtt 已经连接");
    return;
  }
  try {
    client = mqtt.connect('wx://10.64.45.149:8083/mqtt', mqttOption);

    client.on('connect', () => {
      console.log("mqtt 连接");
      subscribe(client);
    });

    client.on('error', (error) => {
      console.error(`MQTT 错误 ${error}`);
    });


    client.on('disconnect', () => {
      console.warn("MQTT 断开");
    });

    client.on('end', () => {
      console.log("MQTT 主动结束");
    });
  } catch (e) {
    console.error('mqtt 连接错误: ', e);
  }
  return client;
}

function mqtt_disconnect(client) {
  if (!is_mqtt_connect(client)) {
    console.warn("mqtt 未连接");
    return;
  }
  try {
    client.end();
  } catch (e) {
    //TODO handle the exception
    console.error('MQTT 结束错误: ', e);
  }
}

export {
  mqtt_connect,
  mqtt_disconnect
}