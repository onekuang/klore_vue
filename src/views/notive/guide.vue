<template>
<div class="notive_list page fff">

<div class="notive_wrapper">
	<div class="notive_box">
		<div class="item" v-for="(item,index) in guide" @click="goto_article(item.id)">
			<div class="top">
				<div class="img">
					<img :src="$api.base_img + item.thumb" width="100%">
				</div>
			</div>
			<div class="bottom">
				<p class="p1 ell">{{item.name}}</p>
			</div>
		</div>
		<div class="more_box">
      <Load_more @tap_load="tap_load" :status=load_status />
    </div>
	</div>
</div>


</div>
</template>

<script>
export default {
	name:"guide",
	data() {
		return {
			guide:[],
			page_current: 1,
			page_sum: 1,
			load_status:0,
		}
	},
	created() {
		this.page_init()
	},
	methods: {
		page_init() {
			this.axios.get(this.$api.notice,{
				params: {
					category_id: 3,
					page: this.page_current
				}
			})
			.then(res => {
				this.page_sum = res.data.last_page
				if(this.page_current > this.page_sum){
					this.load_status = 2
          return
				}
				let arr = this.guide
				let dat = res.data.data
				this.load_status = 0				
				this.guide = arr.concat(dat)
				this.page_current = parseInt(this.page_current) + 1
			})
		},
		tap_load() {
			this.load_status = 1
			this.page_init()
		},
		goto_article(id,api) {
			this.$router.push({
				path: `/article?id=${id}`
			})
		}
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.notive_wrapper{
	padding: 6px;
	.notive_box{
		.item{
			margin-bottom: 12px;
			.bottom{
				.p1{
					font-size: 14px;
					color: #333;
					margin-bottom: 6px;
				}
				.p2{
					font-size: 12px;
					color: #999;
				}
			}
		}
		
	}
}
</style>
