import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [newItem, setNewItem]=  useState("");
 const [todos, setTodos] = useState([{id: Math.random(), name: 'new todo do be doo', completed: false},
         {id: Math.random(), name: 'todo 2', completed: false},
         {id: Math.random(), name: 'todo3 ', completed: false}]);
  
  return (

    <div className='container'>
        <h1>Todo List</h1>
    <form>
      <label htmlFor='item'>Add Item</label>
      <input id='item' placeholder='Add a new todo item...' value={newItem} onChange={(e)=> setNewItem(e.target.value)}></input>
      
      <button >Add</button>
      <ul>
     {todos.map((todo) => {
      return(
        <li>
          <label>

          {todo.name}
          </label>
         
          </li>
      )
     })}
     
    </ul>
    </form>
  
   
    </div>
  );
}


export default App;
