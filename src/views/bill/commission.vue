<template>
<div class="bill page">
<div class="bill_top">
	<div class="count_box">
		<div class="back" @click="back"><i class="iconfont icon-icon--"></i></div>
	</div>
	<div class="filter on" @click="toggle_date">
		<i class="iconfont icon-rili"></i>
	</div>
</div>

<div class="">
	<K_Date ref="date" type='month' @onDate=onDate></K_Date>
</div>

<div class="list">
	<ul>
		<li class="item" v-for="item in list">
			<div class="info_box">
				<div class="box">
					<div class="title">来自:{{item.fromuser}}</div>
					<div class="tag">
						<span>[ {{item.eventname}} ]</span>
					</div>
					<div class="time">{{item.create_time}}</div>
				</div>
			</div>
			<div class="money_box">
				<div class="money on" v-show="item.meney != '0.00'">+{{item.meney}} 元</div>
				<div class="money on" v-show="item.integral"><span></span>+{{item.integral}} 成长值</div>
				<div class="status">
					<div class="tag" 
  					:class="{'status1' : item.is_settle == 0,
  						'status2' : item.is_settle == 1, 
  						'status0' : item.is_settle == -1}"
  				>{{item.is_settle | f_status }}</div>
				</div>
			</div>
		</li>
		<div class="more_box">
      <Load_more @tap_load="tap_load" :status=load_status />
    </div>
	</ul>
</div>
</div>
</template>

<script>
import K_Date from '@/components/k_date/k_date'
export default {
	name:"commission",
	data() {
		return {
			list:[],
			sum_money: 0,
			month_text:"本月",
			month: undefined,
			date_show: false,
			page_current: 1,
			page_sum: 1,
			load_status:0,
		}
	},
	created() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		this.page_init()
	},
	methods: {		
		page_init() {
			let month = this.month_text == "本月" ? '' : this.month_text

			this.axios.get(this.$api.IncomeList,{
				params: {
					page: this.page_current,
					time: month
				}
			})
			.then(res => {
				this.sum_money = res.data.totalmeney || 0

				this.page_sum = res.data.last_page
				if(this.page_current > this.page_sum){
					this.load_status = 2
          return
				}
				let arr = this.list
				let dat = res.data.data
				this.load_status = 0				
				this.list = arr.concat(dat)
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
			this.list = []
			this.page_current = 1
			this.page_sum = 1
			this.load_status = 0
			this.page_init()
			// console.log(str)
		},
		back() {
			window.history.back()
		}
	},
	filters: {
		f_status :function(input) {
			if(input == 1){return "已结算"}
			else if(input == 0){return "未结算"}
			else {return "已失效"}
		},
	},
	components: {
		K_Date
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.bill{
	padding-bottom: 56px;

	.box_wrapper{
		// .khr_bg();
	}
	.bill_top{
		// .khr_bg();
		background: #fff;
		padding: 4px 12px;
		display: flex;
		.count_box{
			flex: 1;
			.back{
				height: 40px;
				width: 40px;
				line-height: 38px;
				font-size: 16px;
			}
			.text{
				height: 20px;
				font-size: 13px;
			}
			.count{
				font-size: 12px;
				color: #666;
			}
		}
		.filter {
			flex: 0 0 30px;
			width: 30px;
			padding-top: 4px;
			i {
				font-size: 20px;
				color: #999;
			}
			&.on{
				i {
					color: @lan;
				}
			}
		}
	}
	.list{
		.item{
			display: flex;
			margin: 8px 4px;
			background: #fff;
			border-radius: 4px;
			padding-bottom: 8px;
			padding-top: 8px;
			border-bottom: 1px solid #eee;
			.info_box{
				flex: 1;
				padding-left: 8px;
				.box{
					.title{
						font-size: 14px;
						color: #333;
					}
					.tag{
						font-size: 13px;
						margin: 5px 0;
						color: #777;
						span {
							margin-right: 12px;
						}
					}
					.time{
						font-size: 12px;
						color: #999;
					}
				}
			}
			.money_box{
				flex: 0 0 200px;
				text-align: right;
				.money {
					font-size: 14px;
					margin-right: 8px;
					// font-weight: 900;
					&.on {
						color: @red;
					}
				}
				.status{
					font-size: 12px;
					margin-right: 8px;
					margin-top: 20px;
					.tag{
						display:inline-block;
						background: #eee;
						padding: 0 6px;
						border-radius: 12px;
						color: #ccc;
						font-size: 12px;
					}
					.status1{
						background: @chen;
						color: #fff;
					}
					.status2{
						background: @green;
						color: #fff;
					}
					.status0{
						background: @red;
						color: #fff;
					}
				}
			}
		}
	}
}
</style>
