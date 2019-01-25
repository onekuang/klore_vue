<template>
<div class="page">
<div v-html= "k_html"></div>
</div>
</template>

<script>
export default {
	name:"activity",
	data() {
		return {
			k_html:'<div>this is a html</div>'
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){}
	},
	components: {}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>