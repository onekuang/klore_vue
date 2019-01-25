<template>
<div class="prolist page" >
materiallist
<div>
	<!-- 商品列表	 -->
	<K_List 
		:goods_list=goods_list 
		:tab_show=false 
		:tab_fixed=false 
		:pid=list_id 
		style="padding-top: 40px;"
	/>
	
</div>


</div>
</template>

<script>
import K_List from '@/components/k_goods_list/k_goods_list'
export default {
	name:"materiallist",
	data() {
		return {
			goods_list: [],
      list_id:'',
      list_type:'',
      list_rows: 16,
      page: 1,
      sort: 5, //排序，0默认，1销量高到低，2销量低到高，3佣金比率高到低，4佣金低到高，5人气高到低，6人气低到高，7价格高到低，8价格低到高
      show_ticket: 0, // 是否只显示优惠卷
      load_status: 0,
		}
	},
	created() {		
		this.$loading.show()
		this.list_id = this.$route.query.id
		this.list_type = this.$route.query.type
		this.get_data()
	},
	mounted() {
		window.addEventListener('scroll', this.onscroll)
	},
	methods: {
		get_data() {
			let that = this
			this.axios.get(this.$api.MaterialList,{
				params: {
					mid:this.list_id,
					// cid:1,
					list_rows: this.list_rows,
					page:this.page,
					type: this.list_type
				}
			})
			.then(res => {
				let data = res.data
				data.forEach(function(item, i) {
					item.thumb = that.fil_img(item.thumb)
				})				
				this.goods_list = this.goods_list.concat(data)
			})
		},
		fil_img(item) {
			return item+"_960x960Q50s50.jpg_.webp"
		},
		tap_load() {
			console.log(this.page++)
			this.page = parseInt(this.page) + 1
			console.log(this.page)
			this.get_data()
		},
		onSort(status) {
			this.$loading.show()
			console.log(status)
			this.page = 1 
			this.goods_list = []
			this.sort = status
			this.get_data()
		},
		on_show_ticket(status) {
			this.$loading.show()
			this.show_ticket = status
			this.page = 1 
			this.goods_list = []
			this.get_data()
		},
		onscroll() {
			let vm = this
			// window.onscroll = function(){
			//变量scrollTop是滚动条滚动时，距离顶部的距离顶部的距离
			var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
			//变量windowHeight是可视区的高度
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			//变量scrollHeight是滚动条的总高度
			var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
			//滚动条到底部的条件
				if(scrollTop+windowHeight==scrollHeight){
					//写后台加载数据的函数
					vm.page = vm.page + 1
					vm.get_data()
					// console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
				}
			// }	
		}
	},
	components: {
		K_List,
	},
	destroyed(){
	  window.removeEventListener('scroll', this.onscroll);//监听页面滚动事件
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
