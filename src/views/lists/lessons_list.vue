<template>
<div class="lessons_class_list page app_head">
	<k_header 
		title="课程列表" 
		r_icon="iconfont icon-shaixuan"
		r_icon_color="#FD9A00"
		@r_click="r_click" 
	/>

<div class="book_list">


<!-- <div class="index_title">分类</div>   -->

<div class="lessons_box">
	<div class="items">
		<router-link tag="div" to="/videodetail" class="item" v-for="item in 2">
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

<k_cls_tab 
	:data=cla_list
	:cla_show=slide_bar_show 
	@get_id=get_id
	@hide=_reset 
/>


</div>
</template>

<script>
import HomeMenu from '@/components/home_menu/home_imgmenu';
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import k_header from '@/components/app_head/app_head';
import k_cls_tab from '@/components/k_cls_tab/k_cls_tab';
export default {
	data() {
		return {
			slide_bar_show: false,
			cla_list:[
				{
					title:'测试',
					list:[
						{id:1,val:'测试'},
						{id:2,val:'测试测试'},
					]
				},
				{
					title:'测试2',
					list:[
						{id:3,val:'测试'},
						{id:4,val:'测试测试测试'},
					]
				},
			]
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		r_click() {
			this.slide_bar_show = !this.slide_bar_show
		},
		get_id(id) {
			console.log(id)
		},
		_reset() {
			this.slide_bar_show = false
		},
		goto(url) {
			console.log(123)
		}
	},
	components: {k_header,k_cls_tab}
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