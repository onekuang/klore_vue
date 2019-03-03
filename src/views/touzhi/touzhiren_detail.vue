<template>
<div class="touzhi_detail page app_head">
<k_header title="人物简介" />
<!-- <div class="banner">
	<img src="https://lipstick.xsygood.com/bsck_img/a/banner.jpg" width="100%">
</div> -->


<div class="user_box">
	<div class="avatar">
		<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=80 height=80>
	</div>
	<div class="name">username</div>
	<div class="desc">创业天使投资</div>
	<div class="address"><i class="iconfont icon-location"></i> 北京</div>
</div>
<div class="khr"></div>

<div class="index_title">投资偏好</div>  
<div class="table_box">
	<div class="items">
		<div class="item">
			<div class="left">投资阶段：</div>
			<div class="right">种子轮/天使轮/A轮/B轮/C轮</div>	
		</div>
		<div class="item">
			<div class="left">投资领域：</div>
			<div class="right">人工智能/电子商务/大数据</div>	
		</div>
		<div class="item">
			<div class="left">单笔投资：</div>
			<div class="right">2000-10000万人民币</div>	
		</div>
	</div>
</div>
<div class="khr"></div>

<div class="index_title">投资案例</div> 
<div class="case_list">
	<div class="list">
		<div class="items">
			<router-link tag="div" to="/touzhi_case_detail" class="item" v-for='i in 3'>
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

<div class="index_title">个人简介</div>  
<div class="info_box">
	<div class="desc">作为中国互联网代表人物及全球年度电子商务创新领袖人物  ，曾获中国经济年度人物及十大财智领袖人物、中国互联网年度人物  等多项国内外荣誉，并当选《福布斯》（亚洲版）2014年度商业人物。同时兼任金山、YY、猎豹移动等三家上市公司董事长。曾任两届海淀区政协委员，2012年当选北京市人大代表，2013年2月当选全国人民代表大会代表。2017年12月，荣获2017“质量之光”年度质量人物奖。
	</div>
</div>


<input 
	type="file" 
	class="file" 
	ref="uploadfile" 
	@change="upload($event)" 
	style="display: none;"
>

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
		<div class="item" @click="upload_file">
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
			goods_data:[ // 推荐数据
				{title:'学习辅导',image:"https://lipstick.xsygood.com/bsck_img/a/tj_a.jpg",flag:'教育'},
				{title:'学习辅导',image:"https://lipstick.xsygood.com/bsck_img/a/tj_b.jpg",flag:'教育'},
				{title:'学习辅导',image:"https://lipstick.xsygood.com/bsck_img/a/tj_c.jpg",flag:'教育'},	
			],
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		upload_file(e) {
			e.preventDefault();
			this.$refs.uploadfile.click();
			return false;
		},
		upload (e) {  
	    let files = e.target.files || e.dataTransfer.files;
	    if (!files.length) return; 
	    console.log(files[0]) 
	    let f = files[0];  
	    var formData = new window.FormData()
	    formData.append('userfile', f)
	  },  
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
	padding-left: 8px;
	padding-right: 8px;
	padding-bottom: 6px;
	.desc{
		color: #777;
		padding-left: 10px;
		padding-bottom: 8px;
		line-height: 26px;
		span{
			margin-right: 8px;
		}
		.items{
			font-size: 13px;
			.item{
				margin-bottom: 24px;
				.text{
					// padding-left: 6px;
					margin-top: 8px;
					.tag{
						padding: 4px 8px;
						display: inline-block;
						background: #eee;
						color: #333;
						font-size: 10px;
						margin-right: 8px;
						border-radius: 4px;
					}
				}
			}
		}
	}
}
.recommend_wrapper{
	padding: 0 12px;
	.recommend_box{
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
				background-size: 100% 100%!important;
				background-repeat: no-repeat!important;
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
					img{
						height: 18px;
					}
				}
				.desc{
					font-size: 12px;
					color: #333;
					line-height: 20px;
					height: 60px;
					max-height: 60px;
					overflow: hidden;
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
.user_box{
	text-align: center;
	padding: 12px 0;
	.avatar{
		img {
			border-radius: 50%;
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