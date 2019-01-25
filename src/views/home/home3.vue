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
    

    <swiper :options="swiperOption"  ref="mySwiper_index">  
        <swiper-slide v-for="(item,index) in swipe_nav_data"> 
          <div>
            <!-- 轮播组件 -->
            <div>
              <k_swipe_banner @banner_click=banner_click :swipe_data=page_data[index].banner />
            </div>
            <!-- 菜单组件 -->
            <HomeMenu :lists=page_data[index].menu :wrap=true @on_menu_click=on_menu_click />

            <!-- 公告头条 -->
            <div v-show="page_data[index].notive.length">
              <k_swipe_notive :swipe_data=page_data[index].notive />
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
            <div v-if="(recomment[index] !== undefined && recomment[index].data.length)">
              <div class="title_wrapper">
                <div class="title_box">
                  <i class="iconfont icon-xuanzhongpingjiadengji"></i> 
                  相关推荐
                </div>
              </div>
              <K_List :row_type=goods_list_type :goods_list=recomment[index].data />
              <!-- <div class="more_box">
                <Load_more @tap_load="tap_load" :status=load_status />
              </div> -->
            </div>
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
var vm;
// import axios from 'axios'
export default {
  name: "home",
  data() {
    var vm = this;
    return {    
      swipe_nav_data:[ // 导航数据
        { id:0,
          image:'/public/upload/picture/20181031/6a13b08d427bd12b0585a55965b46722.jpg',
          // image:'https://lipstick.xsygood.com/testimg/pyg_jx.jpg',
          name:'精选',
          child:[],
        }
      ],                
      swipe_wilfare_data:[],  // 活动图数据      
      hot_goods_data:[],      // 热门商品数据   

      goods_list_type: 2,
      // weipe配置
      swiperOption: {  
        pagination: {
          el : '.swiper-pagination_index' 
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
            vm.get_swipe_index(this.activeIndex)
          }
        }
      },
      view_id: 0,
      active_index:0,         // 当前导航索引
      page_current: 1,
      page_sum: 1,
      load_status:0,      
      home_list:[],
      page_data: [
        {menu:[],recomment:[],notive:[],banner:[]}
      ],
      recomment: [],
    };
  },
  created() {
    vm = this
    // this.$loading.show()
    this.$nextTick(function() {
      this.page_init();
    })
  },
  activated() {
    window.addEventListener('scroll', this.onscroll)
  },
  methods: {
    // 初始化
    page_init() {
      this.$loading.show()
      this.get_nav_data()    
      
    },
    // 获取导航数据
    get_nav_data() {
      this.axios.get(this.$api.get_classify)
      .then(res => {
        this.swipe_nav_data = this.swipe_nav_data.concat(res.data)

        let arr = []
        let arr2 = []
        for (let i=0; i<this.swipe_nav_data.length;i++) {
          arr.push({menu:[],notive:[],banner:[]})
          arr2.push({data:[],page:1})
        }
        this.page_data = arr
        this.recomment = arr2

        this.get_data()
        
      })      
    },
    
    // 获取数据
    get_data() {
      let that = this

      if(this.recomment[this.active_index].data.length){
        return
      }
      this.axios.post(this.$api.page_init,{
          cat:this.view_id
      })
      .then(res => {        
        let json = res.data
        // 轮播
        let banner = json.banner
        this.page_data[this.active_index]['banner'] = this.re_arr(banner)
        this.page_data[this.active_index]['menu']   = json.submenu
        this.page_data[this.active_index]['notive'] = json.news
        this.page_data[this.active_index]['ads'] = json.ads

        this.get_home_list()
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        setTimeout(() => {
          that.$refs.mySwiper_index.swiper.updateAutoHeight();
        },200)
      })
    },
    // 获取相关列表
    get_home_list(){   
      this.$loading.show()   
      let _page;
      try {
        _page = this.recomment[this.active_index].page
      } catch(e) {
        _page = 1
      }

      this.axios.post(this.$api.home_list,{
        page: _page,
        list_rows: 16,
        cat: this.view_id
      })
      .then(res => {
        if(res.data== []){
          this.load_status = 2
          return
        }
        
        let arr = this.recomment[this.active_index].data
        this.load_status = 0        
        let dat = res.data
        let data = {
          data: arr.concat(dat),
          page: this.recomment[this.active_index].page = parseInt(_page) + 1
        }
        this.$set(this.recomment,this.active_index,data)
      })
    },
    goto(_id, _type) {
      console.log('id=' + _id)
      console.log('type=' + _type)
      if(_type == "catlist") {
        this.$router.push({
          path: `/catlist?id=${_id}&type=${_type}`
        })
      }
      if(_type == "materiallist") {
        this.$router.push({
          path: `/materiallist?id=${_id}&type=${_type}`
        })
      }
      if(_type == "info") {
        this.$router.push({
          path: `/activity?id=${_id}&type=${_type}`
        })
      }
      if(_type == "goods") {
        this.$router.push({
          path: `/goodsdetaile?id=${_id}&type=${_type}`
        })
      }
    },
    // 菜单点击
    on_menu_click(item) {
      this.goto(item.id,item.type)
    },
    // 轮播图点击
    banner_click(index) {
      let item = this.page_data[this.active_index].banner[index]
      this.goto(item.id,item.type)
    },
    // 监听当前轮播的索引
    get_swipe_index(index) {
      this.active_index = index;
      if(this.active_index!=0) {
        this.goods_list_type = 1
      }else{
        this.goods_list_type = 2 
      }


      let id = this.swipe_nav_data[index].id
      this.view_id = id

      this.load_status =0,
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.get_data()
    },
    // 加载更多
    tap_load() {
      this.load_status = 1
      this.get_home_list()
    },
    // 导航点击
    tap_nav(index) {
      //切换slide，索引,速度,
      this.$refs.mySwiper_index.swiper.slideTo(index, 400, false);
    },
    // 重组轮播数组
    re_arr(arr) {
      let arr1 = arr
      let arr2 = [];
      for(let i =0; i<arr1.length; i++) {
        let item = Object.assign({
          src: vm.$api.base_img + arr1[i].image
        }, arr1[i]);
        arr2.push(item)
      }
      return arr2      
    },
    onscroll() {
      let vm = this
      // window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      //滚动条到底部的条件
        if(scrollTop+windowHeight==scrollHeight){
          //写后台加载数据的函数
          vm.get_home_list()
          // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
        }
      // }  
    }
  },
  computed: {
    swiper() {  
      return this.$refs.mySwiper_index.swiper;  
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
  },
  // destroyed(){
  //   console.log(123)
  //   window.removeEventListener('scroll', this.onscroll);//监听页面滚动事件
  // },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.onscroll);//监听页面滚动事件
    next()
    // 导航离开该组件的对应路由时调用，可以访问组件实例 `this`
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
