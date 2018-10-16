import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/home1.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    { path: '*', component: Home },
    {
      path: "/",
      meta:{index:1},
      component: Home
    },
    {
      path: "/caselist",
      meta:{index:2},
      component: () => import("./views/lists/caselist.vue")
    },
    {
      path: "/about",
      meta:{index:4,login:true},
      component: () => import("./views/about/about.vue")
    },    
    {
      path: "/article",
      meta:{index:10},
      component: () => import("./views/article/article.vue")
    },
    {
      path: "/usercenter",
      component: () => import("./views/usercenter/usercenter.vue")
    },
    {
      path: "/test",
      component: () => import("./views/order_detail/order_detail1.vue")
    },
  ]
});
