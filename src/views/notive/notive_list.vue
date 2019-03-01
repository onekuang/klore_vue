<template>
<div class="notive_list page app_head">

	<k_header title="通知信息" />

<div>

<div class="notive_wrapper">
	<div class="notive_box">
		<div class="item" v-for="i in 1">
			<div class="top">
				<div class="img">
					<!-- <img src="https://lipstick.xsygood.com/bsck_img/sqrz.png" width="100%"> -->
					<img v-holder="'img=100px200?&bg=C7E1FF&text=100px200'">
				</div>
			</div>
			<div class="bottom">
				<p class="p1">白手创客1.0上线啦</p>
				<p class="p2">2019-11-11 12:13:14</p>
			</div>
		</div>
	</div>
</div>


</div>
</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	name:"notive_list",
	data() {
		return {

		}
	},
	components: {
		k_header
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.notive_wrapper{
	padding: 6px;
	.notive_box{
		.item{
			margin-bottom: 12px;
			.bottom{
				.p1{
					font-size: 14px;
					height: 30px;
					line-height: 30px;
					color: #333;
					.ell();
				}
				.p2{
					font-size: 12px;
					color: #999;
				}
			}
		}
		
	}
}
</style>
