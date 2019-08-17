//入口文件

import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入axios，并加入到原型链中
import axios from 'axios'
Vue.prototype.$ajax= axios


//导入QS
import QS from 'qs'
Vue.prototype.qs=QS;


//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);


//1.导入自己的router.js模块
import router from './router.js'



//导入App根组件
import app from './App.vue'


var vm=new Vue({
    el:'#app',
    render: c => c(app),
    //挂载路由对象到VM实例上
    router
})

