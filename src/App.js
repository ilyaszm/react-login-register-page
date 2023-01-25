import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import OtpPage from './components/pages/OtpPage'
import Header from './components/Header/Header'
import './App.css'
import Footer from './components/Footer/Footer'

export default function App() {
    return (
        <Router>
            <div className="App"> 
            {/* <Header  id="Login_Header" title={"Hello"} subtitle={"hello"} /> */}
  
          
                <Switch>
                    
                    <Route exact path="/" component={ LoginPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/otp" component={ OtpPage }/>
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                   
                </Switch>
                {/* <Footer /> */}
            </div>
        </Router>
    )
}