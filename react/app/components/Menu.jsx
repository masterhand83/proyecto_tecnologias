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
            ejercicios: [
            {
                id: faker.datatype.uuid(),
                name: "pelotas 1"
            },
            {
                id: faker.datatype.uuid(),
                name: "pelotas 2"
            },
        ]}
    }
    goToCrearEjercicio = () => {
        this.props.history.push("/crear")
    }
    componentDidMount() {
    }

    render(){
        let data = this.state.ejercicios
        console.log(data)
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
                        <MenuTable data={data} />
                    </Col>
                </Row>
            </Container>
        )
    }
}