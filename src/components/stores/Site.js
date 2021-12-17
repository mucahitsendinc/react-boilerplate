import { createSlice } from "@reduxjs/toolkit";

import { LightTheme,DarkTheme } from "../../styles/Theme";

export const site = createSlice({
  name:'site',
  initialState:{
    theme:localStorage.getItem('theme')!=undefined ? localStorage.getItem('theme') : "LightTheme",
    language:localStorage.getItem('language') && 'tr',
    slider:{front:'22,88,103',center:'253,29,29',centerlast:'41,126,231',end:'221,18,46'}
  },
  reducers:{
    changeSlider: (state,action) => {
      state.slider=action.payload
    },
    lightMode : (state) => {
      state.theme = LightTheme
    },
    darkMode : (state) => {
      state.theme = DarkTheme
    },
    changeTheme: (state) =>{
      state.theme = state.theme=="LightTheme" ? "DarkTheme" : "LightTheme"
      localStorage.setItem('theme',state.theme)
    },
    english: (state) => {
      state.language = 'en'
    },
    turkish: (state) => {
      state.language = 'tr'
    },
    changeLanguage: (state) =>{
      state.language = state.language=='tr' ? 'en' : 'tr'
    }

  }
})

export const {lightMode,darkMode,changeTheme,turkish,english,changeLanguage,changeSlider} = site.actions
export default site.reducer