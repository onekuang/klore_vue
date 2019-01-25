<template>
<div class="page">

	<div class="search_top_box">
		<div class="search_top">
			<div class="search_input">
				<span class="span1"><i class="iconfont icon-search"></i></span>
				<input type="text" placeholder="请输入要搜索的内容" v-model="search_text" @focus="show_sear" @blur="close_hint">
			</div>
			<div class="search_btn_box" @click="push_search">
				<span>搜索</span>
			</div>
			<!-- 搜索提 -->
			<div class="search_hint" v-show="search_status">
				<div class="items" v-for="item in search_hint" @click="active_text(item)">{{item}}</div>
				<div class="items">收起</div>
			</div>
		</div>
	</div>






	<div class="search_box">
		<!-- 商品列表	 -->
		<K_List 
			:goods_list=goods_list 
			:row_type=1 
			:tab_show=false 
			:tab_fixed=false 
			:ticket_show=true 
			@onSort=onSort 
			@on_show_ticket=on_show_ticket 
		/>
		<div class="list_null_box" v-if="show_null">
			<List_null title="没有搜索到数据" />
		</div>
	</div>

<Scroll_top />

</div>
</template>

<script>
import K_List from '@/components/k_goods_list/k_goods_list'
export default {
	data() {
		return {
			page: 1,
			list_rows: 20,
      sort: 0, //排序，0默认，1销量高到低，2销量低到高，3佣金比率高到低，4佣金低到高，5人气高到低，6人气低到高，7价格高到低，8价格低到高
      show_ticket: 0, // 是否只显示优惠卷
			goods_list: [],
			show_null: false,


			search_text:'', // 搜索内容
			search_hint:[], // 搜索提示
			search_status: false,
		}
	},
	created() {
		this.page_init()
	},
	mounted() {
	 	window.addEventListener('scroll', this.onscroll)
	},
	watch: {
		search_text: function(n, o) {
			if(n != '') {
				this.axios.post(this.$api.searchSug,{
					q:this.search_text
				})
				.then(res => {
					this.search_hint = res.data
				})
			}else{
				this.search_status = false
			}
		}
	},
	methods: {
		page_init() {
			this.search_text = this.$route.query.msg
			this.get_data();
		},
		get_data() {
			this.$loading.show()
			this.axios.get(this.$api.search,{
				params: {
					q: this.search_text,
					list_rows: this.list_rows,
					page:this.page,
					is_coupon: this.show_ticket,
					sort: this.sort
				}
			})
			.then(res => {
				if(res.code == 200) {
					if(res.data) {
						let arr = this.goods_list
						this.goods_list =arr.concat(res.data)

					}else{
						this.show_null = true
					}
				}
			})
		},
		// 搜索请求
		push_search() {
			if(this.search_text == '') {
				this.$toast('请输入要搜索的内容')
				return
			}
			this.id = this.search_text
			console.log('搜索请求 =>' + this.search_text)
			this.page = 1 
			this.goods_list = []
			this.get_data()
		},
		// 管理联想
		close_hint() {
			this.search_status = false
			// this.search_hint = []
		},
		show_sear() {
			this.search_status = true
		},
		// 获取被点击的值,
		active_text(text) {
			this.search_text = text
			this.push_search();
		},

		onSort(status) {
			this.$loading.show()
			// this.page = 1 
			// this.goods_list = []
			this.sort = status
			this.get_data()
		},
		on_show_ticket(status) {
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
		K_List
	},
	destroyed(){
	  window.removeEventListener('scroll', this.onscroll);//监听页面滚动事件
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.search_box{
	background: #fff;
	min-height: 667px;
}
.search_top_box{
		height: 50px;
		padding-top: 10px;
		background: #fff;
		.search_top{
			height: 30px;
			line-height: 30px;
			padding: 0 8px;
			display: flex;
			position: relative;
			.search_input {
				flex: 1;
				background: #f7f7f7;
				border-radius: 6px;
				.span1 {
					margin-left: 8px;
					flex: 0 0 30px;
					width: 30px;
				}
				input{
					flex: 1;
					padding-left: 12px;
					background: #f7f7f7;
					font-size: 12px;
					color: #777;
					width: 90%;
				}
			}
			.search_btn_box{
				flex: 0 0 50px;
				width: 50px;
				margin-left: 8px;
				text-align: center;
				span{
					display: inline-block;
					height: 26px;
					margin-top: 2px;
					line-height: 28px;
					width: 50px;
					background: @chen;
					color: #fff;
					border-radius: 4px;
					font-size: 13px;
				}
			}
			.search_hint{
				background: #fff;
				position: absolute;
				top: 35px;
				right: 0;
				left: 0;
				z-index: 9999;
				.items{
					height: 40px;
					line-height: 40px;
					padding: 4px 16px;
					font-size: 12px;
					border-bottom: 1px solid rgba(0, 0, 0, .03);
					&:last-of-type{
						color: @chen;
						text-align: right;
					}
				}
			}
		}
	}
</style>
