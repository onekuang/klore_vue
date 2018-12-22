<template>
<div class="issue page">
<!-- 常见问题 -->
<mu-container>
  <mu-expansion-panel :expand="panel === 'panel'+ index " @change="toggle('panel' + index)" v-for="(iten,index) in 15">
    <div slot="header">issue {{index}}</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ab quaerat magnam sequi inventore quam quo. Assumenda quibusdam eum consectetur atque quaerat fuga, consequuntur culpa distinctio. Odit veniam ea, quis.
  </mu-expansion-panel>
</mu-container>
</div>
</template>

<script>
export default {
	name:"issue",
	data() {
		return {
			panel: ''
		}
	},
	methods: {
    toggle (panel) {
      this.panel = panel === this.panel ? '' : panel;
    }
  }
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
