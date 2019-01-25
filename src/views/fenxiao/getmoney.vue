<template>
<div class="getmoney page fff">
<div>

<form @submit.prevent="onSubmit">
	<div class="chang_mobile_box">
		<div class="old_mobile_box">
			<div class="item">真实姓名:</div>
			<div class="item">
				<input type="text" name="alipayname" class="old_mobile" placeholder="请输入真实姓名"  v-model="form_data.username" disabled>
			</div>
		</div>


		<div class="new_mobile_box" v-if="get_money_type === 'alipay'">
			<div class="item">到账支付宝:</div>
			<div class="item">
				<input type="text" name="alipay" class="old_mobile" placeholder="请输入真实姓名" v-model="form_data.alipay" hidden disabled>
				<p class="hide_input" style="height: 33px;line-height: 33px;">{{form_data.alipay}}</p>
			</div>	
			<router-link tag="div" class="get_code on" to="/bindalipay">
				修改
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





</div>
</div>
</template>

<script>
import { kk } from '@/common/js/k_form.js'
var current_time = '';
export default {
	name:"getmoney",
	data() {
		return {
			get_money_type: 'alipay', // alipay | bank
			min_money: 1, // 最低提现额
			balance: 0, 		// 余额
			form_data:{
				username:'',
				bankName:'',
				alipay: '',
				money: '',
			}
		}
	},
	created() {
		this.page_init()
	},
	methods: {
		page_init() {
			this.axios.get(this.$api.get_money_info)
			.then(res => {
				if(!res.data.alipay){
					this.$alert("请先绑定支付宝").then(success => {
						this.$router.push({
							path: `/bindalipay`
						})
					})
					return
				}
				this.form_data.username = res.data.alipayname
				this.form_data.alipay = res.data.alipay
				this.balance = res.data.meney
			})
		},
		// 监听表单提交
		onSubmit(e) {
			// 过滤字段
			// 
			if(kk.is_null(this.form_data.money,this)){return}
			let money = parseInt(this.form_data.money)
			if(!kk.is_number(money,this)){return}
			if(!kk.is_int(money,this)){return}
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

			this.axios.post(this.$api.get_money,{
				meney:this.form_data.money
			})
			.then(res => {
				if(res.code == 200) {					
					this.$alert(res.msg).then(success => {
						window.history.back()
					})
				}
			})
		},
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.chang_mobile_box {
	input {
		height: 100%;
		width: 100%;
		font-size: 13px;
		&:disabled{
		background-color:#fff;
		color:#ACA899;
		}
	}
	.old_mobile_box {
		border-top: 1px solid #eee;
		background: #fff;
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
			.hide_input{
				font-size: 13px;
				color: #999;
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
