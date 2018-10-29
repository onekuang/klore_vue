<template>
	<!-- 投票系统 -->
<div class="home2 ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>
	<div class="theme1">
	<!-- 轮播图 -->
	<swipe
	  v-model="index"
	  style="text-align: center;height: 210px;"
	  :autoplayTime = autoplayTime
	>
	  <swipe-item>
	    <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540516795&di=ffdcdba1dc6c46089a23dbe04d7f0040&src=http://img4.duitang.com/uploads/item/201605/20/20160520091727_ewYMQ.jpeg" width="100%" height="210">
	  </swipe-item>
	  <swipe-item>
	    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540557274680&di=7998bc27e6c543fbd4261bbc4216c637&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db10896995d0223dd54564e744b.jpg" width="100%" height="210">
	  </swipe-item>
	</swipe>
	

	
		<div class="showdata">
			<div class="item">
				<div class="num">2114</div>
				<div class="text">参与选手</div>
			</div>
			<div class="item">
				<div class="num">10212</div>
				<div class="text">累计投票</div>
			</div>
			<div class="item">
				<div class="num">12345</div>
				<div class="text">访问量</div>
			</div>
		</div>
	
		<div class="baoming">

			<div class="search_box">
				<Search :placeholder=search_placeholder :iconcolor=search_icon_color />
			</div>

			<div class="time_box theme1_huodong">
				<div class="activity">
					<i class="iconfont icon-text_icon"></i>
					<div>活动介绍</div>
				</div>
				<div class="countdown">
					<CountDown :end_time=end_time @overtime=over_time />
				</div>
			</div>

			<div class="btn_box">
				<span class="baoming_btn theme1_btn">
					立即报名
				</span>
			</div>
		</div>
		
		<div class="index_tab">
			<div class="item border">默认排序</div>
			<div class="item">最新参与</div>
			<div class="item">人气排行</div>
		</div>
		
		<div class="pro_list_wrapper">
			<div class="item" v-for="item in 4">
				<div class="img_box" @click="goto_votedetail">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540557274680&di=7998bc27e6c543fbd4261bbc4216c637&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db10896995d0223dd54564e744b.jpg" width="100%" @load="loadImage">
					<div class="youhui">
						19999票
					</div>
				</div>
				<div class="info_wrapp">
					<div class="info">
						<span class="title">四川火锅</span>
						<!-- <span class="ticket">8000票</span> -->
					</div>
					<div class="site">南城区汇一城5号楼</div>
					<span class="btn theme1_btn">投票</span>
				</div>
			</div>
		</div>







</div> <!-- theme -->
</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import Search from '@/components/base/search/search'
import CountDown from '@/components/base/countdown/countdown'
export default {
	name:"home2",
	data() {
		return {
			index: 0, // two way
			autoplayTime: 3000,
			search_placeholder:"搜索名称和编号",
			search_icon_color:"#333",
			end_time:1541755502000

		}
	},
	methods: {
		over_time() {
			console.log('结束计时')
		},
		goto_votedetail() {
			this.$router.push({
				path: `/votedetail`
			})
		},
		// 让图片加载完,在重新计算scroll的高度
		loadImage() {
		  if (!this.checkLoaded) {
		    this.checkLoaded = true
		    this.$refs.scroll.refresh()
		  }
		},
	},
	components: {
		BScroll,Search,CountDown
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');




.showdata{
	display: flex;
	padding: 12px 0;
	.item{
		flex: 1;
		position: relative;
		text-align: center;
		.num{
			font-size: 24px;
		}
		&:nth-of-type(1), &:nth-of-type(2) {
			&::after{
				content: "";
				display: inline-block;
				width: 1px;
				height: 50%;
				// background: rgba(0, 0, 0, .3);
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
}

.baoming{
	margin: 8px;
	border-radius: 8px;
	overflow: hidden;
	.search_box{
		padding: 8px 0;
	}
	.time_box{
		display: flex;
		.activity {
			flex: 0 0 100px;
			width: 100px;
			text-align: center;
			padding: 6px 0;
			i {
				font-size: 28px;
			}
			div {
				font-size: 14px;
			}
		}
		.countdown {
			flex: 1;
			padding: 6px 0;
		}		
	}
	.btn_box{
			text-align: center;
		.baoming_btn{
			display: inline-block;
			margin: 16px auto 16px;
			padding: 6px 30px;
			border-radius: 6px;
			font-size: 16px;
		}
	}
}
.index_tab{
	width: 100%;
	text-align: center;
	.item{
		display: inline-block;
		width: 80px;
		height: 32px;
		line-height: 32px;
	}
}
.pro_list_wrapper{
	display: flex;
	flex-wrap: wrap;
	padding: 6px;
	.item{
		flex: 0 0 50%;
		width: 50%;
		margin-bottom: 6px;
		padding: 4px;
		.img_box{
			position: relative;
			img{
				display:block;
				margin: 0;
				padding: 0;
			}
			.youhui{
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				background: rgba(0, 0, 0, .3);
				color: #fff;
				padding-left: 6px;
				font-size: 12px;
				padding:2px 8px;
				text-align: right;
			}
		}
		.info_wrapp{
			background: #fff;
			text-align: center;
			padding-top: 4px;
			.info {
				text-align: left;
				font-size: 14px;
				display: flex;
				.title{
					flex: 1;
					padding-left: 4px;
				}
				.ticket{
					text-align: right;
					padding-right: 4px;
					flex: 0 0 50px;
					font-size: 14px;
				}
			}
			.site {
				text-align: left;
				font-size: 12px;
				text-indent: 6px;
				margin-top: 4px;
			}
			.btn{
				display: inline-block;
				text-align: center;
				width: 80%;
				padding-top: 2px;
				padding-bottom: 2px;
				border-radius: 4px;
				margin: 12px auto;
			}
		}
	}
}
.theme1{
	background: linear-gradient(left, #FF8F2B,#FF715B );
	padding-bottom: 8px;
	.theme1_btn{
		color: #fff;
		background: linear-gradient(left, #FF8F2B,#FF715B );
	}
	.activity{
		background: #f5f5f5;
	}
	.countdown{
		background: #f9f9f9;
	}
	.showdata{
		.item{
			.num{
				color: #fff;
			}
			.text{
				color: #fff;
			}
			&:nth-of-type(1), &:nth-of-type(2) {
				&::after{
					background: rgba(255, 255, 255, .5);
				}
			}
		}
	}
	.baoming{
		background: #fff;
		.time_box {
			.activity {
				color: #FF8F2B;
			}
		}
	}
	.index_tab{
		border-bottom: 1px solid rgba(255, 255, 255, .5);
		.item{
			color: #fff;
			&.border {
				border-bottom: 1px solid #fff;
			}
		}
	}
}

</style>
