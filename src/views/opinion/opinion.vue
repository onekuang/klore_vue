<template>
<div class="opinion page">
<k_header title="意见反馈" @r_click="r_click" right="提交" />

<div class="textarea">
	<textarea name="textarea" rows="5" placeholder="请输入您的问题或建议"v-model="textarea"></textarea>
	<div class="count">{{textarea.length}}/100</div>
</div>

</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
			textarea:'',
		}
	},
	watch:{
		textarea: function(n, o) {
			if(n.length > 100){
				this.textarea = this.textarea.substring(0, 100)
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
	padding: 6px;
	position: relative;
	textarea{
		width: 100%;
		height: 100%;
		border-color: #eee;
		padding: 12px 4px;
	}
	.count{
		display: inline-block;
		right: 20px;
		bottom: 20px;
		position: absolute;
		color: #888;
	}
}
</style>