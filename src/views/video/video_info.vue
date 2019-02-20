<template>
<div class="video_info page">

	<k_header title="视频" />
	
	<div class="video">
		<video id="video1" controls name="media">
			<source src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4" type="video/mp4" />
	    Your browser does not support HTML5 video.
		</video>
	</div>


	<div class="video_info">
		<div class="title">
			1-1 课程标题
		</div>
		<div class="khr"></div>

		<div class="param">
			<div class="items">
				<div class="item">
					<div class="top">累计评论</div>
					<div class="text">998 <span>条</span></div>
				</div>
				<div class="item">
					<div class="top">学习人数</div>
					<div class="text">12678 <span>人</span></div>
				</div>
				<div class="item">
					<div class="top">综合评分</div>
					<div class="text">9.8 <span>分</span></div>
				</div>
			</div>
		</div>
		
	</div>



	<div class="index_title">评论</div>  	
	<div class="comment_list">
		<div class="ul">
			<div class="li" v-for="item in 3">
				<div class="item">
					<div class="avatar">
						<img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132">
					</div>
					<div class="info">
						<div class="top">
							<div class="title">userName</div>
							<div class="time">2011-11-22</div>
						</div>
						<div class="desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos asperiores in recusandae officiis quae soluta culpa eveniet explicabo, iusto atque doloribus id accusamus dolores aspernatur veritatis. Ab, minus amet nam.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	<!-- 评论底栏 -->

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
.video{
	video{
		width: 100%;
	}
}

.video_info{
	margin-bottom: 12px;
	.title{
		font-size: 16px;
		height: 36px;
		line-height: 36px;
	}
	.param{
		.items{
			display: flex;
			padding: 12px 0;
			border-bottom: 1px solid #f5f5f5;
			.item{
				flex: 1;
				text-align: center;
				border-right: 1px solid #f5f5f5;
				&:last-child{
					border-right: none;
				}
				.top{
					height: 30px;
					line-height: 30px;
					font-size: 13px;
				}
				.text{
					font-size: 16px;
					height: 24px;
					line-height: 24px;
					color: @active;
					span{
						font-size: 12px;
					}
				}
			}
		}
	}
}

.comment_list{
	.ul{
		padding: 0 6px;
		.li{
			padding: 12px 0;
			border-bottom: 1px solid #f5f5f5;
			.item{
				display: flex;
				.avatar{
					flex: 0 0 60px;
					padding: 5px;
					margin-right: 8px;
					img{
						height: 50px;
						width: 50px;
					}
				}
				.info{
					flex: 1;
					.top{
						display: flex;
						height: 40px;
						line-height: 40px;
						.title{
							flex: 1;
							font-size: 14px;
						}
						.time{
							flex: 1;
							padding-right: 12px;
							font-size: 12px;
							text-align: right;
							color: #999;
						}
					}
				}
			}
		}
	}
}
</style>