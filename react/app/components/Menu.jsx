import axios from "axios"
import React from "react"
import { Col, Row, Table, Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import MenuTable from "./MenuComponents/MenuTable"
export default class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    goToCrearEjercicio = () => {
        this.props.history.push("/crear")
    }
    componentDidMount = () => {
        axios.get("http://localhost:8080/Simulaciones")
            .then((response) => {
                this.setState({data: response.data})
            })
    }
    onDelete = (status, id) => {
        let newData = this.state.data.filter((sim) => sim.id !== id)
        this.setState({data: newData})
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Button
                        variant="success"
                        onClick={this.goToCrearEjercicio}>
                            Crear Simulacion
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MenuTable onDelete={this.onDelete} data={this.state.data} />
                    </Col>
                </Row>
            </Container>
        )
    }
}