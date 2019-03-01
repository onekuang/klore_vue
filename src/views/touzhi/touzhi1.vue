<template>
<div class="touzhi page app_head">
	
<k_header title="投资" />

<div class="touzhi_list">
	<div class="items">
		<router-link tag="div" to="/touzhi_info" class="item" v-for="i in 4"> 
			<div class="img">
				<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024">
			</div>
			<div class="info">
				<div class="top">
					<div class="left">投资机构</div>
					<div class="right">投资人</div>
					<div class="clearfix"></div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo possimus quam optio voluptas laudantium unde animi repellendus quas reprehenderit, dolorem asperiores aliquid magnam, necessitatibus qui quidem provident nisi magni perferendis.
				</div>
				<div class="bottom">更多 ></div>
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
.touzhi{
	background: #f5f5f5;
}
.touzhi_list{
	.items{
		padding: 8px;
		.item{
			margin-bottom: 30px;
			position: relative;
			.img{
				position: absolute;
				left: 4px;
				top: -20px;
				img{
					height: 140px;
					width: 110px;
					border-radius: 4px;
				}
			}
			
			.info{
				border-radius: 12px;
				margin-top: 20px;
				margin-left: 60px;
				padding-left: 70px;
				background: #fff;
				color: #5799FD;
				.top{
					height: 40px;
					line-height: 40px;
					border-bottom: 1px solid #eee;
					margin-right: 8px;
					.left{
						float: left;
					}
					.right{
						float: right;
						margin-right: 8px;
					}
				}
				.content{
					padding-top: 8px;
					font-size: 15px;
			    line-height: 22px;
			    height: 90px;
			    max-height: 100px;
			    text-overflow:ellipsis; 
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 4;
			    overflow: hidden;
			    color: #777;
				}
				.bottom{
					height: 32px;
					line-height: 32px;
					text-align: right;
					font-size: 12px;
					margin-right: 12px;
					color: #777;
				}
			}
			&:first-child{
				.info{
					background: linear-gradient( #5799FD, #7DD6F2);
					color: #fff;
					.top{
						border-color: #fff;
					}
				}
				.content{
					color: #fff;
				}
				.bottom{
					color: #fff;
				}
			}
		}
	}
}
</style>