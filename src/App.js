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
      
    </form>

    
      <div className="table-container">
    
    <div className="table-row">
      <div className="row-item">
      Task Name
    </div>
     <div className="row-item">
      Task Name
    </div>
    </div>
    
    <div className="table-row">
       <div className="row-item">
      Task Name
    </div>
       <div id="container">
    <button type="button">Button     1</button>
    <button type="button">Button 2</button>
</div>
    </div>
   
  </div>

  
   
    </div>
  );
}


export default App;
