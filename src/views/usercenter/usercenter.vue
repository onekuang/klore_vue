<template>
  <div class="usersenter" id="capture">
    <!-- 用户中心信息卡片 -->
    <UserBox v-show=test />
    
    <!-- 横tab -->
    <k_across_tab :lists=c_across_tab v-show=test />
    <div class="khr" v-show=test ></div>

    <k_across_tab :lists=c_across_tab2 v-show=test />
    
    <div class="khr" v-show=test ></div>

    <!-- 宫格 -->
    <Kgrid :lists=c_grid_data v-show=test />
    <img :src=dataURL alt="" width="100%">
  </div>
</template>
<script>
import UserBox from "@/components/user_info_box/user_info_box.vue";
import k_across_tab from "@/components/k_across_tab/k_across_tab.vue";
import Kgrid from "@/components/k_grid/k_grid.vue";
export default {
  name: "usercenter",
  data() {
    return {
      dot_num: 2,
      dataURL:'',
      test: true
    };
  },
  created() {
    console.log("usercneter...show..");
  },
  mounted() {

  },
  methods: {
  },
  computed: {
    // 横tab -- 组件模版
    c_across_tab() {
      let that = this;
      return [        
        {
          id: 1,
          title: "分销中心",
          icon: "icon-kexuejishu-4",
          icon_color:"#FF9933",
          // dot: true,
          // dot_text: this.dot_num,
          fn: that.fff,
        },
        {
          id: 2,
          title: "我要提现",
          icon: "icon-tixian2",
          icon_color:"#FF9933",
          url: "/orderlist"
        },
        {
          id: 3,
          title: "提现记录",
          icon: "icon-wodehongbao",
          icon_color:"#FF9933",
          url: "/orderlist"
        },
        {
          id: 4,
          title: "分享赚钱",
          icon: "icon-fenxiang2",
          icon_color:"#FF9933",
          url: "/orderlist",
          // dot: true,
          // dot_text: "Hot"
        }
      ];
    },
    // 横tab2 -- 组件模版
    c_across_tab2() {
      let that = this;
      return [
        {
          id: 1,
          title: "待付款",
          icon: "icon-pay",
          icon_color:"#FF9933",
          url:'/orderlist?tab=0'
          // dot: true,
          // dot_text: this.dot_num,
          // fn: that.goto,
        },
        {
          id: 2,
          title: "待发货",
          icon: "icon-send",
          icon_color:"#FF9933",
          url: "/orderlist?tab=1"
        },
        {
          id: 3,
          title: "待收货",
          icon: "icon-deliver",
          icon_color:"#FF9933",
          url: "/orderlist?tab=2"
        },
        {
          id: 4,
          title: "已完成",
          icon: "icon-wodefankui",
          icon_color:"#FF9933",
          url: "/orderlist?tab=3"
        }
      ];
    },
    // 菜单模版 -- 组件模版
    c_grid_data() {
      let that = this;
      return [
        {
          id: 1,
          title: "我的二维码",
          icon: "icon-erweima1688",
          icon_color:"#55b4fe",
          // dot: true,
          // dot_text: this.dot_num,
          url: "/myqrcode",
          // fn: that.fff,
        },
        {
          id: 11,
          title: "个人设置",
          icon: "icon-shezhi",
          icon_color:"#55b4fe",
          // dot: true,
          // dot_text: this.dot_num,
          url: "/setting",
          // fn: that.fff,
        },
        {
          id: 2,
          title: "我的订单",
          icon: "icon-wodedingdan",
          icon_color:"#55b4fe",
          url: "/orderlist"
        },
        {
          id: 3,
          title: "手机绑定",
          icon: "icon-ai-bind-cel",
          icon_color:"#FF6633",
          url: "/changephone"
        },
        {
          id: 4,
          title: "银行卡管理",
          icon: "icon-yinxingqia3",
          icon_color:"#FF6633",
          url: "/"
        },
        {
          id: 5,
          title: "转账",
          icon: "icon-iconset0292",
          icon_color:"#FF6633",
          url: "/"
        },
        {
          id: 6,
          title: "收货地址",
          icon: "icon-dizhi3",
          icon_color:"#FF6633",
          url: "/address"
        },
        {
          id: 7,
          title: "系统信息",
          icon: "icon-gonggaoguanli",
          icon_color:"#55b4fe",
          url: "/"
        },
        {
          id: 8,
          title: "在线客服",
          icon: "icon-iconfontfuwushichang",
          icon_color:"#99CC99",
          url: "/goodscart"
        },
        {
          id: 9,
          title: "关于我们",
          icon: "icon-guanyuwomen2",
          icon_color:"#99CC99",
          url: "/about"
        },
        {
          id: 10,
          title: "注销",
          icon: "icon-qiehuanzuhu",
          icon_color:"#FF6633",
          url: "/login"
        },
      ];
    }
  },  
  components: {
    UserBox,
    Kgrid,
    k_across_tab,
  }
};
</script>
<style scoped lang="less">
@import url("../../common/less/index.less");

.usersenter{
  width: 100%;
}
</style>
