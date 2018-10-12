import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
