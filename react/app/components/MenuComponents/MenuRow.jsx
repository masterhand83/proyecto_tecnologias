import React from "react"
import Button from 'react-bootstrap/Button'
import {withRouter} from "react-router-dom"
class MenuRow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ejercicio: props.data
        }
    }

    verEjercicio = (id) => {
        this.props.history.push("/ejercicio?id="+id)
    }

    editarEjercicio = (id) => {
        this.props.history.push("/editarEjercicio?id="+id)
    }

    render(){
        let data = this.state.ejercicio
        return(
            <tr>
                <td>{data.name}</td>
                <td>
                    <Button variant="success"
                        onClick={() => this.verEjercicio(data.id)}>
                        Ver
                    </Button>
                    <Button variant="warning"
                            className="mx-3"
                            onClick={() => this.editarEjercicio(data.id)}>
                        Editar
                    </Button>
                    <Button variant="outline-danger">
                        eliminar
                    </Button>
                </td>
            </tr>
        )
    }
}

export default withRouter(MenuRow)