<template>
<div class="goods_detaile_wrapper page fff">
	<span class="back" @click=back>
		<i class="iconfont icon-icon--"></i>
	</span>

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
				<span style="text-decoration:line-through;">淘宝价￥228</span>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="goods_head">
			<div class="title">惊天动地小龙虾</div>
			<!-- <div class="img">
				<img src="./qd.png" width=24 height="24">
				<p class="p1">分享</p>				
			</div> -->
			<div class="img" @click="toggle_collect">
				<span class="weishoucang">
					<i class="iconfont icon-favor" v-show=collect></i>
					<i class="iconfont icon-favorfill" style="color: #f10;" v-show="!collect"></i>
				</span>				
				<p class="p1">{{collect? '收藏' : '已收藏'}}</p>				
			</div>
			<!-- <div class="img" v-show="!collect">
				<span class="yishoucang"><i class="iconfont icon-favorfill"></i></span>
				<p class="p1" v-show="!collect">已收藏</p>
			</div> -->
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
			<div v-html="html"></div>
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
	  <K_List :row_type=1 :goods_list=recommend />
	</div>
	<div class="more_box">
	  <Load_more @tap_load="tap_load" :status=load_status />
	</div>
	
	<!-- 图片生成dom -->
	<div id="haibao" class="goods_info" v-show='created_img_show'>
		
		<div class="goods_head">
			<div class="title">惊天动地小龙虾</div>
			<!-- <div class="img">
				<img src="./qd.png" width=24 height="24">
				<p class="p1">分享</p>				
			</div> -->
		</div>
		
		<br>
		<div class="">
			<img :src="banner_one" style="max-width: 100%;" />
		</div>

		<div class="goods_money">
			<div class="item">
				<span>劵后价</span>
			</div>
			<div class="item">
				<span>￥218</span>
			</div>
			<div class="item">
				<span style="text-decoration:line-through;">淘宝价￥228</span>
			</div>
		</div>
		<div class="clearfix"></div>

		<div class="qrcode_box">
			<div class="item">
				<p>便宜购 - 少花钱, 多省钱</p>
				<p>长按图片, 扫码领取优惠卷</p>
			</div>
			<div class="item">
				<div id="qrcode" class="qrcode" ref="qrcode"></div>	
			</div>
		</div>
	</div>

<div class="share_box">
	<div class="item" @click="goto('/goodsshare')">
		<div class="icon">
			<i class="iconfont icon-lianjie2"></i>
		</div>
		<div class="text">
			分享
		</div>
	</div>
	<div class="item">
		<div class="icon">
			<i class="iconfont icon-wodeyouhuiquan"></i>
		</div>
		<div class="text">
		 	领劵￥30
		</div>
	</div>
</div>



</div>
</template>

<script>
import QRCode from 'qrcodejs2'
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import K_List from '@/components/k_goods_list/k_goods_list'
import { mapGetters , mapMutations } from 'vuex'

export default {
	name:"goods_detaile",
	data() {
		return {
			detaile_show: true,
			// 轮播图数据
			swipe_banner_data:[],
			load_status: 0,      //加载更多状态
			collect: true,			// 收藏状态 true收藏 false未收藏
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
        {},{},{},{}
      ],
      created_img_show: false, // 生成二维码前显示dom
      banner_one: '', // banner 第一张图
		}
	},
	created() {
		this.page_init();
	},
	methods: {
		// 初始化
		page_init() {
			this.get_data()
		},  
		get_data() {
			this.axios.get(this.$api.test,{
				params: {
					id: 2
				}
			})
			.then(res => {
				this.html = res.data.img
				this.swipe_banner_data = res.data.banner
			})
			.catch(res => {
				this.$toast("网络错误")
			})
		},
		// 加载更多
    tap_load() {
      this.load_status= 2
    },
    goto(url) {
    	let that = this
    	this.$loading.show()
    	if(this.created_img_show) {
    		return
    	}
    	this.created_img_show = true
    	this.banner_one = this.swipe_banner_data[0].src
    	let qrcode = new QRCode('qrcode', {  
	      width: 100,  
	      height: 100, // 高度  	      
	     	text: 123, // 二维码内容
	      background: '#ffffff', 
	     	foreground: "#ffffff"
	    })
    	
    	setTimeout(() => {
    		that.created_imgurl()
    	},300)    	
    },
    created_imgurl() {
    	let that = this
    	html2canvas(document.getElementById('haibao')).then(function(canvas) {
          let img_url = canvas.toDataURL("image/jpeg");
          that.add_qrcode(img_url)
          // console.log(img_url)
      }).then(function() {
      	that.created_img_show = false
      	document.getElementById('qrcode').innerHTML= ''
      	that.$loading.hide()
      	that.$router.push({
    		path: `/goodsshare?id=123456`
    	})
      })
    },
    // 切换详情toggle
    detaile_toggle() {
    	this.detaile_show = !this.detaile_show
    },
    toggle_collect() {
    	this.collect = !this.collect
    },
		// 后退按钮
		back() {
			this.$router.back()
		},
		...mapMutations({
    	add_qrcode: 'ADD_QRCODE',
    })
	},
	components: {
		k_swipe_banner,
		K_List
	},
	destroyed() {
		this.created_img_show = false
    document.getElementById('qrcode').innerHTML= ''
		console.log('监听页面离开')
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.goods_detaile_wrapper{
	.back{
		display: inline-block;
		position: fixed;
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
				height: 20px;
				line-height: 20px;
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
						line-height: 24px;
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
				flex: 0 0 40px;
				width: 40px;
				.p1{
					margin: 0;
					padding: 0;
					font-size: 12px;
					color: #888;
					margin-top: 8px;
				}
				.weishoucang{
					display: inline-block;
					height: 30px;
					i {
						color: #999;
						font-size: 24px;
					}					
				}
				.yishoucang{
					display: inline-block;
					height: 30px;
					i {
						color: @red;
						font-size: 24px;
					}					
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
		/deep/ img{
			max-width: 100% !important;
		}
	}
}
.share_box{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 56px;
	z-index: 9999;
	background: #fff;
	display: flex;
	.item {
		flex: 1;
		text-align: center;
		line-height: 56px;
		font-size: 16px;
		&:nth-of-type(1) {
			flex: 1;
			width: 60px;
			background: @chen;
			color: #fff;
			display: flex;
			.icon {
				flex: 1;
				text-align: right;
				i {
					font-size: 20px;
					margin-right: 2px;
				}
			}
			.text{
				flex: 1;
				text-align: left;
				font-size: 15px;
			}
		}
		&:nth-of-type(2) {
			flex: 3;
			background: @red;
			color: #fff;	
			display: flex;
			.icon{
				flex: 1;
				text-align: right;
				font-size: 24px;
				i{
					margin-right: 4px;
				}
			}
			.text{
				text-align: left;
				flex: 1;
				font-size: 15px;
			}
		}
	}
}
.qrcode_box{
	width: 100%;
	display: flex;
	padding-bottom: 20px;
	padding-top: 80px;
	position: relative;
	.item {		
		&:nth-of-type(1) {
			flex: 2;
			text-align: right;			
			padding-top: 20px;
			p {
				&:nth-of-type(1) {
					border-bottom: 1px solid #eee;
					display: inline-block;
					padding: 4px 0px 4px 8px;
					margin-right: 16px;
					color: #666;
					letter-spacing: 1px;
				}
				&:nth-of-type(2) {
					height: 30px;
					line-height: 30px;
					font-size: 12px;
					padding-right: 16px;
					color: #999;
					letter-spacing: 1px;
				}
			}
		}
		&:nth-of-type(2) {
			flex: 1;
		}
	}
}
</style>
