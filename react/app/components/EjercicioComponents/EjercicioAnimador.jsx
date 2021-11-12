import  React  from "react";
import Sketch, {} from 'react-p5'

export default class EjercicioAnimador extends React.Component { constructor(props){
        super(props)
        console.log(props)
        this.state = {
            x: 300,
            y: 300,
            spx: 0.4,
            spy: 0.2,
        }
    }
    setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(500, 500).parent(canvasParentRef)
        let canvasX =(p5.windowWidth - p5.width)/2
        let canvasY =(p5.windowHeight - p5.height)/2
        // xyz.position(canvasX, canvasY)

    }
    draw = (p5) => {
        p5.background("rgb(100%, 100%, 100%)")
        p5.stroke(0)
        p5.strokeWeight(4)
        p5.noFill()
        p5.ellipse(this.state.x, this.state.y, 60, 60)
        this.setState({
            x: this.state.x + this.state.spx,
            y: this.state.y + this.state.spy
        })

    }
    render(){
        return(
            <Sketch draw={this.draw} setup={this.setup} />
        )
    }
}