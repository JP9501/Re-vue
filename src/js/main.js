
import Vue from 'vue';
import vueRouter from 'vue-router';
//导入muitui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
//导入mui
import 'mui/dist/css/mui.min.css';
import 'mui/examples/hello-mui/css/icons-extra.css'; //导入扩展locn库
//导入异步请求插件
import axios from'axios';
//导入路由插件
import  VueRouter  from 'vue-router';
//导入根组件
import AppComponent from '../component/App.vue';
//导入自定义api路径
import apiConfig from './api-config';
//导入一个自定义过滤器插件
import Filter from '../filter';
//启用插件
Vue.use(MintUi);
Vue.use(Component);
Vue.use(vueRouter);
Vue.use(Filter);
//导入配置
Vue.prototype.axios = axios;//将axios设置成vue的全局原型属性，这样别的页面也能用了
Vue.prototype.api= apiConfig //配置全局全局
//导入路由配置
import routerConfig from '../router';
//导入配置好的公共样式组件
import Component from '../component/common';
//定义一个全局过滤器
// Vue.filter('date',(tiem)=>{
//     let date = new Date(tiem);
//     return `${date.getFullYear()}-${date.getMilliseconds()+1}-${date.getDate()}`
// })

new Vue({
   el:'#app',
   render(c){
        return c(AppComponent)
   },
    router: new VueRouter(routerConfig)
})