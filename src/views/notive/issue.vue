<template>
<div class="issue page">
<!-- 常见问题 -->
<mu-container>
  <mu-expansion-panel :expand="panel === 'panel'+ index " @change="toggle('panel' + index)" v-for="(item,index) in issue">
    <div slot="header">{{item.name}}</div>
    {{item.content}}
  </mu-expansion-panel>
</mu-container>
</div>
</template>

<script>
export default {
	name:"issue",
	data() {
		return {
			panel: '',
      issue:[],
		}
	},
  created() {
    this.page_init()
  },
	methods: {
    page_init() {
      this.axios.get(this.$api.notice,{
        params: {
          category_id: 2,
        }
      })
      .then(res => {
        this.issue = res.data.data

      })
    },
    toggle (panel) {
      this.panel = panel === this.panel ? '' : panel;
    }
  }
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
