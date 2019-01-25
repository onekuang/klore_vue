<template>
<div class="page">
	<div class="collect_box">
		<!-- 商品列表	 -->
		<K_List :goods_list=goods_list :row_type=1 :tab_show=false />

		<div class="more_box">
      <Load_more @tap_load="tap_load" :status=load_status />
    </div>


	</div>
</div>
</template>

<script>
import K_List from '@/components/k_goods_list/k_goods_list'
export default {
	data() {
		return {
			goods_list: [],
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
			this.axios.get(this.$api.collect_list,{
				params: {
					page: this.page_current
				}
			})
			.then(res => {
				this.page_sum = res.data.last_page
				if(this.page_current > this.page_sum){
					this.load_status = 2
          return
				}
				let arr = this.goods_list
				let dat = res.data.data
				this.load_status = 0				
				this.goods_list = arr.concat(dat)
				this.page_current = parseInt(this.page_current) + 1
			})
		},
		tap_load() {
			this.load_status = 1
			this.page_init()
		},
	},
	components: {
		K_List
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.collect_box{
	padding: 8px;
}
</style>
