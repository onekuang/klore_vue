<template>
  <div class="usersenter app_head">
		<k_header 
			title="用户中心" 
			r_icon="icon-shezhi1" 
			r_icon_color="#777"
			@r_click=r_click 
		/>
		
    <!-- 用户中心信息卡片 -->
    <UserBox v-show=test />   
    
		<!-- 跳转开通会员 -->
		<router-link tag='div' to="/paymenber" class="cz_box">
			<div class="k_panel">
				<div class="item">
					<div class="img">
						<img src="https://lipstick.xsygood.com/bsck_img/icon/vipicon.png">
						<!-- <i class="iconfont icon-crownfill" style="color: #FFE5B2;"></i> -->
					</div>
					<div class="title">VIP会员</div>
					<div class="desc">开通会员享受更多权益</div>
					<div class="you"><i class="iconfont icon-you"></i></div>
				</div>
			</div>
		</router-link>


    <!-- 横tab -->
    <div class="tab_box">

    	<router-link tag='div' class="item" to="/notivelist">
    		<div class="img">
    			<img src="./img/tab1.png">
    		</div>
    		<div class="title">系统通知</div>
    	</router-link>

    	<router-link tag='div' class="item" to="/collect">
    		<div class="img">
    			<img src="./img/tab2.png">
    		</div>
    		<div class="title">加盟收藏</div>
    	</router-link>

    	<router-link tag='div' class="item" to="/my_comment">
    		<div class="img">
    			<img src="./img/tab3.png">
    		</div>
    		<div class="title">我的评论</div>
    	</router-link>

    	<router-link tag='div' class="item" to="/my_concern">
    		<div class="img">
    			<img src="./img/tab4.png">
    		</div>
    		<div class="title">投资关注</div>
    	</router-link>
    </div>
		

		


		<div class="cz_menu">
			<div class="cz_menu_header">
				<div class="title">我的工具</div>
			</div>
			<div class="cz_menu_content">
				<router-link class="item" to="/task" >
					<i class="iconfont icon-renwu"></i>
					<!-- <img src="./img/renwu.png" width="32" height="32"> -->
					<div class="title">每日任务</div>
				</router-link>

				<router-link class="item" to="/my_video" >
					<i class="iconfont icon-kecheng"></i>
					<div class="title">我的课程</div>
				</router-link>

				<router-link class="item" to="/bill" >
					<i class="iconfont icon-jiludanzilishijilu"></i>
					<div class="title">积分记录</div>
				</router-link>

				<!-- <router-link class="item" to="/" >
					<img src="./img/kefu.png" width="32" height="32">
					<div class="title">专属客服</div>
				</router-link>

				<router-link class="item" to="/" >
					<img src="./img/jifen.png" width="32" height="32">
					<div class="title">占位符</div>
				</router-link> -->

				<!-- <router-link class="item" to="/recharge" >
					<img src="./img/jifen.png" width="32" height="32">
					<div class="title">积分充值</div>
				</router-link> -->

				<router-link class="item" to="/opinion" >
					<i class="iconfont icon-yijian"></i>
					<div class="title">意见反馈</div>
				</router-link>

				<router-link class="item" to="/about">
					<i class="iconfont icon-guanyuwomen2"></i>
					<div class="title">关于我们</div>
				</router-link>
			</div>
		</div>

  </div>
</template>
<script>
import k_header from '@/components/app_head/app_head'
import UserBox from "@/components/user_info_box/user_info_box2.vue";
export default {
  name: "usercenter",
  data() {
    return {
      dot_num: 2,
      test: true
    };
  },
  created() {
    console.log("usercneter...show..");
  },
  mounted() {

  },
  methods: {
  	r_click() {
  		this.$router.push({
  			path: `/setting`
  		})
  	}
  },
  computed: {

  },  
  components: {
    UserBox,k_header
  }
};
</script>
<style scoped lang="less">
@import url("../../common/less/index.less");
.heng_tab{
	.items{
		display: flex;
		.item{
			flex: 0 0 25%;
			text-align: center;
			padding: 12px 0;
			i{
				font-size: 26px;
			}
			img{
				width: 30px;
				height: 30px;
			}
			.title{
				font-size: 12px;
			}
		}
	}
}
.menu_box{
	.items{
		display: flex;
		flex-wrap: wrap;
		.item{
			// border: 1px solid #eee;
			text-align: center;
			padding: 16px 0;
			flex: 0 0 25%;
			i{
				font-size: 24px;
			}
			img{
				width: 30px;
				height: 30px;
			}
			.title{
				font-size: 12px;
			}
		}
	}
}
.usersenter{
  width: 100%;
  padding-bottom: 70px;
}
.tab_box{
	display: flex;
	text-align: center;
	background: #fff;
	margin: 12px;
	border-radius: 6px;
	padding: 8px 0px;
	box-shadow: 2px 2px 4px rgba(0,0,0,.05);

	.item{
		flex: 1;
		.title {
			font-size: 12px;
			height: 20px;
			line-height: 20px;
		}
		img{
			width: 40px;
			height: 40px;
		}
	}
}

.cz_menu{
	margin: 12px;
	background: #fff;
	border-radius: 6px;
	box-shadow: 2px 2px 4px rgba(0,0,0,.05);

	.cz_menu_header{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #eee;
		.title{
			font-size: 12px;
			margin-left: 16px;			
		}
	}
	.cz_menu_content{
		display: flex;
		flex-wrap: wrap;
		.item{
			flex: 0 0 25%;
			width: 25%;
			text-align: center;
			padding-bottom: 12px;
			padding-top: 12px;
			i {
				font-size: 24px;
			}
			.title{
				font-size: 12px;
				height: 20px;
				line-height: 20px;
				color: #333;
			}
		}
	}
}
.cz_box{
	display: flex;
	text-align: center;
	background: #fff;
	margin: 12px;
	border-radius: 6px;
	padding: 8px 0px;
	box-shadow: 2px 2px 4px rgba(0,0,0,.05);
}

.k_panel{
	width: 100%;
	.item{
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		.img{
			flex: 0 0 40px;
			text-align: center;
			font-size: 15px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				height: 20px;
				width: 20px;
			}
		}
		.title{
			flex: 1;
			font-size: 15px;
			text-align: left;
		}
		.desc{
			flex: 1;
			color: #999;
			font-size: 13px;
			text-align: right;
		}
		.you{
			color: #999;
			flex: 0 0 30px;
		}
	}
	
}
</style>
