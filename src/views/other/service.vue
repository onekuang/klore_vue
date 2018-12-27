<template>
<div class="service page" style="background-color: #F0F0F0;">
<img src="https://lipstick.xsygood.com/testimg/kefu_bg.jpg" width="100%">
<div class="btn_box">
	<div class="theme_btn" 
		v-clipboard:copy="wx_num"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">复制去微信添加</div>
</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			wx_num:'YOU2014511'
		}
	},
	created() {
	},
	methods: {
		onCopy(e) {
			console.log(e.text)
			this.$toast(`${e.text} 复制成功`)
		},
		onError(e) {
			this.$toast(`复制失败`)
		}
	},
	components: {}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.service{
	.btn_box{
		position: absolute;
		bottom: 80px;
		left: 0;
		right: 0;
	}
}
</style>