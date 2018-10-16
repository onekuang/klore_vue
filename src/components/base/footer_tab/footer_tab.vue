<template>
<div class="footer_tab">
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="index" to='/' title="首页" icon=":iconfont icon-home1"/>
      <mu-bottom-nav-item value="list" to='/caselist' title="案例中心" icon=":iconfont icon-home1"/>
      <mu-bottom-nav-item value="active" to='/tuiguang' title="推广方案" icon=":iconfont icon-home1"/>
      <mu-bottom-nav-item value="about" to='/about' title="关于我们" icon=":iconfont icon-home1"/>
      <mu-bottom-nav-item value="test" to='/test' title="测试" icon=":iconfont icon-home1"/>
    </mu-bottom-nav>
  </mu-paper>
</div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "index"
    };
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
    }
  }
};
</script>
<style lang="less">
.mu-bottom-nav {
  background-color: #f7f7fa !important;
}
.footer_tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.mu-bottom-nav-shift {
  background: #000 !important;
}
.mu-buttom-item {
  color: #b1b1b1;
  .mu-icon {
    font-size: 20px;
  }
}
.mu-bottom-item-active .mu-bottom-item-text,
.mu-bottom-item-active .mu-icon {
  color: #1191d3;
}
.mu-bottom-item-icon {
  font-size: 18px !important;
}
</style>
