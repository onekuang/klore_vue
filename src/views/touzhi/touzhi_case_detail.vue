<template>
<div class="touzhi_detail page app_head">
<k_header title="项目详情" />
<!-- <div class="banner">
	<img src="https://lipstick.xsygood.com/bsck_img/a/banner.jpg" width="100%">
</div> -->


<div class="user_box">
	<div class="avatar">
		<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=80 height=80>
	</div>
	<div class="name">OysterPoint</div>
	<div class="desc">眼部医药研究商</div>
	<div class="address">A轮/海外</div>
</div>
<div class="khr"></div>


<div class="index_title">项目简介</div>  
<div class="info_box">
	<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sunt, fugit, sit quidem repellendus hic deserunt quae aliquam ut ad deleniti quibusdam reiciendis, voluptates. Esse nostrum ex beatae vitae modi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa incidunt maxime in sit qui vero, soluta ad! Labore impedit itaque non aut, laboriosam totam architecto, nulla ratione, vitae mollitia dicta.
	</div>
</div>

<div class="khr"></div>

<div class="index_title">公司介绍</div>  
<div class="table_box">
	<div class="items">
		<div class="item">
			<div class="left">公司全称：</div>
			<div class="right">西鲁夫有限公司</div>	
		</div>
		<div class="item">
			<div class="left">成立时间：</div>
			<div class="right">2016-1</div>	
		</div>
		<div class="item">
			<div class="left">公司规模：</div>
			<div class="right">30-50人</div>	
		</div>
		<div class="item">
			<div class="left">官方地址：</div>
			<div class="right">http://www.xxxxxx.com</div>	
		</div>
	</div>
</div>
<div class="khr"></div>




<div class="index_title">融资经历</div>  
<div class="jingli">
	<div class="items">
		<div class="item">
			<div class="dot">
				<i class="iconfont icon-radiobox"></i> <span>B轮</span>
			</div>
			<div class="info">
				<div class="desc">
					<div class="itm">
						<div class="key">
							<i class="iconfont icon-iconfontzhaomingdianzi"></i>
						</div>
						<div class="val">中信证卷/海松资本/诚信资本/SK电讯创投/民银资本中信证卷/海松资本/诚信资本/SK电讯创投/民银资本</div>
					</div>
					<div class="itm">
						<div class="key">
							<i class="iconfont icon-tubiao207"></i>
						</div>
						<div class="val">6000万美元</div>
					</div>
					<div class="itm">
						<div class="key"><i class="iconfont icon-shijian"></i></div>
						<div class="val">2019-02-27</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="khr"></div>



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
	computed: {
  },
	methods: {
		get_data(){},
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
	padding: 12px 0;
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

.jingli{
	.items{
		padding: 8px;
		.item{
			.dot{
				color: @orange;
				margin-bottom: 4px;
				font-size: 16px;
				span{
					color: #000;
					margin-left: 8px;
				}
			}
			.info{
				padding-left: 20px;
				.itm{
					display: flex;
					align-items: center;
					margin-bottom: 8px;
					.key{
						flex: 0 0 24px;
					}
					.val{
						font-size: 13px;
					}
					&:first-child{
						.val{
							color: @orange;
						}
					}
				}
			}
		}
	}
}
</style>