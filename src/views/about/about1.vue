<template>
<div class="about1 ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>

<div class="logo text-center" style="background-color: #f7f7f7;">
	<img src="https://lipstick.xsygood.com/testimg/pyg_logo.png" width="200">
</div>
<mu-list>
  <mu-list-item avatar button :ripple="false" to="">
    
    <mu-list-item-title>当前版本</mu-list-item-title>
    <mu-list-item-action>
      V1.0.0
    </mu-list-item-action>
  </mu-list-item>


  <mu-list-item avatar button ripple :ripple="false" to="">
    <mu-list-item-title>意见反馈</mu-list-item-title>
    <mu-list-item-action>xxxxxx@xx.com</mu-list-item-action>
  </mu-list-item>
</mu-list>




</div></BScroll>



<div class="aboutus">
	东莞新视野网络科技
</div>



</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	name:"about1",
	data() {
		return {

		}
	},
	components: {
		BScroll
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
