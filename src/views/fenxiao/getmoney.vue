<template>
<div class="getmoney ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>

<form @submit.prevent="onSubmit">
	<div class="chang_mobile_box">
		<div class="old_mobile_box">
			<div class="item">真实姓名:</div>
			<div class="item">
				<input type="text" name="username" class="old_mobile" placeholder="请输入真实姓名" v-model="form_data.username" number>
			</div>
		</div>
		<div class="new_mobile_box">
			<div class="item">到账银行卡:</div>
			<div class="item">
				<select name="bankName" id="k_select" v-model="form_data.bankName">
					<option disabled value="">选择到账银行卡</option>
					<option value="1">中国银行</option>
					<option value="2">招商银行</option>
					<option value="3">广发银行</option>
				</select>
			</div>	
			<router-link tag="div" class="get_code on" to="/addbank">
				添加银行卡
			</router-link>
		</div>
		<div class="code_box">
			<div class="item ">提现金额:</div>
			<div class="item">
				<input type="number" class="code" name="money" placeholder="请输入提现金额" v-model.number="form_data.money">
			</div>

		</div>
		<div class="code_box">
			<div class="item " style="color: #999;">我的余额:</div>
			<div class="item">
				<input class="code" :placeholder="balance" disabled style="background-color: #fff;">
			</div>

		</div>
	</div>
	<div class="khr"></div>

	<div class="btn_box" style="margin-top: 30px;">
		<button class="theme_btn" type="submit">申请提现</button>
		<p class="marke">
			<span class="xing">*</span>每月25号后可提现上个月内确认收货的订单佣金</p>
	</div>
</form>





</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import { kk } from '@/common/js/k_form.js'
var current_time = '';
export default {
	name:"getmoney",
	data() {
		return {
			min_money: 100, // 最低提现额
			balance: 0, 		// 余额
			form_data:{
				username:'',
				bankName:'',
				money: '',
			}
		}
	},
	methods: {

		// 监听表单提交
		onSubmit(e) {
			// 过滤字段
			if(!kk.is_username(this.form_data.username,this)){return}
			if(kk.is_null(this.form_data.bankName,this,'请选择到账银行卡')){return}
			if(kk.is_null(this.form_data.money,this)){return}
			let money = parseInt(this.form_data.money)
			if(!kk.is_number(money,this)){return}
			if(this.form_data.money < this.min_money) {
				this.$toast(`最低提现金额为${this.min_money}`)
				return
			}
			// 调用请求函数
			this.send_request()
		},
		// 发送请求
		send_request() {
			console.log(this.form_data)
		},
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.chang_mobile_box {
	input {
		height: 100%;
		width: 100%;
		font-size: 13px;
	}
	.old_mobile_box {
		border-top: 1px solid #eee;
	}
	.old_mobile_box, .new_mobile_box, .code_box {
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;
		padding-top: 8px;
		padding-bottom: 8px;
		height: 50px;
		line-height: 34px;
		.item{
			flex: 1;
			&:nth-of-type(1) {
				flex: 0 0 100px;
				width: 100px;
				font-size: 14px;
				letter-spacing: 1px;
				text-indent: 6px;
			}
		}
		.get_code {
			padding: 0 12px;
			border-left: 1px solid #eee;
		}
		.on{
			color: #777;
		}
		.off {
			color: #ccc;
		}
	}
	#k_select{
	border: none;
	width: 100%;
	outline:none;
}
}
</style>
