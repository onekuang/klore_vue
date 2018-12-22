<template>
<div class="load_more_wrapper">
	<div class="more_load" v-show="status" @click="tap_load">
		{{load_text}}<i class="iconfont icon-gengduo"></i>
	</div>
	<div class="more_load" v-show="!status">
		{{none_text}}
	</div>
</div>
</template>

<script>
export default {
	name:"load_more",
	props: {
		status: {
			type: Boolean,
			default: true
		},
		load_text: {
			type: String,
			default: '点击加载更多'
		},
		none_text: {
			type: String,
			default: '没有更多数据了~'
		}
	},
	data() {
		return {

		}
	},
	methods: {
		tap_load() {
			this.$emit('tap_load')
		}
	}
}
</script>

<style scoped lang="less">
@import url('../../../common/less/index.less');
.more_load{
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  text-align: center;
  color: #888;
  i {
    font-size: 8px;
    color: #ccc;
    margin-left: 10px;
  }
}
</style>
