<template>
<div class="touzhi page app_head">
	
<k_header title="投资" />


<!-- 轮播组件 -->
<div>
	<k_swipe_banner :swipe_data=swipe_banner_data />
</div>

<!-- 菜单组件 -->
<HomeMenu :lists=mene_data :wrap=false />


<div class="khr"></div>

<router-link tag="div" to="/touzhi_case_list" class="index_title">最新融资
	<div class="more"><i class="iconfont icon-you"></i></div>
</router-link> 

<div class="list">
	<div class="items">
		<router-link tag="div" to="/touzhi_case_detail" class="item" v-for='i in 3'>
			<div class="avatar">
				<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=54 height=54>
			</div>
			<div class="info">
				<div class="left">
					<div class="title">地平线</div>
					<div class="desc">人工智能核心技术和系统级解决方案提供商</div>
					<div class="text">融资速递:地平线完成天使轮融资、金额10000万人民币</div>
				</div>
				<!-- <div class="right">
					<div class="money">￥199 </div>
					<div class="btn">了解更多</div>
				</div> -->
			</div>
		</router-link>
	</div>
</div>

<div class="khr"></div>

<router-link tag="div" to="/touzhiren_list" class="index_title">推荐投资人
	<div class="more"><i class="iconfont icon-you"></i></div>
</router-link>

<div class="list1">
	<div class="items">
		<router-link tag="div" to="/touzhiren_detail" class="item" v-for='i in 3'>
			<img src="https://lipstick.xsygood.com/bsck_img/a/touzhiren1.png" width="100%" height=180>
		</router-link>
	</div>
</div>

<div class="khr"></div>


<router-link tag="div" to="/touzhijigou_list" class="index_title">投资机构推荐
	<div class="more"><i class="iconfont icon-you"></i></div>
</router-link> 

<div class="list">
	<div class="items">
		<router-link tag="div" to="/touzhi_jigou_detail" class="item" v-for='i in 3'>
			<div class="avatar">
				<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width=54 height=54>
			</div>
			<div class="info">
				<div class="left">
					<div class="title">IDG资本</div>
					<div class="desc">基金规模: 700亿人民币、100亿美元</div>
					<div class="text">投资案例: 730个</div>
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
</template>

<script>
import k_header from '@/components/app_head/app_head'
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import HomeMenu from '@/components/home_menu/home_imgmenu';
export default {
	data() {
		return {
			// 轮播数据
			swipe_banner_data:[
				{src:"https://lipstick.xsygood.com/bsck_img/jiameng_banner3.jpg"},
			],
			mene_data:[	 // 导航菜单数据
				{img:"https://lipstick.xsygood.com/bsck_img/icon/tz1.png",title:'投资机构',url:'/touzhijigou_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/icon/tz2.png",title:'投资人物',url:'/touzhiren_list'},
				{img:"https://lipstick.xsygood.com/bsck_img/icon/tz3.png",title:'创业公司',url:'/touzhi_case_list'},
			],
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){
			console.log(this.$api)
		}
	},
	components: {k_header,k_swipe_banner,HomeMenu}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.touzhi{
	.index_title{
		border-left: 2px solid @orange;
	}
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
							margin-top: 10px;
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


.list1{
	padding: 6px;
	.items{
		.item{
			margin-bottom: 8px;
			img{
				display: block;
			}
		}
	}
}
</style>