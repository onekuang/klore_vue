<template>
<div class="visual page">
<div class="header">
	<div class="money">￥<span>{{earnings.totaljs}}</span></div>
	<div class="text">累计结算收益(元)</div>
	<div class="text2">账户余额(元):&nbsp;&nbsp;￥<span>{{earnings.balance}}</span></div>
</div>

<div class="tab_wrapper">
	<div class="tab_box">
		<div class="item">
			<div class="top">
				付款笔数 
				<span @click="open_info('上个月内确认收货的订单收益,将转入到余额中')"><i class="iconfont icon-bangzhuwenhao"></i></span>
			</div>
			<div class="center">￥{{earnings.lastmonthjs}}</div>
			<div class="bottom">上月佣金</div>
		</div>
		<div class="item">
			<div class="top">
				预估佣金
				<span @click="open_info('本月内创建的所有订单预估收益')"><i class="iconfont icon-bangzhuwenhao"></i></span>
			</div>
			<div class="center">￥{{earnings.thismonth}}</div>
			<div class="bottom">本月收益</div>
		</div>
		<div class="item">
			<div class="top">
				预估收入<span @click="open_info('上月内创建的所有订单预估收益')"><i class="iconfont icon-bangzhuwenhao"></i></span>
			</div>
			<div class="center">￥{{earnings.lastmonth}}</div>
			<div class="bottom">上月收益</div>
		</div>
	</div>
</div>

<div class="khr"></div>

<div class="tab_wrapper">
	<div class="tab_header">
		<div class=""><i class="iconfont icon-jinrigaikuang"></i>今日</div>
	</div>
	<div class="tab_box">
		<div class="item">
			<div class="top">
				付款笔数 <span @click="open_info('今日内所有付款的订单数量')"><i class="iconfont icon-bangzhuwenhao"></i></span>
			</div>
			<div class="center">{{earnings.dayorder}}</div>
		</div>
		<div class="item">
			<div class="top">
				预估佣金 <span @click="open_info('今日内创建的有效订单预估收益')"><i class="iconfont icon-bangzhuwenhao"></i></span>
			</div>
			<div class="center">￥{{earnings.day}}</div>
		</div>
		<div class="item">
			<div class="top">
				其他
			</div>
			<div class="center">￥0</div>
		</div>
	</div>
</div>


<div class="khr"></div>


<div class="tab_wrapper">
	<div class="tab_header">
		<div class=""><i class="iconfont icon-zuorigaikuang"></i>昨日</div>
	</div>
	<div class="tab_box">
		<div class="item">
			<div class="top">
				付款笔数 <span @click="open_info('昨天所有付款的订单数量')"><i class="iconfont icon-bangzhuwenhao"></i></span>
			</div>
			<div class="center">{{earnings.lastorder}}</div>
		</div>
		<div class="item">
			<div class="top">
				预估佣金 <span @click="open_info('昨天创建的有效订单预估收益')"><i class="iconfont icon-bangzhuwenhao"></i></span>
			</div>
			<div class="center">￥{{earnings.last}}</div>
		</div>
		<div class="item">
			<div class="top">
				其他
			</div>
			<div class="center">￥0</div>
		</div>
	</div>
</div>
<div class="khr"></div>

<mu-list>
  <mu-list-item avatar button :ripple="false" to="/commission">
    <mu-list-item-title>消费佣金明细</mu-list-item-title>
    <mu-list-item-action>
      <mu-icon slot="right" value=":iconfont icon-you" />
    </mu-list-item-action>
  </mu-list-item>
  <mu-list-item avatar button ripple :ripple="false" to="/bill">
    <mu-list-item-title>提现记录</mu-list-item-title>
    <mu-list-item-action>
      <mu-icon slot="right" value=":iconfont icon-you"/>
    </mu-list-item-action>
  </mu-list-item>
</mu-list>



</div>
</template>

<script>
export default {
	name:"visual",
	data() {
		return {
			earnings:{}
		}
	},
	created() {		
		this.page_init()
	},
	methods: {
		page_init() {
			this.$loading.show()
			this.axios.get(this.$api.earnings)
			.then(res => {
				this.earnings = res.data
				this.$loading.hide()
			})
		},
		open_info(text) {
			this.$alert({
				title: '提示',
				content: text,
				btnText: '知道了',
			})
		}

	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.ab_full{
		position: inherit;
		.khr_bg();
}
.visual{
	.header {	
		height: 200px;
		background: url(http://tp5test.cms.sppcms.com/img/userboxbg.jpg);
		text-align: center;
		.money{
			font-size: 30px;
			color: #fff;
			padding-top: 40px;
		}
		.text{
			font-size: 12px;
			color: rgba(255, 255, 255, .6);
			margin-top: 20px;
		}
		.text2 {
			font-size: 14px;
			color: rgba(255, 255, 255, .6);
			margin-top: 12px;

		}
	}
	.tab_wrapper{
		background: #fff;
		.tab_header{
			margin: 0 12px;
			height: 30px;
			line-height: 30px;
			font-size: 15px;
			border-bottom: 1px solid #eee;
			i {
				color: @chen;
				font-size: 20px;
				margin-right: 10px;
			}
		}
		.tab_box {
			display: flex;
			text-align: center;
			padding: 8px 0;
			.item {
				flex: 1;
				.top {
					height: 30px;
					line-height: 30px;
					font-size: 12px;
					color: #777;
					span {
						i {
							color: @lan;
						}
					}
				}
				.center{
					font-size: 14px;
					height: 30px;
					line-height: 30px;
					color: #333;
				}
				.bottom {
					font-size: 12px;
					color: #ccc;
					height: 20px;
					line-height: 20px;
				}
				&:nth-of-type(1),&:nth-of-type(2) {
						border-right: 1px solid rgba(0, 0, 0, 0.02);
				}
			}	
		}		
	}
	.mu-list{
		background: #fff;
	}
}
</style>
