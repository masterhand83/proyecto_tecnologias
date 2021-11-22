import React from "react"
import { Col, Row, Form, InputGroup } from "react-bootstrap"
export default class CreadorPelotas extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            pelotas:[]
        }
    }
    handleChange = (event, idx) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({[name]:value})
    }

    render(){
        return(
            <>
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
                                        />
                                </Col>
                                <Col className="mb-1" sm={6}>
                                    <Form.Control
                                        placeholder="posicion y"
                                        name="posy"
                                        value={pelota.y}
                                        onChange={(event) => this.updatePelota(event, idx)}
                                        />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control
                                        placeholder="velocidad x"
                                        name="velx"
                                        value={pelota.velx}
                                        onChange={(event) => this.updatePelota(event, idx)}
                                        />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control
                                        placeholder="velocidad y"
                                        name="vely"
                                        value={pelota.vely}
                                        onChange={(event) => this.updatePelota(event, idx)}
                                        />
                                </Col>
                            </Row>
                        )
                    })
                }
            </>
        )
    }
}
