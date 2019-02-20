<template>
<div class="video_info page">
	
	<k_header title="课程" />

	<div class="info">
		<div class="title">课程名称占位符</div>
		<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aspernatur aliquam quas sit numquam, dignissimos, provident magnam expedita nam inventore nisi quia hic sint nesciunt architecto natus ab mollitia in.</div>
		<div class="momey_box">
			<!-- <div class="money"> <span>3</span>积分 / 节</div> -->
		</div>
	</div>

	<!-- 参数列表 -->
	<div class="param_table">
		<div class="items">
	  	<div class="item">
				<mu-row>
		    	<mu-col span="4">
		    		<div class="grid-cell"><div class="key">课程名称</div></div>
		    	</mu-col>
		    	<mu-col span="8">
		    		<div class="grid-cell"><div class="value">课程名称</div></div>
		    	</mu-col>
		  	</mu-row>
	  	</div>
	  	<div class="item">
				<mu-row>
		    	<mu-col span="4">
		    		<div class="grid-cell"><div class="key">讲师名称</div></div>
		    	</mu-col>
		    	<mu-col span="8">
		    		<div class="grid-cell"><div class="value">admin</div></div>
		    	</mu-col>
		  	</mu-row>
	  	</div>
	  	<div class="item">
				<mu-row>
		    	<mu-col span="4">
		    		<div class="grid-cell"><div class="key">章节总数</div></div>
		    	</mu-col>
		    	<mu-col span="8">
		    		<div class="grid-cell"><div class="value">12节</div></div>
		    	</mu-col>
		  	</mu-row>
	  	</div>
	  	<div class="item">
				<mu-row>
		    	<mu-col span="4">
		    		<div class="grid-cell"><div class="key">收费标准</div></div>
		    	</mu-col>
		    	<mu-col span="8">
		    		<div class="grid-cell"><div class="value">免费</div></div>
		    	</mu-col>
		  	</mu-row>
	  	</div>
		</div>
	</div>
	
	<div class="detail">
		课程介绍占位符<br>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus dolorum cupiditate cum neque consectetur voluptas ex ducimus sequi, ratione expedita possimus, ullam ipsam aperiam accusantium et modi officiis in.
	</div>
	<div class="khr"></div>
	<!-- 章节 -->
	<div class="lessons">
		<h4 class="index_title">章节</h4>
		<div class="list_wrapper">
			<Lessons_list />
		</div>
	</div>
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
import Lessons_list from "@/components/lessons_list/lessons_list.vue";

export default {
	data() {
		return {

		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){}
	},
	components: {Lessons_list,k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.video_info{
	padding-bottom: 90px;
	.info{
		padding: 8px;
		.title{
			font-size: 16px;
			font-weight: 900;
			padding: 8px 0;
		}
		.desc{
			font-size: 14px;
			color: #888;
		}
		.momey_box{
			.money{
				text-align: right;
				height: 40px;
				line-height: 40px;
				color: #f00;
				font-size: 12px;
				span{
					font-size: 18px;
					margin-right: 4px;
				}
			}
		}
	}
	.param_table{
		padding: 12px 8px;
		.khr_bg();
		.items{
			background: #fff;
			border-radius: 6px;
			.item{
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #f5f5f5;
				&:nth-of-type(1) {
					border-top: 1px solid #f5f5f5;
				}
				.key{
					border-left: 1px solid #f5f5f5;
					border-right: 1px solid #f5f5f5;
					text-align: center;
					font-size: 12px;
				}
				.value{
					padding-left: 8px;
					font-size: 12px;
				}
			}
		}
	}
	.detail{
		padding: 12px 2px;
	}
}
</style>