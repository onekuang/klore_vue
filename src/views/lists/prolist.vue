<template>
<div class="prolist ab_full" >

<div class="tab_sort_box">
	<Tab_sort @is_list_mode="is_list_mode" />
</div>


<BScroll	class="box_wrapper" ref="scroll" style="top:42px;">
<div>
	<!-- 商品列表	 -->
	<K_List :type=type :data=data />

</div></BScroll>


</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import K_List from '@/components/k_goods_list/k_goods_list'
import Tab_sort from '@/components/base/tab_sort/tab_sort'
export default {
	name:"prolist",
	data() {
		return {
			type: 1,// 1列表模式,2为图文模式
			data: [{},{},{},{},{},{},{},{}]
		}
	},
	methods: {
		is_list_mode(bool) {
			if(bool) {
				this.type = 1
			}else {
				this.type = 2
			}
			this.refresh()
		},
		refresh() {
			setTimeout(() => {
				this.$refs.scroll.refresh()
			},50)
		},
	},
	components: {
		BScroll,Tab_sort,K_List
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.tab_sort_box{
	position: fixed;top: 0;left: 0;right: 0;z-index: 2;
}
</style>
