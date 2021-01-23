import Vue from 'vue'
import App from './App.vue'

// filters global
Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});
// mixin global
Vue.mixin({
  created(){
    console.log('Global Mixin - created Hook')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
