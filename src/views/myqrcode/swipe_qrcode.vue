<template>
<div class="myqrcode page">

	<!-- 轮播图 -->
	<div class="k_sweipe_box">
	  <swiper :options="swiperOption"  ref="mySwiper">   
	      <swiper-slide> 
	      	<div class="img_box" id="slide_0"> 
	        	<img src="./qrcode_bg1.jpg" width="100%" class="block">
	        	<div class="code_wrapper">
	        		<div class="qrcode_box">	
	        			<div id="qrcode1" class="qrcode" ref="qrcode"></div>			
	        		</div>
	        		<div class="name">邀请码</div>
	        		<div class="code">K2A45d789</div>
	        	</div>
	        </div>
	      </swiper-slide> 
	      <swiper-slide>  
	        <div class="img_box"id="slide_1"> 
	        	<img src="./qrcode_bg2.jpg" width="100%" class="block">
	        	<div class="code_wrapper">
	        		<div class="qrcode_box">	
	        			<div id="qrcode2" class="qrcode" ref="qrcode"></div>			
	        		</div>
	        		<div class="name">邀请码</div>
	        		<div class="code">K2A45d789</div>
	        	</div>
	        </div>
	      </swiper-slide> 
	      <swiper-slide>  
	        <div class="img_box" id="slide_2"> 
	        	<img src="./qrcode_bg3.jpg" width="100%" class="block">
	        	<div class="code_wrapper">
	        		<div class="qrcode_box">	
	        			<div id="qrcode3" class="qrcode" ref="qrcode"></div>			
	        		</div>
	        		<div class="name">邀请码</div>
	        		<div class="code">K2A45d789</div>
	        	</div>
	        </div>
	      </swiper-slide> 
	      <!-- 轮播的小圆点 -->  
	      <div class="swiper-pagination" slot="pagination" v-show=bullet></div>  
	  </swiper>  
	</div>
	
	<div class="share_box btn_box">
		<div class="theme_btn" @click="created_img">分享专属海报</div>
	</div>
	
	<div class="haibao_img" v-show=page_img>
		<div class="img">
			<img :src=dataURL width="100%">
			<p class="text-center" style="color: #fff;">长按图片可发送给好友</p>
		</div>
		<div class="marke" @click="clone_img"></div>
	</div>
</div>
</template>

<script>
import QRCode from 'qrcodejs2'
import { swiper, swiperSlide } from 'vue-awesome-swiper'  

var from_url = '';
export default {
	name:"myqrcode",
	data() {
		var vm = this;
		return {
			qrcode_url:"baidu.com",
			qrcode_h : 64,
			qrcode_w : 64,
			dom: true,
			page_img:false,
			dataURL:'',
			// 轮播图weipe配置
      swiperOption: {  
        pagination: {
          el : '.swiper-pagination' ,          
          slideClass : 'my-slide',
          bulletClass : 'my-bullet', // 点的class
          bulletActiveClass: 'my-bullet-active',
        }, 
        initialSlide :1,
        effect:'coverflow',// 切换效果
        slidesPerView: 1.3,  // 显示几个
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
      swipe_data:[],
      bullet: false,
      active_index:0, // 当前索引
		}
	},
	mounted() {

  	this.$nextTick(() => {
  		let that = this
  		// this.$loading.show('生成海报');
  			setTimeout(()=>{
  	    	that.qrcode()
  			},200)
  	})
	},
	methods:{
		qrcode() {  
			let that = this
			let qrcode1 = new QRCode('qrcode1', {  
	      width: that.qrcode_w,  
	      height: that.qrcode_h, // 高度	      
	     	text: this.qrcode_url, // 二维码内容
	     	// colorDark:"#D29D19", // 前景色
	     	// colorLight: "#fff", //背景色
	     //  image: '',  
	      // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
	    }) 
	    let qrcode2 = new QRCode('qrcode2', {  
	      width: that.qrcode_w,  
	      height: that.qrcode_h, // 高度	      
	     	text: this.qrcode_url, // 二维码内容
	    })	
	    let qrcode3 = new QRCode('qrcode3', {  
	      width: that.qrcode_w,  
	      height: that.qrcode_h, // 高度	      
	     	text: this.qrcode_url, // 二维码内容
	    })
  	},
  	created_img() {
  		let that = this
  		console.log('slide_' + this.active_index)
  		that.dataURL = '',
  		this.page_img= true
  		html2canvas(document.getElementById('slide_' + this.active_index),{
  			// width:that.qrcode_w,
  			// height:that.qrcode_h,
  		})
  		.then(function(canvas) {
          // document.body.appendChild(canvas);
          that.dataURL = canvas.toDataURL("image/jpeg");
          that.dom = false
          // that.$loading.hide();
          // that.$toast("生成图片成功,长按保存")
      });
  	},
  	// 获取当前轮播的索引
  	get_swipe_index(index) {
  		this.active_index = index;
  	},
  	// 关闭海报
  	clone_img(){
  		this.page_img = false
  	}
	},
	computed: {
  	swiper() {  
      return this.$refs.mySwiper.swiper;  
    }
  },
	components: {
		swiper,swiperSlide
	},
	destroyed: function () {
    // this.$loading.hide();
	},
	// beforeRouteEnter (to, from, next) {
	// 	from_url = from.fullPath
	// 	next()
	// }
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.k_sweipe_box{
	margin-top: 10px;
	.img_box{
		position: relative;
		.code_wrapper{
			position: absolute;
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			text-align: center;
			.qrcode_box{
				text-align: center;
				// padding: 4px;
				.qrcode{
					width: 68px;
					margin: 0 auto;
					padding: 2px;
					background: #fff;
				}
			}
			.name{
				margin-top: 6px;
				font-size: 13px;
				color: #fff;
			}
			.code{
				font-size: 16px;
				color: #fff;
			}
		}
	}
}
.haibao_img{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 56px;
	z-index: 20;
	text-align: center;
	padding-top: 20px;	
	.img {
		width: 80%;
		margin: 0 auto;
		z-index: 20;
	}
	.marke{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.7);
		z-index: -1;
	}
}
.share_box{
	margin-top: 20px;
}

</style>
