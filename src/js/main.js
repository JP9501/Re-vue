
import Vue from 'vue';
// import vueRoturn from 'vue-router';
//导入muitui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
//导入mui
import 'mui/dist/css/mui.min.css';
import 'mui/examples/hello-mui/css/icons-extra.css'; //导入扩展locn库
//导入异步请求插件
import axios from'axios';
//导入组件
import AppComponent from '../component/App.vue';
import Component from '../component/common';
//启用插件
Vue.use(MintUi);
Vue.use(Component);
Vue.prototype.axios = axios;
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