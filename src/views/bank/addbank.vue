<template>
<div class="addbank ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>

<form @submit.prevent="onSubmit">
	<div class="chang_mobile_box">
		<div class="old_mobile_box">
			<div class="item">真实姓名:</div>
			<div class="item">
				<input type="text" name="userName" class="old_mobile" placeholder="请输入真实姓名" v-model="form_data.userName">
			</div>
		</div>
		<div class="old_mobile_box">
			<div class="item">开户银行:</div>
			<div class="item">
				<select name="bankName" id="k_select" v-model="form_data.bankName">
					<option disabled value="">选择开户行</option>
					<option value="1">中国银行</option>
					<option value="2">招商银行</option>
					<option value="3">广发银行</option>
				</select>
			</div>
		</div>
		<div class="new_mobile_box">
			<div class="item">银行卡号:</div>
			<div class="item">
				<input type="text" name="bankNumber" placeholder="请输入银行卡号" v-model="form_data.bankNumber">
			</div>
		</div>
	</div>
	<div class="khr"></div>
	<div class="btn_box" style="margin-top: 30px;">
		<button class="theme_btn" type="submit">确认添加</button>
	</div>
</form>





</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import { kk } from '@/common/js/k_form.js'
var pre_page = '';
export default {
	name:"addbank",
	data() {
		return {
			pre_page: pre_page ? pre_page : '/banklist',
			form_data:{
				username:'',
				bankName:'',
				bankNumber: '',
			}
		}
	},
	created() {
		console.log(pre_page)
	},
	methods: {
		// 监听表单提交
		onSubmit(e) {
			// 过滤字段
			if(!kk.is_username(this.form_data.userName,this,)){return}
			if(kk.is_null(this.form_data.bankName,this,'请选择开户行')){return}
			if(!kk.is_number(this.form_data.bankNumber,this)){return}

			// 调用请求函数
			this.send_request()
		},
		// 发送请求
		send_request() {
			console.log(this.form_data)

			
			this.$alert("添加成功").then(success => {
				window.history.go(-1)
			})
		},
	},
	components: {
		BScroll
	},
	beforeRouteEnter (to, from, next) {
    pre_page = from.fullPath
    next();
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
		// border-top: 1px solid #eee;
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
				// letter-spacing: 2px;
				text-indent: 6px;
			}
		}
	}

}
#k_select{
	border: none;
	width: 100%;
	outline:none;
}
</style>
