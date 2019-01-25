<template>
<div class="my_tag page">

<k_header @l_click="l_click" @r_click="r_click" title="我的标签" right="保存" />



<div class="tag_wrapper">
	<div class="item" v-for="i in 4">
		<div class="title">标题<span>请选择四项以上</span></div>
		<div class="tag_box">
			<div class="tag on"><span>测试</span></div>
			<div class="tag"><span>测试</span></div>
			<div class="tag"><span>测试</span></div>
			<div class="tag"><span>测试</span></div>
			<div class="tag"><span>测试</span></div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>

</div>
</template>

<script>
import k_header from '@/components/base/header_tab/header_tab'

export default {
	data() {
		return {

		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		l_click(){
			console.log(1233)
		},
		r_click(){
			console.log(1234)
		},
	},
	components: {
		k_header
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');

.my_tag{
	.tag_wrapper{
		.item{
			margin: 0 8px;
			padding: 8px 0 16px 0;
			margin-bottom: 16px;
			border-bottom: 1px solid #eee;
			.title{
				font-size: 16px;
				margin-bottom: 12px;
				span{
					font-size: 12px;
					color: #bbb;
					margin-left: 12px;
				}
			}
		}	
	}
}
.tag_box{
	padding: 4px;
	.tag{
		float: left;
		margin-right: 8px;
		text-align: center;
		margin-bottom: 12px;
		span{
			display: inline-block;
			padding: 2px 16px;
			border-radius: 16px;
			background: #fff;
			font-size: 13px;
		}
		&.on {
			span{
				background: @color_base;
				color: #fff;
			}
		}
	}
}
</style>