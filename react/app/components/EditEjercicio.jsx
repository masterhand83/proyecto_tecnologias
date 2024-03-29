import axios from 'axios'
import React from "react";
import { Col, Row, Form, InputGroup } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { withRouter } from "react-router"
import Button from 'react-bootstrap/Button'

class EditEjercicio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Simulacion prueba',
            pelotas:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitInfo = this.submitInfo.bind(this)
    }
    componentDidMount = () => {
        const search = this.props.location.search
        const id = new URLSearchParams(search).get("id")
        axios.get("http://localhost:8080/Simulacion?id="+id)
        .then((res) => {
            let data = res.data;
            console.log(data);
            this.setState({
                id: id,
                name: data.nombre,
                pelotas: data.pelotas.map((pelota) => {
                    return {
                        x: pelota.posicionInicial.x,
                        y: pelota.posicionInicial.y,
                        velx: pelota.velocidadInicial.x,
                        vely: pelota.velocidadInicial.y
                    }
                })
            })
        })


    }
    crearPelota = () => {
        let listaPelotas = [...this.state.pelotas]
        let nuevaPelota = {
            x: 100,
            y: 150,
            velx: 1,
            vely: 2
        }
        listaPelotas.push(nuevaPelota)
        this.setState({pelotas: listaPelotas })
    }
    quitarPelota = () => {
        let listaPelotas = [... this.state.pelotas]
        listaPelotas.pop()
        this.setState({pelotas: listaPelotas})
    }
    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({[name]:value})
    }
    updatePelota = (event, idx) => {
        const pelotas = this.state.pelotas
        const pelota =  pelotas[idx]
        const name = event.target.name
        const value = event.target.value
        if (name === "posx"){
            pelota.x = value
        } else if (name === "posy") {
            pelota.y = value
        } else if (name === "velx") {
            pelota.velx = value
        } else if (name === "vely") {
            pelota.vely = value
        }
        pelotas[idx] = pelota
        this.setState({pelotas})

    }
    handleFileInput = (event) => {
        console.log(event.target.files)
        this.setState({icon: event.target.files[0]})
    }
    returnToMenu = () => {
        this.props.history.push("/home")
    }
    submitInfo(event) {
        event.preventDefault()
        let data = new FormData()
        data.append('id', this.state.id)
        data.append('icono', this.state.icon)
        data.append('name', this.state.name)
        data.append('pelotas', JSON.stringify(this.state.pelotas))
        console.log(data);
        let ax = axios({
            url: 'http://localhost:8080/EditarSimulacion',
            data:  data,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        }).then((response) => {
            console.log(response.data)
            if (response.status === 200){
                this.props.history.push("/home")
            }
        })
    }
    render(){
        return(
        <Container >
            <Form method="put" onSubmit={this.submitInfo}>
                <Row>
                    <Col>
                        <h1>Editar simulacion</h1>
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
                <Row className="mt-2">
                    <Col>
                        <Button variant="primary" onClick={this.crearPelota}>
                            Crear pelota
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={this.quitarPelota}>
                            Quitar Pelota
                        </Button>
                    </Col>
                </Row>
                {
                    this.state.pelotas.map((pelota, idx) => {
                        return (
                            <Row  key={idx}>
                                <Col className="mt-3" sm={12}>
                                    <h4>Pelota {idx}</h4>
                                </Col>
                                <Col className="mb-1" sm={6}>
                                    <Form.Control
                                        placeholder="posicion x"
                                        name="posx"
                                        value={pelota.x}
                                        onChange={(event) => this.updatePelota(event, idx)}
                                        type="number"
                                        />
                                </Col>
                                <Col className="mb-1" sm={6}>
                                    <Form.Control
                                        placeholder="posicion y"
                                        name="posy"
                                        value={pelota.y}
                                        onChange={(event) => this.updatePelota(event, idx)}
                                        type="number"
                                        />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control
                                        placeholder="velocidad x"
                                        name="velx"
                                        value={pelota.velx}
                                        onChange={(event) => this.updatePelota(event, idx)}
                                        type="number"
                                        />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control
                                        placeholder="velocidad y"
                                        name="vely"
                                        value={pelota.vely}
                                        onChange={(event) => this.updatePelota(event, idx)}
                                        type="number"
                                        />
                                </Col>
                            </Row>
                        )
                    })
                }
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
                        <Button variant="warning" className="mx-3" type="submit" size="lg">
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