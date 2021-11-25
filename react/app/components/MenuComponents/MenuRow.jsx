import axios from "axios"
import React from "react"
import Button from 'react-bootstrap/Button'
import {withRouter} from "react-router-dom"
class MenuRow extends React.Component {
    constructor(props){
        super(props)
    }
    eliminarEjercicio = (id) => {
        axios.delete("http://localhost:8080/Simulacion",{
            data: {
                id
            }
        }).then((res) => {
            if(res.status === 200){
                this.props.onDelete(true, id);
            }
        })
    }

    verEjercicio = (id) => {
        this.props.history.push("/ejercicio?id="+id)
    }

    editarEjercicio = (id) => {
        this.props.history.push("/editarEjercicio?id="+id)
    }

    render(){
        let data = this.props.data
        return(
            <tr>
                <td>{data.nombre}</td>
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
                    <Button
                            variant="outline-danger"
                            onClick={() => this.eliminarEjercicio(data.id)}>
                        eliminar
                    </Button>
                </td>
            </tr>
        )
    }
}

export default withRouter(MenuRow)