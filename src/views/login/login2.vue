<template>
<div class="login2 ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>

<div class="login_bg">
	<div class="img_box">
		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540557274680&di=7998bc27e6c543fbd4261bbc4216c637&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db10896995d0223dd54564e744b.jpg" width="64" height="64">
	</div>

	<form @submit.prevent="onSubmit">
		<div class="form_box">
				<div class="item">
					<label for="">名称：</label>
					<input type="text" name="username" v-model="form_data.username">
				</div>
				<div class="item">
					<label for="">手机：</label>
					<input type="text" name="mobile" v-model="form_data.mobile" number>
				</div>
				<div class="item">
					<label for="">地址：</label>
					<input type="text" name="site" v-model="form_data.site">
				</div>
				<div class="item" style="border-bottom: none;">
						<textarea name="textarea" id="" rows="5" placeholder="请输入商家简介"v-model="form_data.textarea"></textarea>
				</div>
		</div>

		<div class="uploadimg_box">
			<label for="">图片上传</label>
			<input type="file" @change="upload($event)" style="display: none;" ref="upload" id='upload' accept="image/*">
			<div>
				<div class="item">
					
					<div class="add_img" @click="addPicFront" ><i class="iconfont icon-add1"></i></div>

					<div class="for_img" v-for="(item, index) in uploadimg" :key=index>
						<img :src="item.src" width="48" height="48">
						<span class="delx extend-click" @click="delete_img(index)">
							<i class="iconfont icon-icon-"></i>
						</span>
					</div>
					
					<div class="clearfix"></div>
				</div>
			</div>
		</div>

		<div class="btn_box" style="margin-top: 26px;">
			<button class="theme1_bg login_btn">
				点击确认
			</button>
		</div>
	</form>
</div>


</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
import { kk } from '@/common/js/k_form.js'
import Exif from 'exif-js'  
export default {
	name:"login2",
	data() {
		return {
			uploadimg: [
				// {src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540557274680&di=7998bc27e6c543fbd4261bbc4216c637&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db10896995d0223dd54564e744b.jpg"},
				// {src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540557274680&di=7998bc27e6c543fbd4261bbc4216c637&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db10896995d0223dd54564e744b.jpg"}
			],
			form_data:{},

			arvatar:'',
			picValue:'' ,
		}
	},
	methods: {
		onSubmit() {
			this.send_data()
			return
			if(kk.is_null(this.form_data.username,this,'用户名不能为空')){return}
			if(!kk.is_mobile(this.form_data.mobile,this)){return}
			if(kk.is_null(this.form_data.site,this,'地址不能为空')){return}
			if(kk.is_null(this.form_data.textarea,this,'简介不能为空')){return}
		},
		send_data() {
			this.axios.post("http://192.168.4.119/vote/api/Tools/Upload/",{
				type:"img",
				userdata: this.form_data,
				uploadimg: this.uploadimg
			})
			.then(res => {
				console.log(res.data)
			})
			.catch(res => {
				this.$toast("网络错误")
			})
		},
		delete_img(index) {
			console.log("删除上传的图片")
			this.uploadimg.splice(index, 1)
		},
		// 点击添加图片
		addPicFront(e){
			if(this.uploadimg.length > 2) {
				this.$alert("图片最多上传3张")
				return
			}
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
	  	let obj = {src: dataimg}
	  	this.uploadimg.push(obj)
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
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.theme1_bg{
	background: linear-gradient(left, #FF8F2B,#FF715B );
}

.login2 {
	.login_bg{
		height: 700px;
		background-image: url(./login2bg.jpg);
		background-size: 100% 250px;
		background-repeat: no-repeat;
		text-align: center;
		.login_btn{
			display: inline-block;
			border-radius: 18px;
			padding: 6px 60px;
			color: #fff;
		}
		.img_box{
			margin-top: 40px;
			border-radius: 50%;
			line-height: 80px;
			height: 80px;
			width: 80px;
			border: 1px solid #fff;
			display: inline-block;
			text-align: center;
			img{
				margin-top: 8px;
				border-radius: 50%;
			}
		}

		.form_box {
			background: #fff;
			width: 70%;
			border-radius: 8px;
			padding: 12px 8px 0px;
			margin: 30px auto 0;
			border: 1px solid #eee;
			.item{
				display: flex;
				padding-bottom: 6px;
				border-bottom: 1px solid #eee;
				margin-bottom: 14px;
				label {
					color: #aaa;
					font-size: 12px;
				}
				textarea {
					width: 100%;
					border-color: #eee;
					background: #f5f5f5;
				}
			}
			margin-bottom: 8px;
		}
	}




	.uploadimg_box{
		width: 70%;
		margin: 0 auto;
		text-align: left;
		label {
			color: #aaa;
			font-size: 12px;
		}
		.item {
			.for_img{
				float: left;	
				margin-right: 14px;
				position: relative;
				margin-bottom: 12px;
				img {
					border-radius: 2px;
				}
				.delx{
					display: inline-block;
					width: 16px;
					height: 16px;
					position: absolute;
					right: -8px;
					top: -8px;
					background: #f44336;
					border-radius: 50%;
					text-align: center;
					line-height: 16px;
					i {
						color: #fff;
						font-size: 12px;
					}
				}
			}
			
			.add_img{
				height: 48px;
				width: 48px;
				float: left;
				margin-right: 14px;
				text-align: center;
				border: 1px dashed #eee;
				i {
					line-height: 48px;
					font-size: 32px;
					color: #eee;
				}
			}
		}
	}
}
</style>
