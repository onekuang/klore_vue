<template>
<div class="team page">

<mu-container>
  <mu-tabs :value.sync="active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  full-width>
    <mu-tab><span class="tab_title">全部粉丝</span></mu-tab>
    <mu-tab><span class="tab_title">直属粉丝</span></mu-tab>
  </mu-tabs>

  <!-- 左边盒子 -->
  <div class="team_box" v-if="active === 0">
    <div class="all_team">
    	<div class="box">
    		<div class="item" v-for="item in l_list">
    			<div class="img">
    				<img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132" width="100%" class="radius">
    			</div>
    			<div class="info">
    				<div class="nickname">
    					<div class="user_lv">
    						<span class="icon"><i class="iconfont icon-crownfill"></i></span>
    						<span class="lv_name">超级会员</span>
    						<!-- <img src="./img/lv.png" height="24" width="80"> -->
    					</div>
    					木有昵称
    				</div>
    				<div class="desc">
    					<div class="mobile">{{13421936693 | phome}} <span class="time">2020-11-12</span></div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="more_box">
      <Load_more @tap_load="all_tap_load" :status=all_load_status />
    </div>


  </div>

  <!-- 右边盒子 -->
  <div class="team_box" v-if="active === 1">
    <div class="dir_team">
    	<div class="box">
    		<div class="item" v-for="item in r_list">
    			<div class="img">
    				<img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132" width="100%" class="radius">
    			</div>
    			<div class="info">
    				<div class="nickname">
    					<div class="user_lv">
    						<span class="icon"><i class="iconfont icon-crownfill"></i></span>
    						<span class="lv_name">超级会员</span>
    						<!-- <img src="./img/lv.png" height="24" width="80"> -->
    					</div>
    					木有昵称
    				</div>
    				<div class="desc">
    					<div class="mobile">{{13421936693 | phome}} <span class="time">2020-11-12</span></div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>

    <div class="more_box">
      <Load_more @tap_load="dir_tap_load" :status=dir_load_status />
    </div>

  </div>

</mu-container>




</div>
</template>

<script>
export default {
	name:"team",
	data() {
		return {
			l_list: [],
			r_list: [{},{},{},{},{},{},{},{},{},{},],
			active: 0,
      all_load_status: true,      //加载更多状态1
      dir_load_status: true,      //加载更多状态2
		}
	},
  methods: {
    all_tap_load() {
      this.all_load_status = false
    },
    dir_tap_load() {
      this.dir_load_status = false
    }
  },
	filters: {
		phome: function(val) {
			let str = val.toString();
			let a = str.substr(0 , 3);
			let b = str.substr(-4);
			return a + '****' +b
		},
	  time: function (input) {
	    var d       = new Date(input)
	    var year    = d.getFullYear()
	    var month   = d.getMonth()    + 1
	    var day     = d.getDate()     < 10 ? '0' + d.getDate()    : '' + d.getDate()
	    var hour    = d.getHours()    < 10 ? '0' + d.getHours()   : '' + d.getHours()
	    var minutes = d.getMinutes()  < 10 ? '0' + d.getMinutes() : '' + d.getMinutes()
	    var seconds = d.getSeconds()  < 10 ? '0' + d.getSeconds() : '' + d.getSeconds()
	
	    return year + '-' 
	      + month   + '-' 
	      + day     + ' ' 
	      + hour    + ':' 
	      + minutes + ':' 
	      + seconds;
	  }
	},
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.team{
	// .tab_title{
	// 	color: #333;
	// 	font-size: 15px;
	// }
}
.team_box {
  padding: 4px;
  // .khr_bg();
  .item{
  	display: flex;
  	background: #fff;
  	margin-bottom: 4px;
  	border-radius: 2px;
  	padding: 6px 0 0px 6px;
    border-bottom: 1px solid #f5f5f5;
  	.img{
  		flex: 0 0 60px;
  		width: 60px;
  	}
  	.info{
  		flex: 1;
  		margin-left: 12px;
  		.nickname{
  			color: #333;
  			font-size: 12px;
  			height: 30px;
  			font-family: fantasy;
  			line-height: 30px;
  			.user_lv{
  				display: inline-block;
  				font-size: 12px;
  				z-index: 3;
  				margin-right: 5px;
  				background: #3E3D3D;
  				color: #FFE5B2;
  				padding: 0 8px 0 0;
  				height: 20px;
  				line-height: 20px;
  				border-radius: 12px;
  				.icon{
  					display: inline-block;
  					height: 20px;
  					width: 20px;
  					line-height: 20px;
  					text-align: center;
  					background: #000;
  					border-radius: 50px;
  					margin-right: 6px;
  					background:linear-gradient( #666, #000);
  					i{
  						font-size: 12px;
  					}
  				}						
  				.lv_name{
  					display: inline-block;							
  					
  				}
  			}
  		}
  		.desc{
  			margin-top: 6px;
  			.mobile{
  				color: #777;
  				font-size: 12px;
  				.time{
  					color: #555;
  					font-size: 13px;
  					margin-left: 18px;
  				}
  			}
  		}
  	}
  }
  
}
</style>
