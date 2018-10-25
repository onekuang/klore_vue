import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/home1.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {// 测试
      path: "/test",
      meta:{index:1},
      component: () => import("./views/shop/order_list.vue")
    },
    { path: '*', component: Home },
    {
      path: "/",
      meta:{index:5},
      component: Home
    },
    {// 案例列表
      path: "/caselist",
      meta:{index:6},
      component: () => import("./views/lists/caselist.vue")
    },
    {// 关于我们
      path: "/about",
      meta:{index:11,login:true},
      component: () => import("./views/about/about.vue")
    },    
    {// 文章页面
      path: "/article",
      meta:{index:20},
      component: () => import("./views/article/article.vue")
    },
    {// 用户中心
      path: "/usercenter",
      meta:{index:8},
      component: () => import("./views/usercenter/usercenter.vue")
    },
    

    // ======= 工具类 =======
    
    {// 手机修改
      path: "/changephone",
      meta:{index:20, login:true},
      component: () => import("./views/change_info/change_phone.vue")
    },
    {// 登录
      path: "/login",
      meta:{index:1},
      component: () => import("./views/login/login.vue")
    },
    {// 注册
      path: "/register",
      meta:{index:2},
      component: () => import("./views/register/register.vue")
    },
    {// 找回密码
      path: "/findPassword",
      meta:{index:2},
      component: () => import("./views/register/forget_password.vue")
    },

    
    // ======= 商城类 =======
    
    {// 商品详情
      path: "/goodsdetaile",
      meta:{index:15},
      component: () => import("./views/shop/goods_detaile.vue")
    },
    {// 购物车
      path: "/goodscart",
      meta:{index:7},
      component: () => import("./views/shop/shop_goodscart.vue")
    },
    {// 订单列表
      path: "/orderlist",
      meta:{index:18, login:true},
      component: () => import("./views/shop/order_list.vue")
    },
    {// 物流信息
      path: "/wuliu",
      meta:{index:20, login:true},
      component: () => import("./views/shop/wuliu.vue")
    },
  ]
});
