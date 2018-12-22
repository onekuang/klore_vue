<template>
<div>
	<div class="tab_sort_wrapper" v-show="tab_show">
		<div class="tab_sort_box">
			<div 
				class="item" 
				@click="item_click(1)"
				:class= "{'on on3': active == 1}"
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
					劵后价
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
					销量
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

		<div class="list_box" v-show="list_box_show == true && active == 1">
			<ul>
				<li class="on">综合排序</li>
				<li>优惠劵面值由高到低</li>
				<li>优惠劵面值由低到高</li>
				<li>预估佣金由高到低</li>
			</ul>
		</div>

	</div>



	<div class="pro_list_box" 
		:class="{'fff' : type == 1,'ff5' : type == 2}"
	>
		<router-link 
			tag='div' 
			:class="{'item1' : type == 1 , 'item2' : type == 2}"
			:to="{path:'/goodsdetaile',query:{id:item}}" 
			v-for='item in data'
		>
			<div class="goods_box">
				<div class="img">
					<!-- <img v-holder="'img=100x100?&bg=fd9a00&text=100x100'"> -->
					<img src="https://img.4008823823.com.cn/kfcios/Version/533_420253.jpg">
				</div>
				<div class="goods_info">
					<div class="title">
						<h3>麦当劳麦辣鸡腿汉堡套餐麦当劳麦辣鸡腿汉堡套餐麦当劳麦辣鸡腿汉堡套餐麦当劳麦辣鸡腿汉堡套餐麦当劳麦辣鸡腿汉堡套餐麦当劳麦辣鸡腿汉堡套餐</h3>
					</div>
					<div class="tags hide">
						<span>包邮</span>
					</div>
					<div class="info">
						<div class="price">
							<span class="money">￥18元</span>&nbsp;&nbsp;
							<span class="through">35.5元</span>
						</div>
						<!-- <div class="site">已售 11万</div> -->
					</div>
					<div class="buy_num">已售 11万</div>
					<div class="yongjin_box">
						<div class="juan">
							<div class="l_juan">劵</div>
							<div class="r_juan">￥3</div>
						</div>
						<div class="yongjin">预估佣金￥12.39</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</router-link>
			<div class="clearfix"></div>


		<K_null v-show='data.length == 0' style="margin-top: 10%;" />


	</div>


</div>
</template>

<script>
import K_null from '@/components/base/loading/null_list'
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
		data: {
			type: Array,
			default: function() {
				return []
			}
		}
	},
	data() {
		return {
			type: this.row_type || 2,  // 2是一列1个,1是一列2个
			// type: 2,
			active: 0,
			direction: 'down',  // item2
			direction2: 'down', // item3
			list_mode: true,
			list_box_show: false,
			list_style: 1,// 1列表模式,2为图文模式
			// data: [{},{},{},{},{},{},{},]
		}
	},
	methods: {
		item_click(index) {
			if(index === 1) {
				this.active = 1
				this.list_box_show = !this.list_box_show
			}
			if(index === 2) {
				this.active = 2
				if(this.direction === 'down'){
					this.direction = 'up'
				}else {
					this.direction = 'down'
				}
			}
			if(index === 3) {
				this.active = 3
				if(this.direction2 === 'down'){
					this.direction2 = 'up'
				}else {
					this.direction2 = 'down'
				}
			}
			if(index === 4) {
				this.active = 4
				this.list_mode=!this.list_mode
				if(this.type == 1) {
					this.type = 2 
				}else{
					this.type = 1
				}
			}
		}
	},
	components: {
		K_null,
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.pro_list_box{
	padding:4px 2px;
	.item1 {
		overflow: hidden;
		padding-bottom: 8px;
		margin-bottom: 8px;
		// border-bottom: 1px solid #f9f9f9;
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
						// .ell();
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
						// background: #eee;
						border: 1px solid #fd9a00;
						font-size: 12px;
						margin-right: 8px;
					}
				}
				.info{
					height: 30px;
					display: flex;
					// justify-content: space-between;
					// align-items:flex-end;
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
					// text-align: right;
					margin-top: 6px;
					.juan {
						color: #f44336;
						font-size: 12px;
						.l_juan{
							margin-top: 3px;
							height: 16px;
							line-height: 16px;
							padding: 0 4px;
							float: left;
							border-radius: 4px;
							background: rgba(244,141,141,.2);
							display: inline-block;
						}
						.r_juan {
							margin-top: 3px;
							height: 16px;
							line-height: 16px;
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
						font-size: 12px;
						border-radius: 6px;
						color: #f44336;
					}
				}				
			}
		}
	}

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
		// border-bottom: 1px solid #f9f9f9;
		.goods_box {
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
						// .ell();
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
						// background: #eee;
						border: 1px solid #fd9a00;
						font-size: 12px;
						margin-right: 8px;
					}
				}
				.info{
					height: 30px;
					display: flex;
					// justify-content: space-between;
					// align-items:flex-end;
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
					// text-align: right;
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
							border-radius: 2px 4px 4px 2px;
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
							border-radius: 4px 2px 2px 4px;
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
</style>
