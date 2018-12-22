<template>
<div class="notive_list ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>

<div class="notive_wrapper">
	<div class="notive_box">
		<div class="item" v-for="i in 13">
			<div class="top">
				<div class="img">
					<img src="https://gw.alicdn.com/imgextra/i2/69/O1CN01yo4uzk1CNdoBTmBZl_!!69-0-lubanu.jpg_790x10000Q75.jpg_.webp" width="100%">
				</div>
			</div>
			<div class="bottom">
				<p class="p1 ell">大吉大利,今晚吃鸡</p>
			</div>
		</div>
	</div>
</div>


</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
export default {
	name:"guide",
	data() {
		return {

		}
	},
	components: {
		BScroll
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
					color: #333;
					margin-bottom: 6px;
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
