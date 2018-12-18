<template>
  <div class="home ab_full">   
  <BScroll class="box_wrapper" ref="scroll" 
    :pulldown=pulldown 
    @pulldown="pulldown1" 
  >
  <div style="padding-bottom: 50px;">

    <div class="search_wrapper">
      <router-link tag="div" class="search_box" to="/search">
        <div class="search_input">
          <i class="iconfont icon-search"></i>&nbsp;&nbsp;先领劵在购买
        </div>
      </router-link>
    </div>
    
    <!-- 导航组件 -->
    <k_swipe_nav 
      @banner_click=banner_click 
        :swipe_data=swipe_nav_data
        :bullet=false />
  
    <!-- 轮播组件 -->
    <div>
    <k_swipe_banner 
      @banner_click=banner_click 
      :swipe_data=swipe_banner_data 
    />
    </div>

    <!-- 菜单组件 -->
    <HomeMenu :lists=c_grid_data :wrap=true />
    
    <!-- 公告头条 -->
    <k_swipe_notive :swipe_data=swipe_notive_data />


    <!-- 福利轮播 -->
    <div>
      <k_swipe_banner 
        @banner_click=banner_click 
        :swipe_data=swipe_wilfare_data
        :bullet=false
      />
    </div>



    <!-- 热销榜单  -->
    <div class="khr"></div>   

    <div class="advertising_box">
      <h4 class="index_title">今日热销榜单</h4>
      <k_swipe_tab :swipe_data=swipe_tab_data />
    </div>
    <div class="khr"></div>   
    
    <!-- 相关推荐 -->
    <div>
      <div class="title_wrapper">
        <div class="title_box">
          <i class="iconfont icon-xuanzhongpingjiadengji"></i> 
          相关推荐
        </div>
      </div>
      <K_List :type = 2 :data=recommend />
    </div>




  </div></BScroll>
  </div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll';
import Search from '@/components/base/search/search';
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import k_swipe_tab from '@/components/k_swipe/k_swipe2';
import k_swipe_nav from '@/components/k_swipe/k_swipe_nav';
import k_swipe_notive from '@/components/k_swipe/k_swipe_notive';
import HomeMenu from '@/components/home_menu/home_imgmenu';
import api from '@/assets/api/api';
import K_List from '@/components/k_goods_list/k_goods_list'
import axios from 'axios'

export default {
  name: "home",
  data() {
    return {
      pulldown: true,
      red:"red",
      dot_num: "Hot",
      // 导航菜单数据
      swipe_nav_data:[],
      // 轮播图数据
      swipe_banner_data:[],
      // 头条公告数据
      swipe_notive_data:[
        {text: "淘商城1.0,今日火热上线啦!",url:'/center'},
        {text: "淘商城2.0,今日火热上线啦!",},
      ],
      // 活动图数据
      swipe_wilfare_data:[],
      // 广告tab数据
      swipe_tab_data:[],
      // 相关推荐数据
      recommend: [
        {},{},{},{},{},{},{},{}
      ],
    };
  },
  mounted() {
    this.page_init();
  },
  watch: {
    swipe_nav_data: function() {
      this.refresh();
    },
    swipe_banner_data: function() {
      this.refresh();
    },
    swipe_wilfare_data: function() {
      this.refresh();
    },
    swipe_tab_data: function() {
      this.refresh();
    },
  },
  methods: {
    // 初始化
    page_init() {
      this.get_banner_img()
      this.get_welfare()
      this.get_tab_img()
      this.get_nav_data()
      this.$refs.scroll.$emit('pullrefresh.finishLoad'); // 上拉刷新完毕      
    },  
    // 下拉刷新  
    pulldown1(pos) {
      console.log(pos)
      this.$refs.scroll.$emit('infinitescroll.finishLoad'); // 刷新中
      this.page_init();
    },
    refresh() {
      setTimeout(() => {
        this.$refs.scroll.refresh()
      },20)
    },
    // 获取导航数据
    get_nav_data() {
      this.axios.post(api.test3)
      .then(res => {
          this.swipe_nav_data = res.data
      })
    },
    // 获取轮播图数据
    get_banner_img() {
      this.axios.post(api.test)
      .then(res => {
          this.swipe_banner_data = res.data
      })
    },
    // 轮播图点击
    banner_click(index) {
      console.log(index)
      this.$refs.scroll.$emit('pullrefresh.finishLoad');
    },

    // 福利轮播
    get_welfare() {
      this.axios.post(api.test1)
      .then(res => {
          this.swipe_wilfare_data = res.data
      })
    },

    // 广告tab数据
    get_tab_img() {
      this.axios.post(api.test2)
      .then(res => {
          this.swipe_tab_data = res.data
      })
    }
  },
  computed: {
    c_grid_data() {
      let that = this;
      return [
        {id: 1,   title: "9.9包邮", 
          img:"https://img.alicdn.com/imgextra/i4/1876944604/O1CN01odsPIJ1jsfxuVSmsm_!!1876944604.png_170x120Q90s50.jpg_.webp"
        },
        {id: 2,   title: "淘抢购",   dot_text: this.dot_num, url: "/",
          img:"https://img.alicdn.com/tfs/TB1i.Avnb2pK1RjSZFsXXaNlXXa-168-168.png_170x120Q90s50.jpg_.webp"
        },
        {id: 3,   title: "免单福利", url: "/",
          img:"https://gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
        },
        {id: 4,   title: "聚划算",   url: "/",
          img:"https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"
        },
        {id: 5,   title: "苏联易购", url: "/",
          img:"https://gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
        },
        {id: 6,   title: "9.9包邮", 
          img:"https://img.alicdn.com/imgextra/i4/1876944604/O1CN01odsPIJ1jsfxuVSmsm_!!1876944604.png_170x120Q90s50.jpg_.webp"
        },
        {id: 7,   title: "淘抢购",   url: "/",
          img:"https://img.alicdn.com/tfs/TB1i.Avnb2pK1RjSZFsXXaNlXXa-168-168.png_170x120Q90s50.jpg_.webp"
        },
        {id: 8,   title: "免单福利", url: "/",
          img:"https://gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
        },
        {id: 9,   title: "聚划算",   url: "/",
          img:"https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"
        },
        {id: 10,   title: "聚划算",   url: "/",
          img:"https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"
        },
      ];
    },
  },
  components: {
    BScroll,
    HomeMenu,
    k_swipe_banner,
    k_swipe_nav,
    k_swipe_tab,
    k_swipe_notive,
    Search,
    K_List
  }
};
</script>

<style scoped lang="less">
@import url("../../common/less/index.less");
.header_box{
  display: flex;
  height: 50px;
  .search_box{
    flex: 1;
    padding: 6px 0px 6px 2px;
  }  
  .msg_box{
    flex: 0 0 20px;
    line-height: 50px;
    i {
      font-size: 24px;
      margin-right: 8px;
      color: #666;
    }
  }
}


.advertising_box{
  padding: 6px 0;
}

.title_wrapper{
  text-align: center;
  .title_box{
    position: relative;
    display: inline-block;
    height: 40px;
    padding: 0 12px;
    line-height: 40px;
    margin: 0 auto;
    font-size: 15px;
    font-weight: 600;
    color:@red;
    &:after {
      content:'';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateX(-100%);
      height: 1px;
      width: 20px;
      background: @red;
    }
    &:before {
      content:'';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateX(0%);
      height: 1px;
      width: 20px;
      background: @red;
    }
  }
}


.blue{
  background: @jianbian;
}
.p1{ color: @color_base; }
.p2{ color: @color_qian; }
.p3{ color: @color_shen; }
.p4{ color: @color_liang; }
.p5{ color: @color_an; }
.p7{ color: @color_01; }
.p8{ color: @color_02; }
.p9{ color: @color_03; }


// ====== home页面 ======
.index_title{
  padding-left: 8px;
  font-size: 13px;
  color: #666;
}

.search_wrapper{
  background: #fff;
  height: 48px;
  .search_box{
    text-align: center;
    padding-top: 10px;
    .search_input{
      width: 90%;
      margin: 0 auto;
      height: 30px;
      line-height: 30px;
      border-radius: 4px;
      background: #f5f5f5;
      color:#999;
    }
  } 
}
</style>
