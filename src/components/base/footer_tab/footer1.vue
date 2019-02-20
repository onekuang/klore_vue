<template>
<div class="footer1_wrapper">
	<div class="item" :class="{active:index==1}"  @click="goto('/',1)">
		<div class="iconbox">
			<i class="iconfont icon-home1"></i>
		</div>
		<div class="title">首页</div>
	</div>

	<div class="item" :class="{active:index==2}" @click="goto('/message',2)">
		<div class="iconbox">
			<i class="iconfont icon-home1"></i>
		</div>
		<div class="title">资讯</div>
	</div>

	<!-- <div class="item" @click="goto('/')">
		<div class="imgbox">
			<img src="https://lipstick.xsygood.com/testimg/pyg_menu.png">
		</div>
	</div> -->
	<div class="item" :class="{active:index==3}" @click="goto('/classlist',3)">
		<div class="iconbox">
			<i class="iconfont icon-home1"></i>
		</div>
		<div class="title">创业</div>
	</div>

	<div class="item" :class="{active:index==4}" @click="goto('/videolist',4)">
		<div class="iconbox">
			<i class="iconfont icon-home1"></i>
		</div>
		<div class="title">学院</div>
	</div>

	<div class="item" :class="{active:index==5}" @click="goto('/usercenter',5)">
		<div class="iconbox">
			<i class="iconfont icon-yonghuzhongxin"></i>
		</div>
		<div class="title">我的</div>
	</div>

</div>
</template>

<script>
export default {
	data() {
		return {
			index: 1,
		}
	},
	methods: {
		goto(url,index) {
			this.index = index
			this.$router.push({
				path: url
			})
		},
		active(index) {
			console.log(index)
		}
	}
}
</script>

<style scoped lang="less">
@import url('../../../common/less/index.less');
.footer1_wrapper{
	height: 56px;
	background: #fff;
	box-shadow: 4px 4px 10px 4px #ccc;
	text-align: center;
	display: flex;
	.item {
		flex: 1;
		color: #999;
		padding-top: 4px;
		.iconbox{
			height: 34px;
			line-height: 34px;
			i {
				font-size: 24px;
			}
		}
		.title{
			font-size: 12px;
			height: 20px;
		}	
		// &:nth-of-type(3) {
		// 	padding-top: 0;
		// }	
	}
	& .active {
		.title, i {
			color: @orange;
		}
	}
	.imgbox {
		line-height: 56px;
		img{
			margin-top: 3px;
			width: 50px;
			height: 50px;
		}
	}
}
</style>
