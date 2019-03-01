<template>
<div class="video_info page app_head">
	
	<k_header title="电子书详情" />
	
	<div class="banner">
		<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width="100%" height="200">
	</div>

	



	

	<mu-container>
	  <mu-tabs :value.sync="active2" color="#0586D1" inverse indicator-color="#0586D1" full-width>
	    <mu-tab>简介</mu-tab>
	    <mu-tab>目录</mu-tab>
	    <mu-tab>相关推荐</mu-tab>
	  </mu-tabs>


		<!-- 课程简介 -->
	  <div class="demo-text" v-show="active2 === 0">
	    <div class="info_box">
	    	<div class="title">傲慢与偏见</div>
	    	<div class="desc">　伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆　饰）这5个出身于小地主家庭的姐妹个个如花似玉。<br><br>
	    	班纳特太太（布兰达·布莱斯饰）最大的人生目标就是给她的这5个女儿都找到如意的郎君。可惜天不从人愿，二女儿伊丽莎白总能找出100个不愿结婚的理由拒绝母亲。<br><br>当班纳特太太听说邻近的庄园被一个富有的单身汉租下，并且会带着他那些有身份的朋友们前来消夏时，她兴奋地认定这是女儿们的福分，求婚的人眼看着就要上门了，而事情也正如她预想的那样发展开来。姐妹5人原本单调且略显平静的生活伴随着富有的单身汉达西（马修·麦克费登饰）和他的好友格莱两个年轻小伙子的到来而泛起了波澜。健康向上的格莱和富家子达西这对要好的朋友在结识了镇上班纳特家的这五朵金花之后，一段美丽而饱含傲慢与偏见的爱情故事就此展开。</div>
	    	<div class="momey_box">
	    		<!-- <div class="money"> <span>3</span>积分 / 节</div> -->
	    	</div>
	    </div>

	    <!-- 参数列表 -->
	    <!-- <div class="param_table">
	    	<div class="items">
	      	<div class="item">
	    			<mu-row>
	    	    	<mu-col span="4">
	    	    		<div class="grid-cell"><div class="key">课程名称</div></div>
	    	    	</mu-col>
	    	    	<mu-col span="8">
	    	    		<div class="grid-cell"><div class="value">课程名称</div></div>
	    	    	</mu-col>
	    	  	</mu-row>
	      	</div>
	      	<div class="item">
	    			<mu-row>
	    	    	<mu-col span="4">
	    	    		<div class="grid-cell"><div class="key">讲师名称</div></div>
	    	    	</mu-col>
	    	    	<mu-col span="8">
	    	    		<div class="grid-cell"><div class="value">admin</div></div>
	    	    	</mu-col>
	    	  	</mu-row>
	      	</div>
	      	<div class="item">
	    			<mu-row>
	    	    	<mu-col span="4">
	    	    		<div class="grid-cell"><div class="key">章节总数</div></div>
	    	    	</mu-col>
	    	    	<mu-col span="8">
	    	    		<div class="grid-cell"><div class="value">12节</div></div>
	    	    	</mu-col>
	    	  	</mu-row>
	      	</div>
	      	<div class="item">
	    			<mu-row>
	    	    	<mu-col span="4">
	    	    		<div class="grid-cell"><div class="key">收费标准</div></div>
	    	    	</mu-col>
	    	    	<mu-col span="8">
	    	    		<div class="grid-cell"><div class="value">免费</div></div>
	    	    	</mu-col>
	    	  	</mu-row>
	      	</div>
	    	</div>
	    </div> -->
	    
	    <!-- <div class="detail">
	    	简介<br>
	    	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus dolorum cupiditate cum neque consectetur voluptas ex ducimus sequi, ratione expedita possimus, ullam ipsam aperiam accusantium et modi officiis in.
	    </div> -->
	  </div>

		<!-- 目录 -->
	  <div class="demo-text" v-show="active2 === 1">
	    <!-- 章节 -->
	    <div class="lesson_list">
	    <div class="list">
	    		<div class="ul">
	    			<div class="li">第一章</div>
	    			<div class="li">
	    				<div class="ul2">
	    					<router-link tag="div" class="li2" to='/book_info'>
	    						<div class="item">
	    							<div class="left"><i class="iconfont icon-yanjing-kong"></i></div>
	    							<div class="text"> 1-1　title</div>
	    						</div>
	    					</router-link>
	    					<router-link tag="div" class="li2" to='/book_info'>
	    						<div class="item">
	    							<div class="left"><i class="iconfont icon-yanjing-kong"></i></div>
	    							<div class="text"> 1-2　title</div>
	    						</div>
	    					</router-link>
	    				</div>
	    			</div>
	    			<div class="li">第二章</div>
	    			<div class="li">
	    				<div class="ul2">
	    					<router-link tag="div" class="li2" to='/book_info'>
	    						<div class="item">
	    							<div class="left"><i class="iconfont icon-suo"></i></div>
	    							<div class="text">2-1　title</div>
	    							<!-- <div class="right"><i class="iconfont icon-suo"></i></div> -->
	    						</div>
	    					</router-link>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	  </div>



	  <!-- 推荐 -->
	  <div class="demo-text" v-show="active2 === 2">
	    <div class="book_wrapper">
	    	<div class="items">
	    		<div class="item" v-for="i in 4">
	    			<div class="img">
	    				<img src="https://images-cn.ssl-images-amazon.com/images/I/51dmO8LM2LL._SL150_.jpg" width=100 height=120>
	    			</div>
	    			<div class="info">
	    				<div class="inof_box">
	    					<div class="title">傲慢与偏见</div>
	    					<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore atque enim eos voluptas, minima commodi accusantium quidem quo ipsa facilis, incidunt aspernatur voluptatem, sapiente quod error unde nam cum expedita!</div>
	    				</div>
	    				<div class="time_box">
	    					<div class="name"><i class="iconfont icon-people"></i> name</div>
	    					<div class="tags">
	    						<div class="tag">热门</div>
	    						<!-- <div class="tag">玄幻</div> -->
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	  </div>
	</mu-container>

</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
import Lessons_list from "@/components/lessons_list/lessons_list.vue";

export default {
	data() {
		return {
			active2: 0
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){}
	},
	components: {Lessons_list,k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.banner{
	img{
		display: block;
	}
}
.video_info{
	padding-bottom: 90px;
	.info_box{
		padding: 8px;
		.title{
			font-size: 16px;
			font-weight: 900;
			padding: 8px 0;
		}
		.desc{
			font-size: 14px;
			line-height: 24px;
			color: #888;
		}
		.momey_box{
			.money{
				text-align: right;
				height: 40px;
				line-height: 40px;
				color: #f00;
				font-size: 12px;
				span{
					font-size: 18px;
					margin-right: 4px;
				}
			}
		}
	}
	.param_table{
		padding: 12px 8px;
		.khr_bg();
		.items{
			background: #fff;
			border-radius: 6px;
			.item{
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #f5f5f5;
				&:nth-of-type(1) {
					border-top: 1px solid #f5f5f5;
				}
				.key{
					border-left: 1px solid #f5f5f5;
					border-right: 1px solid #f5f5f5;
					text-align: center;
					font-size: 12px;
				}
				.value{
					padding-left: 8px;
					font-size: 12px;
				}
			}
		}
	}
	.detail{
		padding: 12px 2px;
	}
}
.book_wrapper{
	.items{
		padding-top: 8px;
		.item{
			padding: 4px 8px;
			margin-bottom: 12px;
			display: flex;
			.img{
				flex: 0 0 100px;
				width: 100px;
				text-align: center;
				img{
					width: 90px;
					height: 120px;
				}
			}
			.info{
				height: 120px;
				flex: 1;
				min-width: 0;
				padding-left: 8px;
				position: relative;
				.title{
					font-weight: 900;
					.ell();
				}
				.desc{
					color: #888;
					margin-top: 4px;
					font-size: 14px;
			    line-height: 22px;
			    max-height: 44px;
			    text-overflow:ellipsis; 
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
				}
				.time_box{
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					.name{
						float: left;
						font-size: 12px;
						color: #666;
						margin-left: 8px;
					}
					.tags{
						float: right;
						.tag{
							font-size: 12px;
							float: left;
							display: inline-block;
							margin-right: 4px;
							border: 1px solid #eee;
							padding: 0px 4px;
							border-radius: 4px;
							color: @orange;
						}
					}
				}
			}
		}
	}
}

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
						.icon-yanjing-kong {
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