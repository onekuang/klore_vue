<template>
<div class="shenqing page app_head">

<k_header title="申请直通" />	


	<div class="radio_head">
		<div class="title">选择创业行业(单选):</div>
	</div>
	<div class="radio_box">
		<div class="items">

			<div class="item" v-for="i in 15">
				<div class="itm">
					<mu-flex class="select-control-row" :key="'radio ' + i" >
			      <mu-radio :value="i" v-model="normal.radio"  :label="'Radio ' + i" :ripple=ripple></mu-radio>
			    </mu-flex>
		    </div>
			</div>
			
		</div>
	</div>
	
	
	<div class="k_input_box">
		<div class="k_input">
			<div class="item">学校名称:</div>
			<div class="item">
				<input type="text" name="name" placeholder="请填写学校真实名称">
			</div>
		</div>
	</div>



	<div class="k_input_box">
		<div class="k_input">
			<div class="item">姓名:</div>
			<div class="item">
				<input type="text" name="name" placeholder="请填写真实姓名">
			</div>
		</div>
	</div>

	<div class="k_input_box">
		<div class="k_input">
			<div class="item">手机号:</div>
			<div class="item">
				<input type="text" name="name" placeholder="请填写手机号">
			</div>
		</div>
	</div>
  
  <div class="radio_head">
  	<div class="title">上传相关资料</div>
  </div>
  <div class="upload_wrapper">
  	<div class="uploadimg_box">
  		<!-- <label for="">图片上传{{uploadimg.length}}</label> -->
  		<label for=""></label>
  		<input type="file" @change="upload($event)" style="display: none;" ref="upload" id='upload' accept="image/*">
  		<div>
  			<div class="item">
  				
  				<div class="for_img" v-for="(item, index) in uploadimg" :key=index>
  					<img :src="item.src" width="48" height="48">
  					<span class="delx extend-click" @click="delete_img(index)">
  						<i class="iconfont icon-icon-"></i>
  					</span>
  				</div>
  				<div class="add_img for_img" @click="addPicFront" v-show="uploadimg.length != 9"><i class="iconfont icon-add1"></i></div>
  				
  				<div class="clearfix"></div>
  			</div>
  		</div>
  	</div>
  </div>
	
	<div class="text_make">
		<div class="text">请上传您的毕业证书，身份证(正面)，身份证(反面)
			<!-- <br>我们将在3个工作日内进行审核 -->
		</div>
	</div>


	<div class="btn_box" style="margin-top: 30px;">
		<button class="theme_btn" type="submit">确认提交</button>
	</div>

</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
import Exif from 'exif-js'  
export default {
	data() {
		return {
			normal: {
        checkbox: true,
        radio: 1,
        switch: false
      },
      ripple: false,
      uploadimg: [],
      arvatar:'',
      picValue:'' ,
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		delete_img(index) {
			console.log("删除上传的图片")
			this.uploadimg.splice(index, 1)
		},
		// 点击添加图片
		addPicFront(e){
			if(this.uploadimg.length > 8) {
				this.$alert("图片最多上传9张")
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
	  }
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.shenqing{
	.khr_bg();
	padding-bottom: 80px;
}
.radio_head{
	margin: 12px 8px 0px 8px;
	border: 1px solid #f5f5f5;
	border-bottom: none;
	height: 40px;
	line-height: 40px;
	border-radius: 8px 8px 0 0;
	text-indent: 12px;
	background: #fff;
}
.radio_box{
	margin: 0 8px 8px 8px;
	border: 1px solid #f5f5f5;
	border-radius: 0 0 8px 8px;
	background: #fff;
	.items{
		display: flex;
		flex-wrap: wrap;
		padding: 12px 8px;
		.item{
			height: 40px;
			line-height: 40px;
			text-align: center;
			flex: 33.33%;
			.itm{
				display: inline-block;
				width: 80%;
				margin: 0 auto;
			}
			/deep/.mu-radio-label{
				font-size: 14px
			}
		}
	}
}



.k_input_box{	
	margin: 8px;
	.k_input{
		background: #fff;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;
		padding-top: 8px;
		padding-bottom: 8px;
		height: 50px;
		line-height: 34px;
		input {
			height: 100%;
			width: 100%;
			font-size: 13px;
		}
		.item{
			flex: 1;
			&:nth-of-type(1) {
				flex: 0 0 90px;
				width: 90px;
				font-size: 14px;
				// letter-spacing: 2px;
				text-indent: 6px;
			}
		}
	}
}

.upload_wrapper{
	margin: 0 8px 8px 8px;
}
.uploadimg_box{
		background: #fff;	
		width: 100%;
		margin: 0 auto;
		text-align: left;
		padding-top: 8px;
		label {
			color: #aaa;
			font-size: 12px;
		}
		.item {
			// margin-top: 20px;
			.for_img{
				float: left;	
				// margin-right: 30px;
				margin-left: 20px;
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
				background: #fff;
				i {
					line-height: 48px;
					font-size: 32px;
					color: #eee;
				}
			}
		}
}

.text_make{
	margin: 0 8px 8px 8px;
	.text{
		color: @red;
		font-size: 12px;
	}
}
</style>