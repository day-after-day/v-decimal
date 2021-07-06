import Vue from 'vue';
import App from './App.vue';

import VDecimal from './directives/decimal/index'
Vue.use(VDecimal)

new Vue({
    el: '#app',
    render: h => h(App)
})
