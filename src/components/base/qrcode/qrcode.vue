<template>
	<!-- <div class="created_qrcode"> -->
		<div id="qrcode" class="qrcode" ref="qrcode"></div>
	<!-- </div> -->
</template>
<script>
	// import QRcode from "@/components/base/qrcode/qrcode.vue";
import QRCode from 'qrcodejs2'
export default {
  props: {
    url: {
      type: String,
      default: "baidu.com"
    },
    widnt: {
    	type: Number,
    	default: 120
    },
    height: {
    	type: Number,
    	default: 120
    }
  },
  created(){
  	this.$loading.show('正在生成');
  	this.$nextTick(() => {
  	    this.qrcode()
  	})
  },
	methods:{
		qrcode() {  
			let that = this
			let qrcode = new QRCode('qrcode', {  
	      width: that.widnt,  
	      height: that.height, // 高度  
	      text: that.url, // 二维码内容
	      image: '',  
	      // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
	      background: '#ffffff', 
	      foreground: '#ff0'  
	    })  
			this.$loading.hide();
      console.log(qrcode)  
  	}
	},
}
</script>

<style scoped lang="less">
  // #qrcode{width:150px!important;height:150px!important;}
</style>