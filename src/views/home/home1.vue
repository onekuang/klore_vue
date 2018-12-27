<template>
  <div class="home page fff">   
  <div>

    <div class="search_wrapper">
      <router-link tag="div" class="search_box" to="/search">
        <div class="search_input">
          <i class="iconfont icon-search"></i>&nbsp;&nbsp;先领劵在购买
        </div>
      </router-link>
    </div>
    
    <!-- 导航组件 -->
    <!-- <k_swipe_nav 
      @banner_click=banner_click 
        :swipe_data=swipe_nav_data
        :bullet=false /> -->
  
    <!-- 轮播组件 -->
    <div>
    <k_swipe_banner 
      @banner_click=banner_click 
      :swipe_data=swipe_banner_data 
    />
    </div>

    <!-- 菜单组件 -->
    <!-- <HomeMenu :lists=c_grid_data :wrap=true /> -->
    
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
      <K_List :type = 2 :goods_list=recommend />
    </div>




  </div>
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
      swipe_nav_data:[
        {'link'  : '/center',
        'src'  : 'https://gw.alicdn.com/imgextra/i4/670817317/TB203GdptknBKNjSZKPXXX6OFXa_!!670817317-0-daren.jpg_300x10000Q75.jpg_.webp',
        'title': '精选'},
       {
          'link'  : '/center',
          'src'   : 'https://img.alicdn.com/imgextra/i4/1876944604/O1CN01odsPIJ1jsfxuVSmsm_!!1876944604.png_170x120Q90s50.jpg_.webp',
          'title' : '母婴'
        },
       {
          'link'  : '/center',
          'src'   : 'https://gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp',
          'title' : '食品'
        },
       {
          'link'  : '/center',
          'src'   : 'https://img.alicdn.com/imgextra/i4/1876944604/O1CN01odsPIJ1jsfxuVSmsm_!!1876944604.png_170x120Q90s50.jpg_.webp',
          'title' : '女装'
        },
       {
          'link'  : '/center',
          'src'   : 'https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp',
          'title' : '彩妆'
        },
       {
          'link'  : '/center',
          'src'   : 'https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp',
          'title' : '洗护'
        },
       {
          'link'  : '/center',
          'src'   : 'https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp',
          'title' : '内衣'
        },
       {
          'link'  : '/center',
          'src'   : 'https://gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp',
          'title' : '百货'
        },



        ],
      // 轮播图数据
      swipe_banner_data:[
        {'link'  : '/center',
            'src'  : 'https://gw.alicdn.com/imgextra/i2/69/O1CN01yo4uzk1CNdoBTmBZl_!!69-0-lubanu.jpg_790x10000Q75.jpg_.webp'},
        {'link'  : '/center',
            'src'  : 'https://gw.alicdn.com/imgextra/i2/69/O1CN01yo4uzk1CNdoBTmBZl_!!69-0-lubanu.jpg_790x10000Q75.jpg_.webp'}
      ],
      // 头条公告数据
      swipe_notive_data:[
        {text: "便宜购测试1.0!",url:'/center'},
        {text: "便宜购测试2.0!",},
      ],
      // 活动图数据
      swipe_wilfare_data:[],
      // 广告tab数据
      swipe_tab_data:[
        {
            'link'  : '/center',
            'src'   : 'https://gw.alicdn.com/imgextra/i4/670817317/TB203GdptknBKNjSZKPXXX6OFXa_!!670817317-0-daren.jpg_300x10000Q75.jpg_.webp',
            'title' : '新色指甲油'
          },
          {
            'link'  : '/center',
            'src'   : 'https://img.alicdn.com/bao/uploaded/i4/T1seJHFwFIXXXXXXXX_!!0-item_pic.jpg_300x300q85s150.jpg_.webp',
            'title' : '卡通可爱猫爪沙发'
          },
          {
            'link'  : '/center',
            'src'   : 'https://gw.alicdn.com/tfscom/i2/2082269323/O1CN012IjyzTzU4ybdgYu_!!0-item_pic.jpg_300x10000Q75.jpg_.webp',
            'title' : '女童加厚连帽棉衣'
          },
          {
            'link'  : '/center',
            'src'   : 'https://img.alicdn.com/bao/uploaded/i1/55555053/TB2T8a8jYlmpuFjSZFlXXbdQXXa_!!55555053.jpg_300x300q85s150.jpg_.webp',
            'title' : '美式实木书柜'
          },
      ],
      // 相关推荐数据
      recommend: [
        {id:1,title:'3期免息现货【送壳膜+百元礼包】苹果',img:'http://img.alicdn.com/bao/uploaded/i2/1776456424/O1CN01AxVu6P1xKEoaLfGQ2_!!1776456424.jpg',current_money:'3858',old_money:'2958',sales:'222',coupos:'50',award:'100'},
        {id:2,title:'Apple/苹果 iPhone 8 Plus',img:'https://img.alicdn.com/bao/uploaded/i1/1917047079/TB27ffoXxnaK1RjSZFtXXbC2VXa_!!1917047079.jpg',current_money:'5888',old_money:'5999',sales:'1999',coupos:'100',award:'123'},
        {id:3,title:'现货发 3期免息/送壳膜+运费险 苹果6sp Apple/苹果 iPhone 6s Plus全网通4G手机中移动官方旗舰正品',img:'https://img.alicdn.com/bao/uploaded/i4/1776456424/O1CN01dGVql51xKEoZg8NxE_!!1776456424.jpg',current_money:'3999',old_money:'4999',sales:'123',coupos:'321',award:'122'},
        {id:4,title:'【64G限时直降50元】Huawei/华为 畅享9 Plus 全面屏超清大屏四摄学生老人机正品智能游戏手机',img:'https://img.alicdn.com/bao/uploaded/i2/2838892713/O1CN01UCnIWi1Vub0xNdv8f_!!2838892713.jpg',current_money:'1499',old_money:'1599',sales:'999',coupos:'50',award:'100'},
        {id:5,title:'Apple/苹果 iPhone X 全网通手机iphone10 无线充电',img:'https://img.alicdn.com/bao/uploaded/i3/263726286/TB22dGNmGagSKJjy0FbXXa.mVXa_!!263726286.jpg',current_money:'6258',old_money:'6888',sales:'123',coupos:'55',award:'100'},
        {id:6,title:'Apple/苹果 iPhone X 全网通手机iphone10 无线充电',img:'https://img.alicdn.com/bao/uploaded/i3/2088045547/O1CN016oDwsp1qqZSm3FwcO_!!2088045547.jpg',current_money:'2099',old_money:'2199',sales:'678',coupos:'20',award:'50'},
        {id:7,title:'Xiaomi/小米 小米8年度旗舰全面屏骁龙845双频GPS智能拍照手机 官方旗舰店正品',img:'https://img.alicdn.com/bao/uploaded/i3/1714128138/O1CN01PVTZVm29zFfjHn9eM_!!1714128138.jpg',current_money:'2750',old_money:'2799',sales:'999',coupos:'123',award:'111'},
        {id:8,title:'Huawei/华为 畅享9 PLUS 全网通4G手机官方官网旗舰店正品新品畅想9/8plus/max 8c',img:'https://img.alicdn.com/bao/uploaded/i1/1730436394/O1CN01ZLmrN51x6UvR7UI7p_!!1730436394.jpg',current_money:'1299',old_money:'1399',sales:'56',coupos:'100',award:'100'},
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
      // this.get_banner_img()
      // this.get_welfare()
      // this.get_tab_img()
      // this.get_nav_data()    
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
