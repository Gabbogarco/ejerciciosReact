import { Component } from "react"

export default class VistaNormal extends Component{
/*constructor(){

}*/
render(){
    return(
    <div className="vistaNormal">
        <img src={this.props.urlSeleccionada}></img> 
    </div>
    )}

}