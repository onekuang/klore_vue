<template>
<div class="">
<!-- 轮播组件 -->
<div>
	<k_swipe_banner :swipe_data=swipe_banner_data />
</div>
	

	<!-- 菜单组件 -->
	<HomeMenu :lists=mene_data :wrap=false />

	<div class="khr"></div>
	<div class="lessons_box">
		<div class="items">
			<router-link tag="div" to="/videodetail" class="item" v-for="item in 8">
				<mu-row>
					<mu-col span="4">
			    	<div class="grid-cell left">
			    		<div class="img_box" style="background: url('https://lipstick.xsygood.com/bsck_img/xuexi_banner.jpg')"></div>
			    	</div>
			    </mu-col>
			    <mu-col span="8">
			    	<div class="grid-cell right">
			    		<div class="info">
			    			<div class="title">营销管理学</div>
			    			<div class="desc">营销管理要满足企业的需求、满足消费者的需求、满足经销商的需求、满足终端的需求、满足销售队伍的需求，在不断满足需求的过程中企业得到了发展。</div>
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
</template>

<script>
import HomeMenu from '@/components/home_menu/home_imgmenu';
import k_swipe_banner from '@/components/k_swipe/k_swipe';
export default {
	data() {
		return {
			// 轮播数据
			swipe_banner_data:[
				{src:"https://lipstick.xsygood.com/bsck_img/xuexi_banner.jpg"},
			],
			mene_data:[	 // 导航菜单数据
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_03.png",title:'全部课程',url:'/lessons_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_05.png",title:'创业相关',url:'/lessons_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_07.png",title:'营销管理',url:'/lessons_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/book_icon/icon_09.png",title:'个人提升',url:'/lessons_list'},
			],	
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){}
	},
	components: {k_swipe_banner,HomeMenu}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
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
						font-size: 15px;
						height: 20px;
						line-height: 20px;
						text-overflow:ellipsis; 
				    overflow: hidden;
					}
					.desc{
						font-size: 12px;
						height: 44px;
						line-height: 22px;
						letter-spacing: .5px;
						color: #aaa;
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
					background-size: 100% 100% !important;
					background-repeat: no-repeat !important;
				}
			}
		}	
	}
</style>