import load_more from './load_more.vue'
import list_null from './null_list.vue'


const Load_more={
    install:function(Vue){
        Vue.component('Load_more',load_more)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

const List_null={
    install:function(Vue){
        Vue.component('List_null',list_null)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};


export { Load_more,List_null };