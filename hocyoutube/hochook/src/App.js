import './App.css';
import React, {useState} from 'react';
import TodoList from './components/todoList/indexList';


function App() {
  
    
    const [todoList, setTodoList]=useState([
      { id: 1, title: 'good morning'},
      { id: 2, title: 'good afternoon'},
      { id: 3, title: 'good evening'},
    ]);
 
 
  return (
    <div className="App">
      <p>Linh</p>
      <TodoList>Hello</TodoList>
      
    </div>
  );
}

export default App;
