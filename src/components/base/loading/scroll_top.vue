<template>
<div class="scroll_top">
<div class="top" @click="scrolltop" :style="{'right':right +'px','bottom':bottom +'px',}">
	<i class="iconfont" :class="icon"></i>
</div>
</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: 'icon-top'
		},
		right: {
			type: [Number,String],
			default:"20"
		},
		bottom: {
			type: [Number,String],
			default: 80
		}
	},
	methods: {
		scrolltop() {
			//设置定时器
	    let timer = setInterval(function(){
	      //获取滚动条距离顶部高度
	      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	      var ispeed = Math.floor(-osTop / 7);
	       
	      document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
	      //到达顶部，清除定时器
	      if (osTop == 0) {
	        clearInterval(timer);
	      };
	      let isTop = true;
	       
	    },30);
		}
	},
}
</script>

<style scoped lang="less">
.scroll_top{
	.top{
		display: inline-block;
		background: rgba(0,0,0,.2);
		height: 40px;
		width: 40px;
		text-align: center;
		line-height: 45px;
		border-radius: 50%;
		color: #fff;
		position: fixed;
		i {
			font-size: 20px;
			font-weight: 900;
		}
	}
}
</style>

