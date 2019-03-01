<template>
<div class="jigou page app_head">
<k_header title="创业公司" />

<div class="list">
	<div class="items">
		<router-link tag="div" to="/touzhi_case_detail" class="item" v-for='i in 13'>
			<div class="avatar">
				<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=60 height=60>
			</div>
			<div class="info">
				<div class="left">
					<div class="title">滴滴出行</div>
					<div class="desc">一个手机智能交通叫车系统</div>
					<div class="text">02-26　C轮</div>
				</div>
				<div class="right">
					<div class="money">汽车交通</div>
				</div>
			</div>
		</router-link>
	</div>
</div>

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
.jigou{
	.list{
		.items{
			padding: 6px;
			padding-bottom: 0;
			.item{
				display: flex;
				margin-bottom: 12px;
				border-bottom: 1px solid #eee;
				padding: 8px 0px;
				&:last-child{
					margin-bottom: 0;
					border-bottom: 0;
				}
				.avatar{
					flex: 0 0 70px;
					img{
						// border-radius: 50%;
					}
				}
				.info{
					flex: 1;
					display: flex;
					.left{
						flex: 1;
						.title{
							margin-bottom: 4px;
						}
						.desc{
							color: #888;
							font-size: 12px;
						}						
						.text{
							color: #aaa;
							font-size: 10px;
							margin-top: 6px;
						}	
					}
					.right{
						// float: right;
						flex: 0 0 70px;
						text-align: right;
						margin-right: 8px;
						.money{
							font-size: 12px;
							text-align: right;
							color: #999;
						}
						.btn{
							display: inline-block;
							margin-top: 24px;
							font-size: 12px;
							color: @orange;
							border: 1px solid @orange;
							border-radius: 12px;
							padding: 2px 8px;
						}
					}
				}
			}
		}
	}
}
</style>