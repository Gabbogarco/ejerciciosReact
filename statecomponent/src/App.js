
import './App.css';
import React,{Component} from 'react';
class App extends Component {
constructor(){
  super()
this.state={
    title:"Hola Mundo",
  
  };
} 
 cambiarEstado = () =>{
   this.setState(
     { title:"Hello Word",
    })
 } 
  render(){
  return (
    <div>
      <h1>{this.state.title}</h1>
      <button onClick={this.cambiarEstado}>Boton</button>
    </div>
  );
}
}
export default App;
