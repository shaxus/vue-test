import HelloWorld from '@/components/HelloWorld';
import Admin from '@/components/backEnd/Admin';
import Login from '@/components/backEnd/Login';
import Register from '@/components/Register';
export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
    // component: () => import('@/components/HelloWorld')
  },
  {
    path:'/admin',
    name:'Admin',
    component: Admin,
    meta: {
      needLogin: false
    },
    children: [

    ]
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
    meta: {
      needLogin: true
    },
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  }
]
