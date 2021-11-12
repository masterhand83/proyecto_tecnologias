import  React  from "react";
import {Container, Row, Col} from 'react-bootstrap'
import EjercicioAnimador from "./EjercicioComponents/EjercicioAnimador";
export default class Ejercicio extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        const query = new URLSearchParams(this.props.location.search)
        this.state = {
            ejercicioID: query.get('id'),
            x: 0.0
        }
    }
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>
                        <EjercicioAnimador updatr={this.updatr} />
                    </Col>
                    <Col>
                        <h1>Datos de la simulacion</h1>
                        <h4>
                        </h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus impedit in, praesentium, neque perspiciatis fugiat facilis officiis nisi maiores quidem, iusto aliquid? Corporis magnam tempore voluptates impedit necessitatibus dolorem quisquam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi animi culpa facere laborum voluptatum beatae, velit nihil. Voluptates facilis iure illum possimus nemo laboriosam atque cum in culpa iste?</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}