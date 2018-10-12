<template>
  <div class="home ab_full">


    <BScroll class="box_wrapper" ref="scroll"><div>

    <!-- 轮播图 -->
    <swipe
      v-model="index"
      style="text-align: center;height: 230px;"
      :autoplayTime = autoplayTime
    >
      <swipe-item>
        <img src="http://tp5test.cms.sppcms.com/img/banner1.jpg" width="100%">
      </swipe-item>
      <swipe-item>
        <img src="http://tp5test.cms.sppcms.com/img/banner1.jpg" width="100%">
      </swipe-item>
      <swipe-item>
        <img src="http://tp5test.cms.sppcms.com/img/banner1.jpg" width="100%">
      </swipe-item>
    </swipe>

    <div class="khr"></div>

    test




    

  </div></BScroll>

  </div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll';
export default {
  name: "home",
  data() {
    return {
      index: 0, // two way
      autoplayTime: 3000
    };
  },
  created() {
    console.log(123);
  },
  components: {
    BScroll
  }
};
</script>

<style scoped lang="less">
@import url("../../common/less/index.less");
.home {
}
.test {
  color: @btn-bg;
}
</style>
