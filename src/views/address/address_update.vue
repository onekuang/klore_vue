<template>
<div class="address_update ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>
	<!-- <div class="logo_box">
		<img v-holder="'img=98x98?&bg=C7E1FF&text=LOGO'" class='logo'>
	</div> -->

	<form @submit.prevent="onSubmit">
		<div class="register_box">
			<div class="username_box">
				<div class="item">收货姓名:</div>
				<div class="item">
					<input type="text" name="username" placeholder="请输入您的姓名" v-model="form_data.username">
				</div>
			</div>
			<div class="new_mobile_box">
				<div class="item">手机号码:</div>
				<div class="item">
					<input type="text" class="new_mobile" name="new_phone" placeholder="请输入手机号码" v-model="form_data.new_phone" number>
				</div>	
			</div>
			<div class="khr"></div>
			<div class="site">123
			</div>
		</div>
		<div class="khr"></div>
		<div class="btn_box" style="margin-top: 30px;">
			<button class="theme_btn" type="submit">确认注册</button>
		</div>
	</form>
		<div class="btn_box" style="margin-top: 12px;">
			<button class="theme_btn" @click="goto_login">删除</button>
		</div>
</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import { kk } from '@/common/js/k_form.js'
export default {
	name:"address_update",
	data() {
		return {
			code_time: 60,
			code_disabled: false,
			form_data:{},
			citydata: [{id:1,iname:'北京'}]
		}
	},
	methods: {
		// 监听表单提交
		onSubmit(e) {
			// 过滤字段
			if(!kk.is_username(this.form_data.username,this)){return}
			if(!kk.is_mobile(this.form_data.new_phone,this)){return}
			// 调用请求函数
			this.send_request()
		},
		// 发送请求
		send_request() {
			console.log(this.form_data)
		},
		get_sheng() {

		},
		// 返回登录页面
		goto_login() {
			this.$router.push({
				path: `/login`
			})
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.sign{
	.logo_box{
		text-align: center;
		.logo {
		  width: 98px;
		  height: 98px;
		  margin: 32px auto 24px;
		}
	}	
}
.register_box {
	
	input {
		height: 100%;
		width: 100%;
		font-size: 18px;
	}
	.username_box {
		border-top: 1px solid #eee;
	}
	.username_box, .new_mobile_box {
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
				font-size: 18px;
				text-indent: 6px;
				// color: #666;
				letter-spacing: 1px;
			}
		}
	}

}
</style>
