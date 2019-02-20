<template>
<div class="classlist page">
<div class="search_wrapper">
	<router-link tag="div" class="search_box" to="/search">
		<div class="search_input">
			<i class="iconfont icon-search"></i>&nbsp;&nbsp;搜索
		</div>
	</router-link>
</div>
<div class="pro_box">
	<div class="pro_left_box">
		<BScroll class='l_bs_box'>
		<div class="l_bs_item">
			<ul>
				<li 
					v-for='(item, index) in class_data'
					:class="{active: index == arr_index}"
					@click='toggle_item(index,item.id)'
				>
					<span class="l_name">{{item.name}}</span>
				</li>
			</ul>
		</div>
		</BScroll>
	</div>
	<div class="pro_right_box">
		<BScroll class='r_bs_box' ref='r_scroll'>
			<div class="r_bs_item">
			<!-- 	<div class="banner">
					<img src="" width="100%">
				</div>	 -->			
				<ul>
				<li v-for='item in child_arr' @click='goto_detail(item.id)'> 
					<img :src="item.image">
					<p>{{item.name}}</p>
				</li>				
			</ul>
			</div>
		</BScroll>
	</div>
</div>

</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	name:'classlist',
	data() {
		return {
			arr_index: 0,
			class_data: [
				{
					id: 1,
					name: '热门',
					child: [
						{
							id:101,
							pid: 1,
							name: '机器人教育',
							image:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"
						},
						{
							id:102,
							pid: 1,
							name: '英语',
							image:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"
						},
					]
				},
				{
					id: 2,
					name: '精品',
					child: [
						{
							id:103,
							pid: 2,
							name: '饮品',
							image:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"
						},
						{
							id:104,
							pid: 2,
							name: '小吃',
							image:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"
						},
					]
				},
				{
					id: 3,
					name: '教育',
					child: [
						{
							id:103,
							pid: 2,
							name: '1对1辅导',
							image:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"
						},
						{
							id:104,
							pid: 2,
							name: '英语',
							image:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"
						},
					]
				},
			],
			// class_data:[
			// 	{id:'',name:'',child:[]}
			// ]
		}
	},
	created() {
		this.page_init() 
	},
	computed: {
		child_arr: function() {
			return this.class_data[this.arr_index]['child']
		}
	},
	methods: {
		page_init() {
			this._get_data();
		},
		_get_data() {
		},
		goto_detail(id) {
			this.$router.push({
				path: '/prolist?id=' + id
			})
		},
		toggle_item(index, id) {
			this.arr_index = index
			this._get_right_data(id)
		},
		_get_right_data(id) {
		}
	},
	components: {
		BScroll,
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
@bs_top: 50 + @header_height; // BScroll 距离顶部的位置



.classlist {
	.pro_box{
		display: flex;
		.pro_left_box{
			width: 100px;
			flex: 0 0 100px;
			// scroll
			.l_bs_box{
				width: 100px;
				position: fixed;
				top: @bs_top;
				left: 0;
				right: 0;
				bottom: 55px;
				overflow: hidden;
				.l_bs_item{
					min-height: 101%;
					background: #fff;
					text-align: center;
					.l_name{
						display: inline-block;
						border-radius: 14px;
						height: 20px;
						line-height: 6px;
						padding: 8px 16px;
						font-size: 12px;
					}
				}
			}
			ul{
				border-right: 1px solid #f5f5f5;
				.active{
					color: #E0313A;
					// border-bottom-color: #E0313A;
					background: #fff;
					border-top: #ccc;
					span{
						background: @active;
						color: #fff;
					}
				}
				li{
					height: 50px;
					line-height: 50px;
					padding-left: 8px;
					// border-bottom: 1px solid #f5f5f5;
					transition: all 0.3s;
				}
			}
		}
		.pro_right_box{
			flex: 1;
			margin-left: 4px;			
			.r_bs_box{
				position: fixed;
				top: @bs_top;
				left: 100px;
				right: 0;
				bottom: 55px;
				overflow: hidden;
				background: #fff;
				.r_bs_item{
					min-height: 101%;
					background: #fff;
					.banner{
						padding: 8px;
						img{
							border-radius: 8px;
							box-shadow: 1px 1px 4px 2px rgba(0,0,0,.5);
						}
					}
					ul{
						display: flex;
						flex-wrap: wrap;
						padding-top: 20px;
						li{
							flex: 0 0 33%;
							// height: 80px;
							padding: 6px 0 6px 0;
							text-align: center;
							margin-bottom: 12px;
							img{
								margin-bottom: 6px;
								width: 50px;
								height: 50px;
							}
							p{
								color: #888;
								font-size: 12px;
							}
						}
					}
				}
			}
		}
	}
}
.classlist{
	min-height: 48px;
}
.search_wrapper{
	background: #fff;
	height: 48px;
	.search_box{
		text-align: center;
		padding-top: 10px;
		.search_input{
			width: 90%;
			margin: 0 auto;
			height: 30px;
			line-height: 30px;
			border-radius: 4px;
			background: #f5f5f5;
			color:#999;
			font-size: 12px;
		}
	}	
}
</style>
