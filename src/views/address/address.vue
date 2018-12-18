<template>
<div class="address ab_full">
<BScroll 	class="box_wrapper khr_bg" ref="scroll" >
<div>

<div class="site_list_wrapper">
	<div class="for_item" v-for="item in 30">
		<div class="item">
			<div class="heart">
				<div class="top">
					<div class="name">金闪闪</div>
					<div class="mobile">13421936693</div>
					<div class="setting extend-click" @click="goto_update(1)">
						<i class="iconfont icon-shezhi"></i>						
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="bottom">
					<i class="iconfont icon-dizhi3"></i>
					&nbsp;&nbsp;广东省南城区体育路口鸿禧商业大厦1234
				</div>
			</div>
			<div class="foot" v-show="false">
				<div class="update"><i class="iconfont icon-wenbenshuru"></i> 更改</div>
				<div class="delete"><i class="iconfont icon-deletefill"></i> 删除</div>
			</div>
		</div>
		<!-- <div class="khr"></div> -->
	</div>
</div>

</div></BScroll>

<div class="tab_add_box">
	<div class="tab_add_go">
		<div class="item">
			<i class="iconfont icon-tianjia3"></i>
		</div>
		<div class="item">
		 添加新地址	
		</div>
		<div class="item">
		 <i class="iconfont icon-you"></i>
		</div>
	</div>
</div>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	name:"k_address",
	data() {
		return {

		}
	},
	methods: {
		goto_update(id) {
			this.$router.push({
				path: `/address_update?id=${id}`
			})
		}
	},
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.site_list_wrapper{
	padding-bottom: 50px;
	.for_item{
		.khr_bg();
		padding-top: 8px;
		.item{
			border-radius: 6px;
			background: #fff;
			padding: 4px 8px 8px;
			margin: 2px 8px;
			.heart{
				padding-bottom: 4px;
				.top{
					margin-bottom: 10px;
					.name{
						float: left;
						font-size: 16px;
						margin-right: 12px;
						color: #000;
					}
					.mobile{
						float: left;
						margin-top: 2px;
						text-align: left;
						font-size: 14px;
						color: #666;
					}
					.setting {
						float: right;
						margin-top: 2px;
						font-size: 16px;
					}
				}
				.bottom{
					font-size: 14px;
					color: #333;
					i {
						font-size: 18px;
						color: #ff715b;
					}
				}
			}
			.foot{
				display: flex;
				justify-content: flex-end;
				border-top: 1px solid #eee;
				height: 24px;
				line-height: 16px;
				padding-top: 8px;
				.update {
					margin-right: 12px;
				}
				.delete {

				}
			}
		}
	}
}

.tab_add_box{
	position: fixed;
	left: 0;
	right: 0;
	bottom: @footer_height;
	height: 50px;
	border-top: 1px solid #eee;
	border-radius: 4px 4px 0 0;
	background: #fff;
	color: #666;
	.tab_add_go{
		height: 50px;
		display: flex;
		align-items: center;
		.item {
			flex: 1;
			&:nth-of-type(1) {
				flex: 0 0 50px;
				width: 50px;
				text-align: center;
				// color: @color_base;
				i {
					font-size: 24px;
					color: #ff675b;
				}
			}
			&:nth-of-type(2) {
				text-align: left;
			}
			&:nth-of-type(3) {
				text-align: right;
				margin-right: 12px;
			}
		}
	}	
}
</style>
