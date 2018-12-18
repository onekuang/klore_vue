<template>
<div class="tab_sort_wrapper">
	<div class="tab_sort_box">
		<div 
			class="item" 
			@click="item_click(1)"
			:class= "{'on on3': active == 1}"
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
				劵后价
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
				销量
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

	<div class="list_box" v-show="list_box_show == true && active == 1">
		<ul>
			<li class="on">综合排序</li>
			<li>优惠劵面值由高到低</li>
			<li>优惠劵面值由低到高</li>
			<li>预估佣金由高到低</li>
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
			list_box_show: false
		}
	},
	methods: {
		item_click(index) {
			if(index === 1) {
				this.active = 1
				this.list_box_show = !this.list_box_show
			}
			if(index === 2) {
				this.active = 2
				if(this.direction === 'down'){
					this.direction = 'up'
				}else {
					this.direction = 'down'
				}
			}
			if(index === 3) {
				this.active = 3
				if(this.direction2 === 'down'){
					this.direction2 = 'up'
				}else {
					this.direction2 = 'down'
				}
			}
			if(index === 4) {
				this.active = 4
				this.list_mode = !this.list_mode
				this.$emit('is_list_mode', this.list_mode)
			}
		}
	}
}
</script>

<style scoped lang="less">
@import url('../../../common/less/index.less');
.tab_sort_wrapper{
	.tab_sort_box{
		display: flex;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background: #fff;
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
		ul{
			border-top: 1px solid #eee;
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
