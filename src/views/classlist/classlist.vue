<template>
<div class="classlist">
<div class="search_wrapper">
	<router-link tag="div" class="search_box" to="/search">
		<div class="search_input">
			<i class="iconfont icon-search"></i>&nbsp;&nbsp;先领劵在购买
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
					<img :src="item.image" width="50" height="50">
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
					name: '鞋子',
					child: [
						{
							id:101,
							pid: 1,
							name: '女鞋',
							image:"https://lipstick.xsygood.com/testimg/nvxie.png"
						},
						{
							id:102,
							pid: 1,
							name: '高跟鞋',
							image:"https://lipstick.xsygood.com/testimg/nvxie.png"
						},
					]
				},
				{
					id: 2,
					name: '彩妆',
					child: [
						{
							id:103,
							pid: 2,
							name: '口红',
							image:"http://lipadmin.xsygood.com/upload/lipstick/1544581412415.jpg"
						},
						{
							id:104,
							pid: 2,
							name: '香水',
							image:"http://lipadmin.xsygood.com/upload/lipstick/1544582284009.jpg"
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
			// this._get_data();
		},
		_get_data() {
			this.axios.get("http://192.168.0.116/api/tbk_api/categorylist.html",{
				params: {
					// access_token:"5b7f60aca7e7f6f8c680b1b219ad3ec6"
				}
			})
			.then(res => {
				this.class_data= res
			})
			.catch(res => {
				this.$toast("网络错误")
			})
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
@bs_top: 50px; // BScroll 距离顶部的位置



.classlist {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 55px;
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
