import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CrearEjercicio from './CrearEjercicio'
import EditEjercicio from './EditEjercicio'
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
                        <li>
                            <Link to="/editarEjercicio">Editar Ejercicio</Link>
                        </li>
                        <li>
                            <Link to="/crear">Editar Ejercicio</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home" component={Menu} />
                        <Route path="/login" component={Login} />
                        <Route path="/crear" component={CrearEjercicio} />
                        <Route path="/ejercicio" component={Ejercicio} />
                        <Route path="/editarEjercicio" component={EditEjercicio}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
