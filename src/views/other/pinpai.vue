<template>
<div class="pinpai page app_head">

<k_header title="权威认证" />


<img src="https://lipstick.xsygood.com/bsck_img/pinpai.jpg" width="100%">
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {

		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){}
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>