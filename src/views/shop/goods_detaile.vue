<template>
<div class="goods_detaile_wrapper page fff">
	<span class="back" @click=back>
		<i class="iconfont icon-icon--"></i>
	</span>
	
	<!-- 轮播图 -->
	<!-- 轮播组件 -->
    <div>
    <k_swipe_banner :swipe_data=swipe_banner_data :type=2 />
    </div>
	<!-- 轮播图end -->
	
	<div class="goods_info">
		
		<div class="goods_head">
			<div class="title">
				<span class="taobao" v-show="shop_info.shopType == 'C'">淘宝</span>
				<span class="tianmao" v-show="shop_info.shopType == 'B'">天猫</span>
				{{title}}
			</div>
			<div class="img" @click="toggle_collect">
				<span class="weishoucang">
					<i class="iconfont icon-favor" v-show="collect == 0"></i>
					<i class="iconfont icon-favorfill" style="color: #f10;" v-show="collect"></i>
				</span>				
				<p class="p1">{{collect == 0 ? '收藏' : '已收藏'}}</p>				
			</div>
			<!-- <div class="img" v-show="!collect">
				<span class="yishoucang"><i class="iconfont icon-favorfill"></i></span>
				<p class="p1" v-show="!collect">已收藏</p>
			</div> -->
		</div>

		<div class="goods_money">
			<div class="item">
				<span>劵后价</span>
			</div>
			<div class="item">
				<span>￥{{goods.price}}</span>
			</div>
			<div class="item">
				<span style="text-decoration:line-through;">原价￥{{goods.reserve_price}}</span>
			</div>
		</div>
		<div class="clearfix"></div>


		<div class="param">
			<div class="item">已售 {{goods.volume}}</div>
			<div class="item"><span class="tag_juan">预估佣金￥{{goods.commission}}</span></div>
		</div>
		<div class="store_name">
			<div class="item">
				<!-- <i class="iconfont icon-shop"></i> -->
				<img :src="shop_info.shopIcon" height="30" width="30">
				{{shop_info.shopName}}
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
			<div v-for ="item in goods_detaile">
				<img :src="item" v-show="item">
			</div>
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
	  <K_List :row_type=1 :goods_list=recommend :pid=pid />
	</div>
	<!-- <div class="more_box">
	  <Load_more @tap_load="tap_load" :status=load_status />
	</div> -->
	

<div class="share_box">
	<div class="item" @click="goto('/goodsshare')">
		<div class="icon">
			<i class="iconfont icon-lianjie2"></i>
		</div>
		<div class="text">
			分享
		</div>
	</div>
  <div class="item" @click="click_copy">
		<div class="icon">
			<i class="iconfont icon-wodeyouhuiquan"></i>
			<!-- <i class="iconfont icon-wodeyouhuiquan" v-if="goods.coupon_price"></i>
			<i class="iconfont icon-chanpinzhanshi" v-else></i> -->
		</div>
		<div class="text" v-if="goods.coupon_price" >
		 	领劵￥{{goods.coupon_price}}
		</div>
		<div class="text" v-else>
		 	购买
		</div>		
	</div>
</div>

<Scroll_top />

</div>
</template>

<script>
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import K_List from '@/components/k_goods_list/k_goods_list'
import { l_storage } from '@/common/js/storage.js'
import { isWeiXin } from '@/common/js/util.js'
import { mapGetters , mapMutations } from 'vuex'

export default {
	name:"goods_detaile",
	data() {
		return {
			pid:0,
			goods_id: "",
			title:"",
			// 商品信息
			goods:{
				// title:'',// 标题
				volume:'',// 销量
				price:'',// 券后价
				reserve_price:'', // 原价
				coupon_price:'', // 券值
				commission:'',// 佣金
			},
			shop_info:{
				shopIcon:'',
				shopName:'',
			},
			kouling:'',//淘宝口令
			tb_location:'',//淘宝地址
			detaile_show: true,
			// 轮播图数据
			swipe_banner_data:[],
			load_status: 0,      //加载更多状态
			collect: 0,			// 收藏状态 
			goods_detaile:[],
	  	selectFoods:[
				{id:1,name:'pos3',price:321,count:1},
			],
			// 相关推荐数据
      recommend: [],
      created_img_show: false, // 生成二维码前显示dom
      banner_one: '', // banner 第一张图
		}
	},
	created() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		this.$loading.show()
		this.page_init();
	},
	watch: {
		$route(to, from){
			console.log(to)
			console.log(from)
			location. reload()
		}
	},
	methods: {
		// 初始化
		page_init() {
			this.goods_id = this.$route.query.id
			this.pid = this.$route.query.pid
			this.get_data()	// 获取商品数据
			this.get_juan() // 获取优惠卷
			this.get_like() // 猜你喜欢
		},  
		get_data() {
			let that = this
			this.axios.get(this.$api.goods_info,{
				params: {
					goods_id: this.goods_id
				}
			})
			.then(res => {
				let data = res.data
				this.goods = data
				this.collect = data.iscollection
			})

			this.$jsonp(`https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/?jsv=2.4.8&api=mtop.taobao.detail.getdetail&v=6.0&dataType=jsonp&ttid=2017%40taobao_h5_6.6.0&AntiCreep=true&type=jsonp&data=%7B"itemNumId"%3A"${this.goods_id}"%7D`)
			.then(json => {
				this.title = json.data.item.title
				// 轮播
				let banner = json.data.item.images
				let arr1 = []
				banner.forEach(function(item){
					let t = that.fil_banner(item)
					arr1.push(t)
				})
				this.re_arr(arr1)


				// 店铺信息
				// console.log(json.data.seller)
				this.shop_info = json.data.seller

				// 销量
				// console.log(JSON.parse(json.data.apiStack[0].value).item.vagueSellCount) 
				this.goods.volume = JSON.parse(json.data.apiStack[0].value).item.vagueSellCount
			})

			this.$jsonp(`https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/?api=mtop.taobao.detail.getdesc&v=6.0&dataType=jsonp&data={%22id%22:%22${this.goods_id}%22,%22type%22:%220%22}`)
			.then(json => {
				let a = json.data.wdescContent.pages
				let arr = [];
				a.forEach(function(item, i){
					let t = that.fil_img(item)
					arr.push(t)
				})
				this.goods_detaile = arr
			}).catch(err => {
			　　console.log(err)
			})			
		},
		// 领劵
		get_juan() {
			if(l_storage.get('user_token')){
				let that = this		
				this.axios.post(this.$api.goods_url,{
					user_token: l_storage.get('user_token'),
					goods_id: this.goods_id
				})
				.then(res => {
					if(res.code == 200) {
						this.tb_location = res.data.url
						this.kouling = res.data.tpwd
					}
				})
			}
		},
		get_like() {
			this.axios.get(this.$api.goods_like,{
				params: {
					goods_id: this.goods_id
				}
			})
			.then(res => {
				this.recommend = res.data
			})
		},
		// 商品链接
		click_copy() {
			let that = this		
			if(!l_storage.get('user_token')){
					this.$toast('请先登录')
					this.$router.push({
	        path: `/login`
	      })
				return
			}
			if(isWeiXin()) {
				that.$copyText(that.kouling).then(function (e) {
           that.$alert(`淘口令${e.text}复制成功,打开淘宝粘贴,领取优惠卷`)
        }, function (e) {
           that.$alert(`淘口令${e.text}复制失败`)
        })
			}else{
				window.location.href = this.tb_location
			}
		},
		// 详情过滤html标签
		fil_img(item) {
			let s = item.replace(/<[^>]+>/g,""); 
			if(s.indexOf("//")!= -1) {
				return s+"_2200x2200Q90s50.jpg_.webp"
			}
		},
		// 轮播图片压缩
		fil_banner(item) {
			return item+"_2200x2200Q80s50.jpg"
		},
		// 重组轮播数组
		re_arr(arr) {
			let arr1 = arr
			let arr2 = [];
			for(let i =0; i<arr1.length; i++) {
				let item = {};
				item.src = arr1[i]
				arr2.push(item)
			}
			this.swipe_banner_data = arr2
		},
		// 加载更多
    tap_load() {
      this.load_status= 2
    },
    goto(url) {
    	if(!l_storage.get('user_token')){
    			this.$toast('请先登录')
					this.$router.push({
	        path: `/login`
	      })
				return
			}
    	this.$router.push({
    		path: `/goodsshare?id=${this.goods_id}`
    	})    	
    },
    // 切换详情toggle
    detaile_toggle() {
    	this.detaile_show = !this.detaile_show
    },
    toggle_collect() {
    	this.$loading.show()
    	this.axios.post(this.$api.goods_collect,{
    		goods_id:this.goods_id
    	})
    	.then(res => {
    		this.collect = !this.collect
    		this.$loading.hide()
    	})
    	
    },
		// 后退按钮
		back() {
			window.history.back()
			// if(this.pid) {
			// 	this.$router.push({
			// 		path: `/prolist?id=${this.pid}`
			// 	})
			// }else{
			// 	this.$router.back()
			// }
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
		// console.log('监听页面离开')
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
		    span{
					display: inline-block;
					height: 16px;
					line-height: 20px;
					width: 30px;
					border-radius: 4px;
					color: #fff;
					font-size: 10px;
					margin-right: 6px;
					text-align: center;
					&.tianmao{
						background: @red;
					}
					&.taobao {
						background: @chen;
					}
				}
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
			img{
				margin-right: 4px;
				float: left;
			}
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
