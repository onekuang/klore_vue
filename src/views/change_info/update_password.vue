<template>
<div class="testvue page fff">

<k_header title="密码修改" />


<form @submit.prevent="onSubmit">
	<div class="chang_mobile_box">
		<div class="old_mobile_box">
			<div class="item">原始密码:</div>
			<div class="item">
				<input type="text" name="old_passwored" class="old_mobile" placeholder="请输入原绑定密码" v-model="form_data.old_passwored">
			</div>
		</div>
		<div class="new_mobile_box">
			<div class="item">新的密码:</div>
			<div class="item">
				<input type="text" class="new_mobile" name="new_passwored" placeholder="请输入新密码" v-model="form_data.new_passwored">
			</div>					
		</div>
		<div class="new_mobile_box">
			<div class="item">确认密码:</div>
			<div class="item">
				<input type="text" class="new_mobile" name="rep_passwored" placeholder="确认密码" v-model="form_data.rep_passwored">
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
import k_header from '@/components/app_head/app_head'
import { kk } from '@/common/js/k_form.js'
export default {
	name:"change_password",
	data() {
		return {
			form_data:{
				old_passwored:'',
				new_passwored:'',
				rep_passwored:'',
			}
		}
	},
	methods: {

		// 监听表单提交
		onSubmit(e) {
			// 过滤字段
			if(kk.is_null(this.form_data.old_passwored,this)){return}
			if(kk.is_null(this.form_data.new_passwored,this)){return}
			if(!kk.is_password(this.form_data.new_passwored,this)){return}
			if(this.form_data.new_passwored != this.form_data.rep_passwored){
				this.$toast('两次密码不一致');
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
		k_header
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
				flex: 0 0 80px;
				width: 80px;
				font-size: 14px;
				letter-spacing: 2px;
				text-indent: 6px;
			}
		}
	}

}
</style>
