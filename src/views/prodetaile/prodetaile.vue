<template>
<div class="prodetaile ab_full">
<BScroll 	class="box_wrapper" ref="scroll">
<div style="padding-bottom: 60px;">
	<!-- 轮播图 -->
	<swipe
	  v-model="index"
	  style="text-align: center;height: 250px;"
	  :autoplayTime = autoplayTime
	>
	  <swipe-item>
	    <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540516795&di=ffdcdba1dc6c46089a23dbe04d7f0040&src=http://img4.duitang.com/uploads/item/201605/20/20160520091727_ewYMQ.jpeg" width="100%" height="250">
	  </swipe-item>
	  <swipe-item>
	    <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540516795&di=ffdcdba1dc6c46089a23dbe04d7f0040&src=http://img4.duitang.com/uploads/item/201605/20/20160520091727_ewYMQ.jpeg" width="100%" height="250">
	  </swipe-item>
	</swipe>

	
	<div class="detaile">
		<div class="info_top">
			<div class="title">四川麻辣火锅</div>
			<div class="site"><i class="iconfont icon-shouhuodizhi"></i> 南城区汇一城</div>
			<div class="desc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem inventore sit facere asperiores et ea minima nesciunt, ab in corporis repellendus similique sed ipsa quam veritatis quidem eveniet. Ipsam, eum!
			</div>
		</div>
		
		<div class="khr"></div>
		<div class="comment_list_wrapper">
			<div class="comment_box">
				<div class="title">
					评论（100+）
				</div>
				<div class="item" v-for="item in 3">
					<div class="userinfo">
						<div class="img">
							<img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540516795&di=ffdcdba1dc6c46089a23dbe04d7f0040&src=http://img4.duitang.com/uploads/item/201605/20/20160520091727_ewYMQ.jpeg" width="32" height="32" >
						</div>
						<div class="name">
							usename
						</div>
						<div class="time">
							1999-11-19 17:23:48
						</div>
					</div>
					<div class="comment">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid in aliquam aperiam. Eveniet natus blanditiis optio eaque, voluptas, voluptatum fugiat vel perferendis ducimus fugit, culpa laudantium reprehenderit officia repellendus nesciunt?
					</div>
				</div>


			</div>
		</div>
	</div>
</div></BScroll>

<div class="tab_wrapper">
	<div class="tab_box">
		<div class="pinglun" @click="toggle_model(1)" :class="{chen: comment_show}">
			<i class="iconfont icon-message_light"></i>
			<span >评论</span>
		</div>
		<div class="liwu" @click="toggle_model(2)"  :class="{chen: liwu_show}">
			<i class="iconfont icon-jiangpin"></i>
			<span>礼品</span>
		</div>
		<div class="vote">
			<div>投TA一票</div>
		</div>
	</div>

	<!-- 评论弹出 -->
	<div class="pinglun_text" v-show="comment_show">
		<textarea name="textarea" rows="3" placeholder="请输入评论内容"v-model="textarea"></textarea>
		<div class="btn_box text-right">
			<span>评论</span>
		</div>
	</div>

	<!-- 礼物弹出 -->
	<div class="liwu_text" v-show="liwu_show">

		<div class="item_box">
			<div class="item" 
				:class="{active:liwu_index == index}"
				v-for="(item, index) in liwu_list" 
				:key="item.id" 
				@click="select_liwu(index)"
			>
				<p>{{item.title}}</p><p>{{item.num}}元</p>
			</div>
		</div>

		<div class="btn_box text-right">
			<span>立即支付</span>
		</div>
	</div>
</div>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	name:"prodetaile",
	data() {
		return {
			index: 0, // two way
			autoplayTime: 3000,

			comment_show: false,
			textarea:"",

			liwu_show: true,
			liwu_index: 0,
			liwu_list : [
				{id: 1, title: '送钻石', num: 1},
				{id: 2, title: '送钻石', num: 5},
				{id: 3, title: '送钻石', num: 10},
				{id: 4, title: '送钻石', num: 50},
				{id: 5, title: '送钻石', num: 100},
				{id: 6, title: '送钻石', num: 500},
			]
		}
	},
	created() {
		this.all_hide()
	},
	methods: {
		all_hide() {
			this.comment_show = false
			this.liwu_show = false
		},
		toggle_model(num) {
			if(num == 1) {
				this.liwu_show = false
				this.comment_show = !this.comment_show
				return
			}
			if(num == 2) {
				this.comment_show = false
				this.liwu_show = !this.liwu_show
				return
			}
		},
		select_liwu(index) {
			this.liwu_index = index
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.prodetaile{
	.tab_wrapper{
		position: fixed;
		background: #fff;
		bottom: @footer_height;
		left: 0;
		right: 0;
		height: 50px;
		border-top: 1px solid #eee;
		text-align: center;
		.tab_box{
			display: flex;
			.pinglun, .liwu {
				flex: 0 0 80px;
				width: 80px;
				font-size: 12px;
				color: #666;
				i {
					font-size: 24px;
				}
				span {
					display: block;
					line-height: 2px;
				}
			}
			.vote {
				flex: 1;
				line-height: 50px;
				margin-left: 20px;
				color: #fff;
				background: linear-gradient(left, #FF8F2B,#FF715B );
			}
		}
		.pinglun_text{
			z-index: 3;
			position: absolute;
			bottom: 50px;
			left: 0;
			right: 0;
			height: 160px;
			padding: 8px;
			background: #fff;
			border-top: 1px solid #ccc;
			textarea{
				width: 100%;
				height: 100px;
			}
			span {
				display: inline-block;
				width: 50px;
				border-radius: 8px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				color: #fff;
				background: linear-gradient(left, #FF8F2B,#FF715B );
			}
		}
		.liwu_text{
			z-index: 3;
			position: absolute;
			bottom: 50px;
			left: 0;
			right: 0;
			padding: 8px;
			background: #fff;
			border-top: 1px solid #ccc;
			.item_box{
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				.item{
					flex: 0 0 30%;
					width: 30%;
					height: 50px;
					background: #eee;
					margin: 8px 1%;		
					padding-top: 4px;			
					color: #fff;
					border-radius: 4px;
					p {
						color: #FF715B;
					}
					&.active {
						background: #FF715B;
						p {
						color: #fff;
					}
					}
				}
			}
			span {
				display: inline-block;
				width: 80px;
				border-radius: 8px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				color: #fff;
				background: linear-gradient(left, #FF8F2B,#FF715B );
			}
		}
	}
}
.info_top{
	padding: 8px;
	.title{
		font-size: 18px;
		font-weight: 600;
	}
	.site {
		color: #666;
		font-size: 14px;
		margin-top: 6px;
		margin-bottom: 12px;
	}
	.desc {
		color: #666;
		font-size: 14px;
	}
}

.comment_list_wrapper{
	.comment_box{
		padding: 8px;
		.title{
			border-left: 2px solid #FF8110;
			text-indent: 8px;
		}
		.item {
			margin-bottom: 20px;
			margin-top: 20px;
			padding-bottom: 6px;
			border-bottom: 1px solid #eee;
			.userinfo{
				display: flex;
				align-items: center;
				margin-bottom: 8px;
				.img{
					flex: 0 0 40px;
					width: 40px;
					img{
						border-radius: 50%;
					}
				}
				.name {
					flex: 1;
					font-size: 14px;
				}
				.time{
					flex: 0 0 130px;
					width: 130px;
					font-size: 12px;
					padding-right: 12px;
				}
			}
			.comment {
				font-size: 14px;
				text-indent: 1em;
				color: #666;
			}
		}
	}
}
.chen {
	color: #FF8F2B !important;
}
</style>
