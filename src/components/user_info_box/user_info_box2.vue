<template>
  <div class="userinfo_wrapper">
  <div class="userinfo_box">
    <!-- <div class="right_icon">
      <router-link to="/setting" tag="span">
        <i class="iconfont icon-shezhi1"></i>
      </router-link>
    </div> -->

    <div class="userinfo">
      <div class="avatar">
        <img src="https://wx.qlogo.cn/mmopen/vi_32/ayib4NCiczMFDqwRpsJQibylxFn76mEEcibkGXyVnmeMrMNoqWVs9XOZyYF2QvaLkPEWAbZcjhSiaPLLQxnX55iclB4A/132" width="70" height="70">
      </div>
      <div class="desc_box">
        <div class="nickname">
          Klore
          <div class="user_lv" v-if="false">
            <span class="icon"><i class="iconfont icon-crownfill"></i></span>
            <span class="lv_name">超级会员</span>
          </div>
          <div class="open_huiyuan" v-else @click="goto">
            <span class="icon"><i class="iconfont icon-crownfill"></i></span>
            <span class="lv_name">升级为会员</span>
          </div>
        </div>
        <div class="desc">
          ID: <span class="span1">12312312312</span> 
        </div>
      </div>
    </div>

    <div class="tag_box">
      <div class="item"><i class="iconfont icon-shoucang-tianchong"></i> 收藏 <span>0</span></div>
      <div class="item"><i class="iconfont icon-jifen"></i> 积分 <span>0</span></div>
      <div class="clearfix"></div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.get_data()
  },
  methods: {
    get_data(){},
    goto() {
      this.$router.push({
        path: `/paymenber`
      })
    }
  },
}
</script>
<style scoped lang="less">
@import url("../../common/less/index.less");
.userinfo_wrapper{
  background: url(https://lipstick.xsygood.com/bsck_img/usercenter_bg.png);
  background-size: 100% 100%;
  padding: 12px 12px 0 12px;
  height: 200px;
  position: relative;
  .userinfo_box{
    padding-top: 20px;
    .right_icon{
      position: absolute;
      right: 0px;
      top: 18px;
      span {
        margin-right: 10px;
      }
      i {
        font-size: 20px;
        color:rgba(255, 255, 255, .5);
      }
    }
    .userinfo{
      display: flex;
      height: 80px;
      .avatar{
        flex: 0 0 80px;
        width: 80px;
        img{
          border-radius: 50%;
          border: 4px solid rgba(0,0,0,.1);
        }
      }
      .desc_box {
        flex: 1;
        // margin-top: 10px;
        .nickname{
          color: #fff;
          font-size: 14px;
          height: 30px;
          // font-family: fantasy;
          line-height: 30px;
          .user_lv{
            font-family: fantasy;
            display: inline-block;
            font-size: 12px;
            z-index: 3;
            margin-left: 5px;
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
          .open_huiyuan{
            font-family: fantasy;
            display: inline-block;
            font-size: 12px;
            z-index: 3;
            margin-left: 5px;
            background: rgba(51,51,51,0.3);
            color: #FFE5B2;
            padding: 0 12px 0 0;
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
          color: #fff;
          font-size: 13px;
          height: 30px;
          margin-top: 8px;
          .span1 {
            letter-spacing: 0px;
            // font-family: Georgia, serif;
          }
          .copy {
            display: inline-block;
            border-radius: 12px;
            // background: rgba(0, 0, 0, .3);
            background: #FFE5B2;
            padding: 0px 6px;
            font-size: 12px;
            margin-left: 10px;
          }
        }
      }
    }
    .tag_box {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0,0,0,.1);
      padding-left: 8px;
      color: #fff;
      font-size: 12px;
      height: 55px;
      line-height: 55px;
      overflow:hidden;
      display: flex;
      padding: 2px 0;
      .item {
        flex: 1;
        text-align: center;
        &:nth-of-type(1) {
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }
        span {
          margin-left: 6px;
        }
      }
    }
    .balance_box {
      height: 50px;
      border-radius: 12px 12px 0 0;
      background: linear-gradient(#4F4F4E,#242424);
      .balance_left{
        margin-left: 20px;
        .balance{
          color: #FFE5B2;
          font-size: 12px;
          height: 25px;
          line-height: 25px;
          span {
            margin-left: 12px;
          }
        }   
        .goto_balance{
          color: #999;
          font-size: 12px;
          height: 25px;
          line-height: 25px;
        }   
      }
      .get_money{
        margin-top: 15px;
        span {
          display: inline-block;
          background: #FFE5B2;
          color: #666;
          padding: 1px 8px;
          border-radius: 6px;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
