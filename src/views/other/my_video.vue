<template>
<div class="my_video page app_head">
	<k_header title="我的课程" />
	
  <div class="video_list">
  	<div class="items">
  		<div class="item" v-for="item in 0">
  			<mu-row>
  				<mu-col span="4">
			    	<div class="grid-cell left">
			    		<div class="img_box"></div>
			    	</div>
			    </mu-col>
			    <mu-col span="8">
			    	<div class="grid-cell right">
			    		<div class="info">
			    			<div class="title">Harry Potter</div>
			    			<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo, alias animi iusto neque, sint corrupti? Laudantium, dignissimos id excepturi facilis, facere saepe quasi placeat praesentium ipsa sapiente illo molestiae?</div>
			    			<div class="other">
			    				<!-- <div class="flag">
			    					<div class="tag">置顶</div>
			    				</div> -->
			    				<div class="time"><i class="iconfont icon-yanjing1"></i> 4299</div>
			    				<div class="count">共12节</div>
			    			</div>
			    		</div>
			    	</div>
			    </mu-col>
			    
			  </mu-row>
  		</div>
  	</div>	

  	<div class="list_null">
  		<List_null title="暂无课程" />		
  	</div>    
  </div>

</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
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
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.video_list{
	.items{
		padding: 0 12px;
		.item{
			padding: 16px 0;
			border-bottom: 1px solid #eee;
			.right{
				margin-left: 8px;
			}
			.info{
				.title{
					font-size: 16px;
					height: 20px;
					line-height: 20px;
					text-overflow:ellipsis; 
			    overflow: hidden;
				}
				.desc{
					font-size: 12px;
					height: 40px;
					line-height: 20px;
					color: #777;
					text-overflow:ellipsis; 
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
				}
				.other{
					margin-top: 10px;
					.flag{
						float: left;
						.tag{
							font-size: 10px;
							color: #fff;
							background: #f00;
							padding: 0 4px;
							margin-right: 6px;
							margin-top: 2px;
							border-radius: 2px;
						}
					}
					.time{
						float: left;
						font-size: 10px;
						color: #666;
						i {
							font-size: 14px;
						}
					}
					.count{
						float: right;
						font-size: 12px;
						margin-right: 12px;
						color: #666;					
					}
				}
				
			}
			.img_box{
				width: 100%;
				padding-bottom: 80px;
				background: #eee;
				border-radius: 4px;
			}
		}
	}	
}
</style>