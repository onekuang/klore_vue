<template>
<div class="created_share page fff">
	<div class="guize">
		<p><i class="iconfont icon-jinbi"></i>奖励佣金预估: ￥1.67 
			<span class="pull-right" @click='alert_guize'>
				规则
			</span>
		</p>
	</div>
	<div class="info">
		<p class="title">惊天动地小龙虾</p>
		<div class="info_box">
			<p>
				【在售价】 23.5元<br>
				【劵后价】 23.5元<br>
				------------<br>
				复制这条信息,<br>
				￥1231asdfasdfsaf, &nbsp;&nbsp;打开【手机淘宝】即可查看<br>
			</p>
			<!-- <p class="text-right"><span>复制</span></p> -->
		</div>
	</div>

	<div class="khr"></div>
	
	<div class="img_box">
		<div class="haibao" @click=open_img()>
			<img :src="code_img" width="100%">
		</div>
		<div class="haibao">
			<div class="item"><img src="https://img.4008823823.com.cn/kfcios/Version/533_420253.jpg" width="100%"></div>
			<div class="item"><img src="https://img.4008823823.com.cn/kfcios/Version/533_420253.jpg" width="100%"></div>
			<div class="item"><img src="https://img.4008823823.com.cn/kfcios/Version/533_420253.jpg" width="100%"></div>
			<div class="item"><img src="https://img.4008823823.com.cn/kfcios/Version/533_420253.jpg" width="100%"></div>
		</div>
	</div>
	
	<div class="btn_bos">
		<div class="item">
			<div class="btn" v-clipboard:copy="tao_code"
      			v-clipboard:success="onCopy"
      			v-clipboard:error="onError">复制淘口令</div>
		</div>
		<div class="item">
			<div class="btn">分享选中图片</div>
		</div>
	</div>

	<div class="haibao_img" v-show=page_img>
		<div class="img">
			<img :src=code_img width="100%">
			<span class="text-center" style="color: #fff;margin-top: 12px;">长按图片可发送给好友</span>
		</div>
		<div class="marke" @click="clone_img"></div>
	</div>


</div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex'

export default {
	name:"created_share",
	data() {
		return {
			tao_code: '123456',  // 淘指令
			code_img:'',
			page_img:false,
		}
	},
	created() {	

		this.get_data()
	},
	methods: {
		vuetouch(s) {
			console.log(s)
		},
		get_data() {
			this.code_img = this.share_img
		},
		alert_guize() {
			this.$alert({
				title: '奖励计算规则',
				content: '此处展示高佣为卖家设置佣金,不同用户申请到的佣金不同,最终以实际结算结果为准'
			})
		},
		open_img() {
			this.page_img = true
		},
		// 关闭海报
  	clone_img(){
  		this.page_img = false
  	},
  	onCopy(e) {
			console.log(e.text)
			this.$toast(`${e.text} 复制成功`)
		},
		onError(e) {
			this.$toast(`复制失败`)
		}
  },
  computed: {
  	...mapGetters([
  			'share_img'
  		])
  }
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.created_share{
	.guize{
		padding: 10px 8px;
		background: #f10;
		color: #fff;
		font-size: 12px;
		i {
			margin-right: 8px;
		}
	}
	.info{
		.title{
			font-size: 15px;
			color: #000;
			margin-bottom: 16px;
		}
		padding: 12px 8px;
		color: #777;
		font-size: 13px;
	}
	.img_box{
		display: flex;
		.haibao {
			flex: 1;
			margin: 4px;
			&:nth-of-type(1) {
				padding: 4px;
			}
			img{
				display: block;
				border: 1px solid #eee;
			}
			.item{
				float: left;
				width: 49%;
				margin: 2px 0.5%;
				padding: 4px;
			}
		}
	}
	.btn_bos{
		display: flex;
		position: fixed;
		bottom: 60px;
		left: 0;
		right: 0;
		.item{
			flex: 1;
			.btn{
				padding: 6px;
				border-radius: 4px;
				text-align: center;
			}
			&:nth-of-type(1) {
				padding: 4px;
				.btn{
					border: 1px solid @chen;
					color: @chen;
					font-size: 12px;
				}
			}
			&:nth-of-type(2) {
				padding: 4px;
				.btn{
					border: 1px solid @red;
					color: @red;
					font-size: 12px;
				}
			}
		}
	}
}
.haibao_img{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 56px;
	z-index: 20;
	text-align: center;
	padding-top: 20px;	
	.img {
		width: 88%;
		margin: 0 auto;
		z-index: 20;
	}
	.marke{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.7);
		z-index: -1;
	}
}
</style>
