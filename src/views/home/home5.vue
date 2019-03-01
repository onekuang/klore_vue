<template>
<div class="home page">
	<!-- <k_header title="白手创客" :left_show="head_left_show" /> -->
	<div class="top">
		<router-link tag="div" to="/">
			<span :class="{active: active_index==0}">发现</span>
		</router-link>
		<router-link tag="div" to="/lessons">
			<span :class="{active: active_index==1}">学院</span>
		</router-link>
		<router-link tag="div" to="/book">
			<span :class="{active: active_index==2}">电子书</span>
		</router-link>
		<router-link tag="div" to="/voice_book">
			<span :class="{active: active_index==3}">有声阅读</span>
		</router-link>
	</div>
	
	<div class="clearfix"></div>
	


	<div class="router">
		<router-view></router-view>
	</div>
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	name:'home5',
	data() {
		return {
			active_index: 0,
			head_left_show: false,	
			transitionName:'',		
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){}
	},
	watch: {
		$route(to, from) {	
		  if(to.meta.index > from.meta.index){
		    this.transitionName = 'slide-left';
		  }else{
		    this.transitionName = 'slide-right';
		  }

		  let i = to.fullPath
			if(i == '/lessons'){
				this.active_index = 1 
			}else if(i == '/book'){
				this.active_index = 2 
			}else if(i == '/voice_book'){
				this.active_index = 3
			}else{
				this.active_index = 0
			}
		},
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.top{
	height: 50px;
	div{
		float: left;
		height: 50px;
		line-height: 50px;
		padding: 0 12px;
		text-align: center;
		span{
			font-size: 16px;

		}
		.active{
			font-size: 17px;
			font-weight: 900;
			color: #000;			
		}
	}
}
</style>