<template>
<div class="home page " ref="container">
	
	<div class="head_top" :class="{'active': head_top_show }">
		<div class="logo">
			<img src="https://xsygood.com/img/logo2.png" alt="">
		</div>
		<div class="search_wrapper">
			<router-link tag="div" class="search_box" to="/search">
				<div class="search_input">
					<i class="iconfont icon-search"></i>&nbsp;&nbsp;请输入关键词搜索
				</div>
			</router-link>
		</div>		
	</div>

	<!-- <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading"> -->
	<!-- 轮播组件 -->
  <div>
  	<k_swipe_banner @banner_click=banner_click :swipe_data=swipe_banner_data :height=230 />
  </div>
	
	<!-- 菜单组件 -->
  <HomeMenu :lists=mene_data :wrap=true />

	<div class="khr"></div>
	

	<!-- 推广位置 -->
	<div class="tuiguang">
		<h4 class="index_title">热门创业项目</h4> 
		<mu-row>
	    <mu-col span="6"><div class="grid-cell left">
	    	<div class="item"></div>
	    </div></mu-col>
	    <mu-col span="6"><div class="grid-cell right">
	    	<div class="item"></div>
	    	<div class="item"></div>
	    </div></mu-col>
	  </mu-row>
	</div>

  <!-- 活动专区 -->
  <div class="activity_wrapper">
  	<h4 class="index_title">活动专区</h4>  	
		<div class="activity_box">
			<div class="item" v-for="item in 2">
				<div class="img_box" style="">
					<div class="title">大众投资人正在招募中</div>					
				</div>
			</div>
			<!-- <div class="item">
				<div class="img_box">
					<img src="https://gw.alicdn.com/imgextra/i2/69/O1CN01yo4uzk1CNdoBTmBZl_!!69-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
					<div class="title">title</div>
				</div>
			</div> -->
		</div>
  </div>

	<div class="khr"></div>
	
  <!-- 人气品牌 -->
  <div class="popularity">
  	<h4 class="index_title">人气品牌<div class="more"><i class="iconfont icon-you"></i></div></h4>  
  	<!-- 滑动模块 -->
  	<div class="k_sweipe_box">
  	  <swiper :options="swiperOption"  ref="hot_goods">   
  	      <swiper-slide v-for="(item, index) in 4">  
  	      	<div style="padding: 6px;" class="item">
  	      		<div class="img"></div>
  		        <!-- <img 
  		        	src="https://gw.alicdn.com/imgextra/i2/69/O1CN01yo4uzk1CNdoBTmBZl_!!69-0-lubanu.jpg_790x10000Q75.jpg_.webp"
  		        	@click="popularity_click(index)" 
  		        	width="100%" height=100
  		        > -->
  		        <div class="info">
  		        	<div class="title">title</div>
  		        	<div class="price">￥10~20W</div>
  		        </div>
  		        <div class="flag">分类占位</div>
  	        </div>
  	      </swiper-slide>
  	  </swiper>  
  	</div>

  </div>

	<div class="khr"></div>

	<div class="recommend">
  	<h4 class="index_title" style="font-weight: 900;color: #000;">为你推荐<div class="more"><i class="iconfont icon-you"></i></div></h4>  
		<div class="recommend_wrapper">
			<div class="recommend_box">
				<div class="items" v-for="item in 4">
					<div class="item">
						<div class="img"></div>
						<div class="info">
							<div class="top">
								<div class="title">玛丽莲甜品</div>
								<div class="flag">
									<img src="https://lipstick.xsygood.com/bsck_img/prove.png">
								</div>
							</div>
							<div class="desc">国际快时尚修仙百货领先品牌,超过1000家门店</div>
							<div class="tags">
								<div class="tag">实地考察地址</div>
								<div class="tag">带店培训</div>
								<div class="tag">装修指导</div>
								<div class="clearfix"></div>
							</div>
							<div class="bottom">
								<div class="money"><span>￥</span>4~8<span>万</span></div>
								<div class="num">门店数:&nbsp;&nbsp;66</div>
							</div>
						</div>
					</div>
					<div class="apply_for">已申请: 3276</div>
				</div>
			</div>
		</div>
  </div>

	<!-- </mu-load-more> -->
</div>
</template>

<script>
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
import HomeMenu from '@/components/home_menu/home_imgmenu';
export default {
	data() {
		return {
			head_top_show: false,
      refreshing: false,
      loading: false,
			// 滑动配置
			swiperOption: {  
        effect:'slide',// 切换效果
        slidesPerView: 2.3,  
        centeredSlides: false,  
        paginationClickable: true,  
        spaceBetween: 5,// 间隔  
      },
			swipe_banner_data:[
				{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"},
				{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"},
			],
			mene_data:[	 // 导航菜单数据
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
				{img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024",title:'title'},
			],
		}
	},
	created() {
		this.get_data()
	},
	mounted() {
		window.addEventListener('scroll', this.onscroll)
	},
	methods: {
		get_data(){},
		// 轮播点击
		banner_click(index) {
			console.log(index)
		},
		// 人气品牌点击 - 滑动模块
		popularity_click(index){
			console.log(index)
		},
		refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      console.log('刷新数据')
      setTimeout(() => {
        this.refreshing = false;
      }, 2000)
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

			if(scrollTop > 100) {
				vm.head_top_show = true
			}else{
				vm.head_top_show = false
			}

			//滚动条到底部的条件
				if(scrollTop+windowHeight==scrollHeight){
					//写后台加载数据的函数
					// vm.page = vm.page + 1
					// vm.get_data()
					console.log('到达底部')
				}
			// }	
		}
	},
	components: {
		k_swipe_banner,HomeMenu,swiper,swiperSlide,
	},
	beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.onscroll);
    next()
  }
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.home{
	// /deep/.mu-refresh-control{
	// 	color:@orange;
	// }
	// /deep/.mu-circle-spinner{
	// 	border-color: @orange;
	// }
}
.tuiguang{
	padding: 8px;
	.left{
		// height: 136px;
		height: 0;
		background: #eee;
		padding-bottom: 136px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.right{
		margin-left: 8px;
		.item{
			height: 0px;
			background: #eee;
			padding-bottom: 65px;
			background-size: 100% 100%;
			background-repeat: no-repeat;
			&:nth-of-type(1) {
				margin-bottom: 6px;
			}
		}
	}
}
// 活动专区
.activity_wrapper{
	padding-bottom: 12px;
	.activity_box{
		display: flex;
		.item{
			flex: 1;
			margin: 0 6px;
			.img_box{
				border-radius: 10px;
				overflow: hidden;
				position: relative;
				background: #eee;
				height: 0;
				width: 100%;
				padding-bottom: 100px;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				.title{
					background: rgba(0,0,0,.8);
					text-align: center;
					padding: 2px 0;
					color: #fff;
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					font-size: 10px;
				}
			}
		}
	}
}


// 人气专区 _ 滑动模块
.popularity{
	padding-bottom: 12px;
}
.k_sweipe_box{
	.item{
		border: 1px solid #eee;
		box-shadow: 1px 2px 5px #ccc;
		margin-bottom: 6px;
		position: relative;
		border-radius: 2px;
		.flag{
			position: absolute;
			top: 14px;
			left: 10px;
			border: 1px solid #fff;
			color: #fff;
			font-size: 10px;
			line-height: 10px;
			padding: 4px;
			border-radius: 12px;
		}
	}
	.img{
		border-radius: 2px;
		height: 0;
		width: 100%;
		padding-bottom: 100%;
		background: #eee;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	// img{
	// 	border-radius: 2px;
	// 	display: block;
	// }
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

// 为你推荐
.recommend_wrapper{
	padding: 0 12px;
	.recommend_box{
		.items{
			padding-bottom: 12px;
			padding-top: 12px;
			border-bottom: 1px solid #eee;
			&:nth-of-type(1) {
				border-top: 1px solid #eee;
			}
		}
		.item{
			display: flex;
			
			.img{
				flex: 0 0 35%;
				height: 0;
				padding-bottom: 30%;
				border-radius: 8px;
				background: #eee;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin-right: 12px;
			}
			.info{
				flex: 1;
				.top{
					display: flex;
					.title{
						font-size: 14px;
						font-weight: 900;
						margin-right: 4px;
					}
					img{
						height: 18px;
					}
				}
				.desc{
					font-size: 12px;
					color: #333;
					line-height: 20px;
					margin-bottom: 4px;
					margin-top: 2px;
				}
				.tags{
					.tag{
						float: left;
						border: 1px solid @orange;
						margin-right: 6px;
						font-size: 10px;
						padding: 0 2px;
						border-radius: 4px;
						color: @orange;
						margin-bottom: 4px;
					}
				}
				.bottom{
					display: flex;
					.money{
						flex: 1;
						text-align: left;
						font-size: 18px;
						color: @red;
						span{
							font-size: 12px;
						}
					}
					.num{
						flex: 1;
						text-align: right;
						font-size: 12px;
						margin-top: 6px;
						color: #666;
					}
				}
			}
		}
		.apply_for{
			font-size: 12px;
			color: #666;
			margin-left: 20px;
		}
	}
}
.head_top{	
	display: flex;
	position: fixed;
	height: 50px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	.logo{
		img{
			height: 46px;
			width: 100px;
		}
		margin-right: 8px;
		margin-left: 8px;
	}
	&.active{
		background: #fff;
		border-bottom: 1px solid #eee;
		.search_input{
			color: #666!important;
		}
	}
}
.search_wrapper{
	flex: 1;
	height: 48px;
	.search_box{
		text-align: left;
		padding-top: 10px;
		.search_input{
			padding-left: 16px;
			width: 90%;
			margin: 0 auto;
			height: 30px;
			line-height: 30px;
			border-radius: 4px;
			background: rgba(0, 0, 0, 0.1);
			color:#fff;
			font-size: 12px;
			border-radius: 12px;
		}
	}	
}
</style>