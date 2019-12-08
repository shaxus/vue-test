import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '../store'
// const HelloWorld = (resolve) => require([s'@/components/HelloWorld'],resolve);
Vue.use(Router);
// 滚动条滚回顶部
const scrollBehavior =(to, from, savedPosition)=> {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes
});

//路由守卫
router.beforeEach(({meta,path}, from, next) => {
  //判断路由记录是否需要验证登录
  // if (to.matched.some(current => current.meta.needLogin)) {
  //   //只要记录上需要登录 我们就得验证
  //   /*
  //    * 自己封装方法判断登录 sessionstorage localstorage cookie啥的自行决定
  //    */
  //   let isLogin = Boolean(store.state.token);
  //   console.log(Vue.axios)
  //   if (!isLogin) {
  //     next({
  //       path: '/login', //跳转到登录页
  //       query: {
  //         redirect: to.fullPath //登录页需要知道从哪跳过来的，方便登录成功后回到原页面
  //       }
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
  // let isLogin = Boolean(store.state.token);
  // if (!isLogin) {
  //   next({
  //     path: '/login', //跳转到登录页
  //     query: {
  //       redirect: to.fullPath //登录页需要知道从哪跳过来的，方便登录成功后回到原页面
  //     }
  //   });
  // } else {
  //   next();
  // }
  let {auth=true}=meta
  let isLogin = Boolean(store.state.token)

  /*
      访问不需要权限的设置meta:false
      注册也要设置成meta:false
  */
  if(auth&&!isLogin&&path!=='/login'){
    return next({path:'/login'})
  }
  // 如果登录了以后再访问reg和login则路由到Home
  if(isLogin&&(path =='/login' || path == '/register')){
    return next({path:'/admin'});
  }
  // 未登录的情况下访问reg则直接路由
  next();
});

export default router;
