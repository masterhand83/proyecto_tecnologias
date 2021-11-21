import React from "react"
import { Table } from "react-bootstrap"
import MenuRow from "./MenuRow"
export default class MenuTable extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let data = this.props.data
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