import  React  from "react";

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
            <h3>{this.state.ejercicioID}</h3>
        )
    }
}