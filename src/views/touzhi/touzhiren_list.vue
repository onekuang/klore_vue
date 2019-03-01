<template>
<div class="page app_head">
<k_header title="投资人" />


<div class="touzhiren_list">
	<div class="list">
		<div class="items">
			<router-link tag="div" to="/touzhiren_detail" class="item" v-for='i in 13'>
				<div class="avatar">
					<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=54 height=54>
				</div>
				<div class="info">
					<div class="left">
						<div class="title">username</div>
						<div class="desc">IDG资本/合伙人/北京</div>
						<div class="text">1993年加入IDG资本,1995年开始主持IDG资本在众多的投资工作.之前,曾主持参与多项美国航天局的光纤器件研究.1981年毕业与中国科学技术大学</div>
					</div>
					<!-- <div class="right">
						<div class="money">￥199 </div>
						<div class="btn">了解更多</div>
					</div> -->
				</div>
			</router-link>
		</div>
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
.touzhiren_list{
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
					flex: 0 0 60px;
					img{
						border-radius: 50%;
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
							color: #bbb;
							font-size: 10px;
							margin-top: 8px;
						}	
					}
					.right{
						// float: right;
						flex: 0 0 70px;
						text-align: right;
						margin-right: 8px;
						.money{
							font-size: 13px;
							text-align: right;
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