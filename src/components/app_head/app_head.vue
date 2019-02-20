<template>
<div class="header_wrapper">
	<div class="header" :style="'background: ' + bg_color">

		<div class="left" @click="emit_left" :style="'color: ' + left_color">
			<i v-if="left_show" class="iconfont icon-icon--"></i>
		</div>


		<div class="title">{{title}}</div>


		<div class="right" @click="emit_right" :style="'color: ' + right_color">
			{{right}}
			<i 
				class="iconfont" 
				:style="'color: ' + r_icon_color"
				:class="r_icon" 
				v-if="r_icon"
			>
				
			</i>
		</div>


	</div>
</div>
</template>

<script>
// import k_header from '@/components/app_head/app_head'
// <k_header @l_click="l_click" @r_click="r_click" title="我的标签" right="保存" />
export default {
	props: {
		bg_color: {
			type: String,
			default: "#fff"
		},
		left_show: {
			type:Boolean,
			default: true
		},
		left: {
			type: String,
			default: '　'
		},
		right: {
			type: String,
			default: '　'
		},
		r_icon: {
			type:String,
			default: '',
		},
		r_icon_color: {
			type:String,
			default:'#333'
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
			if(this.left_show == false) {
				return
			}
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
@import url('../../common/less/index.less');
.header_wrapper{
	height: 50px;
	line-height: 50px;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, .05);
	.header{
		display: flex;
	}
	.left, .right{
		flex: 0 0 50px;
		width: 50px;
		text-align: center;
	}
	.right{
		i{
			margin-right: 12px;
		}
	}
	.title{
		text-align: center;
		flex: 1;
	}
}
</style>