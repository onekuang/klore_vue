<template>
<div class="prolist page fff" >

<div>
	<!-- 商品列表	 -->
	<K_List :goods_list=goods_list :tab_show=true />

</div>


</div>
</template>

<script>
import K_List from '@/components/k_goods_list/k_goods_list'
export default {
	name:"prolist",
	data() {
		return {
			goods_list: [
        {id:1,title:'3期免息现货【送壳膜+百元礼包】苹果',img:'http://img.alicdn.com/bao/uploaded/i2/1776456424/O1CN01AxVu6P1xKEoaLfGQ2_!!1776456424.jpg',current_money:'3858',old_money:'2958',sales:'222',coupos:'50',award:'100'},
        {id:2,title:'Apple/苹果 iPhone 8 Plus',img:'https://img.alicdn.com/bao/uploaded/i1/1917047079/TB27ffoXxnaK1RjSZFtXXbC2VXa_!!1917047079.jpg',current_money:'5888',old_money:'5999',sales:'1999',coupos:'100',award:'123'},
        {id:3,title:'现货发 3期免息/送壳膜+运费险 苹果6sp Apple/苹果 iPhone 6s Plus全网通4G手机中移动官方旗舰正品',img:'https://img.alicdn.com/bao/uploaded/i4/1776456424/O1CN01dGVql51xKEoZg8NxE_!!1776456424.jpg',current_money:'3999',old_money:'4999',sales:'123',coupos:'321',award:'122'},
        {id:4,title:'【64G限时直降50元】Huawei/华为 畅享9 Plus 全面屏超清大屏四摄学生老人机正品智能游戏手机',img:'https://img.alicdn.com/bao/uploaded/i2/2838892713/O1CN01UCnIWi1Vub0xNdv8f_!!2838892713.jpg',current_money:'1499',old_money:'1599',sales:'999',coupos:'50',award:'100'},
        {id:5,title:'Apple/苹果 iPhone X 全网通手机iphone10 无线充电',img:'https://img.alicdn.com/bao/uploaded/i3/263726286/TB22dGNmGagSKJjy0FbXXa.mVXa_!!263726286.jpg',current_money:'6258',old_money:'6888',sales:'123',coupos:'55',award:'100'},
        {id:6,title:'Apple/苹果 iPhone X 全网通手机iphone10 无线充电',img:'https://img.alicdn.com/bao/uploaded/i3/2088045547/O1CN016oDwsp1qqZSm3FwcO_!!2088045547.jpg',current_money:'2099',old_money:'2199',sales:'678',coupos:'20',award:'50'},
        {id:7,title:'Xiaomi/小米 小米8年度旗舰全面屏骁龙845双频GPS智能拍照手机 官方旗舰店正品',img:'https://img.alicdn.com/bao/uploaded/i3/1714128138/O1CN01PVTZVm29zFfjHn9eM_!!1714128138.jpg',current_money:'2750',old_money:'2799',sales:'999',coupos:'123',award:'111'},
        {id:8,title:'Huawei/华为 畅享9 PLUS 全网通4G手机官方官网旗舰店正品新品畅想9/8plus/max 8c',img:'https://img.alicdn.com/bao/uploaded/i1/1730436394/O1CN01ZLmrN51x6UvR7UI7p_!!1730436394.jpg',current_money:'1299',old_money:'1399',sales:'56',coupos:'100',award:'100'},
      ]
		}
	},
	methods: {
	},
	components: {
		K_List
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
