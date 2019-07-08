// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'      /* 引入VueResource实现数据的get和post */
import VueRouter from 'vue-router'

import App from './App'                     /* 引入App组件 */

import blogRouter from './blogRouter'     /* 引入已经配置好的路由数组   blogRouter是自己取的路由名 */

Vue.config.productionTip = false

Vue.use(VueResource)      /* 使用VueResource 的声明*/
Vue.use(VueRouter) 

//自定义指令 ——用于控制标题颜色的指令rainbow 
Vue.directive("rainbow",{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);   //生成一个0~1的随机数，然后转化成16进制的字符串，截取其中6位
  }
})      

//自定义指令 ——用于控制标题颜色的指令theme
Vue.directive("theme",{
  bind(el,binding,vnode){
    /* （利用了参数value）————用于控制容器宽窄 */
    if(binding.value == 'wide'){
      el.style.maxWidth = "1280px";
    } else if(binding.value ==  "narrow"){
      el.style.maxWidth = "640px";
    }
    /* （利用了参数arg）————用于控制容器背景颜色的指令 */
    if (binding.arg == "column"){
      el.style.background = "#78a971";
      el.style.padding = "20px";
    }
  }   
})

/* 定义全局过滤器API——实现将数据大写化功能 */
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})

/* 定义全局过滤器API——实现缩短数据内容功能 */
Vue.filter("concentre",function(value){
  return value.slice(0,101) + "……";
})

//创建路由 
const router = new VueRouter({
  routes:blogRouter,        /* blogRouter是引用blogRouter.js中的数组 */
  mode:"history"            /* 消除# */
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router       /* 使用路由，这里的router是VueRouter对象，也就是const定义的对象 */
})
