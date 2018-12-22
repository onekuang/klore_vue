<template>
<div class="prolist ab_full" >

<!-- <div class="tab_sort_box">
	<Tab_sort @is_list_mode="is_list_mode" />
</div>
 -->

<BScroll	class="box_wrapper" ref="scroll">
<div>
	<!-- 商品列表	 -->
	<K_List :data=data :tab_show=true />

</div></BScroll>


</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import K_List from '@/components/k_goods_list/k_goods_list'
export default {
	name:"prolist",
	data() {
		return {
			data: [{},{},{},{},{},{},{},{}]
		}
	},
	methods: {

		refresh() {
			setTimeout(() => {
				this.$refs.scroll.refresh()
			},50)
		},
	},
	components: {
		BScroll,K_List
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
