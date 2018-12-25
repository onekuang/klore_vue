<template>
<div class="prolist page fff" >

<div>
	<!-- 商品列表	 -->
	<K_List :goods_list=goods_list :tab_show=true />

</div>


</div>
</template>

<script>
import K_List from '@/components/k_goods_list/k_goods_list'
export default {
	name:"prolist",
	data() {
		return {
			goods_list: [{},{},{},{},{},{},{},{}]
		}
	},
	methods: {
	},
	components: {
		K_List
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
