// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<App propMessage="sdflksa"/>',
    components: { App }
})

