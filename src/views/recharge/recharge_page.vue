<template>
<div class="recharge_page page app_head">
	<k_header title="积分充值" />

  <div class="index_title">充值金额<div class="more"></div></div>  
	
	<div class="input_box">
		<input 
			class="money_input" 
			v-model.number="recharge_money" 
			type="number"
			placeholder="请输入充值金额">
	</div>
	<div class="khr"></div>
  <div class="index_title">快速选择<div class="more"></div></div>  
	
	<div class="recharge_box">
		<div class="items">
			<div class="item" 
				:class="{active: index == recharge_index}"
				@click="toggle_num(index,item)"
				v-for="(item, index) in recharge_item">{{item.money}}元
			</div>
		</div>
	</div>
	
	<div class="khr"></div>
	

	<div class="khr"></div>


	<div class="btn_box" style="margin-top: 20px;">
		<button class="theme_btn green_btn" type="submit">确认充值</button>
		<p class="marke">
			<span class="xing">*</span>注: 10元兑换xxx积分</p>
	</div>
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
			recharge_money: '',
			// 快速充值选项
			recharge_index: 0,
			recharge_item:[
				{id:1,money:10},
				{id:2,money:20},
				{id:3,money:50},
				{id:4,money:100},
				{id:5,money:200},
				{id:6,money:500},
			]
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){
			this.recharge_money = this.recharge_item[0].money
		},
		toggle_num(index,item) {
			this.recharge_index = index
			this.recharge_money = item.money
		}
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.input_box{
	input{
		height: 40px;
		font-size: 24px;
		color: @red;
		font-weight: 900;
		padding-left: 16px;
		&::-webkit-input-placeholder { /* WebKit browsers */
		  color: #777;
		  font-size: 16px;
		  font-weight: 400;
		}
	}

}
.recharge_box{

	.items{
		display: flex;
		flex-wrap: wrap;
		padding: 8px;
		.item{
			flex: 0 0 32%;
			text-align: center;
			padding: 20px 0;
			border: 1px solid #eee;
			border-radius: 8px;
			margin: 0.6%;
			margin-bottom: 12px;
			&.active{
				border-color: @active;
				color: @active;
			}
		}
	}
}
</style>