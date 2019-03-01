<template>
<div class="comment_list page app_head">
	<k_header title="我的评论" />
	
	<div class="comment_wrapper">
		<div class="comment_box">
			<div class="items" v-for="i in list">
				<div class="item">
					<div class="title">title</div>
					<div class="text">沙发</div>
					<div class="time">2012-12-22 22:12:34</div>
				</div>
			</div>
		</div>

		<div class="list_null" v-if="list.length==0">
			<List_null title="暂无评论" />		
		</div>


	</div>
	

</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
			list:[{},{}]
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
.comment_list{
	.khr_bg();
}
.comment_wrapper{
	padding: 8px;	
	.comment_box{
		.items{
			.item{
				background: #fff;
				border-radius: 4px;
				border: 1px solid #eee;
				margin-bottom: 12px;

				.title{
					height: 32px;
					line-height: 32px;
					font-size: 12px;
					padding-left: 8px;
					// border-bottom: 1px solid #eee;
					.ell();
				}
				.text{
					padding: 8px;
					// border-bottom: 1px solid #eee;
					line-height: 26px;
			    max-height: 100px;
			    text-overflow:ellipsis; 
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 3;
			    overflow: hidden;
			    color: #666;
				}
				.time{
					height: 32px;
					line-height: 32px;
					font-size: 12px;
					text-align: right;
					color: #666;
					padding-right: 16px;
				}
			}
		}
	}
}
</style>