<template>
<div class="address page">

<div class="site_list_wrapper">
	<div class="for_item" v-for="(item,index) in list_data">
		<div class="item" v-swipeleft="{fn:left_tap,index:index,id:index}">
			<div class="heart" @click="hide_delete">
				<div class="top">
					<div class="name">金闪闪</div>
					<div class="mobile">13421936693</div>
					<div class="clearfix"></div>
				</div>
				<div class="bottom">
					<i class="iconfont icon-dizhi3"></i>
					&nbsp;&nbsp;广东省南城区体育路口鸿禧商业大厦1234
				</div>
			</div>
			
			<transition name="k-item-left"> 
				<div class="delete_box" v-show="delete_index == index">
					<div class="extend-click" @click="delete_item">
						<i class="iconfont icon-delete"></i>
					</div>
				</div>
			</transition>
		</div>	


	</div>
	<div class="list_null_box" v-if="list_data.length == 0">
		<List_null title='地址空空的~' />
	</div>
</div>


<div class="tab_add_box">
	<div class="tab_add_go" @click="goto_update(1)">
		<div class="item">
			<i class="iconfont icon-tianjia3"></i>
		</div>
		<div class="item">
		 添加新地址	
		</div>
		<div class="item">
		 <i class="iconfont icon-you"></i>
		</div>
	</div>
</div>
</div>
</template>

<script>
export default {
	name:"k_address",
	data() {
		return {
			delete_index: -1, // 删除索引
			delete_id: -1, // 删除的id
			list_data: [{},{},{},{}]
		}
	},
	methods: {
		// 左滑时显示删除按钮
		left_tap(v,e) {
			this.delete_index = v.index
			this.delete_id = v.id
		},
		delete_item() {
			this.$confirm({
				title: "提示",
				content: "确认删除该地址?",
			}).then(success => {
				console.log(this.delete_id)
			}).catch(fail => {
				console.log('点击了取消')
			})
		},
		// 点击左侧时,隐藏删除按钮
		hide_delete() {
			this.delete_index = -1
		},
		goto_update(id) {
			this.$router.push({
				path: `/address_update?id=${id}`
			})
		}
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');

.site_list_wrapper{
	padding-bottom: 60px;
	.for_item{
		.item{
			border-radius: 2px;
			background: #fff;
			border-bottom: 1px solid #f5f5f5;
			display: flex;
			.heart{
				flex: 1;
				padding: 8px;
				.top{
					margin-bottom: 10px;
					.name{
						float: left;
						font-size: 16px;
						margin-right: 12px;
						color: #000;
					}
					.mobile{
						float: left;
						margin-top: 2px;
						text-align: left;
						font-size: 14px;
						color: #666;
					}
					.setting {
						float: right;
						margin-top: 2px;
						font-size: 16px;
					}
				}
				.bottom{
					font-size: 13px;
					color: #888;
					i {
						font-size: 18px;
						color: #ff715b;
					}
				}
			}
			.delete_box{
				flex: 0 0 50px;
				width: 50px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: @red;
				i{
					font-size: 18px;
					color: #fff;
				}
			}
		}
		&:last-of-type{
			.item {
				// border-bottom: 0;
			}
		}
	}
}

.tab_add_box{
	position: fixed;
	left: 0;
	right: 0;
	bottom: @footer_height;
	height: 50px;
	border-top: 1px solid #eee;
	border-radius: 4px 4px 0 0;
	background: #fff;
	color: #666;
	.tab_add_go{
		height: 50px;
		display: flex;
		align-items: center;
		.item {
			flex: 1;
			&:nth-of-type(1) {
				flex: 0 0 50px;
				width: 50px;
				text-align: center;
				// color: @color_base;
				i {
					font-size: 24px;
					color: #ff675b;
				}
			}
			&:nth-of-type(2) {
				text-align: left;
			}
			&:nth-of-type(3) {
				text-align: right;
				margin-right: 12px;
			}
		}
	}	
}


/*切换动画*/
.k-item-left-enter-active,
.k-item-left-leave-active {
  will-change: transform;
  transition: all 400ms;
}
.k-item-left-enter {
  transform: translate3d(100%, 0, 0);
}
.k-item-left-leave-active {
  transform: translate3d(100%, 0, 0);
}
</style>
