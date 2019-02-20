<template>
  <div class="usersenter">

    <!-- 用户中心信息卡片 -->
    <UserBox v-show=test />
    
    <!-- 横tab -->
    <div class="tab_box">

    	<router-link tag='div' class="item" to="/notivelist">
    		<div class="img">
    			<img src="./img/tab1.png">
    		</div>
    		<div class="title">通知</div>
    	</router-link>

    	<router-link tag='div' class="item" to="">
    		<div class="img">
    			<img src="./img/tab2.png">
    		</div>
    		<div class="title">收藏</div>
    	</router-link>

    	<router-link tag='div' class="item" to="/team">
    		<div class="img">
    			<img src="./img/tab3.png">
    		</div>
    		<div class="title">评论</div>
    	</router-link>

    	<router-link tag='div' class="item" to="/myqrcode">
    		<div class="img">
    			<img src="./img/tab4.png">
    		</div>
    		<div class="title">足迹</div>
    	</router-link>
    </div>


    <!-- <div class="heng_tab fff">
    	<div class="items">
    		<div class="item">
    			<img src="https://lipstick.xsygood.com/bsck_img/icon/tonzhi.png">
    			<div class="title">通知</div>
    		</div>
    		<div class="item">
    			<img src="https://lipstick.xsygood.com/bsck_img/icon/shoucang.png">
    			<div class="title">收藏</div>
    		</div>
    		<div class="item">
    			<img src="https://lipstick.xsygood.com/bsck_img/icon/pinglun.png">
    			<div class="title">评论</div>
    		</div>
    		<div class="item">
    			<img src="https://lipstick.xsygood.com/bsck_img/icon/zhuji.png">
    			<div class="title">足迹</div>
    		</div>
    	</div>
    </div> -->
    <!-- <div class="khr" v-show=test ></div> -->

		<div class="cz_menu">
			<div class="cz_menu_header">
				<div class="title">我的工具</div>
			</div>
			<div class="cz_menu_content">
				<router-link class="item" to="/task" >
					<!-- <i class="iconfont icon-waibaoxinxi"></i> -->
					<img src="./img/renwu.png" width="32" height="32">
					<div class="title">每日任务</div>
				</router-link>

				<router-link class="item" to="/" >
					<img src="./img/kecheng.png" width="32" height="32">
					<div class="title">我的课程</div>
				</router-link>

				<router-link class="item" to="/" >
					<img src="./img/dingdan.png" width="32" height="32">
					<div class="title">我的订单</div>
				</router-link>

				<!-- <router-link class="item" to="/" >
					<img src="./img/kefu.png" width="32" height="32">
					<div class="title">专属客服</div>
				</router-link>

				<router-link class="item" to="/" >
					<img src="./img/jifen.png" width="32" height="32">
					<div class="title">占位符</div>
				</router-link> -->

				<router-link class="item" to="/recharge" >
					<img src="./img/jifen.png" width="32" height="32">
					<div class="title">积分充值</div>
				</router-link>

				<router-link class="item" to="/opinion" >
					<img src="./img/renwu.png" width="32" height="32">
					<div class="title">意见反馈</div>
				</router-link>

				<router-link class="item" to="/about">
					<img src="./img/guanyuwomen.png" width="32" height="32">
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
}
.tab_box{
	display: flex;
	text-align: center;
	background: #fff;
	margin: 12px;
	border-radius: 12px;
	padding: 8px 0px;
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
	border-radius: 12px;
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
</style>
