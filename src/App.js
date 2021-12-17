import React from 'react'
import { ThemeProvider } from "styled-components";
import {GlobalStyle} from './styles/Global';
import {LightTheme,DarkTheme} from './styles/Theme'
import { BrowserRouter  as Router,Route,Switch,Redirect} from "react-router-dom";
import {Routes} from './Routes'
import { useSelector } from 'react-redux';
import axios from 'axios'
function App() {
  
  const {login}=useSelector(state=>state.auth)
  const {theme}=useSelector(state=>state.site)

  console.log(login)
  return (
      <ThemeProvider theme={theme==='DarkTheme' ? DarkTheme : LightTheme}>

        <GlobalStyle/>
        
          <Router>

            <Switch>
              {

                Routes.map((route,index)=>{

                  return(

                    <Route key={`route-${index}`} path={route.path} exact={route.exact} render={()=>{

                      if (route.auth && !login){

                        return <Redirect to="/giris-yap"/>

                      }

                      return <route.component {...route.props} />
                      
                    }} />
                  )

                })

              }

            </Switch>

          </Router>
      </ThemeProvider>
  );
}

export default App;