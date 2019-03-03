import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/home5.vue";
import Message from "@/views/message/message.vue";

Vue.use(Router);

var router = new Router({
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
      component: Home,
      children:[
        {
          path: "/",
          meta:{index:5,title:"首页"},
          component: Message
        },
        {
          path: "/lessons",
          meta:{index:5,title:"学院"},
          component: () => import("./views/lists/lessons.vue")
        },
        {
          path: "/book",
          meta:{index:5,title:"电子书"},
          component: () => import("./views/lists/book_list.vue")
        },
        {
          path: "/voice_book",
          meta:{index:6,title:"有声阅读"},
          component: () => import("./views/lists/voice_book_list.vue")
        }
      ]
    },
    // { path: '*', component: Message },
    // {// 资讯页面
    //   path: "/",
    //   meta:{index:5,title:"资讯"},
    //   component: Message
    // },





    // ======= 基本模版 =======
      {// 加盟
        path: "/jiameng",
        meta:{index:8,title:"加盟"},
        component: () => import("./views/jiameng/jiameng.vue")
      },
      {// 投资页面
        path: "/touzhi",
        meta:{index:6,title:"投资"},
        component: () => import("./views/touzhi/touzhi.vue")
      },
      {// 投资机构-列表
        path: "/touzhijigou_list",
        meta:{index:12,title:"投资机构",hide_footer:true},
        component: () => import("./views/touzhi/touzhi_jigou_list.vue")
      },
      {// 投资机构详情
        path: "/touzhi_jigou_detail",
        meta:{index:13,title:"投资机构详情",hide_footer:true},
        component: () => import("./views/touzhi/touzhi_jigou_detail.vue")
      },
      {// 投资人列表
        path: "/touzhiren_list",
        meta:{index:12,title:"投资人"},
        component: () => import("./views/touzhi/touzhiren_list.vue")
      },
      {// 投资人详情
        path: "/touzhiren_detail",
        meta:{index:14,title:"投资人简介",hide_footer:true},
        component: () => import("./views/touzhi/touzhiren_detail.vue")
      },
      {// 投资项目列表
        path: "/touzhi_case_list",
        meta:{index:12,title:"创业公司"},
        component: () => import("./views/touzhi/touzhi_case_list.vue")
      },
      {// 项目详情
        path: "/touzhi_case_detail",
        meta:{index:18,title:"项目详情"},
        component: () => import("./views/touzhi/touzhi_case_detail.vue")
      },
      



      {// 产品列表
        path: "/prolist",
        meta:{index:9,title:"产品列表"},
        component: () => import("./views/prolist/prolist2.vue")
      },
      
      {// 视频列表
        path: "/videolist",
        meta:{index:8,title:"学院"},
        component: () => import("./views/message/video_list.vue")
      },
      {// 视频章节
        path: "/videodetail",
        meta:{index:19,title:"视频章节"},
        component: () => import("./views/video/video_detaile.vue")
      },
      {// 视频详情
        path: "/videoinfo",
        meta:{index:20,title:"详情"},
        component: () => import("./views/video/video_info.vue")
      },
      {// 课程列表
        path: "/lessons_list",
        meta:{index:18,title:"课程列表"},
        component: () => import("./views/lists/lessons_list.vue")
      },
      {// 分类列表
        path: "/classlist",
        meta:{index:7,title:"分类列表"},
        component: () => import("./views/classlist/classlist2.vue")
      },
      {// 所有分类
        path: "/classify",
        meta:{index:9,title:"所有分类"},
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
        meta:{index:9,login:true,title:"个人中心"},
        component: () => import("./views/usercenter/usercenter2.vue")
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
      // {// 我的二维码
      //   path: "/myqrcode",
      //   meta:{index:20,login:true,title:"我的二维码"},
      //   component: () => import("./views/myqrcode/swipe_qrcode.vue")
      // },
      // {// 地址列表
      //   path: "/address",
      //   meta:{index:19,login:true,title:"我的地址"},
      //   component: () => import("./views/address/address.vue")
      // },
      // {// 地址更改
      //   path: "/address_update",
      //   meta:{index:20,login:true,title:"地址更改"},
      //   component: () => import("./views/address/address_update.vue")
      // },
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
      // {// 绑定支付宝
      //   path: "/bindalipay",
      //   meta: {index:20,title:"绑定支付宝"},
      //   component: () => import("@/views/bank/bind_alipay.vue")
      // },
      {// 商品详情
        path: "/goodsdetaile",
        meta:{index:19,hide_footer:true},
        component: () => import("./views/prodetaile/prodetaile2.vue")
      },
      {// 搜索
        path: "/search",
        meta: {index:14,login:false,title: "搜索"},
        component: () => import("@/views/search/search.vue")
      },
      {// 帐变记录
        path: "/bill",
        meta: {index:18,login:true,title:"积分记录"},
        component: () => import("@/views/bill/bill.vue")
      },
      {// 提现
        path:"/getmoney",
        meta: {index:20,login:true,title:"提现"},
        component: () => import("@/views/fenxiao/getmoney.vue")
      },
    
    // ======= 特殊类 =======
      {// 意见反馈
        path: "/opinion",
        meta:{index:19,title:"意见反馈"},
        component: () => import("@/views/opinion/opinion.vue")
      },
      {// 会员开通
        path: "/paymenber",
        meta:{index:19,title:"会员开通",hide_footer:true},
        component: () => import("@/views/pay/paymenber.vue")
      },
      {// 充值
        path: "/recharge",
        meta:{index:19,title:"充值"},
        component: () => import("@/views/recharge/recharge_page.vue")
      },
      {// 任务
        path: "/task",
        meta:{index:19,title:"任务"},
        component: () => import("@/views/task/task.vue")
      },
      {// 入驻申请
        path: "/ruzhu",
        meta:{index:19,title:"入驻申请"},
        component: () => import("@/views/other/shenqing.vue")
      },
      {// 申请直通
        path: "/zhitong",
        meta:{index:19,title:"申请直通"},
        component: () => import("@/views/other/zhitong.vue")
      },
      {// 我的收藏
        path: "/collect",
        meta:{index:16,title:"我的收藏"},
        component: () => import("@/views/other/my_shoucang.vue")
      },
      {// 我的评论
        path: "/my_comment",
        meta:{index:19,title:"我的评论"},
        component: () => import("@/views/other/my_comment.vue")
      },
      {// 我的关注
        path: "/my_concern",
        meta:{index:19,title:"我的关注"},
        component: () => import("@/views/other/my_concern.vue")
      },
      {// 我的课程
        path: "/my_video",
        meta:{index:19,title:"我的课程"},
        component: () => import("@/views/other/my_video.vue")
      },
      {// 读物
        path: "/music",
        meta:{index:19,title:"读物",hide_footer:true},
        component: () => import("@/views/lists/music.vue")
      },
      {// 品牌认证
        path: "/pinpai",
        meta:{index:19,title:"品牌认证"},
        component: () => import("@/views/other/pinpai.vue")
      },

      {// 电子书分类
        path: "/book_cla_list",
        meta:{index:18,title:"电子书分类"},
        component: () => import("@/views/lists/book_class_list.vue")
      },
      {// 电子书详情
        path: "/book_info",
        meta:{index:19,title:"电子书详情"},
        component: () => import("@/views/lists/book_info.vue")
      },
      {// 资金池
        path: "/jiangjinchi",
        meta:{index:7,title:"资金池"},
        component: () => import("@/views/other/jiangjinchi.vue")
      },
      {// 创建项目
        path: "/created_case",
        meta:{index:17,title:"创建项目"},
        component: () => import("@/views/other/created_case.vue")
      },
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});



export default router;
