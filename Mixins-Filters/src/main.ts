import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "tailwindcss/tailwind.css"

Vue.filter('toLowerCase',(value: string)=>{
  return value.toLowerCase()
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
