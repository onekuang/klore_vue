<template>
<div class="myqrcode ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>

<div class="qrcode_wrapper">
	<div class="qrcode_box">	
		<QRcode :url="qrcode_url" />
	</div>
</div>


</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import QRcode from "@/components/base/qrcode/qrcode.vue";
var from_url = '';
export default {
	name:"myqrcode",
	data() {
		return {
			qrcode_url:"baidu.com"
		}
	},
	created() {
		console.log(from_url)
	},
	components: {
		BScroll,QRcode
	},
	beforeRouteEnter (to, from, next) {
		from_url = from.fullPath
		next()
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.qrcode_wrapper{
	.qrcode_box{
		text-align: center;
	}
}
</style>
