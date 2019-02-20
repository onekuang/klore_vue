<template>
<div class="search_wrapper page fff">

	<div class="search_top_box">
		<div class="search_top">
			<div class="search_input">
				<span class="span1"><i class="iconfont icon-search"></i></span>
				<input type="text" placeholder="请输入要搜索的内容" v-model="search_text">
			</div>
			<div class="search_btn_box" @click="push_search">
				<span>搜索</span>
			</div>
		</div>
	</div>
	
	<!-- 热门搜索 -->
	<div class="search_content">
		<p class="p1">
			<i class="iconfont icon-hotfill"></i>热门搜索
		</p>
		<div class="hot_search">
			<div class="item" v-for="item in hot_data">
				<div class="box" @click="active_text(item.text)">{{item.text}}</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	
	<!-- 历史搜索 -->
	<div class="search_history">
		<p class="p1">
			<i class="iconfont icon-shijian"></i>历史搜索
			<span class="pull-right" @click="delete_all_history">清空</span>
		</p>
		<div class="history_box">
			<div class="item" v-for="(item,index) in history_reverse">
				<div class="text" @click="active_text(item)">{{item}}</div>
				<div class="delete" @click="delete_history(index)">
					<i class="iconfont icon-close"></i>
				</div>
			</div>
		</div>
	</div>


</div>
</template>

<script>
import { l_storage } from '@/common/js/storage.js'
export default {
	name:"search",
	data() {
		return {
			search_text:'', // 搜索内容
			hot_data: [ 	// 热门搜索数据
				{text:'热门1'},
				{text:'热门2'},
				{text:'热门3'},
				{text:'热门4'},
				{text:'热门5'},
				{text:'热门6'},
				{text:'热门7'},
				{text:'热门8'},
			],
			// 历史搜索
			history:["鞋子","衣子","帽子","圣诞"]
		}
	},
	created() {
		// l_storage.set('hisdata',this.history)
		this.history = l_storage.get('hisdata') || []
	},
	computed: {
		history_reverse() {
			return this.history.reverse();
		}
	},
	methods:{
		// 搜索请求
		push_search() {
			if(this.search_text == '') {
				this.$toast('请输入要搜索的内容')
				return
			}
			// 写入历史记录
			this.set_history(this.search_text);

			console.log('搜索请求 =>' + this.search_text)
		},
		// 获取被点击的值,
		active_text(text) {
			this.search_text = text
		},
		// 初始化历史记录
		init_history() {			
			this.history = l_storage.get('hisdata')
		},
		// 搜索后写入历史记录
		set_history(text) {
			let arr = this.history
			arr.push(text)
			this.history = [...new Set(arr)];
			l_storage.set('hisdata',this.history)
		},
		// 删除单个历史记录
		delete_history(index) {
			this.history.splice(index, 1)
			l_storage.set('hisdata',this.history)
		},
		// 清空历史记录
		delete_all_history() {
			this.$confirm({
				title: "提示",
				content: "是否清空所有记录"
			}).then(success => {
				l_storage.remove('hisdata');
				this.history = [];

			}).catch(fail => {
				console.log('点击了取消')
			})
		}
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.search_wrapper{
	.search_top_box{
		height: 50px;
		padding-top: 10px;
		background: #fff;
		.search_top{
			height: 30px;
			line-height: 30px;
			padding: 0 8px;
			display: flex;
			.search_input {
				flex: 1;
				background: #f7f7f7;
				border-radius: 6px;
				.span1 {
					margin-left: 8px;
				}
				input{
					width: 90%;
					padding-left: 12px;
					background: #f7f7f7;
					font-size: 12px;
					color: #777;
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
					background: @orange;
					color: #fff;
					border-radius: 4px;
					font-size: 13px;
				}
			}
		}
	}
	

	.search_content{
		padding: 10px;
		.p1{
			font-size: 13px;
			color: #999;
			padding-bottom: 8px;
			border-bottom: 1px solid #f7f7f7;
			margin-bottom: 12px;
			i{
				color: @red;
				margin-right: 6px;
			}
		}
		.hot_search{
			// display: flex;
			// flex-wrap: wrap;
			text-align: center;
			.item{
				// flex: 1;
				float: left;
				height: 30px;
				margin-bottom: 10px;
				margin-top: 10px;
				padding: 6px;
				.box{
					height: 30px;
					line-height: 30px;
					background: #f7f7f7;
					padding-left: 12px;
					padding-right: 12px;
					border-radius: 6px;
					color: #666;
					font-size: 12px;
				}
			}
		}
	}

	.search_history{
		padding: 10px;
		padding-right: 8px;
		.p1{
			font-size: 13px;
			color: #999;
			padding-bottom: 8px;
			border-bottom: 1px solid #f7f7f7;
			margin-bottom: 12px;
			i{
				color: @red;
				margin-right: 6px;
				font-weight: 900;
			}
			span {
				margin-right: 8px;
				color: #ccc;
			}
		}

		.history_box{
			.item{
				display: flex;
				height: 32px;
				line-height: 32px;
				font-size: 12px;
				.text{
					flex: 1;
					// max-width: 90%;
					overflow:hidden;
					color: #999;
				}
				.delete{
					flex: 0 0 20px;
					margin-left: 12px;
					color: #bbb;
				}
			}
		}
	}
}
</style>
