<template>
<div class="header_wrapper">
	<div class="header" :style="'background: ' + bg_color">

		<div class="left" @click="emit_left" :style="'color: ' + left_color">
			<i class="iconfont icon-icon--"></i>
		</div>


		<div class="title">{{title}}</div>


		<div class="right" @click="emit_right" :style="'color: ' + right_color">
			{{right}}
		</div>


	</div>
</div>
</template>

<script>
// import k_header from '@/components/base/header_tab/header_tab'
// <k_header @l_click="l_click" @r_click="r_click" title="我的标签" right="保存" />

export default {
	props: {
		bg_color: {
			type: String,
			default: "#fff"
		},
		left: {
			type: String,
			default: '　'
		},
		right: {
			type: String,
			default: '　'
		},
		title: {
			type: String,
			default: '　'
		},
		left_color: {
			type: String,
			default: '#000'
		},
		right_color: {
			type: String,
			default: '#000'
		}
	},
	data() {
		return {

		}
	},
	methods: {
		emit_left(){
			window.history.back()
			this.$emit('l_click')
		},
		emit_right(){
			this.$emit('r_click')
		}
	},
	components: {}
}
</script>

<style scoped lang="less">
@import url('../../../common/less/index.less');
.header_wrapper{
	height: 45px;
	line-height: 45px;
	.header{
		display: flex;
	}
	.left, .right{
		flex: 0 0 50px;
		width: 50px;
		text-align: center;
	}
	.title{
		text-align: center;
		flex: 1;
	}
}
</style>