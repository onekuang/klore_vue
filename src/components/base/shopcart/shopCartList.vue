<template>
<div class="shop_cart_list_wrapper">
	<div class="shop_cart_list">
		<div class="item" v-for="(item, index) in data">
			<div class="checkbox">
				<label :for="'shopcart-' + index"></label>
				<input 
					:id="'shopcart-' + index"
					type="checkbox"
					:value="index"
					v-model='checkName'
					:checkbox=false					
					@change=setvuex
				>
			</div>
			<div class="img_box">
				<img :src="item.logo" width="80" height="80">
			</div>
			<div class="info">
				<div class="title">{{item.name}}</div>
				<div class="money">￥{{item.count * item.price}}元</div>
				<div class="controll">
					<CartControl :food='item' :index=index :color=color :isMin=true />
				</div>
			</div>
		</div>
	</div>
	
	<!-- 购买汇总 -->
	<div class="pay_box" v-show=data.length>
		<div class="money">合计：<span>￥{{vuex_checkData_money}}</span></div>
		<div class="paybtn_box">
			<span class="delete" @click=deleteGoods>删除</span>
			<span class="pay" @click=pay>结算</span>
		</div>
	</div>
</div>
</template>

<script>
import CartControl from '../cartcontrol/cartcontrol.vue'
import {mapMutations,mapGetters} from 'vuex'
export default {
	props: {
		data: {
			type: Array
		}
	},
	data() {
		return {
			// 加减按钮的颜色
			color: "#f00",
			checkName: []
		}
	},
	computed: {
		sum_money:function() {
			let sum = 0
			if(this.data.length == 0) {
				return sum
			}else{
				this.data.forEach((item, index) => {
					sum += item.price * item.count
				})
			}
			return sum
		},
		vuex_checkData_money: function() {
			let sum = 0
			if(this.checkGoods.length == 0) {
				return sum
			}else{
				this.checkGoods.forEach((item, index) => {
					sum += item.price * item.count
				})
			}
			return sum
		},
		...mapGetters([
      'shoppingCart',
      'checkGoods'
    ])
	},
	methods: {
		pay() {
			if(!this.checkName.length){
				this.$toast('请勾选需要购买的商品')
				return
			}else{				
				this.setvuex();
				this.$emit('pay')
			}
		},
		deleteGoods() {
			if(!this.checkName.length){
				this.$toast('请勾选需要删除的商品')
			}else{
				this.$confirm({
				  title: '确认删除所选商品?'
				})
				.then(res=> {
				  this.vuex_delete_check_goods(this.checkName)
				  this.vuex_clear_checkgoods()
				  this.checkName = [];
				})
				.catch(fail => {
	        console.log('取消')
	      })			
			}
		},
		setvuex() {
			let shopCartData = this.shoppingCart
			let ckData = this.checkName
			let payData = [];
			for (var i =0 ; i < ckData.length; i++) {
				let j = ckData[i]
				payData.push(shopCartData[j])
			}
			// 写入vuex
			this.vuex_set_checkgoods(payData)
		},
		...mapMutations({
		  vuex_delete_check_goods: 'DELETE_CHECK_GOODS',
		  vuex_set_checkgoods: 'SET_CHECKGOODS',
		  vuex_clear_checkgoods: 'CLEAR_CHECKGOODS'
		})
	},
	components: {
		CartControl,
	}
}
</script>

<style scoped lang="less">
.shop_cart_list_wrapper{
	background: #fff;	
	.shop_cart_list{
		.item{
			padding: 8px 12px;
			display: flex;
			border-bottom: 1px solid #ccc;
			.checkbox{
				flex:  0 0 30px;
				width: 30px;
				height: 100px;
				line-height: 100px;
				position: relative;
				i{
					font-size: 20px;
				}
				label{
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					overflow: hidden;
				}
				input{
					// visibility:hidden;
				}
				input[type='checkbox']{
				    width: 20px;
				    height: 20px;
				    background-color: #fff;
				    -webkit-appearance:none;
				    border: 1px solid #666;
				    border-radius: 4px;
				    outline: none;
				}
				input[type=checkbox]:checked{
				   background: url("./check.png")no-repeat center;
				   background-size: 100% 100%;
				}
			}
			.img_box{
				flex: 0 0 100px;
				width: 100px;
				height: 100px;
				padding: 10px;
				img{
					border-radius: 6px;
				}
			}
			.info{
				flex: 1;
				max-width: 60%;
				overflow: hidden;
				padding-top: 8px;
				.title{
					word-wrap: normal;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 16px;
					line-height: 24px;
					color: #333;
					font-weight: 600;
				}
				.money{
					color: #f00;
					font-size: 18px;
					font-weight: 600;
					margin-top: 6px;
				}
				.controll{
					float: right;
					// margin-top: 20px;
				}
			}
		}
	}
	.pay_box{
		display: flex;
		padding: 12px 16px;
		.money{
			flex: 1;
			text-align: left;
			color: #333;			
			font-size: 16px;
			padding-top: 2px;
			span{
				color: #f44336;
				font-weight: 600;
				font-size: 18px;
			}
		}
		.paybtn_box{
			flex: 1;
			text-align: right;
			.pay,.delete{
				display: inline-block;
				height: 34px;
				// width: 100px;
				padding: 0 16px;
				text-align: left;
				background: #f44336;
				color: #fff;
				font-size: 14px;
				border-radius: 4px;
				text-align: center;
				line-height: 34px;
			}
			.pay{
				margin-left: 8px;
				background: #ff9500;
			}
			.delete{
			}
		}
	}
}
</style>
