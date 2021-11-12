import React from 'react';
import Container from 'react-bootstrap/Container'
import { withRouter } from "react-router-dom"
import { Form, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button'

class EditEjercicio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'hello',
            pass:'',
            posx: 310,
            posy: 30,
            velx: 3,
            vely: 4
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
    returnToMenu = () => {
        this.props.history.push("/home")
    }
    submitInfo(event) {
        event.preventDefault()
        console.log(event.target.files)
    }
    render(){
        return(
        <Container >
            <Form method="post" onSubmit={this.submitInfo}>
                <Row>
                    <Col>
                        <h1>Edicion de simulacion</h1>
                    </Col>
                </Row>
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
                <Row className="mt-3">
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
                <Row className="mt-3">
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
                                value={this.state.velx}
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
                                value={this.state.vely}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </ Col>
                </Row>
                <Row className="mt-3">
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
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={6}>
                        <Button className="mx-3" type="submit" size="lg">
                            Editar
                        </Button>
                        <Button
                            type="submit"
                            variant="outline-danger"
                            size="md"
                            onClick={this.returnToMenu}>
                                Cancelar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        )
    }
}

export default withRouter(EditEjercicio)