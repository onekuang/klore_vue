<template>
<div class="created_case page app_head">
<k_header title="编辑项目资料" />

<div class="demo-step-container">
	<div class="demo_top">
	  <mu-stepper :active-step="activeStep">
	    <mu-step>
	      <mu-step-label>
	      </mu-step-label>
	    </mu-step>
	    <mu-step>
	      <mu-step-label>
	      </mu-step-label>
	    </mu-step>
	    <mu-step>
	      <mu-step-label>
	      </mu-step-label>
	    </mu-step>
	  </mu-stepper>
	</div>
	
	

	<!-- 表单 -->
	<div class="form box" v-show="activeStep == 0">
		<form @submit.prevent="onSubmit">
			<div class="register_box">
				<div class="username_box">
					<div class="item">公司简称:</div>
					<div class="item">
						<input type="text" placeholder="公司简称">
					</div>
				</div>

				<div class="username_box">
					<div class="item">公司全称:</div>
					<div class="item">
						<input type="text" placeholder="公司全称">
					</div>
				</div>
				<div class="khr"></div>
				<div class="username_box">
					<div class="item">公司网址:</div>
					<div class="item">
						<input type="text" placeholder="公司网址">
					</div>
				</div>

				<div class="username_box">
					<div class="item">公司规模:</div>
					<div class="item">
						<input type="text" placeholder="公司网址">
					</div>
				</div>

				<div class="username_box">
					<div class="item">行业领域:</div>
					<div class="item">
						<input type="text" placeholder="行业领域">
					</div>
				</div>

				<div class="username_box">
					<div class="item">成立时间:</div>
					<div class="item">
						<input type="text" placeholder="成立时间">
					</div>
				</div>

				<div class="username_box">
					<div class="item">所在城市:</div>
					<div class="item">
						<input type="text" placeholder="所在城市">
					</div>
				</div>
			</div>

		</form>
	</div>

	<div class="form box" v-show="activeStep == 1">
		<form @submit.prevent="onSubmit">
			<div class="register_box">
				<div class="username_box">
					<div class="item">联系人姓名:</div>
					<div class="item">
						<input type="text" placeholder="联系人姓名">
					</div>
				</div>

				<div class="username_box">
					<div class="item">联系人职位:</div>
					<div class="item">
						<input type="text" placeholder="联系人职位">
					</div>
				</div>
				<div class="username_box">
					<div class="item">联系人手机:</div>
					<div class="item">
						<input type="text" placeholder="联系人手机">
					</div>
				</div>

				<div class="username_box">
					<div class="item">联系人邮箱:</div>
					<div class="item">
						<input type="text" placeholder="联系人邮箱">
					</div>
				</div>
				
				<!-- <div class="khr"></div> -->
				<!-- <div class="new_mobile_box">
					<div class="item">绑定手机:</div>
					<div class="item">
						<input type="text" class="new_mobile" name="new_phone" placeholder="请输入新手机号码" v-model="form_data.new_phone" number>
					</div>						
				</div>

				<div class="username_box">
					<div class="item">设置密码:</div>
					<div class="item">
						<input type="password" name="password1" placeholder="请输入您的密码" v-model="form_data.password1">
					</div>
				</div> -->


			</div>

		</form>
	</div>



























  <div class="demo-step-content">
    <p v-if="finished">
      都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
    </p>
    <template v-if="!finished">
      <p>
        {{content}}
      </p>
      <div>
        <mu-button flat class="demo-step-button" :disabled="activeStep === 0" @click="handlePrev"> 上一步 </mu-button>
        <mu-button class="demo-step-button" color="primary" @click="handleNext"> {{activeStep === 2 ? '完成' : '下一步'}} </mu-button>
      </div>
    </template>
  </div>
</div>

</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	data() {
		return {
			activeStep: 0,
			form_data:{},
		}
	},
	computed: {
    content () {
      let message = ''
      return message
    },
    finished () {
      return this.activeStep > 2;
    }
  },
	created() {
		this.get_data()
	},

	methods: {
		get_data(){},
		handleNext () {
      this.activeStep++;
    },
    handlePrev () {
      this.activeStep--;
    },
    reset () {
      this.activeStep = 0;
    }
	},
	components: {k_header}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.created_case{
	background: #f5f5f5;
}
.demo-step-container{
	.demo_top{
		padding: 4px 24px;
	}
}
.demo-step-content{
	margin-top: 30px;
}

.register_box {
	background: #fff;
	input {
		height: 100%;
		width: 100%;
		font-size: 14px;
	}
	.username_box {
		// border-top: 1px solid #eee;
	}
	.username_box, .new_mobile_box, .code_box {
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
				flex: 0 0 100px;
				width: 100px;
				font-size: 15px;
				text-indent: 6px;
				// color: #666;
				letter-spacing: 1px;
			}
		}
		.get_code {
			padding: 0 12px;
			border-left: 1px solid #eee;
			font-size: 13px;
		}
		.on{
			color:#333;
		}
		.off {
			color: #ccc;
		}
	}

}
</style>