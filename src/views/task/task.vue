<template>
<div class="task page app_head">
	<k_header title="每日任务" right='兑换' @r_click=r_click right_color='#888' />
	
	<div class="banner">
		<img src="https://lipstick.xsygood.com/bsck_img/task.jpg" width="100%">
	</div>
	
	<div class="task_list">
		<div class="items">
			<div class="item">
				<div class="top">长期任务</div>

				<div class="itm">
					<div class="content">
						<div class="task_top">
							<div class="title">邀请下载</div>
							<div class="icon"><i class="iconfont icon-tubiao207"></i><span class="text">+1</span></div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="right">
						<!-- <div class="task_btn start0">未完成</div> -->
						<div class="task_btn start1">待领取</div>
						<!-- <div class="task_btn start2">已领取</div> -->
					</div>
				</div>

				<div class="itm">
					<div class="content">
						<div class="task_top">
							<div class="title">邀请注册</div>
							<div class="icon"><i class="iconfont icon-tubiao207"></i><span class="text">+5</span></div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="right">
						<div class="task_btn start0">未完成</div>
					</div>
				</div>


			</div>
		</div>

		<div class="khr"></div>

		<div class="items">
			<div class="item">
				<div class="top">日常任务</div>

				<div class="itm">
					<div class="content">
						<div class="task_top">
							<div class="title">阅读新闻三十分钟</div>
							<div class="icon"><i class="iconfont icon-tubiao207"></i><span class="text">+2</span></div>
							<div class="clearfix"></div>
						</div>
						<!-- 进度条 -->
						<div class="tu">
							<mu-flex class="demo-linear-progress">
						    <mu-linear-progress mode="determinate" :value="100"   color="warning" />
						  </mu-flex>
						</div>
					</div>
					<div class="right">
						<!-- <div class="task_btn start0">未完成</div> -->
						<div class="task_btn start1">待领取</div>
						<!-- <div class="task_btn start2">已领取</div> -->
					</div>
				</div>

				<div class="itm">
					<div class="content">
						<div class="task_top">
							<div class="title">任务名称</div>
							<div class="icon"><i class="iconfont icon-tubiao207"></i><span class="text">+2</span></div>
							<div class="clearfix"></div>
						</div>
						<!-- 进度条 -->
						<div class="tu">
							<mu-flex class="demo-linear-progress">
						    <mu-linear-progress mode="determinate" :value="60"   color="warning" />
						  </mu-flex>
						</div>
					</div>
					<div class="right">
						<div class="task_btn start0">未完成</div>
					</div>
				</div>

				<div class="itm">
					<div class="content">
						<div class="task_top">
							<div class="title">任务名称</div>
							<!-- <div class="icon"><i class="iconfont icon-tubiao207"></i><span class="text">+2</span></div> -->
							<div class="clearfix"></div>
						</div>
						<!-- 进度条 -->
						<div class="tu">
							<mu-flex class="demo-linear-progress">
						    <mu-linear-progress mode="determinate" :value="100"   color="warning" />
						  </mu-flex>
						</div>
					</div>
					<div class="right">
						<div class="task_btn start2">已领取</div>
					</div>
				</div>


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
		get_data(){},
		r_click() {
			this.$router.push({
				path: `/getmoney`
			})
		}
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');

.task_list{
	.items{
		.item{
			.top{
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				padding-left: 6px;
				// border-left: 3px solid @color_base;
			}
			.itm{
				display: flex;
				margin: 8px;
				margin-bottom: 12px;
				padding: 8px;
				border-bottom: 1px solid #f5f5f5;
				.content{
					flex: 1;
					.task_top{
						.title{
							float: left;
							font-size: 14px;
						}
						.icon{
							float: left;
							margin-left: 8px;
							color: #efd300;
							.text{
								margin-left: 4px;
								font-size: 10px;
								color: #efd300;
							}
						}
					}
					.tu{
						width: 100px;
						margin-top: 8px;
						margin-bottom: 8px;
					}
				}
				.right{
					flex: 0 0 80px;
					text-align: right;
					.jindu_box{
						
					}
					.task_btn{
						display: inline-block;
						padding: 2px 12px;
						font-size: 13px;
						color: #ccc;
						border: 1px solid #ccc;
						border-radius: 20px;
						&.start1{
							color: @color_base;
							border: 1px solid @color_base;
						}
					}
				}
			}
		}
	}
}
</style>