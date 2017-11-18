
import Vue from 'vue';
// import vueRoturn from 'vue-router';
//导入muitui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
//导入组件
import AppComponent from '../component/App.vue';
import Component from '../component/common';
//启用插件
Vue.use(MintUi);
Vue.use(Component);
new Vue({
   el:'#app',
   render(c){
        return c(AppComponent)
   },
    data:{
        
    },
    // router: new vueRoturn({
    //     routes:[
    //         {},
    //         {}
    //     ]
    // })
})