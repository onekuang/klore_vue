<template>
<div class="guide">
<!-- 向导 -->
	<div class="guide_box" v-show="guide_show1 && guide_show">
		<!-- <div class="skip" @click="close_guide">跳过 <span v-show="op_time">{{count}}</span></div> -->
		<swiper :options="swiperOption"  ref="mySwiper_guide">   
	      <swiper-slide v-for="(item, index) in swipe_data">  
	        <img 
	        	:src=item.image
	        	@click="banner_img_click(index)" 	
	        	@load=img_load
	        >
	      </swiper-slide> 
	      <swiper-slide>  
	        <div class="fff"></div>
	      </swiper-slide> 
	      <!-- 轮播的小圆点 -->  
	      <div class="guide_dot_box" slot="pagination"></div>  
	  </swiper>  
	</div>
	
	<div class="music_btn" @click="close_music" v-show="guide_show && guide_show1">
		<i class="iconfont icon-yinleyule play" :class=cdCls></i>
	</div>


<audio 
	id="audio"
	ref="audio" 
	:src="mp3"
	controls="controls"
	loop="true" hidden=""
></audio>


</div>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { l_storage } from '@/common/js/storage.js'
var open_time = false
var guide_time;  
var count_time = 10;
var audio;
export default {
	name:'guide',
	props:{
		guide_show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		var vm = this
		return {
			playing: true,
			mp3:"http://img.tukuppt.com/origin_music/00/02/79/pd-5b766fc50add6481.mp3",
			guide_show1: true,
			count: count_time,
			op_time: open_time,
			bullet:true,
			swipe_data:[
				{image:"https://lipstick.xsygood.com/bsck_img/a/aa.jpg"},
				{image:"https://lipstick.xsygood.com/bsck_img/index2.jpg"},
				{image:"https://lipstick.xsygood.com/bsck_img/index3.jpg"},
				{image:"https://lipstick.xsygood.com/bsck_img/index4.jpg"},
			],

			swiperOption: {  
        pagination: {
          el : '.guide_dot_box' ,
          bulletClass : 'guide_dot',
          bulletActiveClass: 'guide_dot_active',
        }, 
        centeredSlides: true,  
        paginationClickable: true,
        on: {
          slideChange: function() {
            console.log(this.activeIndex)
            if(this.activeIndex >= vm.swipe_data.length){
            	vm.close_guide()
            }
          }
        }
      },
		}
	},
	created() {		
		this.get_data()
	},
	mounted () {  
    this.swiper.slideTo(0, 0, false); 
    if(this.guide_show1 && this.guide_show) {
    	audio = document.getElementById('audio')
    	audio.play();
    	document.addEventListener("WeixinJSBridgeReady", function() {audio.play();}, false);
    }		
  },
	methods: {
		get_data(){
			clearInterval(guide_time)
			let vm = this
			let body = document.getElementsByTagName('body')[0]

			if(this.guide_show1 && this.guide_show) {
				if(open_time) {
					guide_time = setInterval(function() {
						vm.count = count_time
						if(vm.count <=0) {
							clearInterval(guide_time)
							vm.close_guide()
						}
						count_time--
						console.log(vm.count)
					},1000)
				}
				
				body.style.maxHeight = '100vh'
				body.style.overflow = 'hidden'
			}else{
				body.style.maxHeight = 'none'
				body.style.overflow = 'visible'
				l_storage.set('guide', true)
				// if(audio){
					// audio.pause()		
				// }
				try {
					audio.pause()
				} catch(e) {}
			}
		},
		img_load() {
			this.$refs.mySwiper_guide.update()
		},
		banner_img_click() {
			console.log('banner_click')
		},
		close_music() {
			if(this.playing) {

				audio.pause()				
			}else{
				audio.play()
			}			
			this.playing = !this.playing
		},
		close_guide() {		

			this.guide_show1 = false
			this.get_data()
		},
	},
	computed: {
		cdCls() {
			return this.playing ? 'play' : 'play pause'
		},
  	swiper() {  
      return this.$refs.mySwiper_guide.swiper;  
    }
  },
  watch: {
  	guide_show(n,o) {
  		if(!n) {
  			audio.pause()	
  		}
  	}
  },
	components: {}
}
function bodyScroll(event){  
    event.preventDefault();  
} 
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.guide_box{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
	z-index: 99998;
	img{
		width: 100%;
		height: 100%;
		width: 100vw;
		height: 100vh;
	}
	.skip{
		z-index: 5;
		position: absolute;
		display: inline-block;
		padding: 2px 8px;
		right: 10px;
		top: 10px;
		background: rgba(0,0,0,.1);
		color: #fff;
		border-radius: 6px;
	}
	/deep/.guide_dot_box {
		position: absolute;
		text-align: center;
		z-index: 2;		
	}
	/deep/.guide_dot{
		display: inline-block;
		height: 8px;
		width: 8px;
		border-radius: 50%;
		background: #ccc;
		margin: 4px;
		&:last-child{
			display: none;
		}
	}
	/deep/.guide_dot_active{
		background: #F75E5E;
	}

}
.music_btn{
	position: fixed;
	right: 12px;
	top: 12px;
	z-index: 99999;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	line-height: 40px;
	text-align: center;
	i{
		color: #999;
		font-size: 32px;
		display: block;
		&.play{
		  animation: rotate 20s linear infinite;
		}
		&.pause{
		  animation-play-state: paused;
		}
	}
}

element::-webkit-scrollbar {display:none}

@keyframes rotate{
  0%{
    transform: rotate3d(0, 0, 0, 0)
  }
  100%{
    transform: rotate3d(0, 0, 1, 360deg)
  }
}
</style>