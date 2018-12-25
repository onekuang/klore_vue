<template>
<div class="footer1_wrapper">
	<div class="item" :class="{active:index==1}"  @click="goto('/',1)">
		<div class="iconbox">
			<i class="iconfont icon-home1"></i>
		</div>
		<div class="title">首页</div>
	</div>

	<div class="item" :class="{active:index==2}" @click="goto('/classlist',2)">
		<div class="iconbox">
			<i class="iconfont icon-liebiao"></i>
		</div>
		<div class="title">分类</div>
	</div>

	<div class="item" @click="goto('/')">
		<div class="imgbox">
			<img src="https://lipstick.xsygood.com/testimg/pyg_menu.png" width="50" height="50">
		</div>
	</div>

	<div class="item" :class="{active:index==3}" @click="goto('',3)">
		<div class="iconbox">
			<i class="iconfont icon-wodefankui"></i>
		</div>
		<div class="title">社区</div>
	</div>

	<div class="item" :class="{active:index==4}" @click="goto('/usercenter',4)">
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
		padding-top: 2px;
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
		&:nth-of-type(3) {
			padding-top: 0;
		}	
	}
	& .active {
		.title, i {
			color: @active;
		}
	}
	.imgbox {
		line-height: 56px;
		img{
			margin-top: 3px;
		}
	}
}
</style>
