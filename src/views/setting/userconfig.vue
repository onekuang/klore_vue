<template>
<div class="userconfig_wrapper page app_head">
	<k_header title="系统设置" />
	<div class="user_config">
		<mu-list>
		    <mu-sub-header>通知设置</mu-sub-header>
		    <mu-list-item button :ripple="false" @click="events = !events">
		      <mu-list-item-title>
		        通知提醒
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="events" readonly></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>
		    <mu-list-item button :ripple="false" @click="calls = !calls">
		      <mu-list-item-title>
		        短信通知提醒
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="calls" readonly></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>
		    <!-- <mu-list-item button :ripple="false" @click="messages = !messages">
		      <mu-list-item-title>
		        信息
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="messages" readonly></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item> -->
		  </mu-list>
		<!-- <mu-list>
		  <mu-sub-header>通知设置</mu-sub-header>
		  <mu-list-item button :ripple="false" @click="notifications = !notifications">
		    <mu-list-item-action>
		      <mu-checkbox v-model="notifications" readonly></mu-checkbox>
		    </mu-list-item-action>
		    <mu-list-item-title>
		      通知
		    </mu-list-item-title>
		  </mu-list-item>
		  <mu-list-item button :ripple="false" @click="sounds = !sounds">
		    <mu-list-item-action>
		      <mu-checkbox v-model="sounds" readonly></mu-checkbox>
		    </mu-list-item-action>
		    <mu-list-item-title>
		      声音
		    </mu-list-item-title>
		  </mu-list-item>
		  <mu-list-item button :ripple="false" @click="videoSounds = !videoSounds">
		    <mu-list-item-action>
		      <mu-checkbox v-model="videoSounds" readonly></mu-checkbox>
		    </mu-list-item-action>
		    <mu-list-item-title>
		      视频的声音
		    </mu-list-item-title>
		  </mu-list-item>
		</mu-list> -->
	</div>



</div>
</template>

<script>
import k_header from '@/components/app_head/app_head'
export default {
	name:"userconfig",
	data() {
		return {
			events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
		}
	},
	components:{
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
