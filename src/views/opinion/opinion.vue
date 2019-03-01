<template>
<div class="opinion page app_head">
<k_header title="意见反馈" />

<div class="textarea">
	<textarea name="textarea" rows="8" placeholder="感谢您对白手创客的支持,我们期待您的宝贵意见."v-model="textarea"></textarea>
	<div class="count">{{textarea.length}}/150</div>
</div>

<div class="input_box">
	<div class="input_items">
		<div class="item">
			<input type="text" name="mobile" placeholder="请输入您的手机号码" v-model="mobile">
		</div>
	</div>
</div>


<div class="btn_box" style="margin-top: 20px;">
	<button class="theme_btn" type="submit">提交</button>
	<div class="make">如有疑问,可以直接拨打客服热线 <span>400-xxx-xxxx</span></div>
</div>

</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
			textarea:'',
			mobile:'',
		}
	},
	watch:{
		textarea: function(n, o) {
			if(n.length > 150){
				this.textarea = this.textarea.substring(0, 150)
			}
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		r_click() {
			console.log(this.textarea)
		}
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.opinion{
	background: #f5f5f5;
}
.textarea{
	position: relative;
	textarea{
		width: 100%;
		height: 100%;
		border-color: #eee;
		padding: 12px 12px;
	}
	.count{
		display: inline-block;
		right: 20px;
		bottom: 20px;
		position: absolute;
		color: #888;
	}
}
.make{
	text-align: center;
	font-size: 13px;
	color: #777;
	margin-top: 16px;
	span{
		color: @blue;
	}
}
.input_box {
	background: #fff;
	margin-top: 14px;
	input {
		height: 100%;
		width: 100%;
		font-size: 14px;
	}
	.input_items {
		border-top: 1px solid #eee;
	}
	.input_items{
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;
		padding-top: 8px;
		padding-bottom: 8px;
		height: 50px;
		line-height: 34px;
		.item{
			flex: 1;
			padding: 0 12px;
		}
	}

}
</style>