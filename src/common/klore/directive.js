import Vue from 'vue';
 
/**
 * @param el 绑定的DOM
 * @param binding 自定义指令中的binding对象
 * @param type 绑定的事件类型
 */
// 构造函数
function vueTouch(el,binding,type){
  var _this=this;
  this.obj=el; 
  this.binding=binding;
  this.touchType=type;
  this.vueTouches={x:0,y:0};//触屏坐标
  this.firstTouchTime = 0;
  /**
   * =========================================
   * 事件绑定有两种方式
   * @example
   *  1. v-tap="showDialog" 绑定一个方法对象
   *  2. v-tap="{fn:click123, param1:1, param2:2, param3:{aaa:'123'} ...}"
   *      绑定一个JSON字面量，fn是执行的方法，后边的是需要传递的参数
   * 事件回调参数
   * @param 第一个参数是event，事件对象
   * @param 第二个参数是 binding.value，也就是v-tap=""双引号中的部分（如示例2，第二个参数就是 {fn:click123, param1:1, param2:2, param3:{aaa:'123'} ...}）
   * =========================================
   */
  this.vueCallBack=typeof(binding.value)=="object"?binding.value.fn:binding.value;
  // 事件回调
  this.obj.addEventListener("touchstart",function(e){
    _this.start(e);
  },false);
  this.obj.addEventListener("touchend",function(e){
    _this.end(e);
  },false);
  this.obj.addEventListener("touchmove",function(e){
    _this.move(e);
  },false);
};
vueTouch.prototype={
  //监听touchstart事件
  start:function(e){
    this.vueMoves=false;
    this.vueLeave=false;
    this.longTouch=false;
    // 获取开始点击位置和时间
    this.vueTouches={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY};
    this.firstTouchTime = e.timeStamp;
  // 判断长按操作
    this.time=setTimeout(function(){
      if(!this.vueLeave && !this.vueMoves){
        this.touchType=="longtap"&&this.vueCallBack(this.binding.value,e);
        this.longTouch=true;
      };
    }.bind(this),1000);
  },
  //监听touchend事件
  end:function(e){
    // 计算位移和时差
    var disX=e.changedTouches[0].pageX-this.vueTouches.x;
    var disY=e.changedTouches[0].pageY-this.vueTouches.y;
    let _timeDis = e.timeStamp - this.firstTouchTime;
    clearTimeout(this.time);
    // 判断滑动事件
    if(Math.abs(disX)>10||Math.abs(disY)>100){
      this.touchType=="swipe"&&this.vueCallBack(this.binding.value,e);
      if(Math.abs(disX)>Math.abs(disY)){
        if(disX>10){
          this.touchType=="swiperight"&&this.vueCallBack(this.binding.value,e);//右滑
        };
        if(disX<-10){
          this.touchType=="swipeleft"&&this.vueCallBack(this.binding.value,e);//左滑
        };
      }else{
        if(disY>10){
          this.touchType=="swipedown"&&this.vueCallBack(this.binding.value,e);//下滑
        };
        if(disY<-10){
          this.touchType=="swipeup"&&this.vueCallBack(this.binding.value,e);//上滑
        };
      };
    }else{
      // 点击事件
      if(!this.longTouch && !this.vueMoves){
        this.touchType=="tap"&&this.vueCallBack(this.binding.value,e);
      };
    };
  },
  // 监听touchmove事件
  move:function(e){
    this.vueMoves=true;
  }
};
Vue.directive("tap",{//点击事件
  bind:function(el,binding){
    new vueTouch(el,binding,"tap");
  }
});
Vue.directive("swipe",{//滑动事件
  bind:function(el,binding){
    new vueTouch(el,binding,"swipe");
  }
});
Vue.directive("swipeleft",{//左滑事件
  bind:function(el,binding){
    new vueTouch(el,binding,"swipeleft");
  }
});
Vue.directive("swiperight",{//右滑事件
  bind:function(el,binding){
    new vueTouch(el,binding,"swiperight");
  }
});
Vue.directive("swipedown",{//下滑事件
  bind:function(el,binding){
    new vueTouch(el,binding,"swipedown");
  }
});
Vue.directive("swipeup",{//上滑事件
  bind:function(el,binding){
    new vueTouch(el,binding,"swipeup");
  }
});
Vue.directive("longtap",{//长按事件
  bind:function(el,binding){
    new vueTouch(el,binding,"longtap");
  }
});
// v-tap="{fn:vuetouch,name:'参数'}"





// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})