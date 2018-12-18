<template>
<div class="usercenter1 ab_full" >
<BScroll 	class="box_wrapper" ref="scroll" style="background-color: #f7f7f7;">
<div style="padding-bottom: 20px;">

<div class="userinfo_wrapper">
	<div class="userinfo_box">
		<div class="right_icon">
			<router-link to="/setting" tag="span">
				<i class="iconfont icon-shezhi"></i>
			</router-link>
			<!-- <span><i class="iconfont icon-shezhi"></i></span> -->
		</div>

		<div class="userinfo">
			<div class="avatar">
				<img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132" width="70" height="70">
			</div>
			<div class="desc_box">
				<div class="nickname">
					木有昵称
					<div class="user_lv">
						<span class="lv_name">超级会员</span>
						<img src="./img/lv.png" height="24" width="80">
					</div>
				</div>
				<div class="desc">
					邀请码: <span class="span1">{{yao_qing_ma}}</span> 
					<span class="copy" 
						v-clipboard:copy="yao_qing_ma"
      			v-clipboard:success="onCopy"
      			v-clipboard:error="onError"
      		>复制</span>
				</div>
			</div>
		</div>

		<div class="tag_box">
			<div class="item">粉丝 <span>0</span></div>
			<div class="item">成长值 <span>8</span></div>
			<div class="clearfix"></div>
		</div>

		<div class="balance_box">
			<div class="balance_left pull-left">
				<div class="balance">
					余额<span>￥0.0</span>
				</div>
				<div class="goto_balance">
					每月25号结算上月收入 >
				</div>
			</div>

			<div class="get_money pull-right" @click="goto('/getmoney','getmoney')">
				<span>立即提现</span>
			</div>
		</div>
	</div>
</div>
<div class="visual_box" @click="goto('/visual')">
	<div class="item">
		<div class="money">￥<span>5323</span></div>
		<div class="text">本月预估</div>
		<div class="count">
			上月结算<span>￥</span><span>3865</span>
		</div>
	</div>
	<div class="item">
		<div class="money">￥<span>423</span></div>
		<div class="text">今日收益</div>
		<div class="count">
			上月预估<span>￥</span><span>4536</span>
		</div>
	</div>
</div>

<div class="tab_box">

	<router-link tag='div' class="item" to="/visual">
		<div class="img">
			<img src="./img/tab1.png" width="40" height="40">
		</div>
		<div class="title">收益</div>
	</router-link>

	<router-link tag='div' class="item" to="">
		<div class="img">
			<img src="./img/tab2.png" width="40" height="40">
		</div>
		<div class="title">订单</div>
	</router-link>
	<div class="item">
		<div class="img">
			<img src="./img/tab3.png" width="40" height="40">
		</div>
		<div class="title">粉丝</div>
	</div>
	<router-link tag='div' class="item" to="/myqrcode">
		<div class="img">
			<img src="./img/tab4.png" width="40" height="40">
		</div>
		<div class="title">邀请</div>
	</router-link>
</div>

<div class="cz_menu">
	<div class="cz_menu_header">
		<div class="title">我的工具</div>
	</div>
	<div class="cz_menu_content">
		<div class="item">
			<!-- <i class="iconfont icon-waibaoxinxi"></i> -->
			<img src="./img/icon1.png" width="32" height="32">
			<div class="title">新手指引</div>
		</div>
		<div class="item">
			<img src="./img/icon2.png" width="32" height="32">
			<div class="title">省钱收藏</div>
		</div>
		<div class="item">
			<img src="./img/icon3.png" width="32" height="32">
			<div class="title">常见问题</div>
		</div>
		<div class="item">
			<img src="./img/icon4.png" width="32" height="32">
			<div class="title">专属客服</div>
		</div>
		<div class="item">
			<img src="./img/icon5.png" width="32" height="32">
			<div class="title">官方公告</div>
		</div>
		<div class="item">
			<img src="./img/icon6.png" width="32" height="32">
			<div class="title">意见反馈</div>
		</div>
		<router-link tag="div" to="/about" class="item">
			<img src="./img/icon7.png" width="32" height="32">
			<div class="title">关于我们</div>
		</router-link>

	</div>
</div>





</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	name:"usercenter1",
	data() {
		return {
			yao_qing_ma:"DFH3A56",
		}
	},
	methods: {
		goto(url,condition) {
			// 筛选前往提现
			if(condition && condition == "getmoney") {
				if(false) {
					console.log('前往提现前')
					return
				}
			}
			this.$router.push({
				path: url
			})
		},
		onCopy(e) {
			console.log(e.text)
			this.$toast(`${e.text} 复制成功`)
		},
		onError(e) {
			this.$toast(`复制失败`)
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.userinfo_wrapper{
	background: url(http://tp5test.cms.sppcms.com/img/userboxbg.jpg);
	padding: 12px 12px 0 12px;
	height: 200px;
	.userinfo_box{
		position: relative;
		padding-top: 18px;
		.right_icon{
			position: absolute;
			right: 0px;
			top: 12px;
			span {
				margin-right: 10px;
			}
			i {
				font-size: 20px;
				color:#fff;
			}
		}
		.userinfo{
			display: flex;
			height: 80px;
			.avatar{
				flex: 0 0 80px;
				width: 80px;
				img{
					border-radius: 50%;
					border: 4px solid rgba(0,0,0,.1);
				}
			}
			.desc_box {
				flex: 1;
				// margin-top: 10px;
				.nickname{
					color: rgba(255,255,255,0.95);
					font-size: 14px;
					height: 30px;
					font-family: fantasy;
					line-height: 30px;
					.user_lv{
						position: relative;
						display: inline-block;
						height: 20px;
						width: 80px;
						font-size: 12px;
						z-index: 3;
						margin-left: 5px;
						.lv_name{
							display: inline-block;
							margin-left: 22px;
							margin-top: 2px;
							color: #FFE5B2;
						}
						img{
							position: absolute;
							top: 4px;
							left: 0;
							z-index: -1;
								
						}
					}
				}

				.desc{
					color: rgba(255,255,255,0.8);
					font-size: 13px;
					height: 30px;
					margin-top: 8px;
					.span1 {
						letter-spacing: 0px;
						font-family: Georgia, serif;
					}
					.copy {
						display: inline-block;
						border-radius: 12px;
						background: rgba(0, 0, 0, .3);
						padding: 0 6px;
						font-size: 10px;
						margin-left: 16px;
					}
				}
			}
		}
		.tag_box {
			padding-left: 8px;
			color: rgba(255, 255, 255, .8);
			font-size: 12px;
			height: 40px;
			line-height: 40px;
			.item {
				float: left;
				margin-right: 16px;
				span {
					margin-left: 6px;
				}
			}
		}
		.balance_box {
			height: 50px;
			border-radius: 12px 12px 0 0;
			background: linear-gradient(#4F4F4E,#242424);
			.balance_left{
				margin-left: 20px;
				.balance{
					color: #FFE5B2;
					font-size: 12px;
					height: 25px;
					line-height: 25px;
					span {
						margin-left: 12px;
					}
				}		
				.goto_balance{
					color: #999;
					font-size: 12px;
					height: 25px;
					line-height: 25px;
				}		
			}
			.get_money{
				margin-top: 15px;
				span {
					display: inline-block;
					background: #FFE5B2;
					color: #666;
					padding: 1px 8px;
					border-radius: 6px;
					font-size: 12px;
					height: 20px;
					margin-right: 8px;
				}
			}
		}
	}
}
.visual_box{
	display: flex;
	background: #fff;
	margin-left: 12px;
	margin-right: 12px;
	border-radius: 0 0 12px 12px;
	.item{
		flex: 1;
		text-align: center;
		&:nth-of-type(1) {
			position: relative;
			&:after {
				content: '';
				position: absolute;
				right: 0;
				top: 20%;
				transform: translateX(50%);
				display: inline-block;
				height: 30px;
				width: 1px;
				background: rgba(0,0,0,.1);
			}
		}
		.money {
			height: 45px;
			line-height: 45px;
			font-size: 12px;
			span {
				font-size: 22px;
				font-weight: 900;
			}
		}
		.text{
			height: 20px;
			line-height: 20px;
			font-size: 13px;
			color: #777;
		}
		.count{
			border-top: 1px solid #eee;
			height: 30px;
			font-size: 12px;
			line-height: 30px;
			color: #999;
			span{
				&:nth-of-type(1) {
					color: red;
					font-size: 12px;
					margin-left: 4px;
				}
				&:nth-of-type(2) {
					color: red;
					font-size: 14px;
				}
			}
		}
	}
}
.tab_box{
	display: flex;
	text-align: center;
	background: #fff;
	margin: 12px;
	border-radius: 12px;
	padding: 8px 0px;
	.item{
		flex: 1;
		.title {
			font-size: 12px;
		}
	}
}
.cz_menu{
	margin: 12px;
	background: #fff;
	border-radius: 12px;
	.cz_menu_header{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #eee;
		.title{
			font-size: 12px;
			margin-left: 16px;
		}
	}
	.cz_menu_content{
		display: flex;
		flex-wrap: wrap;
		.item{
			flex: 0 0 25%;
			width: 25%;
			text-align: center;
			padding-bottom: 12px;
			padding-top: 12px;
			i {
				font-size: 24px;
			}
			.title{
				font-size: 12px;
			}
		}
	}
}
</style>
