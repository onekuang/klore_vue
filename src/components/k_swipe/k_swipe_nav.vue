<template>
<div class="k_sweipe_wrppaer">

	<!-- 滑动模块 -->
<div class="k_swipe_wrapper">
	<div class="k_swipe_box">
		<div class="swipe_box">
		  <swiper :options="swiperOption"  ref="mySwiper">   
		      <swiper-slide v-for="(item, index) in swipe_data">  
		      	<div class="nav_li" :class="{on : index == active_index && !more_menu_show}">		
		      		{{item.title}}
		      	</div>
		      </swiper-slide> 
		      <!-- 轮播的小圆点 --> 
		      <!-- <div class="swiper-pagination" slot="pagination"></div>   -->
		  </swiper>  
	  </div>
	  <div class="menu" @click="show_menu">
	  	<i class="iconfont icon-liebiao"></i>
	  </div>
	</div>
	<div class="more_menu_wrapper" v-show="more_menu_show">
		<h2>更多频道</h2>
		<div class="more_menu_box">
			<div class="item" v-for="item in swipe_data">
				<img :src="item.src">
				<div class="text">
					{{item.title}}
				</div>
			</div>
		</div>
	</div>
</div>






</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'  

export default {
	props: {
		current_index:{
			type: Number,
			default: 0,
		},
		swipe_data: {
			type: Array,
			default: function() {
				return []
			}
		},
		height: {
			type: Number,
			defautl: 200
		}
	},
	data() {
		var vm = this;
		return {
      // 轮播图weipe配置
      swiperOption: {  
        // initialSlide :0,// 初始化的时候,第一页在那个item
        effect:'slide',// 切换效果
        slidesPerView: 6.5,  
        centeredSlides: false,  
        paginationClickable: true,  
        spaceBetween: 0,// 间隔  
        // autoplay: {
        //   delay: 3000,
        // },
        on: {
          slideChange: function() {
            // console.log(this.activeIndex)
          },
          tap: function(event,index){
			      // console.log(this.clickedIndex)
			      vm.tap_nav_item(this.clickedIndex)
			    },
        }
      },
      active_index:0, // 当前索引
      more_menu_show: false,
		}
	},
	watch: {
		current_index :function(n, o) {
			this.active_index = n
		}
	},
	mounted () {  
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    // this.swiper.slideTo(0, 0, false);  
  },
  methods:{
  	// 点击nav
  	tap_nav_item(index) {
  		this.more_menu_show = false
  		this.active_index = index;
  		// 让点击的item居中
  		if(index > 3) {
  			this.swiper.slideTo(index - 3, 100, false);
  		}
  		this.$emit('tap_nav',index)
  	},
  	// 更多菜单
  	show_menu() {
  		this.more_menu_show = !this.more_menu_show
  	}
  },
  computed: {
  	swiper() {  
      return this.$refs.mySwiper.swiper;  
    }
  },
	components: {
		swiper,swiperSlide
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
@nav_li_height: 40px;
// sweiper,
.k_swipe_box{
	display: flex;
	.nav_li{
		height: @nav_li_height;
		line-height: @nav_li_height;
		font-size: 14px;
		text-align: center;
		&.on {
			color:#f44336;
			border-bottom: 2px solid #f44336;
		}
	}
	.swipe_box{
		flex: 1;
		overflow: hidden;
	}
	.menu{
		flex: 0 0 40px;
		width: 40px;
		height: @nav_li_height;
		line-height: @nav_li_height;
		text-align: center;
		i {
			font-size: 18px;
			color: #f44336;
		}
	}
}
.k_swipe_wrapper{
	position: relative;
	.more_menu_wrapper{
		position: absolute;
		left: 0;
		right: 0;
		z-index: 999;
		background: #fff;
		padding: 12px 8px;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
		box-shadow: 2px 2px 4px rgba(0,0,0,.3);
		h2{
			height: 30px;
			line-height: 30px;
			font-weight: 900;
			color: #f44336;

		}
		.more_menu_box{
			display: flex;
			flex-wrap: wrap;
			.item{
				flex: 0 0 25%;
				text-align: center;
				padding: 6px 0;
				// margin-bottom: 12px;
				img{
					height: 40px;
					width: 40px;
				}
				.text{
					font-size: 12px;
				}
			}
		}
	}
}
</style>
