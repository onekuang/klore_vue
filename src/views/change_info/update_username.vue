<template>
<div class="change_username page">
	<k_header title="昵称修改" />

<div>

<form @submit.prevent="onSubmit">
	<div class="chang_mobile_box">
		<div class="old_mobile_box">
			<div class="item">新昵称:</div>
			<div class="item">
				<input type="text" name="nickname" class="old_mobile" placeholder="请输入新昵称" v-model="form_data.nickname">
			</div>
		</div>
	</div>
	<div class="khr"></div>
	<div class="btn_box" style="margin-top: 20px;">
		<button class="theme_btn" type="submit">确认修改</button>
	</div>
</form>





</div>
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
import { kk } from '@/common/js/k_form.js'
var current_time = '';
export default {
	name:"change_username",
	data() {
		return {
			form_data:{}
		}
	},
	methods: {

		// 监听表单提交
		onSubmit(e) {
			// 过滤字段
			if(!kk.is_username(this.form_data.nickname,this)){return}

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
