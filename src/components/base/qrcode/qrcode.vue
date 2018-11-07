<template>
	<div class="qrcode">
		<canvas id="qrcode"></canvas>
	</div>
</template>
<script>
	// import QRcode from "@/components/base/qrcode/qrcode.vue";
import QRCode from 'qrcode'

export default {
  props: {
    url: {
      type: String,
    },
  },
	methods:{
		useqrcode(){
			let that = this
			var canvas = document.getElementById('qrcode')
			QRCode.toCanvas(canvas, this.url, function (error) {
				if (error) {
					that.$toast("二维码生成失败")
					console.log("生成二维码失败" + error)
				}else{
					console.log('生成二维码成功');
				}
			})
		}
	},
  mounted(){
  	this.useqrcode();
  }
}
</script>

<style scoped lang="less">
  // #qrcode{width:150px!important;height:150px!important;}
</style>