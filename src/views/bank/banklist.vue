<template>
<div class="banklist page">
<!-- <BScroll 	class="box_wrapper khr_bg" ref="scroll" >
<div> -->
<div class="banklist_box">
<ul>
	<li class="item" v-for="item in bankdata">
		<div class="bank_box"
			:class="[
				{'zhongguo':item.bankName=='中国银行'},
				{'gongshang':item.bankName=='工商银行'},
				{'nongye':item.bankName=='农业银行'},
				{'jianse':item.bankName=='建设银行'},
			]"
		>
			<div class="header">
				{{item.bankName}}
				<span @click="k_delete(1)"><i class="iconfont icon-delete"></i></span>
			</div>
			<div class="content">
				<div class="number">
					<span class="span1">****　****　****　</span>
					<span class="span2">{{123456781234 | bank}}</span>
				</div>
				<img src="./img/zg_bg.png" v-show="item.bankName == '中国银行'">
				<img src="./img/gs_bg.png" v-show="item.bankName == '工商银行'">
				<img src="./img/ny_bg.png" v-show="item.bankName == '农业银行'">
				<img src="./img/js_bg.png" v-show="item.bankName == '建设银行'">
			</div>
			<div class="bottom">
				<div class="bank_username">持卡人：<span>{{"李寻欢" | bank_username}}</span></div>
			</div>
		</div>
	</li>
</ul>
</div>

<K_null title="暂无银行卡" v-show='bankdata.length == 0' style="margin-top: 10%;" />
<!-- </div></BScroll> -->

<div class="tab_add_box" @click="goto_add_bank(1)">
	<div class="tab_add_go">
		<div class="item">
			<i class="iconfont icon-tianjia3"></i>
		</div>
		<div class="item">
		 添加银行卡
		</div>
		<div class="item">
		 <i class="iconfont icon-you"></i>
		</div>
	</div>
</div>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import K_null from '@/components/base/loading/null_list'
export default {
	name:"k_banklist",
	data() {
		return {
			bankdata: [
				{id:1,bankName:'中国银行'},
				{id:2,bankName:'工商银行'},
				// {id:3,bankName:'农业银行'},
				// {id:4,bankName:'建设银行'},
			]
		}
	},
	methods: {
		goto_add_bank(id) {
			this.$router.push({
				path: `/addbank?id=${id}`
			})
		},
		k_delete(id) {
			this.$confirm({
				title: "提示",
				content: "确认删除该银行卡?",
			}).then(success => {
				console.log('1')
			}).catch(fail => {
				console.log('取消')
			})
		}
	},
	filters: {
		bank: function(val) {
			var str = val.toString();
			var str = str.slice(-4)
			// return `****  ****  **** ${str}`
			return `${str}`
		},
		bank_username: function(val) {
			var str = val.toString();
			var str = str.slice(-1)
			return `**${str}`
		}
	},
	components: {
		BScroll,K_null
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.banklist{
	padding-bottom: 106px;
	min-height: 667px;
	.banklist_box{		
		padding: 8px;
		ul {
			.item {
				background: #fff;
				margin-bottom: 12px;
				border-radius: 8px;
				.bank_box{
					border-radius: 8px;
					box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .15); 
					.header{
						border-radius: 8px 8px 0 0;
						height: 40px;
						line-height: 40px;
						padding-left: 12px;
						margin: 0 8px;
						border-bottom: 1px solid rgba(0, 0, 0, .1);
						color: #fff;
						font-weight: 900;
						span{
							display: inline-block;
							height: 40px;
							width: 40px;
							line-height: 40px;
							text-align: center;
							float: right;
							color: rgba(0, 0, 0, .5);
							i {
								font-size: 17px;
							}
						}
					}
					.content{
						padding: 16px 0;
						position: relative;
						height: 80px;
						line-height: 64px;
						z-index: 2;
						.number{
							text-align: center;
							font-size: 22px;
							letter-spacing: 4px;
							font-weight: 900;
							font-family: "华文细黑";
							color: #fff;
							z-index: 2;
						}
						img{
							position: absolute;
							right: 0;
							bottom: 0;
							z-index: -1;
							width: 80px;
						}
					}
					.bottom{
						text-align: right;
						height: 30px;
						line-height: 30px;
						border-top: 1px solid rgba(0, 0, 0, .1);
						margin: 0 8px;
						.bank_username{
							margin-right: 12px;
							font-size: 12px;
							color: #eee;
						}
					}
					// 中国银行
					&.zhongguo {background:linear-gradient(#FB4B5E, #FE8682);}
					// 工商银行
					&.gongshang {background:linear-gradient(#485DA3, #6883D5);}
					// 农业银行
					&.nongye {background:linear-gradient(#4D7668, #49A185);}
					// 建设银行
					&.jianse {background:linear-gradient(#005BAB, #2196f3);}
				}
			}
		}
	}
}

.tab_add_box{
	position: fixed;
	left: 0;
	right: 0;
	bottom: @footer_height;
	height: 50px;
	border-top: 1px solid #eee;
	border-radius: 4px 4px 0 0;
	background: #fff;
	color: #666;
	.tab_add_go{
		height: 50px;
		display: flex;
		align-items: center;
		.item {
			flex: 1;
			&:nth-of-type(1) {
				flex: 0 0 50px;
				width: 50px;
				text-align: center;
				// color: @color_base;
				i {
					font-size: 24px;
					color: #ff675b;
				}
			}
			&:nth-of-type(2) {
				text-align: left;
			}
			&:nth-of-type(3) {
				text-align: right;
				margin-right: 12px;
			}
		}
	}	
}
</style>
