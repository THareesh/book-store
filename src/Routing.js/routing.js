import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import Home from '../components/Home'
import Login from '../components/Login'
import SignIn from './../components/sign-in/sign-in'
import SignUp from './../components/sign-up/sign-up'
import DashBoard from './../components/dashboard/dashboard'
 
class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={SignIn}/>
                        <Route path='/Login' component={Login} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/dashboard'component={DashBoard} />
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routing
