<template>
<div :class="{tab_fixed: tab_fixed}">
	<div class="tab_sort_wrapper" v-show="tab_show">
		<div class="tab_sort_box">
			<div 
				class="item" 
				@click="item_click(1)"
				:class= "{'on': active == 1}"
			>
				<div class="text">综合
					<span class="span3"></span>				
				</div>
			</div>
			<div 
				class="item" 
				@click="item_click(2)"
				:class= "{
					'on': active == 2, 
					'on1': direction == 'up'  && active == 2, 
					'on2': direction == 'down'  && active == 2}"
			>
				<div class="text">
					人气
					<span class="span1"></span>
					<span class="span2"></span>
				</div>
			</div>
			<div 
				class="item" 
				@click="item_click(3)"
				:class= "{
					'on': active == 3, 
					'on1': direction2 == 'up' && active == 3, 
					'on2': direction2 == 'down' && active == 3
				}"
			>
				<div class="text">
					价格
					<span class="span1"></span>
					<span class="span2"></span>
				</div>
			</div>
			<div 
				class="item iconbox" 
				@click="item_click(4)" 
			>
				<i class="iconfont icon-liebiao" v-show=!list_mode></i>
				<i class="iconfont icon-apps" v-show=list_mode></i>
			</div>
		</div>
		<!-- 综合 弹出层-->
		<div class="list_box" v-show="list_box_show == true">
			<ul>
				<li v-for="(item,index) in sort_list" 
					@click="syenthesize_click(index,item.sid)" 
					:class="{on : sort_clsss_i == index}"
				>
					{{item.title}}
				</li>
			</ul>
		</div>

	</div>


	<div class="pro_list_box fff" >
		<router-link 
			tag='div' 
			:class="{'item1' : type == 1 , 'item2' : type == 2}"
			:to="{path:'/goodsdetaile',query:{id:item.id}}" 
			v-for='(item,index) in goods_list'
		>
			<div class="goods_box">
				<div class="bg_img" :style="{backgroundImage:'url(' + item.thumb + ')'}">
				</div>
				<div class="goods_info">
					<div class="title">
						<h3>
							<span class="taobao" v-show='item.shop_type == 0'>淘宝</span>
							<span class="tianmao" v-show='item.shop_type == 1'>天猫</span>
							{{item.title}}
						</h3>
					</div>
					<div class="tags hide">
						<span>包邮</span>
					</div>
					<div class="info">
						<div class="price">
							<span class="money">￥{{item.price}}元</span>&nbsp;&nbsp;
							<span class="through">{{item.reserve_price}}元</span>
						</div>
						<!-- <div class="site">已售 11万</div> -->
					</div>
					<div class="buy_num">已售 {{item.volume}}</div>
					<div class="yongjin_box">
						<div class="juan" v-show="item.coupon_price">
							<div class="l_juan">劵</div>
							<div class="r_juan">￥{{item.coupon_price}}</div>
						</div>
						<div class="yongjin">预估佣金￥{{item.commission}}</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</router-link>
			<div class="clearfix"></div>



	</div>


</div>
</template>

<script>
export default {
	name:"goodslist",
	props: {
		row_type: {
			type: Number,
			default: 2,
		},
		tab_show: {
			type: Boolean,
			default: false,
		},
		tab_fixed: {
			type: Boolean,
			default: false,
		},
		goods_list: {
			type: Array,
			default: function() {
				return []
			}
		}
	},
	data() {
		return {
			type: this.row_type || 2,  // 2是一列1个,1是一列2个
			active: 0,
			direction: 'down',  // item2
			direction2: 'down', // item3
			list_mode: true,
			list_box_show: false,
			list_style: 1,// 1列表模式,2为图文模式
			// data: [{},{},{},{},{},{},{},]
			
			// 综合排序
			sort_list: [
				{sid:0,title:'综合排序'},
				{sid:1,title:'销量由高到低'},
				{sid:2,title:'销量由低到高'},
				{sid:3,title:'佣金比率由高到低'},
				{sid:4,title:'佣金比率由低到高'},
			], 
			sort_clsss_i: 0,
		}
	},
	methods: {
		item_click(index) {
			if(index === 1) {
				// this.active = 1
				this.list_box_show = !this.list_box_show
				return
			}
			
			this.sort_clsss_i = -1
			this.list_box_show = false

			if(index === 2) {
				this.active = 2
				if(this.direction === 'down'){
					this.direction = 'up'
					this._on_status(5)
				}else {
					this.direction = 'down'
					this._on_status(6)
				}
			}
			if(index === 3) {
				this.active = 3
				if(this.direction2 === 'down'){
					this.direction2 = 'up'
					this._on_status(7)
				}else {
					this.direction2 = 'down'
					this._on_status(8)
				}
			}
			if(index === 4) {
				// this.active = 4
				this.list_mode=!this.list_mode
				if(this.type == 1) {
					this.type = 2 
				}else{
					this.type = 1
				}
			}

			
		},
		syenthesize_click(index,sid) {
			this.active = 1
			this.sort_clsss_i = index
			this._on_status(sid)
			this.list_box_show = false
		},
		// 派发排序的状态到父组件,
		_on_status(status) {
			// console.log(status)
			this.$emit('onSort',status)
		}
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.pro_list_box{
	padding:4px 2px;
	// 1行1个
	.item1 {
		overflow: hidden;
		padding: 4px 6px;
		border-bottom: 1px solid #f9f9f9;
		.goods_box {
			display: flex;			
			.img {
				flex: 120px 0 0;
				height: 120px;
				background: #eee;
				img{
					border: 1px solid #eee;
					border-radius: 4px;
					width: 120px;
					height: 120px;
				}
			}
			.bg_img{
				width: 120px;
				height: 120px;
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
			.goods_info {
				flex: 1;
				margin-left: 8px;
				min-width:0;				
				.title{
					font-size: 13px;
					line-height: 20px;
					height: 40px;
					color: #333;
					overflow: hidden;
					h3{
						font-weight: 600;
						height: 40px;
						line-height: 20px;
						text-overflow:ellipsis; 
						display: -webkit-box;
				    -webkit-box-orient: vertical;
				    -webkit-line-clamp: 2;
				    overflow: hidden;
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
				}
				.tags{
					height: 30px;
					line-height: 30px;
					overflow: hidden;
					span{
						display: inline-block;
						height: 16px;
						line-height: 10px;
						padding: 2px 5px;
						border-radius: 8px;
						color: #fd9a00;
						border: 1px solid #fd9a00;
						font-size: 12px;
						margin-right: 8px;
					}
				}
				.info{
					height: 30px;
					display: flex;
					line-height: 30px;
					.price{
						flex: 1;
						font-size: 14px;
						color:#f44336;
						.through {
							font-size: 12px;
							text-decoration: line-through;
							color:#ccc;
						}
						.money{
							font-size: 16px;
							font-weight: 900;
						}
					}
					.site{
						flex: 1;
						font-size: 12px;
						color: #999;
						text-align: right;
					}

				}
				.buy_num {
					height: 20px;
					line-height: 20px;
					font-size: 12px;
					color: #999;
				}
				.yongjin_box{
					margin-top: 6px;
					.juan {
						color: #f44336;
						font-size: 12px;
						.l_juan{
							margin-top: 3px;
							height: 16px;
							line-height: 20px;
							padding: 0 4px;
							float: left;
							font-size: 10px;
							border-radius: 4px;
							background: rgba(244,141,141,.2);
							display: inline-block;
						}
						.r_juan {
							font-size: 10px;
							margin-top: 3px;
							height: 16px;
							line-height: 20px;
							float: left;
							display: inline-block;
							background: rgba(244,141,141,.2);
							padding: 0 5px;
							border-radius: 4px 0 0 4px;
						}
					}
					.yongjin{
						float: right;
						height: 20px;
						line-height: 20px;
						display: inline-block;
						background: rgba(244,141,141,.2);
						padding: 1px 8px;
						font-size: 10px;
						border-radius: 6px;
						color: #f44336;
					}
				}				
			}
		}
	}
	// 一行2个
	.item2 {
		background: #fff;
		width: 48%;
		margin-left: 1%;
		margin-right: 1%;
		float: left;
		overflow: hidden;
		padding-bottom: 8px;
		margin-bottom: 8px;
		border-radius: 2px;
		.goods_box {
			border: 1px solid #f8f8f8;
			border-radius: 4px;
			padding-bottom: 6px;
			.img {
				width: 100%;
				height: auto;
				img{
					// border: 1px solid #eee;
					border-radius: 4px;
					width: 100%;
					height: auto;
				}
			}
			.bg_img{
				width: 100%;
				height: 0;
				padding-top: 100%;
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
			.goods_info {
				flex: 1;
				margin-left: 8px;
				min-width:0;
				.title{
					font-size: 13px;
					line-height: 20px;
					height: 40px;
					color: #333;
					overflow: hidden;
					margin-top: 4px;
					h3{
						font-weight: 600;
						height: 40px;
						line-height: 20px;
						text-overflow:ellipsis; 
						display: -webkit-box;
				    -webkit-box-orient: vertical;
				    -webkit-line-clamp: 2;
				    overflow: hidden;
						span{
							display: inline-block;
							height: 16px;
							line-height: 20px;
							width: 24px;
							border-radius: 4px;
							background: @red;
							color: #fff;
							font-size: 10px;
							margin-right: 4px;
							text-align: center;
							&.tiammao{
								background: @red;
							}
							&.taobao {
								background: @chen;
							}
						}
					}
				}
				.tags{
					height: 30px;
					line-height: 30px;
					overflow: hidden;
					span{
						display: inline-block;
						height: 16px;
						line-height: 10px;
						padding: 2px 5px;
						border-radius: 8px;
						color: #fd9a00;
						border: 1px solid #fd9a00;
						font-size: 12px;
						margin-right: 8px;
					}
				}
				.info{
					height: 30px;
					display: flex;
					line-height: 30px;
					.price{
						flex: 1;
						font-size: 14px;
						color:#f44336;
						.through {
							font-size: 12px;
							text-decoration: line-through;
							color:#ccc;
						}
						.money{
							font-size: 16px;
							font-weight: 900;
						}
					}
					.site{
						flex: 1;
						font-size: 12px;
						color: #999;
						text-align: right;
					}

				}
				.buy_num {
					height: 20px;
					line-height: 20px;
					font-size: 12px;
					color: #999;
				}
				.yongjin_box{
					margin-top: 6px;
					.juan {
						color: #f44336;						
						.l_juan{
							margin-top: 3px;
							height: 16px;
							line-height: 18px;
							font-size: 10px;
							padding: 0 4px;
							float: left;
							border-radius: 2px 3px 3px 2px;
							background: rgba(244,141,141,.2);
							display: inline-block;
						}
						.r_juan {
							margin-top: 3px;
							height: 16px;
							line-height: 18px;
							font-size: 10px;
							float: left;
							display: inline-block;
							background: rgba(244,141,141,.2);
							padding: 0 5px;
							border-radius: 3px 2px 2px 3px;
						}
					}
					.yongjin{
						float: right;
						height: 20px;
						line-height: 20px;
						display: inline-block;
						background: rgba(244,141,141,.2);
						padding: 1px 4px;
						font-size: 10px;
						border-radius: 4px;
						color: #f44336;
						margin-right: 2px;
					}
				}				
			}
		}
	}
}
.tab_sort_wrapper{
	.tab_sort_box{
		display: flex;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background: #fff;
		position: relative;
		border-bottom: 1px solid #eee;
		.item {
			flex: 1;
			&.iconbox{
				flex: 0 0 70px;
				width: 70px;
				i {
					font-size: 18px;
				}
			}
			
			.text{
				position: relative;
				font-size: 13px;
				span{
					position: absolute;
					right: 6px;					
					width:0;
			    height:0;
			    border-left:4px solid transparent;
	        border-right:4px solid transparent;
				}
				// 上箭头
				.span1{	    
					top: 13px;    
	        border-bottom:4px solid #ccc;
				}
				// 下箭头
				.span2{
					bottom: 13px;
	        border-top:4px solid #ccc;
				}
				.span3 {
					top: 18px;
					border-top:4px solid #ccc;
				}							
			}
			&.on {
				color: red;
				i {
					color:red;
				}
				.span3 {
					border-top:4px solid red;
				}
			}
			&.on1 {
				.span1 {
					border-bottom:4px solid red;
				}
			}
			&.on2 {
				.span2 {
					border-top:4px solid red;
				}
			}	
		}
	}
	.list_box{
		background: #fff;
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		ul{
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
			li{
				padding-left: 20px;
				height: 40px;
				line-height: 40px;
				font-size: 12px;
				color: #666;
				&.on{
					color: red;
				}
			}
		}
	}
}
.tab_fixed{
	.tab_sort_wrapper{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;	
		height: 42px;		
	}
	.pro_list_box{
		padding-top: 45px;
	}
}

</style>
