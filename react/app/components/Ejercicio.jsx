import  React  from "react";
import {Container, Row, Col} from 'react-bootstrap'
import EjercicioAnimador from "./EjercicioComponents/EjercicioAnimador";
export default class Ejercicio extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        const query = new URLSearchParams(this.props.location.search)
        this.state = {
            ejercicioID: query.get('id')
        }
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <EjercicioAnimador />
                    </Col>
                </Row>
            </Container>

        )
    }
}