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
      {// 社区
        path: "/news",
        meta:{index:8,title:"社区"},
        component: () => import("./views/news/news.vue")
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
        meta:{index:9,login:true,title:"个人中心"},
        component: () => import("./views/usercenter/usercenter1.vue")
      },
      {// 设置中心
        path: "/setting",
        meta:{index:15,login:true,title:"设置中心"},
        component: () => import("./views/setting/setting.vue")
      },  
      {// 通知设置
        path: "/userconfig",
        meta:{index:16,login:true,title:"通知设置"},
        component: () => import("./views/setting/user_config.vue")
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
        meta:{index:20, login:true,title:"修改密码"},
        component: () => import("./views/change_info/update_password.vue")
      },
      {// 登录
        path: "/login",
        meta:{index:1},
        component: () => import("./views/login/login3.vue")
      },
      {// 短信验证登录
        path: "/login2",
        meta:{index:2},
        component: () => import("./views/login/login2.vue")
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
      {// 订单列表
        path: "/orderlist",
        meta:{index:18, login:true,title: "订单列表"},
        component: () => import("./views/shop/order_list.vue")
      },
      {// 搜索
        path: "/search",
        meta: {index:14,login:false,title: "搜索"},
        component: () => import("@/views/search/search.vue")
      },
      {// 搜索列表
        path: "/searchlist",
        meta: {index:15,login:false,title: "搜索列表"},
        component: () => import("@/views/search/search_list.vue")
      },
      {// 我的标签
        path: "/mytag",
        meta: {index:20,login:false,title: "我的标签"},
        component: () => import("@/views/other/my_tag.vue")
      },


    // ======= 分销类 =======
      {// 收益数据
        path: "/visual",
        meta: {index:11,login:true,title: "我的收益"},
        component: () => import("@/views/fenxiao/visual.vue")
      },
      {// 提现记录
        path: "/bill",
        meta: {index:12,login:true,title:"提现记录"},
        component: () => import("@/views/bill/bill.vue")
      },
      {// 佣金明细
        path: "/commission",
        meta: {index:12,login:true,title:"佣金明细"},
        component: () => import("@/views/bill/commission.vue")
      },
      {// 提现
        path:"/getmoney",
        meta: {index:12,login:true,title:"提现"},
        component: () => import("@/views/fenxiao/getmoney.vue")
      },
      {// 我的粉丝
        path:"/team",
        meta: {index:18,login:true,title:"我的粉丝"},
        component: () => import("@/views/fenxiao/team.vue")
      },
    
    // ======= 特殊类 =======
      {// 创建分享
        path: "/goodsshare",
        meta:{index:24,title:"创建分享"},
        // component: () => import("@/views/other/created_share.vue")
        component: () => import("@/views/other/merge_img.vue")
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
    // ====== 首页跳转 =====
      {
        path: "/catlist",
        meta:{index:19},
        component: () => import("./views/home_to_type/catlist.vue")
      },
      {
        path: "/materiallist",
        meta:{index:19},
        component: () => import("./views/home_to_type/materiallist.vue")
      },
      {
        path: "/activity",
        meta:{index:19},
        component: () => import("./views/home_to_type/activity.vue")
      },
  ]
});
