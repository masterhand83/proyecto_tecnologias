import React from "react";
import { Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { withRouter } from "react-router"
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

class EditEjercicio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'hello',
            pass:'',
            posx: 0,
            posy: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitInfo = this.submitInfo.bind(this)
    }
    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({[name]:value})

    }
    handleFileInput = (event) => {
        console.log(event.target.files)
    }
    submitInfo(event) {
        event.preventDefault()
        console.log(event.target.files)
    }
    render(){
        return(
        <Container className="vh-100 m-auto">
            <Form method="post" onSubmit={this.submitInfo}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre de ejercicio</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="usuario"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Posicion inicial</h4>
                    </ Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>X</Form.Label>
                            <Form.Control
                                name="name"
                                type="number"
                                placeholder="usuario"
                                value={this.state.posx}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </ Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Y</Form.Label>
                            <Form.Control
                                name="name"
                                type="number"
                                placeholder="usuario"
                                value={this.state.posy}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </ Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Velocidad inicial</h4>
                    </ Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>velocidad X</Form.Label>
                            <Form.Control
                                name="name"
                                type="number"
                                placeholder="usuario"
                                value={this.state.posx}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </ Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>velocidad Y</Form.Label>
                            <Form.Control
                                name="name"
                                type="number"
                                placeholder="usuario"
                                value={this.state.posy}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </ Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Logo Ejercicio</Form.Label>
                            <Form.Control
                                name="pass"
                                type="file"
                                placeholder="contra"
                                onChange={this.handleFileInput}
                            />
                        </Form.Group>
                        <div className="d-grid gap-2 mt-3">
                            <Button type="submit">Iniciar Sesión</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
        )
    }
}

export default withRouter(EditEjercicio)