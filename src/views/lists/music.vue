<template>
<div class="music page">

<div class="player">
	<div class="normal-player">
		<!-- 模糊层 -->
		<div class="background">
		  <img width="100%" height="100%" src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=8e88f0ba9425bc313f5009ca3fb6e6d4/6609c93d70cf3bc73c40e898dc00baa1cd112a05.jpg">
		</div>

		<!-- 顶部 -->
		<div class="top">
		  <div class="back" @click="back">
		    <i class="iconfont icon-icon-"></i>
		  </div>
		  <h1 class="title">稻香</h1>
		  <h2 class="subtitle">周杰伦</h2>
		</div>

		<!-- 中间的CD部分 -->
		<div class="middle">
		  <div class="middle-l" ref='middleL'>
		    <div class="cd-wrapper" ref="cdWrapper">
		      <!-- <div class="cd" :class="cdCls"> -->
		      <div class="cd" :class=cdCls>
		        <img class="image" src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=8e88f0ba9425bc313f5009ca3fb6e6d4/6609c93d70cf3bc73c40e898dc00baa1cd112a05.jpg">
		      </div>
		    </div>
		    <div class="playing-lyric-wrapper">
		      <!-- <div class="playing-lyric">playingLyric</div> -->
		    </div>
		  </div>
		</div>


		<!-- 操作控件 -->
		<div class="bottom">
		  <!-- <div class="dot-wrapper">
		    <span class="dot" :class="{'active':currentShow === 'cd'}"></span>
		    <span class="dot" :class="{'active':currentShow === 'lyric'}"></span>
		  </div> -->
		  <!-- 歌曲进度条 -->
		  <div class="progress-wrapper">
		    <span class="time time-l">00:00</span>
		    <div class="progress-bar-wrapper">
		    	<progress-bar 
		    	  :percent=percent
		    	  >
		    	</progress-bar>
		    </div>
		    <span class="time time-r">03:21</span>
		  </div>

		  <div class="operators">
		    <div class="icon i-left">
		      <i class="iconfont icon-shangyishou"></i>
		    </div>

		    <!-- <div class="icon i-left">
		      <i class="iconfont icon-icon--"></i>
		    </div> -->

		    <div class="icon i-center">
          <i class="iconfont icon-bofang1" 
            @click="play()" 
            v-if=!playing>  
          </i>
		      <i class="iconfont icon-bofang2" 
            v-else
            @click="pause()"
          ></i>
		    </div>
		    
		    <!-- <div class="icon i-right">
		      <i class="iconfont icon-icon--"></i>
		    </div> -->

		    <div class="icon i-right">
		      <i class="iconfont icon-xiayishou"></i>
		    </div>
		  </div>
		</div>
	</div>
</div>


<audio 
  id="music"
  ref="music" 
  :src="mp3"
  controls="controls"
  loop="true" hidden=""
></audio>


</div>
</template>

<script>
import ProgressBar from '@/components/base/progress-bar/progress-bar.vue'
export default {
	name:'music',
	data() {
		return {
      playing: false,
			percent:3,
      mp3:"http://fs.open.kugou.com/c174de7c0cc00dd4b41fbde8b8918edb/5c78bd1e/G001/M0B/12/19/QQ0DAFS43jOATIosADaWAFwMkd8070.mp3",
		}
	},
	created() {
		this.get_data()
	},
  computed: {
    cdCls() {
      return this.playing ? 'play' : 'play pause'
    },
  },
	methods: {
		get_data(){},
    play() {
      this.playing = true
      this.$refs.music.play()
    },
    pause() {
      this.playing = false
      this.$refs.music.pause()
    },
		back() {
      window.history.back()
    },
	},
	components: {ProgressBar}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');
.player{
  .normal-player{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: #222;
    .background{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(20px);
    }
    .top{
      position: relative;
      margin-bottom: 25px;
      .back{
      	position: absolute;
        top: 6px;
        left: 6px;
        z-index: 50;
        .icon-back{
          display: block;
          padding: 9px;
          font-size: 14px;
          color: green;
          transform: rotate(-90deg);
        }
      }
      .title{
        width: 70%;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
        .ell();
        font-size: 16px;
        color: #fff;
      }
      .subtitle{
        line-height: 20px;
        text-align: center;
        font-size: 13px;
        color: #fff;
      }
    }
    .middle{
      position: fixed;
      width: 100%;
      top: 80px;
      bottom: 170px;
      white-space: nowrap;
      font-size: 0;
      .middle-l{
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 80%;
        .cd-wrapper{
          position: absolute;
          left: 10%;
          top: 0;
          width: 80%;
          height: 100%;
          .cd{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 10px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            &.play{
              animation: rotate 20s linear infinite;
            }
            &.pause{
              animation-play-state: paused;
            }
            .image{
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
				}
        .playing-lyric-wrapper{
          width: 80%;
          margin: 30px auto 0 auto;
          overflow: hidden;
          text-align: center;
          .playing-lyric{
            height: 20px;
            line-height: 20px;
            font-size: 13px;
            color: #f55;
          }
        }
      }
      .middle-r{
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .lyric-wrapper{
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-align: center;
          .text{
            line-height: 32px;
            color: #f55;
            font-size: 13px;
            &.current{
              color: #fff;
            }
          }
        }
      }
    }
    .bottom{
      position: absolute;
      bottom: 50px;
      width: 100%;
      .dot-wrapper{
        text-align: center;
        font-size: 0;
        .dot{
          display: inline-block;
          vertical-align: middle;
          margin: 0 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f55;
          &.active{
            width: 20px;
            border-radius: 5px;
            background: #f00;
          }
        }
      }
      .progress-wrapper{
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0px auto;
        padding: 10px 0;
        .time{
          color: #fff;
          font-size: 10px;
          flex: 0 0 30px;
          line-height: 30px;
          width: 30px;
          &.time-l{
            text-align: left;
          }
          &.time-r{
            text-align: right;
          }
        }
        .progress-bar-wrapper{
          flex: 1;
        }
      }
      .operators{
        display: flex;
        align-items: center;
        text-align: center;
        .icon{
          flex: 1;
          color: #FFCD32;
          &.disable{
            color: #FFCD32;
          }
          i{
            font-size: 30px;
          }
        }
        .i-left{
          text-align: right;
        }
        .i-center{
          padding: 0 20px;
          text-align: center;
          i{
            font-size: 40px;
          }
        }
        .i-right{
          text-align: left;
        }
        .icon-favorite{
          color: #888;
        }
      }
    }
    &.normal-enter-active, &.normal-leave-active{
      transition: all 0.4s;
      .top, .bottom{
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
      }
    }
    &.normal-enter, &.normal-leave-to{
      opacity: 0;
      .top{
        transform: translate3d(0, -100px, 0);
      }
      .bottom{
        transform: translate3d(0, 100px, 0);
      }
    }
  }
  .mini-player{
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 180;
    width: 100%;
    height: 60px;
    background: #ccc;
    &.mini-enter-active, &.mini-leave-active{
      transition: all 0.4s;
    }
    &.mini-enter, &.mini-leave-to{
      opacity: 0;
    }
    .icon{
      flex: 0 0 40px;
      width: 40px;
      padding: 0 10px 0 20px;
      img{
        border-radius: 50%;
        &.play{
          animation: rotate 10s linear infinite;
        }
        &.pause{
          animation-play-state: paused;
        }
      }
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name{
        margin-bottom: 2px;
        font-size: 13px;
        color: #fff;
      }
      .desc{
        font-size: 14px;
        color: #fff;
      }
    }
    .control{
      flex: 0 0 30px;
      width: 30px;
      padding: 0 10px;
      .icon-play-mini, .icon-pause-mini, .icon-playlist{
        font-size: 30px;
        color: orange;
      }
      .icon-mini{
        font-size: 32px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
@keyframes rotate{
  0%{
    transform: rotate3d(0, 0, 0, 0)
  }
  100%{
    transform: rotate3d(0, 0, 1, 360deg)
  }
}
</style>