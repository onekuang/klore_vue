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
    <k_swipe_nav 
      @tap_nav=tap_nav 
        :swipe_data=swipe_nav_data
        :current_index =active_index
        :bullet=false />
    

    <swiper :options="swiperOption"  ref="mySwiper">  
        <swiper-slide v-for="(item,index) in swipe_nav_data"> 
          <div v-if="index==active_index">
            <!-- 轮播组件 -->
            <div>
              <k_swipe_banner 
                @banner_click=banner_click 
                :swipe_data=swipe_banner_data 
              />
            </div>
            <!-- 菜单组件 -->
            <HomeMenu :lists=mene_data :wrap=true />

            <!-- 公告头条 -->
            <div v-show="swipe_notive_data.length">
              <k_swipe_notive :swipe_data=swipe_notive_data />
            </div>
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

            <div class="advertising_box" v-show="hot_goods_data.length">
              <h4 class="index_title">今日热销榜单</h4>
              <k_swipe_tab :swipe_data=hot_goods_data />
            </div>

            <!-- 相关推荐 -->
            <!-- <div>
              <div class="title_wrapper">
                <div class="title_box">
                  <i class="iconfont icon-xuanzhongpingjiadengji"></i> 
                  相关推荐
                </div>
              </div>
              <K_List :row_type=goods_list_type :goods_list=recommend />
            </div>
            <div class="more_box">
              <Load_more @tap_load="tap_load" :status=load_status />
            </div> -->
          </div>
          <div v-else class="text-center">
            <img src="@/components/base/loading/loading.gif" width="30" style="margin-top: 30%;">
          </div>  
        </swiper-slide>
    </swiper>  




    
    
    




  </div>
  </div>
</template>

<script>
import Search from '@/components/base/search/search';
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import k_swipe_tab from '@/components/k_swipe/k_swipe2';
import k_swipe_nav from '@/components/k_swipe/k_swipe_nav';
import k_swipe_notive from '@/components/k_swipe/k_swipe_notive';
import HomeMenu from '@/components/home_menu/home_imgmenu';
import K_List from '@/components/k_goods_list/k_goods_list'
// import axios from 'axios'
export default {
  name: "home",
  data() {
    var vm = this;
    return {    
      swipe_nav_data:[],      // 导航菜单数据      
      mene_data:[],           // 导航菜单数据      
      swipe_banner_data:[],   // 轮播图数据      
      swipe_notive_data:[],   // 头条公告数据      
      swipe_wilfare_data:[],  // 活动图数据      
      hot_goods_data:[],      // 热门商品数据      
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
      goods_list_type: 2,
      // weipe配置
      swiperOption: {  
        pagination: {
          el : '.swiper-pagination' , 
          bulletClass : 'my-bullet', // 点的class
          bulletActiveClass: 'my-bullet-active',
        }, 
        autoHeight: true,
        initialSlide :0,
        effect:'slide',// 切换效果
        slidesPerView: 1,  
        centeredSlides: true,  
        paginationClickable: true,  
        spaceBetween: 0,// 间隔  
        on: {
          slideChange: function() {
            // console.log(this.activeIndex)
            vm.get_swipe_index(this.activeIndex)
          }
        }
      },
      active_index:0,         // 当前导航索引
      load_status: 0,      //加载更多状态
      
    };
  },
  created() {
    // this.$loading.show()
    this.page_init();
  },
  methods: {
    // 初始化
    page_init() {
      this.get_nav_data()    
      this.get_data(1)
    },
    // 获取导航数据
    get_nav_data() {
      this.axios.post("http://192.168.0.109:80/api/Webdata/test3")
      .then(res => {
          this.swipe_nav_data = res.data
      })
    },
    // 导航点击
    tap_nav(index) {
      //切换slide，索引,速度,
      this.$refs.mySwiper.swiper.slideTo(index, 400, false);
    },
    // 获取数据
    get_data(id) {
      this.axios.get("http://192.168.0.109:80/api/Webdata/test4",{
        params: {
          id:id
        }
      })
      .then(res => {
        let data = res.data
        let that = this
        this.mene_data = data.menu
        this.swipe_banner_data = data.banner
        this.swipe_notive_data = data.notive
        this.swipe_wilfare_data = data.fuli
        this.hot_goods_data = data.hot_goods
        setTimeout(() => {
          that.$refs.mySwiper.swiper.updateAutoHeight();;
        },200)
      })
    },
    // 轮播图点击
    banner_click(index) {
      console.log(index)
    },

    // 监听当前轮播的索引
    get_swipe_index(index) {
      this.active_index = index;
      if(this.active_index!=0) {
        this.goods_list_type = 1
      }else{
        this.goods_list_type = 2 
      }
      this.get_data(index + 1)
    },
    // 加载更多
    tap_load() {
      let that = this
      that.load_status= 1
      setTimeout(() => {
        that.load_status= 2
      },1000)
    }
  },
  computed: {
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    },
  },
  components: {
    HomeMenu,
    k_swipe_banner,
    k_swipe_nav,
    k_swipe_tab,
    k_swipe_notive,
    Search,
    K_List,
    swiper,swiperSlide
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
      font-size: 12px;
    }
  } 
}
.my-slide1{
  width: 100%;
}
</style>
