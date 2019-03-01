<template>
<div class="prolist page">
	<div class="header">
		<div class="left" @click="back"><i class="iconfont icon-icon--"></i></div>
		<div class="center">
			<div class="search_wrapper">
				<router-link tag="div" class="search_box" to="/search">
					<div class="search_input">
						<i class="iconfont icon-search"></i>&nbsp;&nbsp;请输入要搜索的内容
					</div>
				</router-link>
			</div>
		</div>
		<!-- <div class="right">搜索</div> -->
	</div>

	<div class="sort">
		<div class="box">
			<div class="left">
				<div class="click_l" :class="{'open_color': sort_l_show}" @click="show_left_sort">
					行业<i class="iconfont icon-down"></i>
				</div>
				<BScroll class="sort_left" ref="scroll1" v-show="sort_l_show">
					<div class="items">
						<div class="item" @click=sort_l_openChild(1)>
							<div class="text">item</div>
						</div>
						<div class="item">
							<div class="text">item</div>
						</div>
						<div class="item">
							<div class="text">item</div>
						</div>
						<div class="item">
							<div class="text">item</div>
						</div>
					</div>
				</BScroll>

				<BScroll class="sort_left2" ref="scroll1" v-show="sort_l_show2">
					<div class="items">
						<div class="item" @click=sort_l_select(2)>
							<div class="text">child</div>
						</div>
						<div class="item">
							<div class="text">child</div>
						</div>
						<div class="item">
							<div class="text">child</div>
						</div>
						<div class="item">
							<div class="text">child</div>
						</div>
					</div>
				</BScroll>
			</div>
			<div class="right">
				<div class="click_r" :class="{'open_color': sort_r_show}" @click="show_right_sort">投资金额<i class="iconfont icon-down"></i></div>
				<BScroll class="sort_right" ref="scroll3" v-show="sort_r_show">
						<div class="items">
							<div class="item">
								<div class="text">1万以下</div>
							</div>
							<div class="item">
								<div class="text">1-10万</div>
							</div>
							<div class="item">
								<div class="text">10-20万</div>
							</div>
							<div class="item">
								<div class="text">20-50万</div>
							</div>
							<div class="item">
								<div class="text">50-100万</div>
							</div>
							<div class="item">
								<div class="text">100万以上</div>
							</div>
						</div>
				</BScroll>
			</div>
		</div>
	</div>
	<div class="prolist_wrapper">
		<div class="box">
			<div class="items" v-for="item in 6">
					<router-link tag="div" to="/goodsdetaile" class="item">
						<div class="img"></div>
						<div class="info">
							<div class="top">
								<div class="title">加盟名字</div>
								<div class="flag">img</div>
							</div>
							<div class="desc">国际快时尚修仙百货领先品牌,超过1000家门店</div>
							<div class="tags" v-show="false">
								<div class="tag">实地考察地址</div>
								<div class="tag">带店培训</div>
								<div class="tag">装修指导</div>
								<div class="clearfix"></div>
							</div><br>
							<div class="bottom">
								<div class="money"><span>￥</span>40~80<span>万</span></div>
								<div class="num">4399已申请</div>
							</div>
						</div>
					</router-link>
				</div>
		</div>
	</div>

	
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	data() {
		return {			
			sort_l_show: false,		// 左侧筛选-显示状态			
			sort_l_show2: false,	// 左侧筛选-子分类-显示状态			
			sort_r_show: false,		// 右侧筛选-显示状态
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		sort_l_openChild(id){
			this.sort_l_show2 = true
		},
		sort_l_select(id) {
			console.log(id)
			this.sort_l_show = false
			this.sort_l_show2 = false
		},
		show_left_sort() {
			this.sort_r_show = false
			this.sort_l_show = !this.sort_l_show
			if(!this.sort_l_show) {
				this.sort_l_show2 = false
			}
		},
		show_right_sort() {
			this.sort_l_show = false
			this.sort_l_show2 = false
			this.sort_r_show = !this.sort_r_show
		},
		back() {
			window.history.back()
		}
	},
	components: {BScroll}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.prolist{
	.header{
		display: flex;
		height: 50px;
		line-height: 50px;
		background: #fff;
		color: #333;
		border-bottom: 1px solid #eee;
		.left{
			flex: 0 0 36px;
			i{
				font-size: 20px;
				margin-left: 4px;
			}
		}
		.center{
			flex: 1;
			text-align: center;
			font-size: 16px;
			.search_wrapper{
				height: 48px;
				.search_box{
					text-align: center;
					padding-top: 10px;
					.search_input{
						width: 95%;
						margin: 0 auto;
						height: 30px;
						line-height: 30px;
						border-radius: 4px;
						background: #f5f5f5;
						color:#999;
						font-size: 12px;
					}
				}	
			}
		}
		.right{
			flex: 0 0 50px;
			text-align: center;
		}
	}
}
.sort{
	.box{
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
		.left{
			flex: 1;
			position: relative;
			.sort_left,.sort_left2{
				position: absolute;
				left: 0;
				right: 0;
				padding-bottom: 60px;
				max-height: 520px;
				background: #fff;
				border: 1px solid #f5f5f5;
				overflow: hidden;
				.items{
					min-height: 550px;
					padding-bottom: 20px;
					.item{
						.text{
							font-size: 12px;
						}
						&.active{
							color: @active;
						}
					}
				}
			}
			.sort_left2{
				left: 100%;
				width: 100%;
			}
			.click_l{
				&.open_color{
					color: @active;
				}
			}
		}
		.right{
			flex: 1;
			position: relative;
			.sort_right{
				position: absolute;
				left: 0;
				right: 0;
				padding-bottom: 60px;
				max-height: 520px;
				background: #fff;
				border: 1px solid #f5f5f5;
				overflow: hidden;
				.items{
					min-height: 550px;
					padding-bottom: 20px;
					.item{
						.text{
							font-size: 12px;
						}
						&.active{
							color: @active;
						}
					}
				}
			}
			.click_r{
				&.open_color{
					color: @active;
				}
			}
		}
		i{
			margin-left: 8px;
			font-size: 12px;
		}
	}
}
.prolist_wrapper{
	padding: 0 12px;
	.box{
		.items{
			padding-bottom: 12px;
			padding-top: 12px;
			border-bottom: 1px solid #eee;
			&:nth-of-type(1) {
				border-top: 1px solid #eee;
			}
		}
		.item{
			display: flex;
			
			.img{
				flex: 0 0 35%;
				height: 0;
				padding-bottom: 30%;
				border-radius: 8px;
				background: #eee;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin-right: 12px;
			}
			.info{
				flex: 1;
				.top{
					display: flex;
					.title{
						font-size: 14px;
						font-weight: 900;
						margin-right: 4px;
					}
				}
				.desc{
					font-size: 12px;
					color: #333;
					line-height: 20px;
					margin-bottom: 4px;
					margin-top: 2px;
				}
				.tags{
					.tag{
						float: left;
						border: 1px solid @orange;
						margin-right: 6px;
						font-size: 10px;
						padding: 0 2px;
						border-radius: 4px;
						color: @orange;
						margin-bottom: 4px;
					}
				}
				.bottom{
					display: flex;
					.money{
						flex: 1;
						text-align: left;
						font-size: 18px;
						color: @red;
						span{
							font-size: 12px;
						}
					}
					.num{
						flex: 1;
						text-align: right;
						font-size: 12px;
						margin-top: 6px;
						color: #666;
					}
				}
			}
		}
		.apply_for{
			font-size: 12px;
			color: #666;
			margin-left: 20px;
		}
	}
}
</style>