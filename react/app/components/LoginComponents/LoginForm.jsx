import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";
export default class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {name:'', pass:''}
        this.handleChange = this.handleChange.bind(this)
        this.submitInfo = this.submitInfo.bind(this)
    }
    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({[name]:value})

    }
    submitInfo(event) {
        event.preventDefault()
        const {name, pass} = this.state;
        axios.post("http://localhost:8080/ComprobarUsuario", {name, pass})
            .then(response => {
                let isValid = response.data
                if (isValid){
                    this.props.history.push('/home')
                }
            })
    }
    render(){
        return(
            <Form method="post" onSubmit={this.submitInfo}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="usuario"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="pass"
                        type="password"
                        placeholder="contra"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <div className="d-grid gap-2 mt-3">
                    <Button type="submit">Iniciar Sesión</Button>
                </div>
            </Form>
        )

    }

}