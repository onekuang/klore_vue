<template>
<div class="lesson_list">
<div class="list">
		<div class="ul">
			<div class="li">第一章</div>
			<div class="li">
				<div class="ul2">
					<router-link tag="div" class="li2" to='/videoinfo'>
						<div class="item">
							<div class="left"><i class="iconfont icon-bofang"></i></div>
							<div class="text"> 1-1　学习准备</div>
						</div>
					</router-link>
					<router-link tag="div" class="li2" to='/videoinfo'>
						<div class="item">
							<div class="left"><i class="iconfont icon-bofang"></i></div>
							<div class="text"> 1-2　课程介绍</div>
						</div>
					</router-link>
					<router-link tag="div" class="li2" to='/videoinfo'>
						<div class="item">
							<div class="left"><i class="iconfont icon-suo"></i></div>
							<div class="text"> 1-3　课程名称</div>
						</div>
					</router-link>
					<router-link tag="div" class="li2" to='/videoinfo'>
						<div class="item">
							<div class="left"><i class="iconfont icon-suo"></i></div>
							<div class="text"> 1-4　课程名称</div>
						</div>
					</router-link>
				</div>
			</div>
			<div class="li">总结</div>
			<div class="li">
				<div class="ul2">
					<router-link tag="div" class="li2" to='/videoinfo'>
						<div class="item">
							<div class="left"><i class="iconfont icon-suo"></i></div>
							<div class="text">2-1　课程名称</div>
							<!-- <div class="right"><i class="iconfont icon-suo"></i></div> -->
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name:"lessons_list",
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
	components: {}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.lesson_list{
	.list{
		.ul{
			// padding-left: 8px;
			.li{
				padding-left: 8px;
				min-height: 24px;
				color: #333;
				font-size: 14px;
				margin-bottom: 12px;
				.ul2{
					padding: 0 10px 0 4px;
					.li2{
						height: 30px;
						line-height: 30px;
						padding-left: 4px;
						border-bottom: 1px solid #f5f5f5;
						font-size: 12px;
						color: #666;
						.item{
							display: flex;
							.left{
								flex: 0 0 24px;
							}
							.text{
								flex: 1;
								font-size: 12px;
								.ell();
							}
							.right{
								flex: 0 0 20px;
								text-align: right;
								margin-right: 8px;
							}
						}
						.icon-bofang {
							font-size: 14px;
							color: @orange;
						}
					}
				}
			}
		}
	}
}
</style>