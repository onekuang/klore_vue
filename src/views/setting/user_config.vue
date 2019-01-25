<template>
<div class="userconfig_wrapper page fff">
	<!-- <k_header title="通知设置" /> -->
	<div class="user_config">
		<mu-list>
		    <mu-sub-header>消息通知设置</mu-sub-header>
		    <mu-list-item button @click="basemsg = !basemsg">
		      <mu-list-item-title>
		        接受信息通知
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="basemsg" readonly color="#F729A6" ></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>

		    <mu-list-item button @click="incomemsg = !incomemsg">
		      <mu-list-item-title>
		        收益提醒
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="incomemsg" readonly color="#F729A6"></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>
		    <mu-list-item button @click="sharemsg = !sharemsg">
		      <mu-list-item-title>
		        新粉丝提醒
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="sharemsg" readonly color="#F729A6"></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>
		  </mu-list>
	</div>



</div>
</template>

<script>
import k_header from '@/components/base/header_tab/header_tab'
export default {
	name:"userconfig",
	data() {
		return {
			basemsg: false,
      incomemsg: false,
      sharemsg: false,
		}
	},
	created() {
		this.change_config()
	},
	watch: {
		basemsg : function() {
			this.change_config(1)
		},
		incomemsg : function() {
			this.change_config(1)
		},
		sharemsg : function() {
			this.change_config(1)
		},
	},
	methods: {
		change_config(type) {
			let data = {}
			if(type) {
				data = {
					basemsg: this.basemsg ? 1 : 0,
					incomemsg: this.incomemsg ? 1 : 0,
					sharemsg: this.sharemsg ? 1 : 0,
				}
			}
			this.axios.post(this.$api.change_config,data)
			.then(res => {
				this.$toast(res.msg)
				this.basemsg = !!res.data.basemsg
				this.incomemsg = !!res.data.incomemsg
				this.sharemsg = !!res.data.sharemsg
			})
		}
	},
	components: {
		k_header
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.user_config{
	padding: 8px;
	/deep/ .mu-item{
		padding: 0 8px;
	}
	/deep/ .mu-switch-ripple-wrapper {
		display: none;
	}
}
</style>