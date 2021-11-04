import React from "react"
import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import LoginForm from "./LoginComponents/LoginForm"
export default class Login extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container fluid className="d-flex vh-100">
                <Row className="m-auto">
                    <Col className="my-auto">
                        <Card className="text-center">
                            <Card.Header>Inicio de Sesion</ Card.Header>
                            <Card.Body>
                                <LoginForm history={this.props.history} />
                            </ Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
