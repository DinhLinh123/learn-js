
import './App.css';
import { useState, useEffect } from 'react';
import queryString from 'query-string';
import TodoList from './components/todoList/TodoList';
import TodoForm from './components/todoForm/TodoForm';
import PostFilterForm from './components/postFiltersForm/PostFilterForm';
import PostList from './components/postList/PostList';
import Pagination from './components/pagination/Pagination';

function App() {
  const [todoList, setTodoList]= useState([
    {id: 1, name: 'Linh', msv: '1821050435'},
    {id: 2, name: 'Thu', msv: '1821050101'},
    {id: 3, name: 'Tường', msv: '1821050678'}
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page : 1,
    _limit: 10,
    _totalRows: 1, 
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1, 
    
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);

        const requestUrl= `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const reponse = await fetch(requestUrl);
        const reponseJSON = await reponse.json();
        console.log({reponseJSON});
  
        const {data, pagination} = reponseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed: ', error.message);
      }
     
    }

    fetchPostList();
    
  }, [filters]);

  function handlePageChange(newPage) {
    console.log('new Page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

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
     // add new todo to current todo list
     const newTodo = {
       id: todoList.length + 1,
       ...formValues,
     };
     const newTodoList = [...todoList];
     newTodoList.push(newTodo);
     setTodoList(newTodoList);
     localStorage.setItem('msv', newTodoList);

  }

  function handleFiltersChange(newFilters) {
    console.log('new filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1, 
      title_like: newFilters.searchTerm,
    });
  }
  return (
    <div className="App">
     <h1>DS SINH VIÊN</h1>
     <h1>Form bằng Mảng </h1>
    <TodoForm onSubmit={handleTodoSubmit}></TodoForm>
    
     <TodoList todos={todoList} onTodoClick={handleTodoClick} />

     <h1>Gọi Api bằng useEffect</h1>
     <PostFilterForm onsubmit={handleFiltersChange} ></PostFilterForm>
     <PostList posts= {postList} ></PostList>
     <Pagination 
     pagination= {pagination}
     onPageChange = {handlePageChange} ></Pagination>
    </div>
  );
}

export default App;
