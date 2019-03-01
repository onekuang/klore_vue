<template>
<div class="paymenber page app_head">
	<k_header title="会员开通" />
	
	<div class="banner">
		<img src="https://lipstick.xsygood.com/bsck_img/vip_banner.jpg" width="100%">
	</div>

	<div class="index_title">选择支付方式</div>  

	<div class="pay_list">
		<div class="items">
			<div class="item">
				<div class="key">
					<img src="./zhifubao.png">
				</div>
				<div class="val">支付宝支付</div>
				<div class="btn">
					<mu-radio v-model="pay_type" value=1 :ripple=ripple></mu-radio>
				</div>
			</div>
			<div class="item">
				<div class="key">
					<img src="./weixin.png">					
				</div>
				<div class="val">微信支付</div>
				<div class="btn">
					<mu-radio v-model="pay_type" value=2 :ripple=ripple></mu-radio>
				</div>
			</div>
		</div>
	</div>

	<div class="footer">
		<div class="items">
			<div class="money_box">
				<div class="momey">
					总价<div class="num">￥99</div>					
				</div>
			</div>
			<div class="pay">
				立即开通
			</div>
		</div>
	</div>
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
      ripple: false,
			pay_type: '1'
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){
		}
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.pay_list{
	.items{
		padding: 8px;
		.item{
			display: flex;
			height: 60px;
			line-height: 60px;	
			border-top: 1px solid #f5f5f5;		
			&:last-child{
				border-bottom: 1px solid #f5f5f5;
			}
			.key{
				flex: 0 0 50px;
				text-align: center;
				img{
					margin-top: 16px;
					height: 28px;
					width: 28px;
				}
			}
			.val{
				flex: 1;
				padding-left: 12px;
			}
			.btn{
				padding-top: 8px;
				flex: 0 0 50px;
				text-align: center;
			}
		}
	}
}

.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0 4px 10px #000;
	height: 50px;
	line-height: 50px;
	.items{
		display: flex;
		.money_box{
			flex: 1;
			padding-left: 12px;
			.momey{
				font-size: 16px;
				.num{
					display: inline-block;
					margin-left: 8px;
					font-size: 16px;
					color: #f00;
				}
			}
		}
		.pay{
			flex: 0 0 100px;
			background: #FFE5B2;
			text-align: center;
			font-weight: 900;
			font-size: 15px;
			color: #3a2600;
		}
	}
}
</style>