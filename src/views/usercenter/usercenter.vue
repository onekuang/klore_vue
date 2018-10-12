<template>
  <div class="usersenter">
    <!-- 用户中心信息卡片 -->
    <UserBox></UserBox>
    
    <!-- 横tab -->
    <k_across_tab :lists=c_grid_data></k_across_tab>
    
    <div class="khr"></div>

    <!-- 宫格 -->
    <Kgrid :lists=c_grid_data ></Kgrid>
    


  </div>
</template>
<script>
import UserBox from "@/components/user_info_box/user_info_box.vue";
import k_across_tab from "@/components/k_across_tab/k_across_tab.vue";
import Kgrid from "@/components/k_grid/k_grid.vue";
export default {
  name: "home",
  data() {
    return {
      dot_num: 1
    };
  },
  created() {
    console.log("usercneter...show..");
  },
  computed: {
    c_grid_data() {
      let that = this;
      return [
        {
          id: 1,
          title: "title",
          icon: "icon-yaoqingma",
          dot: true,
          dot_text: this.dot_num,
          fn: that.fff
        },
        {
          id: 1,
          title: "title",
          icon: "icon-yaoqingma",
          url: "/"
        },
        {
          id: 1,
          title: "title",
          icon: "icon-yaoqingma",
          url: "/"
        },
        {
          id: 1,
          title: "title",
          icon: "icon-yaoqingma",
          url: "/"
        }
      ];
    }
  },
  methods: {
    fff() {
      console.log("没有url参数,则执行fn方法");
    }
  },
  components: {
    UserBox,
    Kgrid,
    k_across_tab
  }
};
</script>
<style scoped lang="less">
@import url("../../common/less/index.less");
</style>
