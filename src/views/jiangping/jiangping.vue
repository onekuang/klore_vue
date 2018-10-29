<template>
<div class="k-article ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>

	<div class="article_box">
		奖品
	</div>


</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll';
import api from '@/assets/api/api.js'
export default {
	name:"k_article",
	data() {
		return {
			id:'',
			data: ''
		}
	},
	created() {
		// this._getdata()
	},
	methods: {
		_getdata() {
			let self = this
			// this.id = this.$route.query.id

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
	filters: {
	  time: function (input) {
	    var d       = new Date(input)
	    var year    = d.getFullYear()
	    var month   = d.getMonth()    + 1
	    var day     = d.getDate()     < 10 ? '0' + d.getDate()    : '' + d.getDate()
	    var hour    = d.getHours()    < 10 ? '0' + d.getHours()   : '' + d.getHours()
	    var minutes = d.getMinutes()  < 10 ? '0' + d.getMinutes() : '' + d.getMinutes()
	    var seconds = d.getSeconds()  < 10 ? '0' + d.getSeconds() : '' + d.getSeconds()
	
	    return year + '-' 
	      + month   + '-' 
	      + day     + ' ' 
	      + hour    + ':' 
	      + minutes + ':' 
	      + seconds;
	  }
	},
	components: {
		BScroll
	}
}
</script>

<style lang="less">
@import url('../../common/less/config.less');
.k-article{
	padding: 8px;
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

</style>
