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

	 <h1 class="title">{{title}}</h1>
	 <p class="time">{{time}}</p>
	 <div class="content">
	 		<div v-html=html></div>
	 </div>
	</div>

</div>
</template>

<script>
export default {
	name:"article1",
	data() {
		return {
			id:'',
			data: '',
			title:'',
			time:'',
			html:'html'
		}
	},
	created() {
		this.id = this.$route.query.id
		this._getdata()
	},
	methods: {
		_getdata() {
			this.axios.get(this.$api.article,{
				params: {
					article_id: this.id
				}
			})
			.then(res => {
				this.title = res.data.name
				this.time = res.data.update_time
				this.html = `<div>${res.data.content}</div>`
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
