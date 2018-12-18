<template>
<div class="goods_detaile_wrapper ab_full">
	<span class="back" @click=back>
		<i class="iconfont icon-icon--"></i>
	</span>
<BScroll 	class="box_wrapper" ref="scroll" >
<div>
	<!-- 轮播图 -->
	<!-- 轮播组件 -->
    <div>
    <k_swipe_banner :swipe_data=swipe_banner_data />
    </div>
	<!-- 轮播图end -->
	
	<div class="goods_info">
		<div class="goods_money">
			<div class="item">
				<span>劵后价</span>
			</div>
			<div class="item">
				<span>￥218</span>
			</div>
			<div class="item">
				<span>淘宝价￥228</span>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="goods_head">
			<div class="title">惊天动地小龙虾</div>
			<div class="img">
				<img src="./qd.png" width=24 height="24">
				<p class="p1">分享</p>
			</div>
		</div>
		<div class="param">
			<div class="item">已售 1568</div>
			<div class="item"><span class="tag_juan">预估佣金￥1.21</span></div>
		</div>
		<div class="store_name">
			<div class="item">
				<i class="iconfont icon-shop"></i>
				Klore旗舰店
			</div>
		</div>
	</div>

	<div class="khr"></div>

	<!-- 商品详情 -->
	<div class="goods_detaile">
		<div class="detaile_top" @click="detaile_toggle">
			<div class="title">查看宝贝详情</div>
			<div class="k_icon">
				<i class="iconfont" 
					:class="{'icon-up': detaile_show,'icon-down': !detaile_show}">					
				</i>
			</div>
		</div>
		<div class="content" v-show=detaile_show >
			<div v-html= "html"></div>
		</div>
	</div>
	<div class="khr"></div>

	<!-- 相关推荐 -->
	<div>
	  <div class="title_wrapper">
	    <div class="title_box">
	    	<i class="iconfont icon-xuanzhongpingjiadengji"></i> 
	    	猜你喜欢
	    </div>
	  </div>
	  <K_List :type = 2 :data=recommend />
	</div>


	











</div></BScroll>


<!-- 购物车 -->
<!-- <ShopCart 
	:selectFoods=shoppingCart 
	@addCart=addCart 
	@pay=pay
/> -->



</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import ShopCart from '@/components/base/shopcart/shopcart'
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import K_List from '@/components/k_goods_list/k_goods_list'
import api from '@/assets/api/api';
import { mapGetters , mapMutations ,mapActions } from 'vuex'


export default {
	name:"goods_detaile",
	data() {
		return {
			detaile_show: true,
			// 轮播图数据
			swipe_banner_data:[],

			html:'goods_detail',
			// 商品信息
			goods:{
				id:1,
				name: 'name',
				price: 22,
			},
	  	selectFoods:[
				{id:1,name:'pos3',price:321,count:1},
			],
			// 相关推荐数据
      recommend: [
        {},{},{},{},{},{},{},{}
      ],
		}
	},
	created() {
		this.page_init();
	},
	methods: {
		// 初始化
		page_init() {
		  this.get_banner_img()  
		},  
		// 获取轮播图数据
    get_banner_img() {
      this.axios.post(api.test)
      .then(res => {
          this.swipe_banner_data = res.data
      })
    },
    // 切换详情toggle
    detaile_toggle() {
    	this.detaile_show = !this.detaile_show
    },
		// 后退按钮
		back() {
			this.$router.back()
		},
		// 监听购物车组件 => 点击了`加入购物车`按钮
		addCart() {
			let data = {
				id:this.goods.id,
				name:this.goods.name,
				price:this.goods.price,
				logo: this.goods.logo,
				count:1
			}
			this.add_cart(data)
		},
		// 监听购物车组件 => 点击了`结算`按钮
		pay() {
			this.$router.push({
				path: `/shopcar`
			})
		},
		...mapMutations({
    	add_cart: 'ADD_CART',
    })
	},
	computed: {
		...mapGetters([
			'shoppingCart'
		])
	},
	components: {
		BScroll,ShopCart,
		k_swipe_banner,
		K_List
	},
	destroyed() {
		console.log('监听页面离开')
	}
}
</script>

<style scoped lang="less">
// @import url('../../common/less/config.less');
// @import url('../../common/less/theme.less');
// @import url('../../common/less/common.less');
@import url('../../common/less/index.less');
.goods_detaile_wrapper{
	.back{
		display: inline-block;
		position: absolute;
		left: 12px;
		top: 12px;
		z-index: 99;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background: rgba(0,0,0,.35);
		i{
			font-size: 20px;
			font-weight: 900;
			color: #fff;
		}
	}
	.goods_info{
		padding: 8px 8px;
		.goods_money{
			.item{
				float: left;
				font-size: 12px;
				&:nth-of-type(1) {
					height: 20px;
					line-height: 20px;
					span{
						height: 16px;
						line-height: 16px;
						margin-top: 3px;
						display: inline-block;
						padding: 0px 6px;
						background: #f10;
						color:#fff;
						border-radius: 12px;
						margin-right: 8px;
					}
				}
				&:nth-of-type(2) {
					span{
						font-weight: 900;
						font-size: 16px;
						color: #f10;
					}
				}
				&:nth-of-type(3) {
					padding-left: 8px;
					span{
						color: #999;
						font-size: 10px;
						line-height: 25px;
					}
				}
			}
		}
		.goods_head{
			display: flex;
			.title{	
				flex: 1;
				padding-top: 4px;
				font-size: 14px;
				color: #000;
				font-weight: 600;
			}
			.img{
				text-align: center;
				flex: 0 0 30px;
				width: 30px;
				.p1{
					margin: 0;
					padding: 0;
					font-size: 12px;
					color: #888;
				}
			}
		}
		.param{
			margin-top: 14px;
			display: flex;
			height: 30px;
			line-height: 30px;
			>div{
				flex: 1;
			}
			.item:nth-of-type(1) {
				font-size: 12px;
				// font-weight: 600;
				color: #999;
			}
			// .item:nth-of-type(2) {
			// 	text-align: center;
			// }
			.item:nth-of-type(2) {
				text-align: right;
				.tag_juan{
					font-size: 12px;
					height: 20px;
					line-height: 20px;
					display: inline-block;
					background: rgba(244, 141, 141, 0.2);
					color:#f44336;
					padding: 0px 8px;
					border-radius: 4px;
				}
			}
		}
		.store_name{
			height: 30px;
			line-height: 30px;
			font-size: 13px;
			color:#333;
			i {
				color:#999;
				margin-right: 6px;
			}
		}
	}

	.goods_detaile{
		.detaile_top{
			display: flex;
			.title{
				flex: 1;
				margin: 0;
				height: 30px;
				line-height: 30px;	
				padding-left: 12px;
			}
			.k_icon{
				flex: 0 0 30px;
				width: 30px;
				line-height: 30px;
				i {
					font-size: 14px;
				}
			}
		}
		img{
			max-width: 100% !important;
		}
	}
}

</style>
