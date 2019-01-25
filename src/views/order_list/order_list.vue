<template>
<div class="bill page">
<!-- <div class="bill ab_full page"> -->
<!-- <BScroll 	class="box_wrapper" ref="scroll" >
<div> -->
<div class="bill_top">
	<div class="count_box">
		<div class="text">{{month_text}}</div>
		<div class="count">已累计: <span>123元</span></div>
	</div>
	<div class="filter on" @click="toggle_date">
		<i class="iconfont icon-rili"></i>
	</div>
</div>

<div class="">
	<K_Date ref="date" type='month' @onDate=onDate></K_Date>
</div>

<div class="list">
	<ul>
		<li class="item" v-for="i in 8">
			<div class="info_box">
				<div class="box">
					<div class="title">提现</div>
					<div class="tag">
						<span>[ tag ]</span>
					</div>
					<div class="time">2018-12-22 12:47:45</div>
				</div>
			</div>
			<div class="money_box">
				<div class="money on">+200</div>
			</div>
		</li>
	</ul>
</div>
<!-- </div></BScroll> -->
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import K_Date from '@/components/k_date/k_date'
export default {
	name:"orderlist",
	data() {
		return {
			month_text:"本月",
			month: undefined,
			date_show: false,
		}
	},
	methods: {
		toggle_date() {
			this.$refs.date.toggle_date();
		},
		onDate(date) {
			let n = date.length - 2
			let str = date.substr(0, n)
			this.month_text = str
			console.log(str)
		}
	},
	components: {
		BScroll,K_Date
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.bill{
	padding-bottom: 56px;

	.box_wrapper{
		// .khr_bg();
	}
	.bill_top{
		.khr_bg();
		padding: 8px 12px;
		display: flex;
		.count_box{
			flex: 1;
			.text{
				height: 20px;
				font-size: 13px;
			}
			.count{
				font-size: 12px;
				color: #666;
			}
		}
		.filter {
			flex: 0 0 30px;
			width: 30px;
			padding-top: 4px;
			i {
				font-size: 20px;
				color: #999;
			}
			&.on{
				i {
					color: @lan;
				}
			}
		}
	}
	.list{
		.item{
			display: flex;
			margin: 8px 4px;
			background: #fff;
			border-radius: 4px;
			padding-bottom: 8px;
			padding-top: 8px;
			border-bottom: 1px solid #eee;
			.info_box{
				flex: 1;
				padding-left: 8px;
				.box{
					.title{
						font-size: 14px;
						color: #333;
					}
					.tag{
						font-size: 13px;
						margin: 5px 0;
						color: #777;
						span {
							margin-right: 12px;
						}
					}
					.time{
						font-size: 12px;
						color: #999;
					}
				}
			}
			.money_box{
				flex: 0 0 100px;
				text-align: right;
				.money {
					font-size: 20px;
					margin-right: 8px;
					font-weight: 900;
					&.on {
						color: @red;
					}
				}
			}
		}
	}
}
</style>
