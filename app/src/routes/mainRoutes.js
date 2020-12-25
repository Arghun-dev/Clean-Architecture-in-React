import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Home from '../pages/home'
import Login from '../pages/login'

export default function MainRoutes() {
    return (
        <Router>
            <div>
                {/* <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul> */}
                <PrivateRoute exact path="/home" component={Home} />
                <Route path="/" component={Login} />
            </div>
        </Router>
    )
}