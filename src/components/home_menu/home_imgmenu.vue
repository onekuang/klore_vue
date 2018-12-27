<template>
<div class="home_imgmenu_wrapper">
	<div class="home_imgmenu">
		<div 
			class="item" 
			:class = "[wrap ? 'wrap' : 'no_wrap']"
			v-for="(item, index) in lists" 
      :key="index"
      @click=click_item(item)      
    >
			<div class="imgbox">
				<img :src=item.img :alt=item.title>
				<!-- 角标 -->
				<span class="dot" 
				  v-if="item.dot_text"
				  :style="{background: dot_bg, color: dot_text_color}"
				>
				  {{item.dot_text}}
				</span>
			</div>
			<p :style="{color:text_color}">{{item.title}}</p>	


		</div>
	</div>
</div>
</template>

<script>
export default {
	props: {
	  lists: {
	    type: Array
	  },
	  text_color: {
	    type: String,
	    default: "#666"
	  },
	  dot_bg: {
	    type: String,
	    default: "#e64340"
	  },
	  dot_text_color: {
	    type: String,
	    default: "#fff"
	  },
	  // 是否开启换行
	  wrap: {
	  	type: Boolean,
	  	default: false
	  }
	},
	methods: {
	  click_item(data) {
	    if (data.url) {
	      this.$router.push({
	        path: data.url
	      });
	    } else if (data.fn) {
	      let fn = data.fn;
	      fn();
	    } else {
	      console.warn("宫格组件传递的数据参数里,必须含有url 或者 fn");
	    }
	  }
	}
}
</script>
<style scoped lang="less">
@import url("../../common/less/index.less");
p{
	margin: 0;padding: 0;
}
.home_imgmenu_wrapper{
	.home_imgmenu{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		flex-wrap: wrap;
		& .no_wrap{
			flex: 1;
		}
		& .wrap{
			width: 20%
		}
		.item{		
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align:center;
			font-size:14px;
			overflow:hidden;
			padding-bottom: 6px;
			padding-top: 6px;
			.imgbox{
				position: relative;
				margin:0 auto;
				height:50px;
				width:50px;
				border-radius:30%;
				color:#fff;
				font-size:14px;
				line-height:50px;
				margin-bottom:8px;
				img {
					width: 100%;
					display: block;
				}
				i{
					font-size: 26px;
				}
				.dot {
				  display: inline-block;
				  padding: 0.15em 0.4em;
				  min-width: 8px;
				  border-radius: 18px;
				  line-height: 1.2;
				  text-align: center;
				  font-size: 12px;
				  vertical-align: middle;
				  position: absolute;
				  top: -6px;
				  right: -10px;
				}
			}
			p {
				height: 20px;
				line-height: 20px;
				font-size: 13px;
			}
		}
	}
}
</style>
