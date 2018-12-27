import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/home3.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    { path: '*', component: Home },
    {
      path: "/",
      meta:{index:5,title:"便宜购"},
      component: Home,
    },






    // ======= 基本模版 =======
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
      {// 公告列表
        path: "/notivelist",
        meta:{index:19},
        component: () => import("./views/notive/notive_list.vue")
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

    // ======= 工具类 =======
    
      {// 手机修改
        path: "/updatephone",
        meta:{index:20, login:true,title:"手机修改"},
        component: () => import("./views/change_info/update_phone.vue")
      },
      {// 修改昵称
        path: "/updatename",
        meta:{index:20, login:true,title:"修改昵称"},
        component: () => import("./views/change_info/update_username.vue")
      },
      {// 修改密码
        path: "/updatepassword",
        meta:{index:20, login:true,title:"修改昵称"},
        component: () => import("./views/change_info/update_password.vue")
      },
      {// 登录
        path: "/login",
        meta:{index:1},
        component: () => import("./views/login/login3.vue")
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
        component: () => import("./views/myqrcode/swipe_qrcode.vue")
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
      // {// 我的银行卡
      //   path: "/banklist",
      //   meta: {index:17,title:"我的银行卡"},
      //   component: () => import("@/views/bank/banklist.vue")
      // },
      // {// 添加银行卡
      //   path: "/addbank",
      //   meta: {index:20,title:"添加银行卡"},
      //   component: () => import("@/views/bank/addbank.vue")
      // },
      {// 绑定支付宝
        path: "/bindalipay",
        meta: {index:20,title:"绑定支付宝"},
        component: () => import("@/views/bank/bind_alipay.vue")
      },
      {// 评论
        path: "/comment",
        meta: {index:21,title:"反馈"},
        component: () => import("@/components/comment/comment.vue")
      },
    
    // ======= 商城类 =======
    
      {// 商品详情
        path: "/goodsdetaile",
        meta:{index:15},
        component: () => import("./views/shop/goods_detaile.vue")
      },
      // {// 购物车
      //   path: "/goodscart",
      //   meta:{index:7,login:true,title:"帐变记录"},
      //   component: () => import("./views/shop/shop_goodscart.vue")
      // },
      // {// 订单列表
      //   path: "/orderlist",
      //   meta:{index:18, login:true,title: "订单列表"},
      //   component: () => import("./views/shop/order_list.vue")
      // },
      // {// 物流信息
      //   path: "/wuliu",
      //   meta:{index:20, login:true,title: "物流信息"},
      //   component: () => import("./views/shop/wuliu.vue")
      // },
      {// 搜索
        path: "/search",
        meta: {index:14,login:false,title: "搜索"},
        component: () => import("@/views/search/search.vue")
      },
      // {// 优惠劵
      //   path: "/coupon",
      //   meta: {index:14,login:false,title: "优惠劵"},
      //   component: () => import("@/views/card_list/coupon.vue")
      // },
    // ======= 分销类 =======
      {// 收益数据
        path: "/visual",
        meta: {index:11,login:true,title: "我的收益"},
        component: () => import("@/views/fenxiao/visual.vue")
      },
      {// 帐变记录
        path: "/bill",
        meta: {index:12,login:true,title:"帐变记录"},
        component: () => import("@/views/bill/bill.vue")
      },
      {// 提现
        path:"/getmoney",
        meta: {index:12,login:true,title:"提现"},
        component: () => import("@/views/fenxiao/getmoney.vue")
      },
      {// 团队
        path:"/team",
        meta: {index:18,login:true,title:"我的粉丝"},
        component: () => import("@/views/fenxiao/team.vue")
      },
    
    // ======= 特殊类 =======
      {// 创建分享
        path: "/goodsshare",
        meta:{index:24,title:"创建分享"},
        component: () => import("@/views/other/created_share.vue")
      },
      {// 常见问题
        path: "/issue",
        meta:{index:19},
        component: () => import("./views/notive/issue.vue")
      },
      {// 新手指导
        path: "/guide",
        meta:{index:19},
        component: () => import("./views/notive/guide.vue")
      },
      {// 客服
        path: "/service",
        meta:{index:19},
        component: () => import("./views/other/service.vue")
      },
      {// 收藏
        path: "/collect",
        meta:{index:19},
        component: () => import("./views/other/collect.vue")
      },
  ]
});
