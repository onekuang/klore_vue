<template>
<div class="prodetail page">
	<span class="back" @click=back>
		<i class="iconfont icon-icon--"></i>
	</span>

<!-- 轮播组件 -->
  <div>
  	<k_swipe_banner :swipe_data=swipe_banner_data :height=230 />
  </div>
	<div class="info">
		<mu-row>
	    <mu-col span="12"><div class="grid-cell">
	    	<div class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
	    </div></mu-col>
	  </mu-row>		
		
		<div class="money_box">
		  <mu-row>
		    <mu-col span="8"><div class="grid-cell">
		    	<div class="money"><span>￥</span>6-15万</div>
		    </div></mu-col>
		    <mu-col span="4"><div class="grid-cell">
		    	<div class="collect">
		    		<div class="k_btn"><i class="iconfont icon-message_light"></i> 立即咨询</div>
		    		<!-- <div class="guanzhu">
		    			<i class="iconfont icon-pingjiadengji"></i>
		    			<div class="text">关注</div>
		    		</div>	 -->	    		
		    	</div>
		    </div></mu-col>
		  </mu-row>
		</div>
		
		<!-- 其他 -->
		<div class="other">
			<div class="renzheng">
				<div class="text"><img src="https://lipstick.xsygood.com/bsck_img/prove.png">已通过加盟可行性严审</div>
			</div>
		</div>

		<div class="khr"></div>
		
		<div class="flag">
			<div class="jiameng">
				<div class="items">
					<div class="item">
						<div class="top">直营店</div>
						<div class="count">2家</div>
					</div>
					<div class="item">
						<div class="top">加盟店</div>
						<div class="count">700家</div>
					</div>
					<div class="item">
						<div class="top">申请加盟</div>
						<div class="count">2039人</div>
					</div>
				</div>
			</div>

			<div class="tags">
				<div class="tag">实地考察地址</div>
				<div class="tag">量身定制装修</div>
				<div class="tag">带店培训</div>
				<div class="tag">选址培训</div>
				<div class="tag">技术操作培训</div>
				<div class="tag">标准化运营手册</div>
				<div class="clearfix"></div>
			</div>
		</div>

		<div class="khr"></div>

	</div>


  <h4 class="index_title">品牌信息</h4>  
  <div class="pinpai">
  	<div class="item">
			<mu-row>
	    	<mu-col span="4">
	    		<div class="grid-cell"><div class="key">项目名称</div></div>
	    	</mu-col>
	    	<mu-col span="8">
	    		<div class="grid-cell"><div class="value">麦当劳</div></div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  	<div class="item">
			<mu-row>
	    	<mu-col span="4">
	    		<div class="grid-cell"><div class="key">主营项目</div></div>
	    	</mu-col>
	    	<mu-col span="8">
	    		<div class="grid-cell"><div class="value">汉堡,薯条</div></div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  	<div class="item">
			<mu-row>
	    	<mu-col span="4">
	    		<div class="grid-cell"><div class="key">公司所在地</div></div>
	    	</mu-col>
	    	<mu-col span="8">
	    		<div class="grid-cell"><div class="value">美国</div></div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  	<div class="item">
			<mu-row>
	    	<mu-col span="4">
	    		<div class="grid-cell"><div class="key">店铺数量</div></div>
	    	</mu-col>
	    	<mu-col span="8">
	    		<div class="grid-cell"><div class="value">主营店86家&nbsp;&nbsp;加盟店218家</div></div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  </div>
	<div class="khr"></div>
	
	

	<h4 class="index_title">开店费用</h4>  
  <div class="pinpai">
  	<div class="item">
			<mu-row>
	    	<mu-col span="4">
	    		<div class="grid-cell"><div class="key">品牌使用费</div></div>
	    	</mu-col>
	    	<mu-col span="8">
	    		<div class="grid-cell"><div class="value">10000 -10000</div></div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  	<div class="item">
			<mu-row>
	    	<mu-col span="4">
	    		<div class="grid-cell"><div class="key">培训费</div></div>
	    	</mu-col>
	    	<mu-col span="8">
	    		<div class="grid-cell"><div class="value">10000 -10000</div></div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  	<div class="item">
			<mu-row>
	    	<mu-col span="4">
	    		<div class="grid-cell"><div class="key">管理费</div></div>
	    	</mu-col>
	    	<mu-col span="8">
	    		<div class="grid-cell"><div class="value">0 -0</div></div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  	<div class="item">
			<mu-row>
	    	<mu-col span="12">
	    		<div class="grid-cell make">
	    		以上费用为预估，不含房租，具体费用请资讯企业</div>
	    	</mu-col>
	  	</mu-row>
  	</div>
  </div>
	<div class="khr"></div>
	

	<!-- 内容详情 -->
	<h4 class="index_title">品牌详情</h4>  
	<div class="detaile_wrapper">
		<div class="detaile">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut consequuntur quod sed ipsam deserunt fugiat laboriosam iste cupiditate a, consectetur molestiae iure dignissimos placeat quibusdam reprehenderit porro aliquid ipsum! Dolorum.
		</div>
	</div>
	
	<div class="khr"></div>
	<!-- 留言板 -->
	<h4 class="index_title">我要咨询</h4>  
	<div class="msg_board">
		<div class="board">
			<form @submit.prevent="onSubmit">
				<div class="chang_mobile_box">
					<div class="old_mobile_box">
						<div class="item">您的姓名:</div>
						<div class="item">
							<input type="text" name="old_passwored" class="old_mobile" placeholder="如: 金先生" v-model="form_data.old_passwored">
						</div>
					</div>
					<div class="new_mobile_box">
						<div class="item">手机号码:</div>
						<div class="item">
							<input type="text" class="new_mobile" name="new_passwored" placeholder="10086" v-model="form_data.new_passwored">
						</div>					
					</div>
					<div class="new_mobile_box">
						<div class="item">咨询信息:</div>
						<div class="item">
							<input type="text" class="new_mobile" name="rep_passwored" placeholder="请问投资该项目所需费用有哪些?" v-model="form_data.rep_passwored">
						</div>					
					</div>

				</div>
				<div class="khr"></div>
				<div class="btn_box" style="margin-top: 10px;">
					<button class="theme_btn" type="submit">提交</button>
				</div>
			</form>
		</div>
	</div>
	

	<!-- 底部tab -->
	<div class="goods_tab">
		<div class="items">
			<!-- <div class="item">
				<div class="itm">
					<i class="iconfont icon-pingjiadengji"></i>
					<div class="text">关注</div>
				</div>
			</div> -->
			<div class="item">
				<div class="itm">
					<i class="iconfont icon-pingjiadengji"></i>
					<div class="text">关注</div>
				</div>
			</div>
			<div class="item">
				<i class="iconfont icon-text_icon"></i>&nbsp;&nbsp;获取开店方案
			</div>
		</div>
	</div>
	

</div>
</template>

<script>
import k_swipe_banner from '@/components/k_swipe/k_swipe';
export default {
	data() {
		return {
			swipe_banner_data:[
				{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"},
				{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1191749503,606205987&fm=58&bpow=1024&bpoh=1024"},
			],
			form_data:{
				old_passwored:'',
				new_passwored:'',
				rep_passwored:'',
			},
			html:'<div>detail</div>'
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		back() {
			window.history.back()
		},
	},
	components: {k_swipe_banner,}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.prodetail{
	padding-bottom: 115px;
	.info{
		.title{
			padding: 6px;
			font-size: 18px;
			color: #333;
			line-height: 20px;
		}
	}
	.money_box{
		margin-top: 4px;
		padding: 12px 8px;
		.money{
			font-size: 20px;
			color: #f00;
			font-weight: 900;
			span{
				font-size: 16px;
			}
		}
		.collect{
			color: #fff;
			.k_btn{
				float: right;
				display: inline-block;
				padding: 4px 6px;
				border-radius: 4px;
				border: 1px solid #eee;
				background: @green;
			}
			.guanzhu{
				float: right;
				text-align: center;
				margin-right: 8px;
				i {
					color: red;
					font-weight: 900;
					font-size: 20px;
				}
				.text{
					color: #777;
					font-size: 12px;
				}
			}
			
		}
	}
	.other{
		border-top: 1px solid #eee;
		.renzheng{
			height: 40px;
			line-height: 40px;
			padding-left: 10px;
			color: #333;
			img{
				height: 18px;
				margin-right: 4px;
				float: left;
				margin-top: 11px;
			}
		}
	}

	.flag{
		.jiameng{
			.items{
				display: flex;
				padding: 12px 0;
				border-bottom: 1px solid #eee;
				.item{
					flex: 1;
					text-align: center;
					padding: 4px 0;
					border-right: 1px solid #eee;
					&:nth-of-type(3){
						border-right: none;
					}
					.count{
						color: red;
						font-size: 18px;
						margin-top: 2px;
					}
				}
			}
		}
		.tags{
			padding: 20px 0;
			.tag{
				float: left;
				display: inline-block;
				padding: 4px 10px;
				border: 1px solid #eee;
				color: #666;
				margin-left: 8px;
				margin-bottom: 10px;
				border-radius: 4px;
			}
		}
	}

	// 品牌信息
	.pinpai{
		padding: 0 8px;
		.item{
			border-bottom: 1px solid #eee;
			height: 40px;
			line-height: 40px;
			.key{
				color: #666;
			}
			.value{
				text-align: right;
				word-wrap: normal;
				height: 40px;
				.ell();
				color: #666;
			}
			.make{
				font-size: 12px;
				text-align: right;
				color: #999;
			}
		}
		
	}

	// 商品详情
	.detaile_wrapper{
		padding: 8px;
		/deep/ img {
			max-width:100%; 
		}

	}

	.goods_tab{
		z-index: 999;
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		height: 56px;
		.items{
			display: flex;
			.item{
				flex: 0 0 70px;
				height: 60px;				
				font-size: 15px;				
				text-align: center;
				background: #fff;
				.itm{
					height: 50px;
					margin-top: 5px;
					i{
						font-size: 20px;
					}
					.text{
						font-size: 12px;
					}
				}
				&:last-child{
					flex: 1;
					color: #fff;
					line-height: 60px;
					background: #f44336;
				}
			}
		}
	}
}
.index_title{
	border-left: 4px solid @red;
	border-bottom: 1px solid #eee;
	text-align: left;
	font-weight: 900;
	color: #000;
	font-size: 20px;
}
.chang_mobile_box {
	input {
		height: 100%;
		width: 100%;
		font-size: 13px;
	}
	.old_mobile_box {
		border-top: 1px solid #eee;
	}
	.old_mobile_box, .new_mobile_box, .code_box {
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;
		padding-top: 8px;
		padding-bottom: 8px;
		height: 50px;
		line-height: 34px;
		.item{
			flex: 1;
			&:nth-of-type(1) {
				flex: 0 0 80px;
				width: 80px;
				font-size: 14px;
				letter-spacing: 2px;
				text-indent: 6px;
			}
		}
	}

}
</style>