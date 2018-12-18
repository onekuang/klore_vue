<template>

<div class="k_date_box" v-show="date_show">
	<mu-container>
	  <mu-flex wrap="wrap">
	    <mu-paper :z-depth="1" class="month_box">
	      <mu-date-picker :type=type :date.sync="month" :max-date=max_date></mu-date-picker>
	    </mu-paper>
	  </mu-flex>
	</mu-container>
	<div class="marke" @click="toggle_date"></div>
</div>


</template>

<script>
export default {
	name:"k_date",
	props: {
		type: {
			type: String,
			default: 'date' // dete || month || year
		}
	},
	data() {
		return {
			max_date: new Date(),
			month: undefined,
			date_show: false,
			date_val: '',
		}
	},
	methods: {
		toggle_date() {			
			if(this.date_show && this.month != undefined) {
				this.date_val = this.filter_month(this.month);  
				console.log('获取的时间为 => ' + this.date_val)
				this.$emit('onDate',this.date_val)
			}
			this.date_show = !this.date_show
		},
		filter_month(date) {
			var d = new Date(date);  
			return d.getFullYear() 
				+ '-' 
				+ (d.getMonth() + 1) 
				+ '-' 
				+ d.getDate() 
				// + ' ' 
				// + d.getHours() 
				// + ':' 
				// + d.getMinutes() 
				// + ':' 
				// + d.getSeconds(); 
		},
	}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
</style>
