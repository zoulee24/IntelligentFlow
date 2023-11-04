# IntelligentFlow
 大屏人流App

## 修改
### MQTT.js
安装
```bash
npm i mqtt@4.1.0
```
打开`node_modules/mqtt/dist/mqtt.js`，搜索所有`connectSocket`，在`protocols下`添加一个回调函数`success() {}`
### echart
打开并安装 [echarts图表](https://ext.dcloud.net.cn/plugin?id=4899), 下载 [vue3 兼容](https://github.com/apache/echarts/tree/master/dist) 里面的 `echarts.esm.min.js` 到 uni_modules/lime-echart/static 里面。
```bash
npm i echarts
```
引入：
```js
import * as echarts from '@/uni_modules/lime-echart/static/echarts.esm.min.js';
```