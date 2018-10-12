<template>
   <div class="cartcontrol">
   <transition name="move">
    <div class="cart-decrease"
     v-show="food.count>0"
     @click.stop.prevent="decreaseCart">
     <span class="inner fa fa-minus-circle" :style="{color: color}"></span>
    </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add fa fa-plus-circle" @click.stop.prevent="addCart" :style="{color: color}"></div>
   </div>
</template>

<script>
import Vue from 'vue'
import {mapMutations} from 'vuex'
  export default {
    props: {
      food: {
        type: Object
      },
      index: {
        type: Number
      },
      // 是否开启自减时的最小数量
      isMin: {
        type: Boolean,
        default: false
      },
      // 最小数量
      minNum: {
        type:Number,
        default:1
      },
      // 按钮颜色
      color: {
        type: String,
        default: '#00a0dc'
      }
    },
    methods: {
      // addCart(event) {
      //   if (!event._constructed) {
      //     return
      //   }
      //   if (!this.food.count) {
      //     Vue.set(this.food, 'count', 1)
      //   } else {
      //     this.food.count++
      //   }
      // },
      // decreaseCart(e) {
      //   if (!e._constructed) {
      //     return
      //   }
      //   if (this.food.count) {
      //     this.food.count--
      //     // 如果数量为0时,派发事件
      //     if(this.food.count == 0 ){
      //       this.$emit('foodEmpty', this.index)
      //     }
      //   }
      // },
      addCart(event) {
        if (!event._constructed) {
          return
        }
        this.ADD_ONE_GOODS(this.index)
      },
      decreaseCart(e) {
        if (!e._constructed) {
          return
        }
        if(this.isMin && this.food.count == this.minNum){
          this.$toast(`数量不能小于${this.minNum}!`)
          return
        }
        this.DECREASE_ONE_GOODS(this.index)
      },
      ...mapMutations({
        ADD_ONE_GOODS: 'ADD_ONE_GOODS',
        DECREASE_ONE_GOODS: 'DECREASE_ONE_GOODS',
      })
    }
  }
</script>

<style lang="less">
// 加减号按钮颜色
@btn_color: #00a0dc;
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      padding: 6px;
      opacity: 1;
      transform: translate3D(0,0,0);
      .inner{
        display: inline-block;
        line-height: 26px;
        font-size: 20px;
        color: @btn_color;
        transition: all .4s linear;
      }
      &.move-enter-active, &.move-leave-active{
        transition:  all .4s linear;
      }
      &.move-enter, &.move-leave-active{
        opacity: 0;
        transform: translate3d(24px, 0, 0);
        .inner{
          transform: rotate(180deg);
        }
      }
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    .cart-add {
      display: inline-block;
      padding: 6px;
      line-height: 26px;
      font-size: 20px;
      color: @btn_color;
    }
  }
</style>
