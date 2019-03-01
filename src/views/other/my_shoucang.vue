<template>
<div class="shoucang page app_head">
	<k_header title="加盟收藏" />
	
	<div class="prolist_wrapper">
		<div class="box">
			<div class="items" v-for="item in list">
					<router-link tag="div" to="/goodsdetaile" class="item">
						<div class="img"></div>
						<div class="info">
							<div class="top">
								<div class="title">加盟名字</div>
								<div class="flag">
									<img src="https://lipstick.xsygood.com/bsck_img/prove.png">
								</div>
							</div>
							<div class="desc">国际快时尚修仙百货领先品牌,超过1000家门店</div>
							<div class="tags" v-show="false">
								<div class="tag">实地考察地址</div>
								<div class="tag">带店培训</div>
								<div class="tag">装修指导</div>
								<div class="clearfix"></div>
							</div><br>
							<div class="bottom">
								<div class="money"><span>￥</span>40~80<span>万</span></div>
								<div class="num">4399已申请</div>
							</div>
						</div>
					</router-link>
				</div>		
				
				<div class="list_null" v-if="list.length==0">
					<List_null title="暂无收藏" />		
				</div>
		</div>
	</div>


</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
			list:[{},{}]
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
.shoucang{
	.khr_bg();
}
.prolist_wrapper{
	padding: 0 4px;
	.box{
		.items{
			background: #fff;
			padding: 4px;
			padding-bottom: 12px;
			padding-top: 12px;
			border-bottom: 1px solid #eee;
			&:nth-of-type(1) {
				border-top: 1px solid #eee;
			}
		}
		.item{
			display: flex;
			
			.img{
				flex: 0 0 35%;
				height: 0;
				padding-bottom: 30%;
				border-radius: 8px;
				background: #eee;
				background-size: 100% 100%!important;
				background-repeat: no-repeat!important;
				margin-right: 12px;
			}
			.info{
				flex: 1;
				.top{
					display: flex;
					.title{
						font-size: 14px;
						font-weight: 900;
						margin-right: 4px;
					}
					img{
						height: 18px;
					}
				}
				.desc{
					font-size: 12px;
					color: #333;
					line-height: 20px;
					margin-bottom: 4px;
					margin-top: 2px;
				}
				.tags{
					.tag{
						float: left;
						border: 1px solid @orange;
						margin-right: 6px;
						font-size: 10px;
						padding: 0 2px;
						border-radius: 4px;
						color: @orange;
						margin-bottom: 4px;
					}
				}
				.bottom{
					display: flex;
					.money{
						flex: 1;
						text-align: left;
						font-size: 18px;
						color: @red;
						span{
							font-size: 12px;
						}
					}
					.num{
						flex: 1;
						text-align: right;
						font-size: 12px;
						margin-top: 6px;
						color: #666;
					}
				}
			}
		}
		.apply_for{
			font-size: 12px;
			color: #666;
			margin-left: 20px;
		}
	}
}
</style>