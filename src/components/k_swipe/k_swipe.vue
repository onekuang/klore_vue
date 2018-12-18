<template>
<div class="k_sweipe_wrppaer">

	<!-- 轮播图 -->
	<div class="k_sweipe_box">
	  <swiper :options="swiperOption"  ref="mySwiper">   
	      <swiper-slide v-for="(item, index) in swipe_data">  
	        <img 
	        	:src=item.src 
	        	@click="banner_img_click(index)" 
	        	width="100%" :height=height
	        >
	      </swiper-slide> 
	      <!-- 轮播的小圆点 -->  
	      <div class="swiper-pagination" slot="pagination" v-show=bullet></div>  
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
		bullet: {
			type: Boolean,
			default: true
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
        pagination: {
          el : '.swiper-pagination' ,
          bulletClass : 'my-bullet', // 点的class,在app定义
          bulletActiveClass: 'my-bullet-active',
        }, 
        effect:'slide',// 切换效果
        slidesPerView: 1,  
        centeredSlides: true,  
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
		// 点的样式
		/deep/ .my-bullet{
	  display: inline-block;
	  width: 6px;
	  height: 6px;
	  background: rgba(0,0,0,0.3);
	  border-radius: 50px;
	  margin: 0 2px;
	  transition: all .3s;
	}
	// 选中时的点
	/deep/ .my-bullet-active{
	  // width: 20px;
	  padding: 4px;
	  // background: rgba(0,0,0,.3);
	  background: @color_base;
	}
}

</style>
