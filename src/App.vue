<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link tag="div" to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <transition :name="transitionName"> 
      <keep-alive :include=include>
          <router-view v-wechat-title='$route.meta.title' ></router-view>
      </keep-alive>
    </transition>

    <div class="footer" v-show=footer_show>
      <k_footer></k_footer>
    </div>
    
    <!-- 向导 -->
    <transition name="slide-left"> 
      <xiang_dao :guide_show=guide_show />
    </transition>
  </div>
</template>
<script>
import k_footer from "./components/base/footer_tab/footer1";
import xiang_dao from "./components/xiangdao/xiangdao";
import { l_storage } from '@/common/js/storage.js'
export default {
  name: "app",
  data() {
    return {
      guide_show:true,
      footer_show: true,
      include:['home5','jiameng','list','about','classlist','jiangjinchi'],
      transitionName: '',
    }
  },
  created() {
    this.guide_show = !!l_storage.get('guide') ? false : true
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }

      if(to.meta.hide_footer){
        this.footer_show = false

      }else{
        this.footer_show = true        
      }
    }
  },
  components: {
    k_footer,xiang_dao
  }
};
</script>
<style lang="less">
.footer {
  height: 56px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 99;
}



/*切换动画*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
  position: absolute;
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}

// ====== home页面 ======
.index_title{
  padding: 10px 8px!important;
  font-size: 14px!important;
  color: #666!important;
  .more{
    float: right;
    font-size: 12px;
    margin-top: 2px;
    color: #aaa;
    margin-right: 8px;
  }
}
</style>
