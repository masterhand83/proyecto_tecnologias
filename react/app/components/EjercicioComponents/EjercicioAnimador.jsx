import  React  from "react";
import Sketch, {} from 'react-p5'
class Pelota {
    constructor(x, y, velx, vely){

    }
}

export default class EjercicioAnimador extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state ={
            pelotas: []
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.props = nextProps
        this.setState({pelotas: nextProps.pelotas})
    }

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef)
        let canvasX =(p5.windowWidth - p5.width)/2
        let canvasY =(p5.windowHeight - p5.height)/2
    }

    draw = (p5) => {
        let pelotas = this.state.pelotas;
        p5.background("rgb(100%, 100%, 100%)")
        p5.stroke(0)
        p5.strokeWeight(4)
        p5.noFill()
        for(let i = 0; i < this.state.pelotas.length; i++){

            let rem = pelotas.filter((p, idx) => idx !== i)
            for (let j = 0; j < rem.length; j++){
                let p = rem[j]
                let org = pelotas[i]
                let a = org.x - p.x
                let b = org.y - p.y
                let dist = Math.sqrt((a*a) + (b * b))
                if (dist <= 61){
                    pelotas[i].x = org.x
                    pelotas[i].y = org.y
                } else {
                    pelotas[i].x += pelotas[i].spx;
                    pelotas[i].y += pelotas[i].spy;
                }
            }
            p5.ellipse(pelotas[i].x, pelotas[i].y, 60, 60)
        }
        this.setState({pelotas: pelotas})
    }

    render(){
        if (this.props.pelotas.length > 0){
            return(<Sketch draw={this.draw} setup={this.setup} />)
        }
        return (<h1>000</h1>)
    }
}