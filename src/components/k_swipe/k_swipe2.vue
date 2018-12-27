<template>
<div class="k_sweipe_wrppaer">

	<!-- 滑动模块 -->
	<div class="k_sweipe_box">
	  <swiper :options="swiperOption"  ref="hot_goods">   
	      <swiper-slide v-for="(item, index) in swipe_data">  
	      	<router-link tag="div" style="padding: 6px;" to="/goodsdetaile">
		        <img 
		        	:src=item.src 
		        	@click="banner_img_click(index)" 
		        	width="100%" :height=height
		        >
		        <div class="info">
		        	<div class="title">{{item.title}}</div>
		        	<div class="price">￥68元 <span>￥88</span></div>
		        </div>
	        </router-link>
	      </swiper-slide> 
	      <!-- 轮播的小圆点 -->  
	      <!-- <div class="swiper-pagination" slot="pagination"></div>   -->
	  </swiper>  
	</div>

</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'  

export default {
	props: {
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
		return {
      // 轮播图weipe配置
      swiperOption: {  
        effect:'slide',// 切换效果
        slidesPerView: 3.5,  
        centeredSlides: false,  
        paginationClickable: true,  
        spaceBetween: 0,// 间隔  
        // autoplay: {
        //   delay: 3000,
        // },
        on: {
          slideChange: function() {
            // console.log(this.activeIndex)
          }
        }
      },
		}
	},
	mounted () {  
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 0, false);  
  },
  methods:{
  	banner_img_click(index) {
  		this.$emit('banner_click',index)
  	}
  },
  computed: {
  	swiper() {  
      return this.$refs.hot_goods.swiper;  
    }
  },
  watch: {
    data(){  
    	console.log(123)
      setTimeout(() => {  
        this.$refs.hot_goods.updateSlides();
      },20)  
    }
  },
	components: {
		swiper,swiperSlide
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
// sweiper,
.k_sweipe_box{
	img{
		border-radius: 2px;
		display: block;
	}
	.info {
		margin-top: 4px;
		.title{
			.ell();
			font-size: 12px;
			height: 20px;
			line-height: 20px;
		}
		.price {
			text-align: left;
			color: red;
			font-size: 12px;
			font-weight: 900;
			height: 20px;
			line-height: 20px;
			span {
				display: inline-block;
				padding: 0 4px;
				color: #ccc;
				text-decoration:line-through;
				font-weight: 300;
			}
		}
	}
}

</style>
