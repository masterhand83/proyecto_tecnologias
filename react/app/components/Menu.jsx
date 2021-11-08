import React from "react"
import faker from 'faker'
import { Col, Row, Table } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
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

    render(){
        let data = this.state.ejercicios
        console.log(data)
        return(
            <Container>
                <Row>
                    <Col>
                        <MenuTable data={data} />

                    </Col>
                </Row>
            </Container>
        )
    }
}