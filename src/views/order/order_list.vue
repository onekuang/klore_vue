<template>
<div class="show_order_list page">
	<mu-container>
	  <mu-tabs :value.sync="active" indicator-color="#55b4fe" inverse color="#000" text-color="rgba(0, 0, 0, .54)"  full-width>
	      <mu-tab>未付款</mu-tab>
	      <mu-tab>待发货</mu-tab>
	      <mu-tab>待收货</mu-tab>
	      <mu-tab>已完成</mu-tab>
	    </mu-tabs>
	  <div class="box1" v-show="active == 0">
	    <div class="for_items" v-for="i in 3">
	    	<div>	    		
		    	<div class="item">
		    		
		    		<div class="item_herd">
		    			<div>下单时间：1999-11-09 12:12:12</div>
		    			<div>未付款</div>
		    		</div>
						
						<div class="item_top">
							<div>订单编号：1234567890123456789</div>
						</div>

		    		<div class="item_content">
		    			<div class="for_goods_item">
		    				<div class="img">
		    					<img v-holder="'img=60x60?&bg=C7E1FF&text=60x60'">
		    				</div>
		    				<div class="info">
		    					<div class="title">title</div>
		    					<div class="num">x 3</div>
		    				</div>
		    			</div>
		    			<div class="right">
		    				
		    			</div>
		    		</div>

		    		<div class="expbox">
		    			<table>
		    				<tr>
		    					<td><div>运费：</div></td>
		    					<td><span class="money">12元</span></td>
		    				</tr>
		    				<tr>
		    					<td><div>积分兑换：</div></td>
		    					<td><span class="money">-8元</span></td>
		    				</tr>
		    			</table>
		    			<div class="clearfix"></div>
		    		</div>


		    		<div class="item_foot">
		    			<div>￥300</div>
		    			<div>
		    				<span class="span1" @click="cancel_order(1)">取消订单</span>
		    				<span class="span2">立即付款</span>
		    			</div>
		    		</div>
						
		    	</div>
		    		<div class="khr"></div>
		    	
		    </div>
	    </div>		
	    <Load_more />	
	  </div>
	  <div class="box2" v-show="active == 1">2</div>
	  <div class="box2" v-show="active == 2">3</div>
	  <div class="box2" v-show="active == 3">4</div>
	</mu-container>

	

</div>
</template>

<script>
export default {
	data() {
		return {
			active: 3,
			order_data:[]
		}
	},
	created() {
		this.active= parseInt(this.$route.query.tab) || 0
	},
	methods: {
		// 立即购买
		pay_order() {
			console.log('立即购买')
		},
		// 取消订单
		cancel_order(id) {
			this.$confirm({
				title: '确认取消该订单?'
			})
			.then(res => {
				console.log(id)
			})
			.catch(fail => {
				console.log('取消')
			})
		},
		// 确认收货
		confirm(id) {
			this.$confirm({
				title: '确认收货?'
			})
			.then(res => {
				console.log(id)
			})
			.catch(fail => {
				console.log('取消')
			})
		},
		// 物流信息
		select_wuliu(id) {
			console.log('查看物流')
			this.$router.push({
				path: `/wuliu?id=${id}`
			})
		}
	},
	filters: {
		f_status :function(input) {
			if(input == 1){return "未付款"}
			if(input == 2){return "待发货"}
			if(input == 3){return "待收货"}
			if(input == 4){return "已完成"}
		},
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.show_order_list{
	position: relative;
	.for_items{
		.item{
			padding: 8px;
			background: #fff;
			.item_herd{
				display: flex;
				font-size: 12px;
				padding-bottom: 6px;
				padding-top: 6px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				>div{
					flex: 2;
					&:nth-of-type(2) {
						flex: 1;
						text-align: right;
					};
				}
			}
			.item_top{
				>div{
					font-size: 12px;
					padding: 6px 0;
				}
			}

			.item_content{				
				.for_goods_item{
					padding: 8px 0;
					display: flex;
					>div{
						flex: 1;
					}
					.img {
						flex: 0 0 60px;
						text-align: center;
					}
					.info {
						text-align: right;
						margin-right: 8px;
					}
				}
			}

			.item_foot{
				display: flex;
				border-top: 1px solid rgba(0, 0, 0, 0.1);
				padding-top: 8px;
				>div{
					flex: 1;
					&:nth-of-type(1) {
						font-size: 18px;
						font-weight: 600;
						color: @color_shen;
					}
					&:nth-of-type(2) {
						text-align: right;
						.span1,.span2{
							display: inline-block;
							text-align: center;
							border-radius: 6px;
							font-size: 12px;
							padding: 4px 12px;							
						}
						.span1{
							background: #eee;
						}
						.span2{
							margin-left: 8px;
							color: #fff;
							.blue_btn();
						}
					};
				}
			}
			.expbox{
				table{
					width: 100%;
					tr{
						font-size: 12px;
						td:nth-of-type(1) {
							width: 100px;
							>div{							
								margin-bottom: 8px;
							}
						}
						td:nth-of-type(2) {
							text-align: right;
							.money{
								color: @color_shen;
								font-weight: 600;
							}
						}
					}
				}	
			}
		}
	}
}
</style>
