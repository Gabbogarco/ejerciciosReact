
import './App.css';
import React, {useEffect,useState} from "react";
function App() {
const api = "https://jsonplaceholder.typicode.com/todos";
const [todos,setTodos]= useState();
const fetchapi = async() =>{
  const response = await fetch(api)
  console.log(response.status)
  const responseJson = await response.json();
  setTodos(responseJson)
  console.log(responseJson);
}; 
useEffect(()=>{
  fetchapi();
},[]);

return (
    <div className="App">
      <h1>Bienvenidos a mi primera App</h1>
      <div className="Container">
          {!todos
          ? "Cargando..."
          :todos.map((todo,index)=> {
          return(
            <div className="Card">
              
              {todo.completed?"👍":"😂"}
              <div>{todo.title}</div>
            </div>
            
          );
          })}
        
      </div>
      </div>
      );
}

export default App;
