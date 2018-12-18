import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/home1.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {// 测试
      path: "/test",
      meta:{index:1},
      component: () => import("./components/HelloWorld.vue")
    },
    { path: '*', component: Home },
    {
      path: "/",
      meta:{index:5,title:"首页"},
      component: Home
    },






    // ======= 基本模版 =======
    {// 案例列表
      path: "/caselist",
      meta:{index:6,title:"案例列表"},
      component: () => import("./views/lists/caselist.vue")
    },
    {// 产品列表
      path: "/prolist",
      meta:{index:7,title:"产品列表"},
      component: () => import("./views/lists/prolist.vue")
    },
    {// 分类列表
      path: "/classlist",
      meta:{index:6,title:"分类列表"},
      component: () => import("./views/classlist/classlist.vue")
    },
    {// 关于我们
      path: "/about",
      meta:{index:11,login:true},
      component: () => import("./views/about/about1.vue")
    },    
    {// 文章页面
      path: "/article",
      meta:{index:20},
      component: () => import("./views/article/article.vue")
    },
    {// 用户中心
      path: "/usercenter",
      meta:{index:8,login:true,title:"个人中心"},
      component: () => import("./views/usercenter/usercenter1.vue")
    },
    {// 设置中心
      path: "/setting",
      meta:{index:15,login:true,title:"设置中心"},
      component: () => import("./views/setting/setting.vue")
    },
    {// 用户配置
      path: "/userconfig",
      meta:{index:16,login:true,title:"用户配置"},
      component: () => import("./views/setting/userconfig.vue")
    },
    

    // ======= 工具类 =======
    
    {// 手机修改
      path: "/changephone",
      meta:{index:20, login:true,title:"手机修改"},
      component: () => import("./views/change_info/change_phone.vue")
    },
    {// 修改昵称
      path: "/changname",
      meta:{index:20, login:true,title:"修改昵称"},
      component: () => import("./views/change_info/change_username.vue")
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
    {// 我的二维码
      path: "/myqrcode",
      meta:{index:20,login:true,title:"我的二维码"},
      component: () => import("./views/myqrcode/myqrcode.vue")
    },
    {// 地址列表
      path: "/address",
      meta:{index:19,login:true,title:"我的地址"},
      component: () => import("./views/address/address.vue")
    },
    {// 地址更改
      path: "/address_update",
      meta:{index:20,login:true,title:"地址更改"},
      component: () => import("./views/address/address_update.vue")
    },
    {// 我的银行卡
      path: "/banklist",
      meta: {index:17,title:"我的银行卡"},
      component: () => import("@/views/bank/banklist.vue")
    },
    {// 添加银行卡
      path: "/addbank",
      meta: {index:20,title:"添加银行卡"},
      component: () => import("@/views/bank/addbank.vue")
    },
    
    // ======= 商城类 =======
    
    {// 商品详情
      path: "/goodsdetaile",
      meta:{index:15},
      component: () => import("./views/shop/goods_detaile.vue")
    },
    {// 购物车
      path: "/goodscart",
      meta:{index:7,login:true,title:"帐变记录"},
      component: () => import("./views/shop/shop_goodscart.vue")
    },
    {// 订单列表
      path: "/orderlist",
      meta:{index:18, login:true,title: "订单列表"},
      component: () => import("./views/shop/order_list.vue")
    },
    {// 物流信息
      path: "/wuliu",
      meta:{index:20, login:true,title: "物流信息"},
      component: () => import("./views/shop/wuliu.vue")
    },
    {
      path: "/search",
      meta: {index:14,login:false,title: "搜索"},
      component: () => import("@/views/search/search.vue")
    },
    // ======= 分销类 =======
    {
      path: "/visual",
      meta: {index:11,login:true,title: "我的收益"},
      component: () => import("@/views/fenxiao/visual.vue")
    },
    {
      path: "/bill",
      meta: {index:12,login:true,title:"帐变记录"},
      component: () => import("@/views/bill/bill.vue")
    },
    {
      path:"/getmoney",
      meta: {index:12,login:true,title:"提现"},
      component: () => import("@/views/fenxiao/getmoney.vue")
    },
    
    // ======= 特殊类 =======
    {// 报名
      path: "/apply",
      meta:{index:12,title:"我要报名"},
      component: () => import("./views/login/login2.vue")
    },
    {// 排行榜
      path: "/ranking",
      meta:{index:13,title:"排行榜"},
      component: () => import("@/components/ranking/ranking.vue")
    },
    {// 投票详情
      path: "/votedetail",
      meta:{index:10,title:"商家详情"},
      component: () => import("@/views/prodetaile/prodetaile.vue")
    },
    {// 奖品详情
      path: "/jiangpin",
      meta:{index:24,title:"奖品"},
      component: () => import("@/views/jiangping/jiangping.vue")
    },
  ]
});
