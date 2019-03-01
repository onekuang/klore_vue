<template>
<div class="message page app_head">
	<k_header title="学院" />

	<div class="message_wrapper">
		<mu-tabs :value.sync="active2" color="#000" indicator-color="#0586D1" inverse full-width>
	    <mu-tab>创业课程</mu-tab>
	    <mu-tab>有声读物</mu-tab>
	    <mu-tab>电子书</mu-tab>
	  </mu-tabs>
	  <div class="mes_box mes_box_type1_1" v-if="active2 === 0">
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
	  <div class="mes_box mes_box_type3" v-if="active2 === 1">
	  	 <div class="items">
	  	 	<router-link to="/article" tag="div" class="item" v-for="item in 4">
	  	 		<div>	  	 			
	  	 				<div class="img" style="background: url('http://ykimg.alicdn.com/develop/image/2019-02-14/09b61bb8ec58137ec9e2fd3485071d5b.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1');"></div>	
					  	<div class="text">
						    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
						    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
						    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
						    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
					    </div>
					</div>
	  	 	</router-link>
	  	 </div>    
	  </div>
	  <div class="mes_box mes_box_type1_1" v-if="active2 === 2">
	  	<div class="items">
	  		<div class="item" v-for="item in 8">
	  			<mu-row>
	  				<mu-col span="4">
				    	<div class="grid-cell left">
				    		<div class="img_box"></div>
				    	</div>
				    </mu-col>
				    <mu-col span="8">
				    	<div class="grid-cell right">
				    		<div class="info">
				    			<div class="title">Harry Potter</div>
				    			<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo, alias animi iusto neque, sint corrupti? Laudantium, dignissimos id excepturi facilis, facere saepe quasi placeat praesentium ipsa sapiente illo molestiae?</div>
				    			<div class="other">
				    				<!-- <div class="flag">
				    					<div class="tag">置顶</div>
				    				</div> -->
				    				<div class="time"><i class="iconfont icon-yanjing1"></i> 4299</div>
				    				<div class="count">共 8 册</div>
				    			</div>
				    		</div>
				    	</div>
				    </mu-col>
				    
				  </mu-row>
	  		</div>
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
			active2: 0
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
// 样式3 视频类型
.mes_box_type3{
	.items{
		padding: 6px;
		display: flex;
		flex-wrap: wrap;
		.item{
			padding-bottom: 12px;
			border: 1px solid #eee;
			border-radius: 4px;
			margin-bottom: 12px;			
			flex: 49%;
			margin-right: 0.5%;
			.img{
				height: 0;
				padding-bottom: 60%;
				background: #eee;
				background-size: 100% 100%!important;
				background-repeat: no-repeat!important;
			}
			.text{
				font-size: 14px;
				line-height: 20px;
				text-overflow:ellipsis; 
		    display: -webkit-box;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp: 2;
		    overflow: hidden;
		    padding: 2px;
			}			
		}
	}
}

// 样式2 微博类型
.mes_box_type2{
	.items{
		padding: 0 6px;
		.item{
			padding: 12px 2px;
			border-bottom: 1px solid #eee;
			.head{
				display: flex;
				height: 60px;
				.avatar{
					flex: 0 0 60px;
					text-align: center;
					img{
						display: block;
						width: 50px;
						height: 50px;
						line-height: 60px;
					}
				}
				.name{
					flex: 1;
					.username{
						font-size: 14px;
						color: #333;
						height: 30px;
						line-height: 30px;
					}
					.time{
						height: 30px;
						font-size: 12px;
						color: #aaa;
					}
				}
				.other{
					flex: 80px;
					text-align: right;
					margin-top: 12px;
					color: #999;
					font-size: 10px;
				}
			}
			.text{
				font-size: 14px;
				// height: 60px;
				line-height: 20px;
				text-overflow:ellipsis; 
		    display: -webkit-box;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp: 3;
		    overflow: hidden;
			}
			.img_box{
				display: flex;
				flex-wrap: wrap;	
				margin-top: 8px;			
				&.img_length_3{
					.img{
						flex: 0 0 32%;
						padding-bottom: 30%;
						margin-right: 1%;
					}
				}
				&.img_length_4{
					.img{
						flex: 0 0 32%;
						padding-bottom: 30%;
						margin-right: 1%;
						margin-bottom: 4px;
					}
				}
				.img{
					background-size: 100% 100% !important;
					border-radius: 2px;
					height: 0;
				}
			}
		}
	}
}

// 样式1 左侧图片, 右侧文字信息
.mes_box_type1_1{
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