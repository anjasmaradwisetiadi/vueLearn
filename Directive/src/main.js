import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
  bind(el,binding, vnode){
    // el.style.backgroundColor='Red';
    // el.style.color='white'

    // el.style.backgroundColor=binding.value;

    // ude modifiers
    let delay =0;
    if(binding.modifiers['delayed']){
      delay=3000;
    }

    setTimeout(()=>{
      if(binding.arg == 'background'){
        el.style.backgroundColor=binding.value;
        el.style.color='white'
      }
      else{
        el.style.color=binding.value;
      }
    }, delay)

  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
