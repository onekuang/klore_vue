<template>
<div class="cla_tab" v-show="cla_show">
	<div class="slide_cla_wrapper">
		<div class="mengban"  @click="_reset"></div>

		<BScroll ref='scroll' class="items" :data=data> 
			<div>
				<div class="item" v-for="item in data">
					<div class="item_title">{{item.title}}</div>
					<div class="itm">
						<div 
							class="tag" 
							:class="{'on':active_id == itm.id}" 
							@click=push_id(itm.id)
							v-for="itm in item.list"
						>{{itm.val}}</div>
					</div>
				</div>

				<div class="shuang_btn_box" v-show="data != null">
					<div class="confirm_btn btn" @click="_confirm">确 认</div>
					<div class="reset_btn btn" @click="_reset">取 消</div>
				</div>
				<div class="make text-center" v-show="data == null">
					暂无数据
				</div>
			</div>
		</BScroll>
		
	</div>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	props:{
		data:{
			type: Array,
			default: null
		},
		cla_show: {
			default: false
		}
	},
	data() {
		return {
			clas_tab_show: true,
			active_id: 3,
			// list:[
			// 	{
			// 		title:'测试',
			// 		list:[
			// 			{id:1,val:'测试'},
			// 			{id:2,val:'测试测试'},
			// 		]
			// 	},
			// 	{
			// 		title:'测试2',
			// 		list:[
			// 			{id:3,val:'测试'},
			// 			{id:4,val:'测试测试测试'},
			// 		]
			// 	},
			// ]
		}
	},
	created() {
		this.get_data()	
	},
	methods: {
		get_data(){},
		push_id(id) {
			this.active_id = id
		},
		_confirm() {
			this.$emit('get_id',this.active_id)
			this.$emit('hide')
		},
		_reset() {
			this.$emit('hide')		
		},
	},
	components: {BScroll}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.slide_cla_wrapper{
	z-index: 99;
	position: fixed;
	top: @header_height;
	bottom: 0;
	left: 0;
	right: 0;
	.mengban{
		position: fixed;
		top: @header_height;
		bottom: 0;
		left: 0;
		right: 100px;
		background: rgba(0,0,0,.2);
	}
	.items{
		z-index: 10;
		background: #fff;
		position: absolute;
		top: 0;
		right: 0;
		left: 100px;
		bottom: @footer_height;
		padding-bottom: 60px;
		.item_title{
			height: 40px;
			line-height: 40px;
			text-indent: 6px;
			border-bottom: 1px solid #f5f5f5;
			margin: 0 8px;
			margin-bottom: 8px;
		}
		.itm{
			padding-left: 8px;
			.tag{
				background: #fff;
				display: inline-block;
				padding: 4px 8px;
				border: 1px solid #eee;
				border-radius: 6px;
				margin: 6px;
				&.on{
					background: @orange;
					color: #fff;
				}
			}
		}
	}
}
.cla_tab{
	.shuang_btn_box{
		margin-top: 50px;
		padding-top: 20px;
		height: 40px;
		text-align: center;
		.btn{
			border-radius: 6px;
			border: 1px solid #eee;
			display: inline-block;
			padding: 8px 24px;
			margin-right: 12px;
		}
		.confirm_btn{
			background: @orange;
			color: #fff;
		}
	}
}
.make{
	margin-top: 20px;
	color: #aaa;
}
</style>