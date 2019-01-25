<template>
<div class="news_wrapper page fff">

<div class="">
	<mu-container>
	  <mu-tabs :value.sync="view_page" indicator-color="#F729A6" inverse color="#000" text-color="rgba(0, 0, 0, .54)" full-width>
	    <mu-tab>每日爆款</mu-tab>
	    <mu-tab>趣分享</mu-tab>
	  </mu-tabs>
	  <div class="news_box">


	    <div class="items"  v-for="item in news">
				<div class="item" v-show="view_page ==item.page">
		    	<mu-list textline="two-line">
	    	    <mu-list-item avatar button :ripple="false">	    	    	
	    	      <mu-list-item-action>
	    	        <img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132" width="50" height="50">
	    	      </mu-list-item-action>
	    	      <mu-list-item-content>
	    	        <mu-list-item-title>name</mu-list-item-title>
	    	        <mu-list-item-sub-title>1小时前</mu-list-item-sub-title>
	    	      </mu-list-item-content>
	    	      <mu-list-item-action>
	    	      	<div class="right">
	    	        	<i class="iconfont icon-lianjie2"></i> <span>123</span>
	    	        </div>
	    	      </mu-list-item-action>
	    	    </mu-list-item>
	    	  </mu-list>


	    	  <div class="news_content">
	    	  	<div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ex praesentium enim, reiciendis eum iure eligendi illum, nam aliquid rerum voluptatem dicta beatae iste exercitationem corrupti veritatis laudantium odit non.</div>

	    	  	<div class="img_box">
	    	  		<div class="img">
	    	  			<img :src="item.image" width="100%">
	    	  			<div class="price">￥999</div>
	    	  		</div>
	    	  	</div>
						<div class="clear"></div>
	    	  	<div class="ticket_box">
	    	  		<div class="ticket">预计收益: ￥5.67</div>
	    	  	</div>

	    	  	<div class="comment_box">
	    	  		<div class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio veritatis nulla<br>
							
								<div class="copy pull-right" @click="do_copy('desc')">
									复制评论
								</div>
								<div class="clearfix"></div>
	    	  		</div>
	    	  	</div>
	    	  </div>
	    	  
	    	  <div class="khr"></div>
    	  </div>
	    </div>


	  </div>
	</mu-container>

</div>







</div>
</template>

<script>
export default {
	data() {
		return {
			view_page: 0,
			news:[
				{page:0,image:"https://img.alicdn.com/bao/uploaded/i2/2618645357/O1CN01RygHiu1pRYDVRVRfG_!!2618645357.jpg_960x960Q50s50.jpg_.webp"},
				{page:1,image:"https://img.alicdn.com/bao/uploaded/i1/3894936198/O1CN01MsDW141vejI8NfUfG_!!0-item_pic.jpg_960x960Q50s50.jpg_.webp"}
			],
			comment:'comment...copy'
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		do_copy(val) {
			let that = this
			this.$copyText(val).then(function (e) {
        that.$toast(`${e.text} 复制成功`)
      }, function (e) {
        that.$toast(`复制失败`)
      })
		},
		onCopy(e) {
			console.log(e.text)
			this.$toast(`${e.text} 复制成功`)
		},
		onError(e) {
			this.$toast(`复制失败`)
		}
	},
	components: {}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.news_box{
	.right{
		display: inline-block;
		border-radius: 12px;
		padding: 1px 8px;
		background: rgba(255, 146, 206, 0.2);
		font-size: 12px;
		color: @color_base;
		i {
			font-size: 12px;
		}
	}
	.news_content{
		padding: 4px 12px;		
	}
	.img_box{
		.img {
			position: relative;
			.price{
				background: @chen;
				position: absolute;
				right: 6px;
				bottom: 16px;
				display: inline-block;
				padding: 4px 12px;
				border-radius: 20px 0 20px 0;
				color: #fff;
				font-size: 18px;
			}
		}
	}
	.ticket_box{
		margin-top: 8px;
		.ticket{
			.news_tag();
			padding: 2px 12px;
			display: inline-block;
			border-radius: 20px;
		}
	}
	.comment_box{
		margin-top: 12px;
		margin-bottom: 12px;
		background: #f5f5f5;
		padding: 8px;
		color: #666;
		.comment{
			font-size: 12px;
			.copy{
				margin-top: 12px;
				.news_tag();
				padding: 1px 8px;
				border-radius: 12px;
				color: #ff86d0;
			}
		}
	}
}
.news_tag{
	background: rgba(255, 146, 206, 0.2);
	font-size: 12px;
	color: @color_base;
}
</style>