<template>
<div class="book_list">



<!-- 轮播组件 -->
<div>
	<k_swipe_banner :swipe_data=swipe_banner_data />
</div>

<!-- 菜单组件 -->
<HomeMenu :lists=mene_data :wrap=false />

<div class="khr"></div>



<div class="index_title">热门推荐<div class="more"><i class="iconfont icon-you"></i></div></div>  

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

<div class="index_title">相关推荐<div class="more"><i class="iconfont icon-you"></i></div></div>  

<div class="book_wrapper">
	<div class="items">
		<router-link tag="div" to="/book_info" class="item" v-for="i in 4">
			<div class="img">
				<img src="https://images-cn.ssl-images-amazon.com/images/I/51dmO8LM2LL._SL150_.jpg" width=100 height=120>
			</div>
			<div class="info">
				<div class="inof_box">
					<div class="title">title</div>
					<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore atque enim eos voluptas, minima commodi accusantium quidem quo ipsa facilis, incidunt aspernatur voluptatem, sapiente quod error unde nam cum expedita!</div>
				</div>
				<div class="time_box">
					<div class="name"><i class="iconfont icon-people"></i> name</div>
					<div class="tags">
						<!-- <div class="tag">热门</div> -->
						<div class="tag">推荐</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</div>

</div>
</template>

<script>
// import HomeMenu from '@/components/home_menu/home_imgmenu';
import HomeMenu from '@/components/home_menu/home_imgmenu';
import k_swipe_banner from '@/components/k_swipe/k_swipe';
export default {
	data() {
		return {
			// 轮播数据
			swipe_banner_data:[
				{src:"https://lipstick.xsygood.com/bsck_img/yuedu_banner.jpg"}
			],
			mene_data:[	 // 导航菜单数据
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_03.png",title:'全部书单',url:'/book_cla_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_05.png",title:'创业相关',url:'/book_cla_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_07.png",title:'营销管理',url:'/book_cla_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_09.png",title:'个人提升',url:'/book_cla_list'},
				// {img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_11.png",title:'个人提升',url:'/book_cla_list'},
			],	
			// 滑动配置
			swiperOption: {  
        effect:'slide',// 切换效果
        slidesPerView: 3.5,  
        centeredSlides: false,  
        paginationClickable: true,  
        spaceBetween: 5,// 间隔  
      },
      popularity_data:[ // 品牌数据
				{title:'书名',image:"https://images-cn.ssl-images-amazon.com/images/I/61ajTENWczL._SL150_.jpg",flag:'分类'},
				{title:'书名',image:"https://images-cn.ssl-images-amazon.com/images/I/61ajTENWczL._SL150_.jpg",flag:'分类'},
				{title:'书名',image:"https://images-cn.ssl-images-amazon.com/images/I/61ajTENWczL._SL150_.jpg",flag:'分类'},
				{title:'书名',image:"https://images-cn.ssl-images-amazon.com/images/I/61ajTENWczL._SL150_.jpg",flag:'分类'},
			],
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		goto(id) {
			this.$router.push({
				path: `/book_info`
			})
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
			left: 8px;
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