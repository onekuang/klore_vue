<template>
<div class="classlist2 page app_head">
	<k_header title="行业分类" />
	<!-- 轮播组件 -->
  <div>
  	<k_swipe_banner @banner_click=banner_click :swipe_data=swipe_banner_data />
  </div>
	
	<!-- 申请通道 -->
  <div class="shenqing">
  	<h4 class="index_title">申请直通</h4>  	
		<div class="items">
			<router-link tag="div" to="/ruzhu" class="item">
				<div class="img_box" style="background: url('https://lipstick.xsygood.com/bsck_img/sqrz.png');">
				</div>
			</router-link>
			<router-link tag="div" to="/classlist" class="item">
				<div class="img_box" style="background: url('https://lipstick.xsygood.com/bsck_img/sqzt.png');">
				</div>
			</router-link>
		</div>
  </div>
  <!-- 分类 -->
  <div class="class_wrapper" v-for="item in cla_ify">
  	<div class="khr"></div>
  	<h4 class="index_title">{{item.title}}
  		<div class="more"><i class="iconfont icon-you"></i></div>
  	</h4>  	
  	<div class="class_box">
  		<div class="items">
  			<router-link to="/prolist" tag="div" class="item" v-for="i in item.child">
  				<div class="title">{{i.title}}</div>
  				<!-- <div class="desc">教育前景行业</div> -->
  				<div class="img">
  					<img :src="i.image" width="60" height="60">
  				</div>
  			</router-link>
  		</div>
  	</div>
  </div>
	
		<div class="btn_box" style="margin-top: 30px;">
			<router-link to="/classify" tag="div" class="theme_btn hui_btn" >查看所有分类</router-link>
		</div>
  <br>
</div>
</template>

<script>
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
			swipe_banner_data:[
				{src:"https://lipstick.xsygood.com/bsck_img/class_banner.jpg"},
				// {src:"https://lipstick.xsygood.com/bsck_img/a/banner.jpg"},
			],
			cla_ify:[
				{
					title:'热门',
					child: [
						{title:'机器人教育',image:"https://lipstick.xsygood.com/bsck_img/class_icon/jiaoyu.png"},
						{title:'大众美食',image:"https://lipstick.xsygood.com/bsck_img/class_icon/meishi.png"},
						{title:'超级品牌',image:"https://lipstick.xsygood.com/bsck_img/class_icon/pingpai.png"},
						{title:'品牌核实',image:"https://lipstick.xsygood.com/bsck_img/class_icon/pinpai.png"},
						{title:'美妆',image:"https://lipstick.xsygood.com/bsck_img/class_icon/meizhuang.png"},
						{title:'教育专区',image:"https://lipstick.xsygood.com/bsck_img/class_icon/jioayuzhuanqu.png"},
					]
				},
				{
					title:'餐饮',
					child: [
						{title:'火锅',image:"https://lipstick.xsygood.com/bsck_img/class_icon/huoguo.png"},
						{title:'饮品',image:"https://lipstick.xsygood.com/bsck_img/class_icon/yingping.png"},
						{title:'快餐',image:"https://lipstick.xsygood.com/bsck_img/class_icon/kuaican.png"},
						{title:'麻辣烫',image:"https://lipstick.xsygood.com/bsck_img/class_icon/malatang.png"},
						{title:'小吃',image:"https://lipstick.xsygood.com/bsck_img/class_icon/xiaochi.png"},
						{title:'早餐',image:"https://lipstick.xsygood.com/bsck_img/class_icon/zaochan.png"},
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
		// 轮播点击
		banner_click(index) {
			console.log(index)
		},
	},
	components: {k_swipe_banner,k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.shenqing{
	padding-bottom: 12px;
	.items{
		display: flex;
		.item{
			flex: 1;
			margin: 0 6px;
			.img_box{
				border-radius: 10px;
				overflow: hidden;
				position: relative;
				background: #eee;
				height: 0;
				width: 100%;
				padding-bottom: 50%;
				background-size: 100% 100% !important;
				background-repeat: no-repeat !important;
				.title{
					background: rgba(0,0,0,.8);
					text-align: center;
					padding: 2px 0;
					color: #fff;
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					font-size: 10px;
				}
			}
		}
	}
}

.class_box{
	.items{
		display: flex;
		flex-wrap: wrap;
		.item{
			flex: 0 0 33.33%;
			border: 1px solid #eee;
			text-align: center;
			padding: 12px 0;
			.img{
				margin-top: 12px;
				img{
					border-radius: 50%;
				}
			}
		}
	}
}
</style>