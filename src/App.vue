<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <transition :name="transitionName"> 
      <keep-alive :include=include>
          <router-view v-wechat-title='$route.meta.title'></router-view>
      </keep-alive>
    </transition>

   <!--  <div class="footer">
      <k_footer></k_footer>
    </div> -->

  </div>
</template>
<script>
import k_footer from "./components/base/footer_tab/footer1";
export default {
  name: "app",
  data() {
    return {
      include:['home','list','about','classlist'],
      transitionName: '',
    }
  },
  watch: {
    $route(to, from) {
      // if(to.meta.login) {
      //   console.log('需要登录')
      //   return
      // }
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';

        // if(to.meta.index > 9 || to.meta.index == 7 ){
        //   kk.is_login(s_storage.get('sessionID'), this);
        // }
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
  components: {
    k_footer
  }
};
</script>
<style scoped lang="less">
// @import url("./common/less/index.less");
#app {
  
}

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
  // opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  // opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  // opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  // opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
