import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.use(VueResource);
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "600px";
    }
    if(binding.arg == 'column'){
      el.style.background = "#ddd";
      el.style.padding = "10px";
    }
  }
});
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});
Vue.config.productionTip = false
export const bus = new Vue();

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
