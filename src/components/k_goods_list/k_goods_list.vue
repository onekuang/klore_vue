<template>

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
</template>

<script>
import K_null from '@/components/base/loading/null_list'
export default {
	name:"goodslist",
	props: {
		type: {
			type : Number,
			default: 1
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
			// list_style: 1,// 1列表模式,2为图文模式
			// data: [{},{},{},{},{},{},{},]
		}
	},
	methods: {
		is_list_mode(bool) {
			if(bool) {
				// this.list_style = 1
			}else {
				// this.list_style = 2
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
							padding: 0 4px;
							float: left;
							border-radius: 4px;
							background: rgba(244,141,141,.2);
							display: inline-block;
						}
						.r_juan {
							margin-top: 3px;
							height: 16px;
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
						font-size: 12px;
						.l_juan{
							margin-top: 3px;
							height: 16px;
							padding: 0 4px;
							float: left;
							border-radius: 4px;
							background: rgba(244,141,141,.2);
							display: inline-block;
						}
						.r_juan {
							margin-top: 3px;
							height: 16px;
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
						padding: 1px 4px;
						font-size: 12px;
						border-radius: 6px;
						color: #f44336;
						margin-right: 2px;
					}
				}				
			}
		}
	}
}
</style>
