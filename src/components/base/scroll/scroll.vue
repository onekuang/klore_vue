<template>
   <div ref="wrapper" :class="{'scroll-wrap': pullup||pulldown }">  
       <div>  
         <div v-show="pulldown && dragTip.showLoding" class="pulldown"  
         :style="`margin-top:${dragTip.translate}px`">  
           <div class="clear">  
             <div class="fl"><img width="30" src="./loading.gif"></div>  
             <div class="fl">{{dragTip.text}}</div>  
           </div>  
         </div>  
         <slot></slot>  
         <div v-if="pullup" class="pullup">  
           <div class="clear"v-if="!isDone">  
             <div class="uplading">上拉加载...</div>
             <div class="center"><img width="30" src="./loading.gif"></div>  
           </div>  
           <div class="list-donetip" v-if="!isLoading && isDone">  
               <slot name="doneTip">没有数据了</slot>  
           </div>  
         </div>  
       </div>  
     </div> 
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    // 是否开启横向滚动
    scrollX:{
      type:Boolean,
      default:false
    },
    // 是否开启回弹动画效果
    bounce: {
      type: Boolean,
      default: true
    },
    //是否派发滚动到底部的事件，用于上拉加载    
    pullup:{  
      type:Boolean,  
      default:false  
    },    
    // 是否派发顶部下拉的事件，用于下拉刷新    
    pulldown:{  
      type:Boolean,  
      default:false  
    },   
    // 是否派发列表滚动开始的事件    
    deforeScroll:{  
      type:Boolean,  
      default:false  
    },  
    // 当数据更新后,刷新scroll延时    
    refreshDelay:{  
      type:Number,  
      default:20  
    } 
  },
  data(){  
    return{  
      dragTip:{  
        text:"下拉刷新",  
        translate:-60,  
        showLoding:false  
      },  
      isLoading: false,  
      isDone: false,  
    }  
  }, 
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX:this.scrollX,
        bounce: this.bounce,
      })
      if (this.listenScroll) {
        let me = this // vue实例
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }
      // 是否派发滚动到底部事件，用于上拉加载  
      if(this.pullup){  
        this.scroll.on('scrollEnd',() => {  
          if(this.scroll.y <= (this.scroll.maxScrollY)){  
            //所有数据加载完毕后  
            this.$on('infinitescroll.loadedDone', () => {  
                this.isLoading = false;  
                this.isDone = true;
            });  
            //单次请求数据加载完毕后  
            this.$on('infinitescroll.finishLoad', (ret) => {  
                this.isLoading = false;
                this.scrollTo(0, this.scroll.maxScrollY)
            });  
            //重新初始化  
            this.$on('infinitescroll.reInit', () => {  
                this.isLoading = false;  
                this.isDone = false;  
            });  
            this.$emit('scrollToEnd')  
          }  
        })  
      }  
      // 是否派发顶部下拉事件，用于下拉刷新  
      if(this.pulldown){  
        this.scroll.on('scroll',(pos) => {  
          //显示下拉刷新loding  
          this.dragTip.showLoding = true  
          //隐藏底部加载loding  
          this.isLoading = false  
          if(pos.y > 40){  
            this.dragTip.text = "释放刷新"  
          }  
        })  
        this.scroll.on('touchEnd',(pos) => {  
          if(pos.y > 40){  
            this.dragTip.translate = 0  
            this.dragTip.text = "刷新中..."  
            //重新初始化  
            this.$on('pullrefresh.finishLoad', this.resetParams);  
            this.$emit('pulldown',pos)  
          }  
        })  
      }
      // 是否派发列表滚动开始的事件  
      if(this.beforeScroll){  
        this.scroll.on('beforeScrollStart',() => {  
          this.$emit('beforeScroll')  
        })  
      }  
    },
    resetParams(){  
      setTimeout(() => {  
        this.isLoading = false;  
        this.isDone = false;  
        this.dragTip = {  
          text:"下拉刷新",  
          translate:-70,  
          showLoding:false  
        }  
      },600)  
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data(){  
      setTimeout(() => {  
        this.refresh()  
        new BScroll(this.$refs.wrapper,{  
          probeType:this.probeType,  
          click:this.click,  
          scrollX:this.scrollX  
        })  
      },this.refreshDelay)  
    }
  }
}
</script>
<style scoped lang="less">
.scroll-wrap{
  height:100%;
  overflow:hidden;
}
/* 下拉刷新 */  
.pulldown,.pullup{ 
    width:100%;  
    height:70px;  
    position:relative;  
    div.clear{  
      text-align: center;
      padding:10px 0px;  
      font-size:14px;  
      position:absolute;  
      left:50%; 
      top:5px; 
      transform:translate(-50%,0);
    }
  // &.pulldown{
  //   position: absolute;
  // }
}
.list-donetip{  
  text-align:center;
  line-height:50px;
  font-size:14px; 
}
.uplading{
  margin-bottom: 8px;
  color: #999;
}
.center{
  text-align: center;
}
</style>