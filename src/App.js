import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [newItem, setNewItem]=  useState("");
 const [todos, setTodos] = useState([{id: Math.random(), name: 'new todo do be doo', completed: false},
         {id: Math.random(), name: 'todo 2', completed: true},
         {id: Math.random(), name: 'todo3 ', completed: false}]);

function handleSubmit(e){
  e.preventDefault();
console.log('clicked')
  setTodos((currentTodos) => {
    return [
      ...currentTodos, {
        id:Math.random(),
        name: newItem,
        completed: false
      }
    ]
   
  });
  setNewItem('');
  console.log(todos)
}

function toggleComplete(id, checked){
  setTodos(currentTodos=> {
      return currentTodos.map(todo => {
        if(todo.id ==id) {
          return{...todo, completed:checked}
        }
        return todo
      })
  }) 
}

function deletedTodos(id) {
    setTodos(currentTodos=> {
      return currentTodos.filter(todo=> todo.id != id)
    }) 
}
  
  return (

    <div className='container'>
        <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor='item'>Add Item</label>
      <input required id='item' placeholder='Add a new todo item...' value={newItem} onChange={(e)=> setNewItem(e.target.value)}></input>
      
      <button type='submit'>Add</button>
      
    </form>

    
      <div className="table-container">
    
    <div className="table-row">
      <div className="row-item">
      Task Name
    </div>
     <div className="row-item">
      Edit task
    </div>
    </div>
    {todos.map(todo => {
      return (
      <div key={todo.id} className="table-row">
      <div className="row-item">
     {todo.name}
   </div>
      <div id="container">
        <label className='completed-label'>completed:</label>
   <input  type='checkbox' checked={todo.completed}  onChange={(e)=> toggleComplete(todo.id,e.target.checked)}  ></input>
   <button type="button" onClick={() =>deletedTodos(todo.id)}>Delete</button>
</div>
   </div>
      )
    })}

   
   
  </div>

  
   
    </div>
  );
}


export default App;
