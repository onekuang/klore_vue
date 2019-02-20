<template>
<div class="about1 page">
	<k_header title="白手创客" />
<div>

<div class="logo text-center" style="background-color: #f7f7f7;">
	<!-- <img src="https://lipstick.xsygood.com/testimg/pyg_logo.png" width="200"> -->
</div>
<mu-list>
  <mu-list-item avatar button :ripple="false" to="">
    
    <mu-list-item-title>当前版本</mu-list-item-title>
    <mu-list-item-action>
      V1.0.1
    </mu-list-item-action>
  </mu-list-item>


  <mu-list-item avatar button ripple :ripple="false" to="">
    <mu-list-item-title>意见反馈</mu-list-item-title>
    <mu-list-item-action>xxxxxx@xx.com</mu-list-item-action>
  </mu-list-item>
</mu-list>




</div>



<div class="aboutus">
	东莞市新视野网络科技有限公司
</div>



</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	name:"about1",
	data() {
		return {

		}
	},
	components: {
		k_header
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.box_wrapper{
	// background: #f7f7f7;
}
.logo{
	height: 200px;
	line-height: 235px;
}
.aboutus{
	position: fixed;
	bottom: 80px;
	left: 0;
	right: 0;
	text-align: center;
	font-size: 12px;
	color: #ccc;
	letter-spacing: 1px;
	font-family: Arial, sans-serif;
}
</style>
