<template>
<div class="setting_wrapper page">

<k_header title="我的设置" />

<div class="setting">
	<!-- <mu-list textline="three-line">
	    <mu-list-item avatar :ripple="false" button>
	      <mu-list-item-action>
	        <mu-avatar>
	          <img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132">
	        </mu-avatar>
	      </mu-list-item-action>
	      <mu-list-item-content>
	        <mu-list-item-title>
	        	<span style="font-weight: 900;">Klore</span>
	        </mu-list-item-title>
	        <mu-list-item-sub-title>	          
	          <span style="color: #999;">134 2183 6693</span>
	          <br>are you OK?
	        </mu-list-item-sub-title>
	      </mu-list-item-content>
	    </mu-list-item>
	 </mu-list> -->
			
		<div class="k_avatar text-center">
			<img :src="arvatar" @click="addPicFront">
			<input type="hidden" value="" name="logo"  >
		  <input type="file" @change="upload($event)" style="display: none;" ref="upload" id='upload' accept="image/*">
			<p class="c999 changeavatar">点击更改头像</p>
		</div>

			<div class="khr"></div>
	    <mu-list>
	      <!-- <mu-sub-header>基本设置</mu-sub-header> -->
	      <mu-list-item avatar button :ripple="false" to="/updatename">
	        <mu-list-item-action class="chen" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-pinglun1"/>
	          <!-- <mu-avatar>
	            <img src="https://img.4008823823.com.cn/kfcios/Version/533_420253.jpg">
	          </mu-avatar> -->
	        </mu-list-item-action>
	        <mu-list-item-title>昵称修改</mu-list-item-title>
	        <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you" />
	        </mu-list-item-action>
	      </mu-list-item>

	      <mu-list-item avatar button ripple :ripple="false" to="/updatepassword">
	        <mu-list-item-action  class="blue" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-biangengshoujihao"/>
	        </mu-list-item-action>
	        <mu-list-item-title>密码修改</mu-list-item-title>
	        <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you" />
	        </mu-list-item-action>
	      </mu-list-item>

	      <!-- <mu-list-item avatar button ripple :ripple="false" to="/address">
	        <mu-list-item-action  class="blue" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-biangengshoujihao"/>
	        </mu-list-item-action>
	        <mu-list-item-title>地址修改</mu-list-item-title>
	        <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you" />
	        </mu-list-item-action>
	      </mu-list-item> -->

				<!-- <div class="khr"></div>
	      <mu-list-item avatar button ripple :ripple="false" to="/updatephone">
	        <mu-list-item-action  class="blue" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-biangengshoujihao"/>
	        </mu-list-item-action>
	        <mu-list-item-title>手机号绑定</mu-list-item-title>
	        <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you" />
	        </mu-list-item-action>
	      </mu-list-item>

	      

	      <mu-list-item avatar button ripple :ripple="false" to="/banklist">
	        <mu-list-item-action  class="chen" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-iconset0292" />
	        </mu-list-item-action>
	        <mu-list-item-title>银行卡管理</mu-list-item-title>
	        <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you" />
	        </mu-list-item-action>
	      </mu-list-item>

	      <mu-list-item avatar button ripple :ripple="false" to="/bindalipay">
	        <mu-list-item-action  class="chen" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-iconset0292" />
	        </mu-list-item-action>
	        <mu-list-item-title>支付宝绑定<span class="marke"></span></mu-list-item-title>
	        <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you" />
	        </mu-list-item-action>
	      </mu-list-item> -->
	    </mu-list>

			<div class="khr"></div>
	    <!-- <mu-divider></mu-divider> -->
	    <mu-list>
	      <!-- <mu-sub-header>系统相关</mu-sub-header> -->

	      <!-- <mu-list-item avatar button :ripple="false" @click="clearStroage">
	        <mu-list-item-action class="green" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-delete"/>
	        </mu-list-item-action>
	        <mu-list-item-title>清除缓存</mu-list-item-title>
	      </mu-list-item> -->

	      <mu-list-item avatar button :ripple="false" to="/userconfig">
	        <!-- <mu-list-item-action>
	          <mu-icon slot="left" value=":iconfont icon-icon-test"/>
	        </mu-list-item-action> -->
	        <mu-list-item-title>系统配置</mu-list-item-title>
	        <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you"/>
	        </mu-list-item-action>
	      </mu-list-item>

	      <mu-list-item avatar button :ripple="false" to="/login">
	        <mu-list-item-action class="red" v-if="icon_show">
	          <mu-icon slot="left" value=":iconfont icon-qiehuanzuhu"/>
	        </mu-list-item-action>
	        <mu-list-item-title>注销</mu-list-item-title>
	        <!-- <mu-list-item-action>
	          <mu-icon slot="right" value=":iconfont icon-you"/>
	        </mu-list-item-action> -->
	      </mu-list-item>

	    </mu-list>




</div>
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
import Exif from 'exif-js'  
import {s_storage, l_storage} from '@/common/js/storage'
export default {
	data() {
		return {
			icon_show: false,
			arvatar:"https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132",
			picValue:'' ,
		}
	},
	methods: {
		// 清除缓存
		clearStroage() {
			s_storage.clear()
			l_storage.clear()
			this.$toast('清除成功')
		},

		// 图片上传
		addPicFront(e){
			e.preventDefault();
			this.$refs.upload.click();
			return false;
		},
	  upload (e) {  
	    let files = e.target.files || e.dataTransfer.files;  
	    if (!files.length) return;  
	    this.picValue = files[0];  
	    this.imgPreview(this.picValue);  
	  },  
	  imgPreview (file) {  
	    let self = this;  
	    let Orientation;  
	    //去获取拍照时的信息，解决拍出来的照片旋转问题  
	    Exif.getData(file, function(){  
	        Orientation = Exif.getTag(this, 'Orientation');  
	    });  
	    // 看支持不支持FileReader  
	    if (!file || !window.FileReader) return;  
	
	    if (/^image/.test(file.type)) {  
	        // 创建一个reader  
	        let reader = new FileReader();  
	        // 将图片2将转成 base64 格式  
	        reader.readAsDataURL(file);  
	        // 读取成功后的回调  
	        reader.onloadend = function () {  
	          let result = this.result;  
	          let img = new Image();  
	          img.src = result;  
	          //判断图片是否大于100K,是就直接上传，反之压缩图片  
	          if (this.result.length <= (100 * 1024)) {  
	            self.arvatar = this.result;  
	            self.postImg(self.arvatar);  
	          }else {  
	            img.onload = function () {  
	              let data = self.compress(img,Orientation);  
	              self.arvatar = data;  
	              self.postImg(self.arvatar);  
	            }  
	          }  
	        }   
	      }  
	  },  
    postImg (img) {  
      //这里写接口  
      // console.log(img)
      // console.log(this)
      this._up_img(img)
    },  
	  rotateImg (img, direction,canvas) {  
	      //最小与最大旋转方向，图片旋转4次后回到原方向      
	      const min_step = 0;      
	      const max_step = 3;        
	      if (img == null)return;      
	      //img的高度和宽度不能在img元素隐藏后获取，否则会出错      
	      let height = img.height;      
	      let width = img.width;        
	      let step = 2;      
	      if (step == null) {      
	          step = min_step;      
	      }      
	      if (direction == 'right') {      
	          step++;      
	          //旋转到原位置，即超过最大值      
	          step > max_step && (step = min_step);      
	      } else {      
	          step--;      
	          step < min_step && (step = max_step);      
	      }       
	      //旋转角度以弧度值为参数      
	      let degree = step * 90 * Math.PI / 180;      
	      let ctx = canvas.getContext('2d');      
	      switch (step) {      
	        case 0:      
	            canvas.width = width;      
	            canvas.height = height;      
	            ctx.drawImage(img, 0, 0);      
	            break;      
	        case 1:      
	            canvas.width = height;      
	            canvas.height = width;      
	            ctx.rotate(degree);      
	            ctx.drawImage(img, 0, -height);      
	            break;      
	        case 2:      
	            canvas.width = width;      
	            canvas.height = height;      
	            ctx.rotate(degree);      
	            ctx.drawImage(img, -width, -height);      
	            break;      
	        case 3:      
	            canvas.width = height;      
	            canvas.height = width;      
	            ctx.rotate(degree);      
	            ctx.drawImage(img, -width, 0);      
	            break;  
	      }      
	  },  
	  compress(img,Orientation) {  
	    let canvas = document.createElement("canvas");  
	    let ctx = canvas.getContext('2d');  
	      //瓦片canvas  
	    let tCanvas = document.createElement("canvas");  
	    let tctx = tCanvas.getContext("2d");  
	    let initSize = img.src.length;  
	    let width = img.width;  
	    let height = img.height;  
	    //如果图片大于四百万像素，计算压缩比并将大小压至400万以下  
	    let ratio;  
	    if ((ratio = width * height / 4000000) > 1) {  
	      console.log("大于400万像素")  
	      ratio = Math.sqrt(ratio);  
	      width /= ratio;  
	      height /= ratio;  
	    } else {  
	      ratio = 1;  
	    }  
	    canvas.width = width;  
	    canvas.height = height;  
			// 铺底色  
	    ctx.fillStyle = "#fff";  
	    ctx.fillRect(0, 0, canvas.width, canvas.height);  
	    //如果图片像素大于100万则使用瓦片绘制  
	    let count;  
	    if ((count = width * height / 1000000) > 1) {  
	      console.log("超过100W像素");  
	      count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片  
				// 计算每块瓦片的宽和高  
	      let nw = ~~(width / count);  
	      let nh = ~~(height / count);  
	      tCanvas.width = nw;  
	      tCanvas.height = nh;  
	      for (let i = 0; i < count; i++) {  
	        for (let j = 0; j < count; j++) {  
	          tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);  
	          ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);  
	        }  
	      }  
	    } else {  
	      ctx.drawImage(img, 0, 0, width, height);  
	    }  
	    //修复ios上传图片的时候 被旋转的问题  
	    if(Orientation != "" && Orientation != 1){  
	      switch(Orientation){  
	        case 6://需要顺时针（向左）90度旋转  
	            this.rotateImg(img,'left',canvas);  
	            break;  
	        case 8://需要逆时针（向右）90度旋转  
	            this.rotateImg(img,'right',canvas);  
	            break;  
	        case 3://需要180度旋转  
	            this.rotateImg(img,'right',canvas);//转两次  
	            this.rotateImg(img,'right',canvas);  
	            break;  
	      }  
	    }  
	    //进行最小压缩  
	    let ndata = canvas.toDataURL('image/jpeg', 0.1);  
	    console.log('压缩前：' + initSize);  
	    console.log('压缩后：' + ndata.length);  
	    console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");  
	    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;  
	    return ndata;  
	  }, 
	  // 头像上传
	  _up_img(dataimg) {
	  	console.log(dataimg)
	  	// this.axios.post(api.edit_avatar,{
	  	// 	sessionID  : s_storage.get('sessionID'),
	  	// 	base64Data :dataimg
	  	// })
	  	// .then(res => {
	  	// 	console.log(res.data)
	  	// })
	  	// .catch(res => {
	  	// 	this.$toast("网络错误")
	  	// })
	  }	
	},
	components: {
		k_header
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.setting {
	.demo-list-wrap{
		// border: none;
	}
	.mu-sub-header {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		padding-left: 12px;
		margin-top: 0;
		.khr_bg();
	}
	.mu-list{
    background: #fff;
    li {
    	// border-bottom: 1px solid #eee;
    }
    .mu-item {    	
    	.marke{
    		font-size: 12px;
    		color: #ccc;
    		margin-left: 8px;
    	}
    	.mu-item-action {
    		min-width: 40px;
    		// li 左侧图标
    		&:nth-of-type(1) {
    			i {
	    			font-size: 24px;
	    		}	
    		}
    		// li 右侧图标
				&:nth-of-type(3) {
    			i {
	    			font-size: 20px;
	    		}	
    		}
    	}
    }
    .red {i {color: rgb(255, 111, 51);}}
    .chen {i {color: rgb(255, 102, 51);}}
    .blue {i {color: rgb(85, 180, 254);}}
    .green {i {color: rgb(153, 204, 153);}}

    // 第一大栏 用户信息类
    &:nth-of-type(1) {
    	.mu-item-action {
    		min-width: 56px;
    	}
    }
  } 
}
.changeavatar{
	margin-top: 4px;
	font-size: 13px;
}
.k_avatar{
	height: 180px;
	padding-top: 40px;
	img{
		border-radius: 50%;
		width: 80px;
		height: 80px;
	}
}
</style>
