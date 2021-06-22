import './App.css';
import React, {Component, useEffect,useState} from "react";
import Thumnails from './Thumnails';
import VistaNormal from "./VistaNormal"
import Buscar from "./Buscar";
import { render } from '@testing-library/react';


class App extends Component {

  
  constructor(props) {
    super(props)
    this.state = { fotos: [],
                    resultado: [],
                      
                  }
  }
  buscar = () =>{
    
    this.setState(this.filtrar());
    console.log(this.state.resultado)
  }
 

 filtrar(){
  let textoABuscar = document.getElementById("InputTexto").value;
  console.log(this.state.resultado)
  if(this.state.resultado.length===0){
            return{
          fotos: this.state.fotos,
          resultado : this.filtarElementos(this.state.fotos,textoABuscar)
            }
          }else{ 
    return{
        fotos: this.state.fotos,
        resultado : []
           }
          }
}

 filtarElementos(todo,textoABuscar) {
  var res = []    
  todo.map(
        (datos,indice) =>{
          if(datos.title.indexOf(textoABuscar)!==-1){
          this.state.resultado.push( datos)
          
         // console.log(indice)
              }})
      console.log(this.state.resultado)
        return this.state.resultado        
    }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        return response.json()
      })
      .then((fotos) => {
        this.setState({ fotos: fotos,
                        resultado:[],
                        urlSeleccionada:""   })
                          
                        //  console.log(fotos)
      })
  }

  hizoClic = (urlSel) =>{
 // this.enClic(urlSeleccionada)
  this.setState({urlSeleccionada:urlSel });
//console.log(urlSel)
}

 render(){
  return (
    <div className="contenedor">
      <div className="izquierda">
      <div className="izquierda-cabecera">
            <label>Busqueda:<input type="text" id="InputTexto"></input></label>
            <button onClick={this.buscar}>Buscar</button>
          </div>   
          <VistaNormal urlSeleccionada={this.state.urlSeleccionada}></VistaNormal>
      </div>
      <div className="derecha">
          
          <div className="derecha-lista">
              {this.state.resultado.map( (filtradas, indice) => (
              <Thumnails key = {indice} className="miniatura" urlMiniaturas={filtradas.thumbnailUrl} urlNormal={filtradas.url} titulo={filtradas.title} enClic = {this.hizoClic}></Thumnails>
              ))}
          </div>      
      </div>
    </div>
)} 
  
  }

export default App