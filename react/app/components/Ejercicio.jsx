import axios from "axios";
import  React  from "react";
import {Container, Row, Col} from 'react-bootstrap'
import EjercicioAnimador from "./EjercicioComponents/EjercicioAnimador";
import PelotaInfo from "./EjercicioComponents/PelotaInfo"

export default class Ejercicio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            name: '',
            pelotas: [],
            pelotasCambia: []
        }
    }
    componentDidMount = () => {
        const search = this.props.location.search
        const id = new URLSearchParams(search).get("id")
        axios.get("http://localhost:8080/Simulacion?id="+id)
        .then((res) => {
            let data = res.data;
            let pelotas = []
            for(let pel of data.pelotas) {
                let p = {
                    x: pel.posicionInicial.x,
                    y: pel.posicionInicial.y,
                    spx: pel.velocidadInicial.x * 0.1,
                    spy: pel.velocidadInicial.y * 0.1
                }
                pelotas.push(p)
            }
            this.setState({
                id: id,
                name: data.nombre,
                pelotas
            })
        })
    }
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>
                        <EjercicioAnimador pelotas={this.state.pelotas} updatr={this.updatr} />
                    </Col>
                    <Col>
                        <h1>{this.state.name}</h1>
                        <h4>
                        </h4>
                        {
                            this.state.pelotas.map((pelota, idx) => {
                                return (<PelotaInfo key={idx} id={idx} pelota={pelota} />);
                            })
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}