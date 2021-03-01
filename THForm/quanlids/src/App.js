
import './App.css';
import { useState } from 'react';
import TodoList from './components/todoList/TodoList';
import TodoForm from './components/todoForm/TodoForm';

function App() {
  const [todoList, setTodoList]= useState([
    {id: 1, name: 'Linh', msv: '1821050435'},
    {id: 2, name: 'Thu', msv: '1821050101'},
    {id: 3, name: 'Tường', msv: '1821050678'}
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index <0) return;

    const newTodoList =[ ...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoSubmit(formValues) {
    console.log('Form submit: ', formValues);
  }
  return (
    <div className="App">
     <h1>DS SINH VIÊN</h1>
    <TodoForm onSubmit={handleTodoSubmit}></TodoForm>
     <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
