// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import VueLazyload from 'vue-lazyload'//图片懒加载
import './filters'// 加载过滤器
import '../node_modules/mint-ui/lib/style.css'//mint-ui 样式
import loading from './common/imgs/loading.gif'
import './mock/mockServer'// 加载mockServer即可
import {Button} from 'mint-ui'


Vue.component(Button.name,Button)//<mt-button>
Vue.use(Vuex);
Vue.use(VueLazyload,{//内部自定义一个指令lazy
  loading
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
