import axios from "axios"
import React from "react"
import faker from 'faker'
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
                        <MenuTable data={this.state.data} />
                    </Col>
                </Row>
            </Container>
        )
    }
}