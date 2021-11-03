import React from 'react'
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom'
import Ejercicio from './Ejercicio'
import Login from './Login'
import Menu from './Menu'
import NotFound from './NotFound'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/home">Menu</Link>
                        </li>
                        <li>
                            <Link to="/ejercicio">Ejercicio</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home" component={Menu} />
                        <Route path="/login" component={Login} />
                        <Route path="/ejercicio" component={Ejercicio} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
