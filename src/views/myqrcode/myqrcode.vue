<template>
<div class="myqrcode page" :class="{page_img: page_img}">
<!-- <BScroll 	class="box_wrapper" ref="scroll" >
<div> -->

<div id="haibao" class="qrcode_wrapper" v-show="dom">
	<img src="./qrcode_bg132.jpg" width="100%" style="display: block;">
	<div class="code_wrapper">
		<div class="qrcode_box">	
			<div id="qrcode" class="qrcode" ref="qrcode"></div>			
		</div>
		<div class="name">邀请码</div>
		<div class="code">K2A45d789</div>
	</div>
</div>
	<!-- <div class="crea_btn" @click=created_img v-show="dom">生成图片按钮</div> -->

<img :src=dataURL width="100%" style="display: block;">
<!-- </div></BScroll> -->
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import QRCode from 'qrcodejs2'

var from_url = '';
export default {
	name:"myqrcode",
	data() {
		return {
			qrcode_url:"baidu.com",
			dom: true,
			page_img:false,
			dataURL:'',
		}
	},
	mounted() {
		console.log(from_url)		
  	this.$nextTick(() => {
  		let that = this
  		this.$loading.show('生成海报');
  			setTimeout(()=>{
  	    	that.qrcode()
  			},300)
  	})
	},
	methods:{
		qrcode() {  
			let that = this
			let qrcode = new QRCode('qrcode', {  
	      width: 100,  
	      height: 100, // 高度  
	      
	     text: this.qrcode_url, // 二维码内容
	     //  image: '',  
	      // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
	      background: '#ffffff', 
	     	foreground: "#ffffff"
	    })  			
      console.log(qrcode)  
      setTimeout(() => {
      	that.created_img()
      },300)
  	},
  	created_img() {
  		let that = this
  		document.documentElement.scrollTop = document.body.scrollTop = 0;
  		this.page_img= true
  		html2canvas(document.getElementById('haibao'),{
  			useCORS: true,
  		}).then(function(canvas) {
          // document.body.appendChild(canvas);
          that.dataURL = canvas.toDataURL("image/jpeg");
          that.dom = false
          that.$loading.hide();
          // that.$toast("生成图片成功,长按保存")
      });
  	}
	},
	components: {
		BScroll
	},
	destroyed: function () {
    this.$loading.hide();
	},
	// beforeRouteEnter (to, from, next) {
	// 	from_url = from.fullPath
	// 	next()
	// }
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.qrcode_wrapper{
	.code_wrapper{
		position: absolute;
		bottom: 100px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		.qrcode_box{
			text-align: center;
			background: #fff;
			padding: 8px;
		}
		.name{
			margin-top: 8px;
			font-size: 15px;
			color: #fff;
		}
		.code{
			font-size: 18px;
			color: #fff;
		}
	}
	
}
.page_img{
  max-height: 100%;
  max-height: 100vh;
  overflow: hidden;	
}
.crea_btn{
	position: fixed;
	bottom: 80px;
	left: 30px;
	right: 30px;
	height: 40px;
	line-height: 40px;
	font-size: 20px;
	text-align: center;
	color: #fff;
	background: #ff675b;
	border-radius: 12px;
	box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, .1);
}
</style>
