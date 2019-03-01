<template>
<div class="page fff">

  <div class="top">
    <div class="text">总资产 (CNY)</div>
    <div class="money">
      <span>￥</span>190598.00
    </div>
  </div>
  
  <div class="khr"></div>

  <!-- 折线图 -->
  <div style="width:100%; height:350px;margin-top: 50px;">
    <ve-line 
      :data="chartData" 
      :settings="chartSettings" 
      :colors="colors"
      :loading=false
    ></ve-line>
  </div>

</div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import 'v-charts/lib/style.css'
export default {
  name:'jiangjinchi',
  data() {
    this.chartSettings = {
      xAxisType: 'time',
      area: true,
      yAxisType: ['KMB'],
      labelMap: {val: "资金池"},
      legendName: {'资金池': '资金池曲线图'}
    }
    this.colors = ['#FF9152']
    return {        
      chartData: {     
        columns: ['time', 'val'],
        rows: [
          { 'time': '2019-01-01', 'val': 688880,},
          { 'time': '2019-01-02', 'val': 899030,},
          { 'time': '2019-01-03', 'val': 1102340,},
          { 'time': '2019-01-04', 'val': 1368490,},
          { 'time': '2019-01-05', 'val': 1768430,},
          { 'time': '2019-01-06', 'val': 1905980,}
        ],
        grid :{
          top:'50',
          left: '1%',
          right: '3%',
          bottom:'5%',
          containLabel: true
        }
      }
    }
  },
  created(){
  },
  mounted() {
  },
  methods: {
  },
  components: {VeLine},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.page{
  height: 100vh;
}
.top{
  background: url(https://lipstick.xsygood.com/bsck_img/usercenter_bg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 150px;
  width: 97%;
  margin: 12px auto;
  border-radius: 6px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .2);
  position: relative;
  padding-left: 16px;
  .text{
    padding-top: 30px;
    font-size: 12px;
    color: #fff;
  }
  .money{
    margin-top: 20px;
    font-size: 35px;
    font-weight: 900;
    color: #fff;
    letter-spacing: 2px;
    span{
      font-size: 24px;
    }
  }
}
</style>