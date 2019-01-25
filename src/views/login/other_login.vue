<template>
<div class="disanfang">
	<!-- <div class="item"><img src="./img/qq.png"></div> -->
	<div class="item" @click="wx_login"><img src="./img/weixin.png"></div>
	<!-- <div class="item"><img src="./img/weibo.png"></div> -->
</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		wx_login() {
			this.axios.get(this.$api.wx_login)
			.then(res => {
				window.location.href = res.data
			})
		}
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.disanfang{
	display: flex;
	text-align: center;
	.item{
		flex: 1;
		img{
			width: 28px;
		}
	}
}
</style>
