<template>
<div class="testvue page fff">
<form @submit.prevent="onSubmit">
	<div class="chang_mobile_box">
		<!-- <div class="old_mobile_box">
			<div class="item">原始密码:</div>
			<div class="item">
				<input type="text" name="old_passwored" class="old_mobile" placeholder="请输入原绑定密码" v-model="form_data.old_passwored">
			</div>
		</div> -->
		<div class="new_mobile_box">
			<div class="item">手机号码:</div>
			<div class="item">
				<input type="text" class="new_mobile" name="mobile" placeholder="请输入手机号码" v-model="form_data.mobile">
			</div>
					
		</div>
		<div class="code_box">
			<div class="item ">验证码:</div>
			<div class="item">
				<input type="text" class="code" name="smscode" placeholder="请输入手机验证码" v-model="form_data.smscode">
			</div>
			<div class="get_code on" v-show="!code_disabled" @click="get_code">获取验证码</div>			
			<div class="get_code off" v-show="code_disabled" >{{code_time}}s后再次获取</span>
			</div>	
		</div>

		<div class="new_mobile_box">
			<div class="item">新的密码:</div>
			<div class="item">
				<input type="text" class="new_mobile" name="password" placeholder="请输入新密码" v-model="form_data.password">
			</div>					
		</div>
		<div class="new_mobile_box">
			<div class="item">确认密码:</div>
			<div class="item">
				<input type="text" class="new_mobile" name="rep_passwored" placeholder="确认您的密码" v-model="form_data.rep_passwored">
			</div>					
		</div>

	</div>
	<div class="khr"></div>
	<div class="btn_box" style="margin-top: 30px;">
		<button class="theme_btn" type="submit">确认修改</button>
	</div>
</form>




</div>
</template>

<script>
import { kk } from '@/common/js/k_form.js'
var current_time = '';
export default {
	name:"change_password",
	data() {
		return {
			code_time: 60,
			code_disabled: false,
			form_data:{				
				mobile:'',
				smscode:'',
				password:'',
				rep_passwored:'',
			}
		}
	},
	methods: {

		// 监听表单提交
		onSubmit(e) {
			// 过滤字段
			if(!kk.is_mobile(this.form_data.mobile,this)){return}
			if(kk.is_null(this.form_data.smscode,this)){return}
			if(kk.is_null(this.form_data.password,this)){return}
			if(!kk.is_password(this.form_data.password,this)){return}
			if(this.form_data.password != this.form_data.rep_passwored){
				this.$toast('两次密码不一致');
				return
			}
			// 调用请求函数
			this.send_request()
		},
		// 发送请求
		send_request() {
			console.log(this.form_data)

			this.axios.post(this.$api.changepassword,this.form_data)
			.then(res => {
				console.log(res)
				if(res.code == 200) {
					this.$alert(res.msg).then(success => {
						window.history.back()
					})
				}else{
					this.$toast(res.msg)
				}
			})
		},

		// 获取验证码
		get_code() {
			if(this.code_disabled){
				return
			}
			this._start_code_time();
		},
		// 验证码开始倒计时
		_start_code_time() {
			let that = this
			this.code_disabled = true
			current_time = window.setInterval(() => {
				that.code_time --
				if(that.code_time <= 0) {
					that._stop_code_time()
				}
			},1000)
		},
		// 验证码结束倒计时
		_stop_code_time() {
			if (current_time) {
				clearInterval(current_time)
				this.code_time = 60
				this.code_disabled = false
			}
		}
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
				flex: 0 0 80px;
				width: 80px;
				font-size: 14px;
				letter-spacing: 2px;
				text-indent: 6px;
			}
		}
	}

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
				flex: 0 0 80px;
				width: 80px;
				font-size: 14px;
				letter-spacing: 2px;
				text-indent: 6px;
			}
		}
		.get_code {
			padding: 0 12px;
			border-left: 1px solid #eee;
		}
		.on{
			color: #333;
		}
		.off {
			color: #ccc;
		}
	}
</style>
