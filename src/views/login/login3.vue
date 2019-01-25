<template>
<div class="login3 page">
	<div class="wrapper">
		<div class="main">

			<div class="logo text-center">
				<img src="https://lipstick.xsygood.com/testimg/pyg_logo.png" alt="" width="120">
			</div>
			<!-- <form action=""></form> -->
			<form class="info" @submit.prevent="onSubmit">

				<div class="input_box">
					<div class="inpu">
						<input type="text" name="username" placeholder="手机号码" v-model="form_data.username">
					</div>
					<div class="icon">
						<i class="iconfont icon-tel"></i>
					</div>
				</div>
				<div class="input_box">
					<div class="inpu">
						<input type="password" name="password" placeholder="输入密码" v-model="form_data.password">
					</div>
					<div class="icon">
						<i class="iconfont icon-mima"></i>
					</div>
				</div>				
				
				<div class="login_btn_box">
					<button class="login_btn">登录</button>
					<div></div>
					<router-link tag="div" class="phone_login" to="/login2">
						短信验证登录
					</router-link>
					<div class="forget">
						<router-link tag='div' to="/register" class="register">注册</router-link>
						<router-link tag='div' to="/findPassword" class="forget_psw">忘记密码</router-link>
					</div>
				</div>
				
				<!-- 第三方登录 -->
				<div class="other_login">
					<K_login_btn></K_login_btn>
				</div>
			</form>

		</div>
	</div>
</div>
</template>

<script>
import K_login_btn from './other_login.vue'
import { l_storage } from '@/common/js/storage.js'
import { kk } from '@/common/js/k_form.js'
export default {
	name:"login3",
	data() {
		return {
			form_data:{}
		}
	},
	methods: {
		onSubmit() {
			// 过滤字段
			if(kk.is_null(this.form_data.username,this,'用户名不能为空')){return}
			if(kk.is_null(this.form_data.password,this,'密码不能为空')){return}
			this.send_request();
		},
		// 登录请求
		send_request() {
			console.log(this.form_data)
			this.axios.post(this.$api.login,{
				mobile:this.form_data.username,
				password:this.form_data.password,
				invitation_code: l_storage.get('inivid')
			})
			.then(res => {
				if(res.code == 200) {
					console.log(res.data)
					l_storage.set('user_token', res.data.user_token)
					l_storage.set('user_code', res.data.invitation_code)
					this.$toast(res.msg)
					this.$router.push({
						path: `/home`
					})
				}
			})
		},
	},
	components: {
		K_login_btn
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.login3{
	background-image: url(https://lipstick.xsygood.com/testimg/login_bg.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	.wrapper{
		.main{
			width: 80%;
			margin: 0 auto;
			margin-top: 20%;
			border-radius: 16px;
			background: #fff;
			border: 1px solid rgba(0, 0, 0, 0.05);
			// padding-top: 20px;
			.logo{
				padding-top: 40px;
				margin-bottom: 30px;
			}
			.info{
				color: #ccc;
				.input_box{
					margin: 12px;
					margin: 0 20px;
					display: flex;
					margin-bottom: 6px;
					border-bottom: 1px solid #eee;
					.inpu{
						flex: 1;
						input{
							height: 42px;
							width: 100%;
							font-size: 13px;
							color: #ccc;
						}
					}
					.icon{
						flex: 0 0 40px;
						text-align: center;
						line-height: 42px;
						i{
							font-size: 20px;
						}
					}
				}
			}
			.login_btn_box{
				text-align: center;
				margin-top: 30px;
				padding-bottom: 34px;
				.login_btn{
					height: 40px;
					width: 90%;
					border-radius: 20px;
					color: #fff;
					background: linear-gradient(left, #A46BD7, #DE6DB8);
				}
				.phone_login{
					height: 40px;
					line-height: 40px;
					margin-right: 12px;
					width: 120px;
					font-size: 13px;
					float:left;
					color: #999;
				}
				.forget{
					height: 40px;
					line-height: 40px;
					float: right;
					margin-right: 12px;
					width: 120px;
					font-size: 13px;
					display: flex;
					.register{
						flex: 1;
					}
					.forget_psw{
						flex: 1;
					}
				}
			}
		}
	}
}
.other_login{
	width: 70%;
	margin: 0 auto;
	margin-top: 30px;
	padding-bottom: 30px;
}
</style>
