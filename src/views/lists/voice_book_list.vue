<template>
<div class="book_list">

<!-- 轮播组件 -->
<div>
	<k_swipe_banner :swipe_data=swipe_banner_data />
</div>

<!-- 菜单组件 -->
<HomeMenu :lists=mene_data :wrap=false />

<div class="khr"></div>

<div class="index_title">为您推荐<div class="more"><i class="iconfont icon-refresh"></i></div></div>  
<div class="music_list">
	<div class="items">
		<router-link tag="div" to="/music" class="item" v-for="i in 4">
			<div class="img">
				<img src="http://fdfs.xmcdn.com/group44/M00/5E/B2/wKgKjFsGXByzaczWAAGPBdXdU6E229_web_large.jpg" height=60 width=60>
			</div>
			<div class="info">
				<div class="title">麦田里的守望者</div>
				<div class="desc">
					<div class="avatar">
						<img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132" width=20 height=20>
					</div>
					<div class="name">作者名称</div>
					<div class="hot"><i class="iconfont icon-hot_light"></i> 63999</div>
				</div>
			</div>
			<div class="pay">
				<i class="iconfont icon-bofang"></i>
			</div>
		</router-link>
	</div>
</div>

<div class="khr"></div>

<div class="index_title">热门读物<div class="more"><i class="iconfont icon-refresh"></i></div></div>  

<!-- 滑动模块 -->
<div class="k_sweipe_box">
  <swiper :options="swiperOption"  ref="hot_goods">   
      <swiper-slide v-for="(item, index) in popularity_data">  
      	<div style="padding: 6px;" class="item">
      		<!-- <div class="img" :style="{'background': 'url('+item.image+')'}"></div> -->
	        <img 
	        	:src="item.image"
	        	@click="goto(index)" 
	        	width="100%" height=120
	        >
	        <div class="info">
	        	<div class="title">{{item.title}}</div>
	        	<!-- <div class="price">￥10~20W</div> -->
	        </div>
	        <div class="flag">{{item.flag}}</div>
        </div>
      </swiper-slide>
  </swiper>  
</div>


<div class="khr"></div>

<div class="index_title">推荐读物<div class="more"><i class="iconfont icon-you"></i></div></div>  

<div class="book_wrapper">
	<div class="items">
		<div class="item" v-for="i in 4">
			<div class="img">
				<img src="https://images-cn.ssl-images-amazon.com/images/I/51UU640n1iL._AC_SX236_SY340_FMwebp_QL65_.jpg" width=100 height=120>
			</div>
			<div class="info">
				<div class="inof_box">
					<div class="title">供应链管理</div>
					<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore atque enim eos voluptas, minima commodi accusantium quidem quo ipsa facilis, incidunt aspernatur voluptatem, sapiente quod error unde nam cum expedita!</div>
				</div>
				<div class="time_box">
					<div class="name"><i class="iconfont icon-people"></i> name</div>
					<div class="tags">
						<!-- <div class="tag">热门</div> -->
						<div class="tag">分类</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</div>
</template>

<script>
import HomeMenu from '@/components/home_menu/home_imgmenu';
import k_swipe_banner from '@/components/k_swipe/k_swipe';
export default {
	data() {
		return {
			// 轮播数据
			swipe_banner_data:[
				{src:"https://lipstick.xsygood.com/bsck_img/yousheng_banner.jpg"},
			],
			mene_data:[	 // 导航菜单数据
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_03.png",title:'全部书单',url:'/book_cla_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_05.png",title:'创业相关',url:'/book_cla_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_07.png",title:'营销管理',url:'/book_cla_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_09.png",title:'个人提升',url:'/book_cla_list'},
			],		
			// 滑动配置
			swiperOption: {  
        effect:'slide',// 切换效果
        slidesPerView: 3,  
        centeredSlides: false,  
        paginationClickable: true,  
        spaceBetween: 5,// 间隔  
      },
      popularity_data:[ // 品牌数据
				{title:'业务边界',image:"https://images-cn.ssl-images-amazon.com/images/I/41j510igtiL._AC_SX236_SY340_QL65_.jpg",flag:'分类'},
				{title:'业务边界',image:"https://images-cn.ssl-images-amazon.com/images/I/41j510igtiL._AC_SX236_SY340_QL65_.jpg",flag:'分类'},
				{title:'业务边界',image:"https://images-cn.ssl-images-amazon.com/images/I/41j510igtiL._AC_SX236_SY340_QL65_.jpg",flag:'分类'},
				{title:'业务边界',image:"https://images-cn.ssl-images-amazon.com/images/I/41j510igtiL._AC_SX236_SY340_QL65_.jpg",flag:'分类'},
			],
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		goto(url) {
			console.log(123)
		}
	},
	components: {k_swipe_banner,HomeMenu}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');

.book_wrapper{
	.items{
		padding-top: 8px;
		.item{
			padding: 4px 8px;
			margin-bottom: 12px;
			display: flex;
			.img{
				flex: 0 0 100px;
				width: 100px;
				text-align: center;
				img{
					width: 90px;
					height: 120px;
				}
			}
			.info{
				height: 120px;
				flex: 1;
				min-width: 0;
				padding-left: 8px;
				position: relative;
				.title{
					font-weight: 900;
					.ell();
				}
				.desc{
					color: #888;
					margin-top: 4px;
					font-size: 14px;
			    line-height: 22px;
			    max-height: 44px;
			    text-overflow:ellipsis; 
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
				}
				.time_box{
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					.name{
						float: left;
						font-size: 12px;
						color: #666;
						margin-left: 8px;
					}
					.tags{
						float: right;
						.tag{
							font-size: 12px;
							float: left;
							display: inline-block;
							margin-right: 4px;
							border: 1px solid #eee;
							padding: 0px 4px;
							border-radius: 4px;
							color: @orange;
						}
					}
				}
			}
		}
	}
}


// 音频列表
.music_list{
	.items{
		.item{
			padding: 0 8px;
			margin-bottom: 10px;
			display: flex;
			height: 60px;
			.img{
				flex: 0 0 50px;
				height: 60px;
				img{
					border-radius: 4px;
				}
			}
			.info{
				flex: 1;
				height: 60px;
				padding-left: 8px;
				min-width: 0;
				.title{
					height: 30px;
					line-height: 30px;
					.ell();
				}
				.desc{
					height: 30px;
					.avatar{
						width: 20px;
						float: left;
					}
					.name{
						margin-left: 4px;
						font-size: 12px;
						color: #666;
						margin-top: 2px;
						float: left;
						min-width: 60px;
					}
					.hot{
						margin-left: 20px;
						width: 50px;
						float: left;
						color: #ccc;
						margin-top: 2px;
						font-size: 12px;
					}					
				}
			}
			.pay{
				flex: 0 0 40px;
				line-height: 60px;
				height: 50px;
				font-size: 28px;
				text-align: center;
				color: #999;
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
		// border: 1px solid #eee;
		// box-shadow: 1px 2px 5px #ccc;
		margin-bottom: 6px;
		position: relative;
		border-radius: 2px;
		.flag{
			position: absolute;
			top: 8px;
			left: 4px;
			color: #fff;
			font-size: 10px;
			line-height: 10px;
			padding: 4px 6px;
			border-radius: 12px;
			background: rgba(0,0,0,.3);
		}
	}
	.img{
		border-radius: 2px;
		height: 0;
		width: 100%;
		padding-bottom: 100%;
		background: #eee;
		background-size: 100% 100%!important;
		background-repeat: no-repeat!important;
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