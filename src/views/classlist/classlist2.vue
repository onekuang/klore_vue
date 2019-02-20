<template>
<div class="classlist2 page">
	<!-- 轮播组件 -->
  <div>
  	<k_swipe_banner @banner_click=banner_click :swipe_data=swipe_banner_data :height=230 />
  </div>
	
	<!-- 申请通道 -->
  <div class="shenqing">
  	<h4 class="index_title">申请直通</h4>  	
		<div class="items">
			<div class="item">
				<div class="img_box" style="background: url('https://lipstick.xsygood.com/bsck_img/sqrz.png');">
				</div>
			</div>
			<div class="item">
				<div class="img_box" style="background: url('https://lipstick.xsygood.com/bsck_img/sqzt.png');">
				</div>
			</div>
		</div>
  </div>
  <!-- 分类 -->
  <div class="class_wrapper" v-for="item in 2">
  	<div class="khr"></div>
  	<h4 class="index_title">行业名称
  		<div class="more"><i class="iconfont icon-you"></i></div>
  	</h4>  	
  	<div class="class_box">
  		<div class="items">
  			<router-link to="/prolist" tag="div" class="item" v-for="i in 6">
  				<div class="title">分类占位</div>
  				<!-- <div class="desc">教育前景行业</div> -->
  				<div class="img">
  					<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024" width="60" height="60">
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
export default {
	data() {
		return {
			swipe_banner_data:[
				{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"},
				{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"},
			],
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
	components: {k_swipe_banner,}
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