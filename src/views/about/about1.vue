<template>
<div class="about1 page app_head">
	<k_header title="关于我们" />
<div>

<div class="logo text-center" >
	<img src="https://lipstick.xsygood.com/bsck_img/about_banner.jpg" width="100%">
</div>
<mu-list>
  <mu-list-item avatar button :ripple="false" to="">
    
    <mu-list-item-title>当前版本</mu-list-item-title>
    <mu-list-item-action>V1.0.1</mu-list-item-action>
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
	// height: 175px;
	// line-height: 235px;
	// background-size: 100% 100% !important;
	// background-repeat: no-repeat !important;

}
// .about1{
// 	background: #f7f7f7;
// 	/deep/.mu-item-wrapper{
// 		background: #fff;
// 	}
// }
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
