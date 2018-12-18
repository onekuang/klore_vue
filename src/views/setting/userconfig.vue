<template>
<div class="userconfig_wrapper ab_full">
<BScroll 	class="box_wrapper" ref="scroll" >
<div>
	
	<div class="user_config">
		<mu-divider></mu-divider>
		<mu-list>
		    <mu-sub-header>声音开启设置</mu-sub-header>
		    <mu-list-item button :ripple="false" @click="events = !events">
		      <mu-list-item-title>
		        事件和提醒
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="events" readonly></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>
		    <mu-list-item button :ripple="false" @click="calls = !calls">
		      <mu-list-item-title>
		        电话
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="calls" readonly></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>
		    <mu-list-item button :ripple="false" @click="messages = !messages">
		      <mu-list-item-title>
		        信息
		      </mu-list-item-title>
		      <mu-list-item-action>
		        <mu-switch v-model="messages" readonly></mu-switch>
		      </mu-list-item-action>
		    </mu-list-item>
		  </mu-list>
		<mu-list>
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
		</mu-list>
	</div>



</div></BScroll>
</div>
</template>

<script>
import BScroll from '@/components/base/scroll/scroll'
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
	components: {
		BScroll
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
