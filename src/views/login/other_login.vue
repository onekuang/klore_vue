<template>
<div class="disanfang">
	<!-- <div class="item"><img src="./img/qq.png"></div> -->
	<div class="item" @click="wx_login"><img src="./img/weixin.png"></div>
	<!-- <div class="item"><img src="./img/weibo.png"></div> -->
</div>
</template>

<script>
import { l_storage } from '@/common/js/storage.js'
export default {
	data() {
		return {

		}
	},
	methods: {
		wx_login() {
			this.axios.post(this.$api.wx_login,{
				invitation_code:l_storage.get('inivid')
			})
			.then(res => {
				if(res.code == 200) {
					console.log(res.data)
					window.location.href = res.data					
				}
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
