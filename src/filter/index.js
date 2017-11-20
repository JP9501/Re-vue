import dateFilter from './date.js';

export default {
    install(vue){
        vue.filter('date',dateFilter)
    }
}