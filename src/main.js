import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
import store from "./store/index";

// # 创建一个axios实例
var axios_instance = axios.create({
// # config里面有这个transformRquest，这个选项会在发送参数前进行处理。
// # 通过Qs.stringify转换为表单查询参数
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
// # 设置Content-Type
    headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
    params: {
      token: 'test'
    },
})

Vue.use(VueAxios, axios_instance)

// 引入字体
import "./assets/fonts/iconfont.css";

// 引入ui
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";

Vue.use(MuseUI);

// 弹窗组件
import { Alert, Confirm, Toast } from "wc-messagebox";
import "wc-messagebox/style.css";
Vue.use(Alert, {});
Vue.use(Confirm, {});
Vue.use(Toast);

// 引入 c-swipe 轮播
import "c-swipe/dist/swipe.css";
import { Swipe, SwipeItem } from "c-swipe";
// 全局注册 c-swipe 轮播组件
Vue.component("swipe", Swipe);
Vue.component("swipe-item", SwipeItem);

// 引入holder 图片占位
import VueHolder from 'vue-holderjs';
Vue.use(VueHolder);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
