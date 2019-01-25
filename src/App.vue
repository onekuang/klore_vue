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

    <div class="footer">
      <k_footer></k_footer>
    </div>

  </div>
</template>
<script>
import k_footer from "./components/base/footer_tab/footer1";
import { l_storage } from '@/common/js/storage.js'
import { UrlSearch } from '@/common/js/util.js'
export default {
  name: "app",
  data() {
    return {
      include:['home','list','about','classlist'],
      transitionName: '',
    }
  },
  created() {
    var Request = new UrlSearch(); //实例化
    let inivid    = Request.invitation_code || '';
    // console.log(Request)
    if(inivid){
      l_storage.set('invitation_code',inivid)
      console.log('邀请码进入' + inivid)
    }
  },
  watch: {
    $route(to, from) {
      if(to.meta.login) {
        if(l_storage.get('user_token')){
          // console.log('已登录')
        }else{
          this.$toast('请先登录')
          this.goto_login();
          return
        }        
      }

      if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
  methods: {
    goto_login(){
      this.$router.push({
        path: `/login`
      })
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
