import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入字体文件
import './assets/font/iconfont.css'
//引入全局样式文件
import './assets/css/global.less'
import axios from 'axios'
import ScoketService from '@/utils/socket_service'
//对服务器端进行websocket的连接
ScoketService.Instance.connect()
//其他组件通过this.$stocket
Vue.prototype.$socket=ScoketService.Instance
//请求基准路径的配置
axios.defaults.baseURL='http://127.0.0.1:8888/api/'
//将axios挂载到Vue的原型对象中
//在其他组件中通过this.$http去进行ajax请求
Vue.prototype.$http=axios

//将去全局的echarts对象挂载到Vue的原型对象上
//在别的组件中通过this.$echarts去使用echarts
Vue.prototype.$echarts=window.echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
