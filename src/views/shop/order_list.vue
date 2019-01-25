<template>
<div class="show_order_list page">

<k_header @r_click="toggle_date" title="我的订单" right="筛选" />


<div class="time_box">
	<K_Date ref="date" type='month' @onDate=onDate></K_Date>
</div>


<div style="z-index: 100;">
	<mu-container>
	  <mu-tabs :value.sync="active" indicator-color="#F729A6" inverse color="#000" text-color="rgba(0, 0, 0, .54)"  full-width>
	      <mu-tab>全部</mu-tab>
	      <mu-tab>已付款</mu-tab>
	      <mu-tab>已结算</mu-tab>
	      <mu-tab>已失效</mu-tab>
	    </mu-tabs>
	  <div class="demo-text">
	    <!-- <div class="for_items" v-for="i in 3">
	    	<div>
	    		<div class="khr"></div>
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
		    					<img v-holder="'img=80x80?&bg=C7E1FF&text=80x80'">
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
		    	
		    </div>
	    </div> -->
			
	    <div class="for_items" v-for="(item, index) in order_data" :key="index">
	    	<!-- <div v-show="active + 1 == item.status"> -->
	    	<div>
		    	<div class="khr" v-show=" index != 0"></div>
		    	<div class="item">
		    		<div class="item_herd">
		    			<div>下单时间：{{item.create_time}}</div>
		    			<div>
		    				<div class="tag" 
		    					:class="{'status1' : item.order_status == 1,'status2' : item.order_status == 2}">
		    					{{item.order_status | f_status}}
		    				</div class="tag">
		    			</div>
		    		</div>
						
						<div class="item_top">
							<div>订单编号：{{item.order_sn}}</div>
						</div>

		    		<div class="item_content">

		    			<div class="for_goods_item">
		    				<div class="img">
		    					<!-- <img v-holder="'img=80x80?&bg=C7E1FF&text=80x80'"> -->
		    					<img v-holder="'img=80x80?&bg=C7E1FF&text=80x80'" :src="item.goods_pic" width="80" height="80">
		    				</div>
		    				<div class="info">
		    					<div class="title b">{{item.goods_name}}</div>
		    					<div class="num">66元</div>
		    					<div class="num">x2</span></div>
		    				</div>
		    			</div>

		    		</div>
						
						<div class="expbox">
							<table>
								<tr>
									<td><div>预估佣金：</div></td>
									<td><span class="money">6元</span></td>
								</tr>
							</table>
							<div class="clearfix"></div>
						</div>

		    		<div class="item_foot">
		    			<!-- <div class="text-right"><span class="span1">奖励佣金：</span><span class="span2">￥130元</span></div> -->
		    		</div>
		    	</div>
	    		
	    	</div>
	    </div>
	    <div class="more_box">
	      <Load_more @tap_load="tap_load" :status=load_status />
	    </div>
	  </div>
	</mu-container>


</div>
</div>
</template>

<script>
import K_Date from '@/components/k_date/k_date'
import k_header from '@/components/base/header_tab/header_tab'
export default {
	name:"show_order_list",
	data() {
		return {
			month_text:"本月",
			month: undefined,
			date_show: false,
			active: 3,
			order_data:[],
			page_current: 1,
			page_sum: 1,
			load_status:0,
			type:'',
		}
	},
	created() {
		this.active= parseInt(this.$route.query.tab) || 0
		this.page_init()
	},
	watch: {
		active: function(n, o){
			let state = n
			if(state == 0) {state = ''}
			if(state == '3') {state = -1}
			this.order_data   = []
			this.page_current = 1
			this.page_sum     = 1
			this.load_status  = 0			
			this.type = state
			this.page_init()
		}
	},
	methods: {
		page_init() {
			let month = this.month_text == "本月" ? '' : this.month_text

			this.axios.get(this.$api.order_list,{
				params: {
					type: this.type,
					list_rows: 15,
					page: this.page_current,
					time: month,
				}
			})
			.then(res => {				
				this.page_sum = res.data.last_page

				if(this.page_current > this.page_sum){
					this.load_status = 2
          return
				}
				let arr = this.order_data
				let dat = res.data.data
				this.load_status = 0				
				this.order_data = arr.concat(dat)
				this.page_current = parseInt(this.page_current) + 1
			})
		},
		tap_load() {
			this.load_status = 1
			this.page_init()
		},
		toggle_date() {
			this.$refs.date.toggle_date();
		},
		onDate(date) {
			let n = date.length - 2
			let str = date.substr(0, n)
			this.month_text = str
			this.order_data = []
			this.page_current = 1
			this.page_sum = 1
			this.load_status = 0
			this.page_init()
			// console.log(str)
		},
	},
	filters: {
		f_status :function(input) {
			if(input == 1){return "已付款"}
			else if(input == 2){return "已结算"}
			else if(input == -1){return "已失效"}
			else{return "全部"	}
		},
	},
	components: {
		K_Date,k_header
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.demo-text{
	padding: 0 4px;
}
.show_order_list{
	position: relative;
	.no_data{
		position: absolute;
		top: 100px;
		left: 50%;
		transform: translateX(-50%);
		z-index: -1;
	}
	.for_items{
		.item{
			padding: 8px;
			background: #fff;
			border-radius: 4px;
			.item_herd{
				display: flex;
				font-size: 12px;
				padding-bottom: 6px;
				padding-top: 6px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				>div{
					flex: 3;
					color: #777;
					&:nth-of-type(2) {
						flex:1;
						text-align: right;
					};
				}
				.tag{
					display: inline-block;
					background: #eee;
					padding: 0 6px;
					border-radius: 12px;
					font-size: 12px;
					float: right;
				}
				.status1{
					background: @chen;
					color: #fff;
				}
				.status2{
					background: @green;
					color: #fff;
				}
			}
			.item_top{
				>div{
					font-size: 12px;
					padding: 6px 0;
					color: #777;
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
						flex: 0 0 90px;
						text-align: center;
					}
					.info {
						text-align: right;
						margin-right: 8px;
						color: #555;
						.strong{
							color: #f00;
						}
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
						font-size: 14px;
						// color: @color_base;
						color: #333;
						.span2{
							font-weight: 600;
							font-size: 15px;
							color: #f00;
						}
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
							.yewu_btn();
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
							color: #777;
							>div{							
								margin-bottom: 8px;
							}
						}
						td:nth-of-type(2) {
							text-align: right;
							padding-right: 8px;
							.money{
								// color: @color_base;
								color: #f00;
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
