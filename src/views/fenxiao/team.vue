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
    				<img :src="$api.base_img + item.avatar" width="100%">
    			</div>
    			<div class="info">
    				<div class="nickname">
    					<div class="user_lv">
    						<span class="icon"><i class="iconfont icon-crownfill"></i></span>
    						<span class="lv_name">{{item.levelname}}</span>
    						<!-- <img src="./img/lv.png" height="24" width="80"> -->
    					</div>
    					{{item.nickname}}
    				</div>
    				<div class="desc">
    					<div class="mobile">{{item.mobile}} <span class="time">{{item.create_time}}</span></div>
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
    				<img :src="$api.base_img + item.avatar" width="100%">
    			</div>
    			<div class="info">
    				<div class="nickname">
    					<div class="user_lv">
    						<span class="icon"><i class="iconfont icon-crownfill"></i></span>
    						<span class="lv_name">{{item.levelname}}</span>
    						<!-- <img src="./img/lv.png" height="24" width="80"> -->
    					</div>
    					{{item.nickname}}
    				</div>
    				<div class="desc">
    					<div class="mobile">{{item.mobile}} <span class="time">{{item.create_time}}</span></div>
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
      l_current_page: 1,
      l_sum_page: 1,
			r_list: [],
      r_current_page: 1,
      r_sum_page: 1,
			active: 0,
      all_load_status: 0,      //加载更多状态1
      dir_load_status: 0,      //加载更多状态2
		}
	},
  created() {
    this.page_init()
    this.page_init(1)
  },
  methods: {
    page_init(type) {
      let state = type
      this.axios.post(this.$api.fans_list,{
        type:type ? type : '',
        // list_rows: 1,
        page: type ? this.r_current_page : this.l_current_page
      })
      .then(res => {
        if(state) {
          this.r_sum_page = res.data.last_page
          if(this.r_current_page > this.r_sum_page){
            this.dir_load_status = 2
            return
          }else{
            let arr = this.r_list
            let dat = res.data.data
            this.dir_load_status = 0
            this.r_list = arr.concat(dat)
          }
          this.r_current_page = parseInt(this.r_current_page) + 1
        }else{     
          this.l_sum_page = res.data.last_page
          if(this.l_current_page > this.l_sum_page){
            this.all_load_status = 2
            return
          }else{
            let arr = this.l_list
            let dat = res.data.data
            this.all_load_status = 0
            this.l_list = arr.concat(dat)
          }
          this.l_current_page = parseInt(this.l_current_page) + 1
        } 
      })
      .catch(res => {
        this.$toast("网络错误")
      })
    },

    all_tap_load() {
      this.all_load_status = 1
      this.page_init()
      console.log('all')
    },
    dir_tap_load() {
      this.dir_load_status = 1
      this.page_init(1)
      console.log('dir')
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
  .khr_bg();
  .item{
  	display: flex;
  	background: #fff;
  	margin-bottom: 4px;
  	border-radius: 6px;
  	padding: 6px 0 0px 6px;
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
