<template>
<div class="merge_img page">
<div>
	<img :src=img width="100%">
</div>
<div id="qrcode5" class="qrcode" ref="qrcode" style="display: none;"></div>	
</div>
</template>

<script>
import Mcanvas from 'mcanvas'
import QRCode from 'qrcodejs2'
import { l_storage } from '@/common/js/storage.js'
import { formatting_time } from '@/common/js/util.js'
var code_url;
export default {
	data() {
		return {
			goods_id:'',
			goods_info:{},
			shop_info:{},
			code_text:'', // 二维码内容
			img:'',// 最终海报
			code_w: 200,
			code_h: 200,
		}
	},
	created() {
		// console.log(code_url)
		this.code_text = `${this.$api.url}/#${code_url}&invitation_code=${l_storage.get('user_code')}`
		console.log(this.code_text)
	},
	mounted() {
		this.goods_id = this.$route.query.id
		this.$loading.show('生成海报')
		this.get_data()
		
	},
	methods: {
		get_data() {
			this.axios.get(this.$api.goods_info,{
				params: {
					goods_id: this.goods_id
				}
			})
			.then(res => {
				this.goods_info = res.data
				// this.shop_info = res.data.shop
				let that = this
				this.$nextTick(() => {
					setTimeout(()=>{
		  	   	that.create_qrcode()
		  		},200)
				})
			})
		},
		create_qrcode() {
			let vm = this
			let qrcode = new QRCode('qrcode5', {  
	      width: this.code_w,  
	      height: this.code_h, // 高度  	      
	     	text: this.code_text, // 二维码内容
	     	colorLight: '#fff', 
	     	colorDark: "#000"
	    })
	    setTimeout(()=>{
	    	vm.create_img()
	    },1000)
		},
		create_img() {
			let vm = this
			let code_img = document.getElementById('qrcode5').getElementsByTagName("img")[0].src
			console.log(code_img)
			document.getElementById('qrcode5').innerHTML= ''

			// var image="https://gw.alicdn.com/bao/uploaded/i4/278238551/O1CN012D2PE2Pc2l3xxSy_!!278238551.jpg",
			// 	title="2018秋冬装新款ins超火金丝绒连帽卫衣女宽松韩版学生长袖外套潮",
			// 	user_type=1,
			// 	price=29.90, // 折扣价
			// 	reserve_price=39.9,// 原价
			// 	discount_price=19.90,// 折扣价
			// 	volume=45125,
			// 	coupon_price=0,
			// 	coupon_end_time="2018-12-31",
			// 	url="https://www.pupugou.com/";

			var image=vm.goods_info.thumb,
				user_type=vm.shop_info.shopType,
				title=vm.goods_info.title,
				price=vm.goods_info.price, // 折扣价
				reserve_price=vm.goods_info.reserve_price,// 原价
				discount_price=vm.goods_info.price,// 折扣价
				volume=vm.goods_info.volume,
				coupon_price=vm.goods_info.coupon_price,
				coupon_end_time=vm.goods_info.coupon_end_time;
				// url="https://www.pupugou.com/";
						
			

			let mc = new Mcanvas({
		    width: 750,
		    height: 1257,
		    backgroundColor: '#fff',
			})

			// add 添加图片素材基础函数；
			.add(image,{
		    width:"100%",
		    height:375,
		    pos:{
	        x:0,
	        y:0,
	        scale:1,
	        rotate:0,
		    },
			});

			var type_color="#ff0036",type_text="天猫";
			if('B'!==user_type){
				type_color="#ff4400",
				type_text="淘宝";
			}

			mc.rect({
				x: 35,
				y: 785,
				// 矩形尺寸；
				width: '65px',
				height: '35px',

				// 矩形填充颜色
				fillColor: type_color,
			})

			.text(type_text, {
				width:'65px',
				align:'center',
				pos:{
					x:35,
					y:785,
				},
				normalStyle:{
			    // 文字样式，包含字体/字号等，使用方式与css font一致；
			    font: '24px sans-serif',
					lineHeight: 26,
					color:'#ffffff',
			    },
			})

			//添加标题
			.text('　　'+title,{
				width:'690px',
				align:'left',
				pos:{
					x:35,
					y:766,
				},
				normalStyle:{
	    	 	// 文字样式，包含字体/字号等，使用方式与css font一致；
	        font: '36px verdana',
					lineHeight: 50,
					color:"#2e2e2e",

			    },
			});

			//添加价格
			var price_text;
			if(coupon_price && discount_price){
				price_text='券后价<b>￥'+discount_price+'</b>　<s>原价￥'+reserve_price+'</s>';
			}else{
				price_text='折扣价<b>￥'+price+'</b>　<s>原价￥'+reserve_price+'</s>';
			}
			mc.text(price_text,{
				width:'690px',
				align:'left',
				pos:{
					x:35,
					y:905,
				},
				normalStyle:{
			    // 文字样式，包含字体/字号等，使用方式与css font一致；
			    font: '28px verdana',
					lineHeight: 50,
					color:"#ff4244",
			    },
				largeStyle:{
			    // 文字样式，包含字体/字号等，使用方式与css font一致；
			    font: '46px verdana',
					lineHeight: 50,
					color:"#ff4244",
			    },
				smallStyle:{
			    // 文字样式，包含字体/字号等，使用方式与css font一致；
			    font: '24px verdana',
					lineHeight: 50,
					color:"#b8b8b8",
			    },
			});

			//添加销量
			mc.text(formatVolume(volume)+'人已购',{
				width:'215px',
				align:'right',
				pos:{
					x:500,
					y:905,
				},
				normalStyle:{
			    	 // 文字样式，包含字体/字号等，使用方式与css font一致；
			        font: '28px verdana',
					lineHeight: 50,
					color:"#919191",
			    },
			})

			// 券背景
			.add("./public/quan_bg.png",{
			    width:"688px",
			    pos:{
			        x:"center",
			        y:1000,
			        scale:1,
			        rotate:0,
			    },
			});

			//添加券信息
			var coupon_text;
			if(coupon_price && coupon_end_time){
				coupon_text=coupon_price+'元优惠券<br><s>截止时间：'+formatting_time(coupon_end_time*1000, 2)+'</s><br><s>长按识别右侧二维码领券</s>';
			}else{
				coupon_text=fomatFloat(price/reserve_price*10, 1)+'折<br><br><s>长按识别右侧二维码购买</s>';
			}
			mc.text(coupon_text,{
				width:'390px',
				align:'left',
				pos:{
					x:80,
					y:1025,
				},
				normalStyle:{
			    	 // 文字样式，包含字体/字号等，使用方式与css font一致；
			        font: '44px verdana',
					lineHeight: 50,
					color:"#ffffff",
			    },
				smallStyle:{
			    	 // 文字样式，包含字体/字号等，使用方式与css font一致；
			        font: '26px verdana',
					lineHeight: 50,
					color:"#ffffff",
			    },
			})


			//二维码
			.add(code_img,{
			    width:"160px",
			    pos:{
			        x:524,
			        y:1027,
			        scale:1,
			        rotate:0,
			    },
			})

			// draw 最终绘制函数，用于最终的绘制；
			.draw({
				type: 'jpg',
				quality: 1,
				success(b64){
			  //   	$("#image").attr("src", b64);
					// $("#qrcode").remove();
					vm.img = b64
			   }
				
			});

			this.$loading.hide()
			//格式化销量
			function formatVolume(volume) {
				var w='';
				if(volume>10000){
					volume=(volume/10000);w="万";
				}
				return fomatFloat(volume, 2)+w;
			}
			//小数
			function fomatFloat(src, pos){
				return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
			}
		},		
	},
	beforeRouteEnter (to, from, next) {
			code_url = from.fullPath
			next()
	},
	destroyed() {
		console.log('监听页面离开')
    document.getElementById('qrcode5').innerHTML= ''
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>