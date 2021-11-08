import React from "react"
import faker from 'faker'
import { Col, Row, Table } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import MenuRow from "./MenuRow"
export default class MenuTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ejercicios: props.data
        }
    }


    render(){
        let data = this.state.ejercicios
        return(
            <Table>
                <thead>
                    <tr>
                    <th>Ejercicio</th>
                    <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ej) => {
                            return (<MenuRow key={ej.id} data={ej} />)
                        })
                    }
                </tbody>
            </Table>
        )
    }
}