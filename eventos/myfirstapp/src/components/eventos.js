import React,{Component} from "react"
import reactDom from 'react-dom';

class Nota extends Component{
     Editar() {
        alert("Editando");
      }
       Eliminar(){
      alert("eliminando"); 
      }
      
    render(){
  return(
<div className="Notas">
    <button onClick={this.Editar}>Editar</button>
    <button onClick={this.Eliminar}>Eliminar</button>

</div>
  )
}
}

export default Nota;
