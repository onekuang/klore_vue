<template>
<div class="video_info page app_head">
	
	<k_header title="课程" />
	
	<div class="banner">
		<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width="100%" height="200">
	</div>

	



	

	<mu-container>
	  <mu-tabs :value.sync="active2" color="#0586D1" inverse indicator-color="#0586D1" full-width>
	    <mu-tab>课程简介</mu-tab>
	    <mu-tab>课程目录</mu-tab>
	    <mu-tab>相关推荐</mu-tab>
	  </mu-tabs>


		<!-- 课程简介 -->
	  <div class="demo-text" v-show="active2 === 0">
	    <div class="info_box">
	    	<div class="title">课程名称占位符</div>
	    	<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aspernatur aliquam quas sit numquam, dignissimos, provident magnam expedita nam inventore nisi quia hic sint nesciunt architecto natus ab mollitia in.</div>
	    	<div class="momey_box">
	    		<!-- <div class="money"> <span>3</span>积分 / 节</div> -->
	    	</div>
	    </div>

	    <!-- 参数列表 -->
	    <div class="param_table">
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
	    </div>
	    
	    <div class="detail">
	    	课程介绍占位符<br>
	    	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus dolorum cupiditate cum neque consectetur voluptas ex ducimus sequi, ratione expedita possimus, ullam ipsam aperiam accusantium et modi officiis in.
	    </div>
	  </div>

		<!-- 课程目录 -->
	  <div class="demo-text" v-show="active2 === 1">
	    <!-- 章节 -->
	    <div class="lessons">
	    	<h4 class="index_title">章节</h4>
	    	<div class="list_wrapper">
	    		<Lessons_list />
	    	</div>
	    </div>
	  </div>
	  <div class="demo-text" v-show="active2 === 2">
	    <div class="lessons_box">
	    	<div class="items">
	    		<router-link tag="div" to="/videodetail" class="item" v-for="item in 8">
	    			<mu-row>
	    				<mu-col span="4">
	    		    	<div class="grid-cell left">
	    		    		<div class="img_box"></div>
	    		    	</div>
	    		    </mu-col>
	    		    <mu-col span="8">
	    		    	<div class="grid-cell right">
	    		    		<div class="info">
	    		    			<div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, qui? Voluptate neque voluptatibus doloribus rerum non, dicta atque totam eos officia, provident excepturi inventore odit autem sint quos dolores maiores.</div>
	    		    			<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo, alias animi iusto neque, sint corrupti? Laudantium, dignissimos id excepturi facilis, facere saepe quasi placeat praesentium ipsa sapiente illo molestiae?</div>
	    		    			<div class="other">
	    		    				<!-- <div class="flag">
	    		    					<div class="tag">置顶</div>
	    		    				</div> -->
	    		    				<div class="time">4236人学习</div>
	    		    				<div class="count">共12节</div>
	    		    			</div>
	    		    		</div>
	    		    	</div>
	    		    </mu-col>
	    		    
	    		  </mu-row>
	    		</router-link>
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
.lessons_box{
		.items{
			padding: 0 12px;
			.item{
				padding: 16px 0;
				border-bottom: 1px solid #eee;
				.right{
					margin-left: 8px;
				}
				.info{
					.title{
						font-size: 16px;
						height: 20px;
						line-height: 20px;
						text-overflow:ellipsis; 
				    overflow: hidden;
					}
					.desc{
						font-size: 12px;
						height: 40px;
						line-height: 20px;
						color: #777;
						text-overflow:ellipsis; 
				    display: -webkit-box;
				    -webkit-box-orient: vertical;
				    -webkit-line-clamp: 2;
				    overflow: hidden;
					}
					.other{
						margin-top: 10px;
						.flag{
							float: left;
							.tag{
								font-size: 10px;
								color: #fff;
								background: #f00;
								padding: 0 4px;
								margin-right: 6px;
								margin-top: 2px;
								border-radius: 2px;
							}
						}
						.time{
							float: left;
							font-size: 10px;
							color: #666;
							i {
								font-size: 14px;
							}
						}
						.count{
							float: right;
							font-size: 12px;
							margin-right: 12px;
							color: #666;					
						}
					}
					
				}
				.img_box{
					width: 100%;
					padding-bottom: 80px;
					background: #eee;
					border-radius: 4px;
				}
			}
		}	
	}
</style>