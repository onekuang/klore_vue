<template>
<div class="message">
	
	<!-- 轮播组件 -->
  <div>
  	<k_swipe_banner @banner_click=banner_click :swipe_data=swipe_banner_data />
  </div>


	<!-- 导航组件 -->
  <k_swipe_nav 
    @tap_nav=tap_nav
      :swipe_data=swipe_nav_data
      :current_index =active_index
      :bullet=false />



	<div class="message_wrapper">
	    <div class="mes_box mes_box_type1" v-if="active2 === 0">
	    	<div class="items">
	    		<router-link tag="div" to="/article" class="item" v-for="(item,index) in 8">
	    			<mu-row>
	  			    <mu-col span="8">
	  			    	<div class="grid-cell left">
	  			    		<div class="info">
	  			    			<div class="title">华为发布5G多模终端芯片和商用终端</div>
	  			    			<div class="other">
	  			    				<div class="flag" v-show="index < 3">
	  			    					<!-- <div class="tag">置顶</div> -->
	  			    				</div>
	  			    				<div class="time">2月12日</div>
	  			    				<div class="count"><i class="iconfont icon-yanjing1"></i> 1234</div>
	  			    			</div>
	  			    		</div>
	  			    	</div>
	  			    </mu-col>
	  			    <mu-col span="4">
	  			    	<div class="grid-cell rigt">
	  			    		<div class="img_box" style="background: url('https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/press/news/2019/huawei-launches-5g-multi-mode-chipset-and-5g-cpe-pro/banner.jpg')"></div>
	  			    	</div>
	  			    </mu-col>
	  			  </mu-row>
	    		</router-link>
	    	</div>	    
	    </div>
	  <!-- <div class="mes_box mes_box_type2" v-if="active2 === 1">
	  	<div class="items">
	  	 	<div class="item" v-for="item in 4">
	  	 		<div>
					  <div class="head">
					  	<div class="avatar"><img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132"></div>
					  	<div class="name">
					  		<div class="username">username</div>
					  		<div class="time">1999-11-11</div>
					  	</div>
					  	<div class="other">预览: 1234</div>
					  </div>

					  	<div class="text">
						    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
						    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
						    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
						    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
					    </div>

					  	<div class="img_box img_length_4">
					  		<div class="img" style="background: #eee;">
					  		</div>	
					  		<div class="img" style="background: #eee;">
					  		</div>
					  		<div class="img" style="background: #eee;">
					  		</div>
					  	</div>
					</div>
	  	 	</div>
	  	 </div>		    
	  </div> -->
	  <div class="mes_box mes_box_type1" v-if="active2 === 1">
	  	<div class="items">
    		<router-link tag="div" to="/article" class="item" v-for="(item,index) in 8">
    			<mu-row>
  			    <mu-col span="8">
  			    	<div class="grid-cell left">
  			    		<div class="info">
  			    			<div class="title">华为发布5G多模终端芯片和商用终端</div>
  			    			<div class="other">
  			    				<div class="flag" v-show="index < 3">
  			    					<!-- <div class="tag">置顶</div> -->
  			    				</div>
  			    				<div class="time">2月12日</div>
  			    				<div class="count"><i class="iconfont icon-yanjing1"></i> 1234</div>
  			    			</div>
  			    		</div>
  			    	</div>
  			    </mu-col>
  			    <mu-col span="4">
  			    	<div class="grid-cell rigt">
  			    		<div class="img_box" style="background: url('https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/press/news/2019/huawei-launches-5g-multi-mode-chipset-and-5g-cpe-pro/banner.jpg')"></div>
  			    	</div>
  			    </mu-col>
  			  </mu-row>
    		</router-link>
    	</div>	  
	  </div>
	  <div class="mes_box mes_box_type1" v-if="active2 === 2">
	  	<div class="items">
    		<router-link tag="div" to="/article" class="item" v-for="(item,index) in 8">
    			<mu-row>
  			    <mu-col span="8">
  			    	<div class="grid-cell left">
  			    		<div class="info">
  			    			<div class="title">华为发布5G多模终端芯片和商用终端</div>
  			    			<div class="other">
  			    				<div class="flag" v-show="index < 3">
  			    					<!-- <div class="tag">置顶</div> -->
  			    				</div>
  			    				<div class="time">2月12日</div>
  			    				<div class="count"><i class="iconfont icon-yanjing1"></i> 1234</div>
  			    			</div>
  			    		</div>
  			    	</div>
  			    </mu-col>
  			    <mu-col span="4">
  			    	<div class="grid-cell rigt">
  			    		<div class="img_box" style="background: url('https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/press/news/2019/huawei-launches-5g-multi-mode-chipset-and-5g-cpe-pro/banner.jpg')"></div>
  			    	</div>
  			    </mu-col>
  			  </mu-row>
    		</router-link>
    	</div>	     
	  </div>
	  <div class="mes_box mes_box_type1" v-if="active2 === 3">
	  	<div class="items">
    		<router-link tag="div" to="/article" class="item" v-for="(item,index) in 8">
    			<mu-row>
  			    <mu-col span="8">
  			    	<div class="grid-cell left">
  			    		<div class="info">
  			    			<div class="title">华为发布5G多模终端芯片和商用终端</div>
  			    			<div class="other">
  			    				<div class="flag" v-show="index < 3">
  			    					<!-- <div class="tag">置顶</div> -->
  			    				</div>
  			    				<div class="time">2月12日</div>
  			    				<div class="count"><i class="iconfont icon-yanjing1"></i> 1234</div>
  			    			</div>
  			    		</div>
  			    	</div>
  			    </mu-col>
  			    <mu-col span="4">
  			    	<div class="grid-cell rigt">
  			    		<div class="img_box" style="background: url('https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/press/news/2019/huawei-launches-5g-multi-mode-chipset-and-5g-cpe-pro/banner.jpg')"></div>
  			    	</div>
  			    </mu-col>
  			  </mu-row>
    		</router-link>
    	</div>	     
	  </div>
	</div>

</div>
</template>

<script>
import k_swipe_nav from '@/components/k_swipe/k_swipe_nav';
import k_swipe_banner from '@/components/k_swipe/k_swipe';
export default {
	data() {
		return {
			// 轮播数据
			swipe_banner_data:[
				{src:"https://lipstick.xsygood.com/bsck_img/faxian_banner.png"},
			],
			active_index:0,         // 当前导航索引
			swipe_nav_data:[ // 导航数据
        { id:0,title:'资讯'},
        { id:1,title:'名人'},
        { id:2,title:'搞笑'},
        { id:3,title:'图文'},
        // { id:4,title:'课程'},
        // { id:5,title:'有声读物'},
        // { id:6,title:'电子书'},
      ],   
			head_left_show: false,
			active2: 0,
			mes_id: 2,
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		// 导航点击
    tap_nav(index) {
      this.active2 = index
    },
    banner_click(){}
	},
	components: {k_swipe_banner,k_swipe_nav,}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');

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
				// .img{
				// 	flex: 1;
				// 	padding: 4px;
				// 	img{
				// 		width: 100%;
				// 	}
				// }
			}
		}
	}
}

// 样式1 左侧文字信息, 右侧图片
.mes_box_type1{
	.items{
		padding: 0 12px;
		.item{
			padding: 16px 0;
			border-bottom: 1px solid #eee;
			.info{
				.title{
					font-size: 13px;
					height: 40px;
					line-height: 20px;
					text-overflow:ellipsis; 
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
				}
				.other{
					margin-top: 16px;
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
						font-size: 13px;
						width: 60px;
						border-right: 1px solid #eee;
						color: #666;
					}
					.count{
						float: left;
						font-size: 13px;
						// width: 50px;
						margin-left: 12px;
						color: #666;					
					}
				}
				
			}
			.img_box{
				width: 100%;
				padding-bottom: 80px;
				border-radius: 4px;
				background-size: 100% 100% !important;
				background-repeat: no-repeat !important;
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