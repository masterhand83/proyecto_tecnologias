import React from "react";
import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
export default class NotFound extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container className="vh-100 m-auto">
                <Row className="vh-100">
                    <Col className="my-auto text-center">
                        <div className="h1">404</div>
                        <p>No se encontro la pagina que buscaba</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}