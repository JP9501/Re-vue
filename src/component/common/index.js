import hedaerComponent from './header.vue';
import footerComponent from './footer.vue'
export default{
    install(Vue){
        Vue.component('app-header',hedaerComponent);
        Vue.component('app-footer',footerComponent);
    }
}