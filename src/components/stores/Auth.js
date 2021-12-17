import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name:'auth',
  initialState:{
    admin:localStorage.getItem('status')!=null && localStorage.getItem('status')!=undefined  ? localStorage.getItem('status') : false,
    user:[],
    login:localStorage.getItem('login')=='true' ? true : false,
    token:localStorage.getItem('token')!=null && localStorage.getItem('token')!='' && localStorage.getItem('token')!=undefined ? localStorage.getItem('token') : null,
  },
  reducers:{
    loginChange : (state) => {
      state.login = true
      localStorage.setItem('login',true)
    },
    logout: (state) => {
      state.login = false
      localStorage.removeItem('login')
      localStorage.removeItem('user')
      localStorage.removeItem('status')
      localStorage.removeItem('token')
    },
    setUser: (state, action) => {
      state.user = action.payload
      if(action.payload.status>1){
        state.admin='true'
        localStorage.setItem('admin','true')
      }
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    setToken: (state, action) => {
      state.token = action.payload
      localStorage.setItem('token', action.payload)
    }
  }
})

export const {loginChange,logout,setToken,setUser} = auth.actions
export default auth.reducer