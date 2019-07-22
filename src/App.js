import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import SignUpPage from './components/pages/SignUpPage'
import SignInPage from './components/pages/SignInPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/signup" component={ SignUpPage } />
                    <Route path="/signin" component={ SignInPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
            </div>
        </Router>
    )
}