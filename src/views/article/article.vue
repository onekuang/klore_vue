<template>
<div class="k-article page">

	<!-- <k_header title="文章" right='兑换' @r_click=r_click right_color='#888' /> -->
	<k_header title="文章详情" />


<div>

	<!-- <div class="article_box">

	 <h1 class="title">{{data.title}}</h1>
	 <p class="time">
	 	{{data.postedDate | time}}
	 </p>
	 <div class="content">
	 		<div v-html="data.info"></div>
	 </div>
	</div> -->

	<div class="article_box">
	 <h1 class="title">内容标题</h1>
	 <div class="other">
	 	<div class="avatar">
	 		<img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132" alt="">
	 	</div>
		 <div class="time">
		 	<div class="name">金闪闪</div>{{"Oct 11, 1999 2:01:06 PM" | time}}
		 </div>		 
	 </div>
	 <div class="content">
	 		<div>
	 			<p v-for="item in 10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aliquid, quia qui vel inventore culpa omnis ex illo voluptate atque, laboriosam magnam dolor quo, veritatis. Nulla consectetur, a iste quis!<br><br></p>				
	 		</div>
	 </div>
	</div>


</div>
</div>
</template>

<script>
import api from '@/assets/api/api.js'
import k_header from '@/components/app_head/app_head'
export default {
	name:"article",
	data() {
		return {
			id:'',
			data: ''
		}
	},
	created() {
		this._getdata()
	},
	methods: {
		_getdata() {
			let self = this
			this.id = this.$route.query.id

			return

			this.axios.get(api.news_detail,{
				params: {
					toKenId : this.id
				}
			})
			.then(res => {
				this.data = res.data.result				
				setTimeout(()=>{
					self.$refs.scroll.refresh();
				},2000)
			})
			.catch(res => {
				this.$toast("网络错误")
			})
		}
	},
	components: {k_header}
}
</script>

<style lang="less" scoped>
@import url('../../common/less/config.less');
.k-article{
	// padding: 8px;
	html,body,p,h1,h2,h3,h4,h5,h6{
		padding: 0;
		margin: 0;
	}
	.article_box{
		background: #fff;
		padding: 12px;
	}
	.title{
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 16px;
	}
	.time{
		font-size: 14px;
		color: #666;
		margin-bottom: 14px;
	}
	.content{
		text-indent: 1em;
		font-size: 18px;
		img{
			max-width: 100% !important;
		}
	}
	a {
	  color: #7e8c8d;
	  -webkit-backface-visibility: hidden;
	  text-decoration: none;
	}
}
.other{
	display: flex;
	.avatar{
		flex: 0 0 50px;
		img{
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
	}
	.name{
		margin-left: 2px;
	}
	.time{
		flex: 1;
	}
}
</style>
