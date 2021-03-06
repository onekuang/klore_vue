import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import 'amfe-flexible';

// axios
import VueAxios from 'vue-axios'
import instance from './http/http'
Vue.use(VueAxios, instance)

// 引入字体
// import "./assets/fonts/iconfont.css";

// api
import api from "./assets/api/api.js";
Vue.prototype.$api = api


// 引入ui
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
Vue.use(MuseUI);

// 弹窗组件
import { Alert, Confirm, Toast, Loading } from "wc-messagebox";
import "wc-messagebox/style.css";
Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast);
Vue.use(Loading);

// swipe
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入holder 图片占位
import VueHolder from 'vue-holderjs';
Vue.use(VueHolder);


// 动态页面标题
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

// picker
import AwesomePicker from 'vue-awesome-picker';
Vue.use(AwesomePicker);

// 剪贴板
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 自定义
import { Load_more, List_null } from './components/base/loading/index.js'
Vue.use(Load_more).use(List_null)

import directive from './common/klore/directive.js'
import filter from './common/klore/filter.js'

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
