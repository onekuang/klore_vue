<template>
<div class="k_sweipe_wrppaer">
	<!-- 公告头条 -->
	<div class="notive_box">

	  <div class="notive_img">便宜购<span>头条</span></div>
		
		<div class="notive">

			<!-- 滑动模块 -->
			<div class="k_sweipe_box">
			  <swiper :options="swiperOption"  ref="mySwiper">   
			      <swiper-slide v-for="(item, index) in swipe_data">  
			      	<router-link :to="item.url || '##'" tag='div' class="div1">
				        <p class="notive_text">{{item.text}}</p>
			        </router-link>
			      </swiper-slide> 
			  </swiper>  
			</div>

		</div>
		
		<div class="k_icon">
			<img src="./notive.png">
		</div>
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
        direction:'vertical',
        // height: 28,//强制Swiper的高度(px),垂直才用得上
        effect:'slide',// 切换效果
        slidesPerView: 1,  
        centeredSlides: false,  
        paginationClickable: true,  
        spaceBetween: 0,// 间隔  
        autoplay: {
          delay: 3000,
        },
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
// sweiper,
.k_sweipe_box{
	height: 28px;
	overflow: hidden;
	.notive_text{
		height: 28px;
		line-height: 30px;
		font-size: 12px;
	}	
	.div1{
		height: 28px;
		line-height: 30px;
	}
}

// 公告
	.notive_box{
	  display: flex;
	  padding: 2px 8px;
	  min-width: 0;
	  .notive_img{
	    flex: 1;
	    font-weight: 900;
	    font-size: 15px;
	    height: 30px;
	    line-height: 30px;
	    font-style: italic;
	    span{
	      margin-left: 1px;
	      font-size: 15px;
	      color:@red;
	      font-weight: 900;
	    }
	  }
	  .notive{
	  	flex: 3;
	  }
	  .k_icon{
	  	flex: 0 0 30px;
	  	width: 30px;
	  	height: 30px;
	  	line-height: 38px;
			img{
				width: 20px;
				height: 20px;
			}
	  }
	}

</style>
