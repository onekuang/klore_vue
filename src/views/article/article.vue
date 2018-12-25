<template>
<div class="k-article page">

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
	 <p class="time">
	 	{{"Oct 11, 2018 2:01:06 PM" | time}}
	 </p>
	 <div class="content">
	 		<div v-html=html>		
	 		</div>
	 </div>
	</div>

</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll';
import api from '@/assets/api/api.js'
export default {
	name:"article",
	data() {
		return {
			id:'',
			data: '',
			html:'html'
		}
	},
	created() {
		this._getdata()
	},
	methods: {
		_getdata() {
			let self = this
			this.id = this.$route.query.id
			this.api = this.$route.query.api

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
}
</script>

<style lang="less">
@import url('../../common/less/index.less');
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
		font-size: 20px;
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

</style>
