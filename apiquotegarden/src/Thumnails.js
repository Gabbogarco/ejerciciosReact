import React, { Component } from "react";
import PropTypes from "prop-types";
import './Thumnails.css';
export default class Thumnails extends Component{    
constructor(props){
  super(props)
}    
static propTypes = {
  fotos: PropTypes.array,
  resultado: PropTypes.array,
  enClic: PropTypes.func
};


hizoClic = u=>{
  console.log(u)
  this.props.enClic(this.props.urlNormal)
}

  render(){
  return(
            <div className="contenedorMiniatura"><img src={this.props.urlMiniaturas} onClick={this.hizoClic} className="miniatura" ></img> 
            <span className="pieMiniatura" onClick={this.hizoClic}>{this.props.titulo}</span>
            </div>
  )
  
}      
}
//export default Thumnails;