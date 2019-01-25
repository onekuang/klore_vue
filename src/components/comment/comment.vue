<template>
<div class="comment_wrapper page" style="background: #fff;">
	<div class="comment_box">
		<textarea name="textarea" rows="5" placeholder="请输入内容"v-model="textarea"></textarea>

		<div class="emoji_box" style="position: relative; width: 100%;height: 40px;">
			<img 
				src="./emoji.png" class="pull-right extend-click" 
				width="28" height="28" 
				style="margin-right: 12px;" 
				@click="toggle_emoji">
			<div class="clearfix"></div>
			<emotion @emotion="handleEmotion" :height="200" v-show="emoji_show" 
				style="position: absolute;left: 0;right: 0;top: 40px;background-color: #fff;z-index: 99;"></emotion>
		</div>
		
		<div class="uploadimg_box">
			<label for="">图片上传{{uploadimg.length}}</label>
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
		
		<div class="btn_box" style="margin-top: 30px;">
			<button class="theme_btn" @click="submit_data" >提交</button>
		</div>


	</div>

</div>
</template>

<script>
import Emotion from '@/components/base/emoji/index'
import Exif from 'exif-js'  
export default {
	name:"comment",
	data() {
		return {
			emoji_show: false,
			goods_id:'',
			textarea:'',
			uploadimg: [],
			arvatar:'',
			picValue:'' ,
		}
	},
	created() {
		this.goods_id = this.$route.query.id || ''
	},
	methods: {
		submit_data() {
			if(this.textarea == '') {
				this.$toast('内容不能为空.')
				return
			}
			console.log(this.goods_id)
			console.log(this.textarea)
			console.log(this.uploadimg)

			this.axios.post(this.$api.feed_back,{
				content:this.textarea,
				images:this.uploadimg,
			})
			.then(res => {
				if(res.code == 200) {
					this.$alert(res.msg).then(success => {
						window.history.back()
					})
				}else{
					this.$toast(res.msg)
				}
			})

			// this.$loading.show();
			// this.axios.post(this.$api.comment_post,{
			// 	applyid: this.goods_id,
			// 	content:this.textarea,
			// 	images:this.uploadimg
			// })
			// .then(res => {
			// 	this.$loading.hide();
			// 	if(res.data.code == 200 ) {
			// 		this.textarea = ''		
			// 		this.uploadimg = [],	
			// 		this.$toast(res.data.msg)
			// 		this.$router.push({
			// 			path: `/votedetail?id=${this.goods_id}`
			// 		})
			// 	}else if(res.data.code == 205) {
			// 		window.location.href = res.data.data
			// 	}else{
			// 		this.$toast(res.data.msg)
			// 	}
			// })
			// .catch(res => {
			// 	this.$toast("网络错误")
			// })
		},

		toggle_emoji() {
			this.emoji_show = !this.emoji_show
		},
		handleEmotion (i) {
		  this.textarea += i
		  this.emoji_show = false
		},
		// 将匹配结果替换表情图片
		emotion (res) {
		  let word = res.replace(/\#|\;/gi,'')
		  const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
		  let index = list.indexOf(word)
		  return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`   
		},





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
		Emotion
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.comment_wrapper {
		padding-bottom: 100px;
	.comment_box{
		padding: 8px;
		textarea{
			padding: 4px;
		}
	}
	textarea {
		width: 100%;
		height: 100%;
		border-color: #eee;
	}
}
.uploadimg_box{
		width: 100%;
		margin: 0 auto;
		text-align: left;
		label {
			color: #aaa;
			font-size: 12px;
		}
		.item {
			margin-top: 20px;
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
</style>
