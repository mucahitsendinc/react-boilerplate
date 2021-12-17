import Home from './views/Home';
import Login from './views/Authentication/Login';
import Register from './views/Authentication/Register';
export const Routes = [

  {
    path:'/',
    exact:true,
    component:Home,
    props:{},
    auth:false
  },{
    path:'/giris-yap',
    exact:true,
    component:Login,
    props:{register:false},
    auth:false
  },{
    path:'/kayit-ol',
    exact:true,
    component:Register,
    props:{register:true},
    auth:false
  }
]
