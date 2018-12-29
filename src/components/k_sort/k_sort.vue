<template>
<div class="tab_sort_wrapper">
		<div class="tab_sort_box">
			<div 
				class="item" 
				@click="item_click(1)"
				:class= "{'on': active == 1}"
			>
				<div class="text">综合
					<span class="span3"></span>				
				</div>
			</div>
			<div 
				class="item" 
				@click="item_click(2)"
				:class= "{
					'on': active == 2, 
					'on1': direction == 'up'  && active == 2, 
					'on2': direction == 'down'  && active == 2}"
			>
				<div class="text">
					人气
					<span class="span1"></span>
					<span class="span2"></span>
				</div>
			</div>
			<div 
				class="item" 
				@click="item_click(3)"
				:class= "{
					'on': active == 3, 
					'on1': direction2 == 'up' && active == 3, 
					'on2': direction2 == 'down' && active == 3
				}"
			>
				<div class="text">
					价格
					<span class="span1"></span>
					<span class="span2"></span>
				</div>
			</div>
			<div 
				class="item iconbox" 
				@click="item_click(4)" 
			>
				<i class="iconfont icon-liebiao" v-show=!list_mode></i>
				<i class="iconfont icon-apps" v-show=list_mode></i>
			</div>
		</div>
		<!-- 综合 弹出层-->
		<div class="list_box" v-show="list_box_show == true">
			<ul>
				<li v-for="(item,index) in sort_list" 
					@click="syenthesize_click(index,item.sid)" 
					:class="{on : sort_clsss_i == index}"
				>
					{{item.title}}
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			direction: 'down',  // item2
			direction2: 'down', // item3
			list_mode: true,
			list_box_show: false,
			list_style: 1,// 1列表模式,2为图文模式
			// data: [{},{},{},{},{},{},{},]
			
			// 综合排序
			sort_list: [
				{sid:0,title:'综合排序'},
				{sid:1,title:'销量由高到低'},
				{sid:2,title:'销量由低到高'},
				{sid:3,title:'佣金比率由高到低'},
				{sid:4,title:'佣金比率由低到高'},
			], 
			sort_clsss_i: 0,
		}
	},
	methods: {
		item_click(index) {
			if(index === 1) {
				// this.active = 1
				this.list_box_show = !this.list_box_show
				return
			}
			
			this.sort_clsss_i = -1
			this.list_box_show = false

			if(index === 2) {
				this.active = 2
				if(this.direction === 'down'){
					this.direction = 'up'
					this._on_status(5)
				}else {
					this.direction = 'down'
					this._on_status(6)
				}
			}
			if(index === 3) {
				this.active = 3
				if(this.direction2 === 'down'){
					this.direction2 = 'up'
					this._on_status(7)
				}else {
					this.direction2 = 'down'
					this._on_status(8)
				}
			}
			if(index === 4) {
				this.active = 4
				this.list_mode=!this.list_mode
				if(this.type == 1) {
					this.type = 2 
				}else{
					this.type = 1
				}
			}			
		},
		syenthesize_click(index,sid) {
			this.active = 1
			this.sort_clsss_i = index
			this._on_status(sid)
			this.list_box_show = false
		},
		// 派发排序的状态到父组件,
		_on_status(status) {
			// console.log(status)
			this.$emit('onSort',status)
		}
	},
	components: {}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.tab_sort_wrapper{
	.tab_sort_box{
		display: flex;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background: #fff;
		position: relative;
		border-bottom: 1px solid #eee;
		.item {
			flex: 1;
			&.iconbox{
				flex: 0 0 70px;
				width: 70px;
				i {
					font-size: 18px;
				}
			}
			
			.text{
				position: relative;
				font-size: 13px;
				span{
					position: absolute;
					right: 6px;					
					width:0;
			    height:0;
			    border-left:4px solid transparent;
	        border-right:4px solid transparent;
				}
				// 上箭头
				.span1{	    
					top: 13px;    
	        border-bottom:4px solid #ccc;
				}
				// 下箭头
				.span2{
					bottom: 13px;
	        border-top:4px solid #ccc;
				}
				.span3 {
					top: 18px;
					border-top:4px solid #ccc;
				}							
			}
			&.on {
				color: red;
				i {
					color:red;
				}
				.span3 {
					border-top:4px solid red;
				}
			}
			&.on1 {
				.span1 {
					border-bottom:4px solid red;
				}
			}
			&.on2 {
				.span2 {
					border-top:4px solid red;
				}
			}	
		}
	}
	.list_box{
		background: #fff;
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		ul{
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
			li{
				padding-left: 20px;
				height: 40px;
				line-height: 40px;
				font-size: 12px;
				color: #666;
				&.on{
					color: red;
				}
			}
		}
	}
}
</style>