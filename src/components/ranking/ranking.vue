<template>
<div class="ranking_wrapper ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>
	<div class="ranking_box">
		<div class="box">
			<div class="item">
				<div>1</div>
				<div>排 行</div>
			</div>
			<div class="item item2">
				<div class="img_box">
					<i class="iconfont icon-crownfill i1"></i>
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540557274680&di=7998bc27e6c543fbd4261bbc4216c637&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db10896995d0223dd54564e744b.jpg" width="100" height="100">
					<span class="span1">1</span>
				</div>
			</div>
			<div class="item">
				<div>4536</div>
				<div>票 数</div>
			</div>
		</div>
		<div class="title">四川菜</div>
	</div>
	

	<div style="text-align: center;font-size: 18px;">投票排行榜</div>
	
	<div class="ranking_list">
		<div class="for_ul">
			<div class="item" v-for="(item, index) in 10">
				<div class="ranking_index">
					<div v-if="index == 0"><img src="./no1.png" width="30" height="30"></div>
					<div v-else-if="index == 1"><img src="./no2.png" width="30" height="30"></div>
					<div v-else-if="index == 2"><img src="./no3.png" width="30" height="30"></div>
					<div v-else class="num">{{index + 1}}</div>
				</div>
				<div class="img_box">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540557274680&di=7998bc27e6c543fbd4261bbc4216c637&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db10896995d0223dd54564e744b.jpg" width="48" height="48">
				</div>
				<div class="info">
					<div class="title">四川麻辣火锅</div>
					<div class="site"><i class="iconfont icon-shouhuodizhi"></i> 南城汇一城</div>
				</div>
				<div class="ticket"><span>4526</span>票</div>
			</div>
		</div>
	</div>

</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	name:"ranking",
	data() {
		return {

		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.ranking_wrapper{
	.ranking_box{
		height: 250px;
		width: 100%;
		background: url(./ranking_bg.jpg);
		background-size: 100% 100%;
		.box{
			padding-top: 50px;
			display: flex;
			text-align: center;
			align-items: center;
			.item{
				flex: 1;
				text-align: center;
				color: #fff;
				& div:nth-of-type(1) {
					font-size: 20px;
				}
				.img_box{
					display: inline-block;
					width: 104px;
					height: 104px;
					border-radius: 50%;
					border: 2px solid #fff;
					img {
						border-radius: 50%;
					}
				}
			}
			.item2 {
				position: relative;
				.i1{
					position: absolute;
					top: -36px;
					color: #F9CD36;
					font-size: 36px;
					left: 50%;
					transform: translateX(-50%);
				}
				.span1{
					position: absolute;
					display: inline-block;
					width: 20px;
					height: 20px;
					background: #F9CD36;
					border-radius: 50%;
					font-size: 12px;
					line-height: 20px;
					text-align: center;
					border: 1px solid #fff;
					bottom: -5px;
					left: 50%;
					transform: translateX(-50%);

				}
			}
		}
		.title {
			text-align: center;
			margin-top: 12px;
			color: #fff;
			font-size: 18px;
		}
	}



	.ranking_list {
		.for_ul{
			padding: 6px;
			.item{
				background: #F0ECED;
				padding: 8px 6px;
				display: flex;
				align-items: center;
				margin: 6px 0;
				.ranking_index{
					flex: 0 0 40px;
					width: 40px;
					text-align: center;
					.num {
						display: inline-block;
						width: 20px;
						height: 20px;
						background: #ccc;
						color: #fff;
						border-radius: 50%;

					}
				}
				.img_box{
					img {
						border-radius: 50%;
					}
				}
				.info{
					flex: 1;
					padding-left: 10px;
					.site{
						font-size: 12px;
						margin-top: 4px;
					}
				}
				.ticket{
					flex: 0 0 50px;
				}
			}
		}
	}
}
</style>
