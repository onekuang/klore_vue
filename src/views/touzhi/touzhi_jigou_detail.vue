<template>
<div class="touzhi_detail page app_head">
<k_header title="投资机构详情" />
<!-- <div class="banner">
	<img src="https://lipstick.xsygood.com/bsck_img/a/banner.jpg" width="100%">
</div> -->


<div class="user_box">
	<div class="avatar">
		<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=80 height=80>
	</div>
	<div class="name">IDG资本</div>
</div>
<div class="khr"></div>


<div class="index_title">基本信息</div>  
<div class="table_box">
	<div class="items">
		<div class="item">
			<div class="left">成立时间：</div>
			<div class="right">1992年</div>	
		</div>
		<div class="item">
			<div class="left">机构总部：</div>
			<div class="right">北京</div>	
		</div>
		<div class="item">
			<div class="left">官方地址：</div>
			<div class="right">http://www.xxxxxx.com</div>	
		</div>
	</div>
</div>
<div class="khr"></div>




<div class="index_title">机构简介</div>  
<div class="info_box">
	<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sunt, fugit, sit quidem repellendus hic deserunt quae aliquam ut ad deleniti quibusdam reiciendis, voluptates. Esse nostrum ex beatae vitae modi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa incidunt maxime in sit qui vero, soluta ad! Labore impedit itaque non aut, laboriosam totam architecto, nulla ratione, vitae mollitia dicta.
	</div>
</div>






<div class="index_title">投资偏好</div>  
<div class="table_box">
	<div class="items">
		<div class="item">
			<div class="left">投资阶段：</div>
			<div class="right">种子轮/天使轮/A轮/B轮/C轮</div>	
		</div>
		<div class="item">
			<div class="left">投资领域：</div>
			<div class="right">人工智能/电子商务/大数据/B轮/C轮</div>	
		</div>
		<div class="item">
			<div class="left">基金规模：</div>
			<div class="right">700亿人民币,100亿美元</div>	
		</div>
		<div class="item">
			<div class="left">单笔投资：</div>
			<div class="right">2000-10000万人民币</div>	
		</div>
	</div>
</div>
<div class="khr"></div>

<div class="index_title">投资团队</div> 
<div class="touzhiren_list">
	<div class="list">
		<div class="items">
			<router-link tag="div" to="/touzhi_info" class="item" v-for='i in 4'>
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





<div class="khr"></div>

<div class="index_title">投资案例</div> 
<div class="case_list">
	<div class="list">
		<div class="items">
			<router-link tag="div" to="/touzhi_info" class="item" v-for='i in 3'>
				<div class="avatar">
					<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=54 height=54>
				</div>
				<div class="info">
					<div class="left">
						<div class="title">滴滴出行</div>
						<div class="desc">战略投资/汽车交通/北京</div>
						<div class="text">一个手机智能交通叫车系统</div>
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

<div class="khr"></div>

<!-- 底部tab -->
<div class="goods_tab">
	<div class="items">
		<!-- <div class="item">
			<div class="itm">
				<i class="iconfont icon-pingjiadengji"></i>
				<div class="text">关注</div>
			</div>
		</div> -->
		<div class="item">
			<div class="itm">
				<i class="iconfont icon-pingjiadengji"></i>
				<div class="text">关注</div>
			</div>
		</div>
		<div class="item">
			<i class="iconfont icon-text_icon"></i>&nbsp;&nbsp;发送商业计划书
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
.touzhi_detail{
	.index_title{
		border-left: 4px solid @orange;
		border-bottom: 1px solid #eee;
		margin-bottom: 8px;
		color: #000 !important;
	}	
}

.info_box{
	.desc{
		padding: 8px;
		font-size: 13px;
		color: #666;
	}
}

.user_box{
	text-align: center;
	padding: 20px 0;
	.avatar{
		img {
			// border-radius: 50%;
		}
	}
	.name{
		font-size: 15px;
	}
	.desc{
		font-size: 12px;
		color: #777;
		margin-top: 10px;
	}
	.address{
		margin-top: 8px;
		font-size: 12px;
		color: #bbb;
	}
}


.case_list{
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
						// border-radius: 50%;
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
							margin-top: 6px;
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


.table_box{
	.items{
		padding: 8px;
		.item{
			display: flex;
			margin-bottom: 12px;
			.left{
				flex: 0 0 80px;
				letter-spacing: 1px;
			}
			.right{
				flex: 1;
				color: #777;
				font-size: 12px;
				padding-top: 2px;
			}
		}
	}
}


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


.goods_tab{
		z-index: 999;
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		height: 56px;
		.items{
			display: flex;
			.item{
				flex: 0 0 70px;
				height: 60px;				
				font-size: 15px;				
				text-align: center;
				background: #fff;
				.itm{
					height: 50px;
					margin-top: 5px;
					i{
						font-size: 20px;
					}
					.text{
						font-size: 12px;
					}
				}
				&:last-child{
					flex: 1;
					color: #fff;
					line-height: 60px;
					background: @orange;
				}
			}
		}
	}
</style>