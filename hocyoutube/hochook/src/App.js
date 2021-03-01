import './App.css';

import React, {useState,useEffect } from 'react';
import queryString from 'query-string';
import TodoList from './components/todoList/indexList';

import Linh from './components/todoForm/linh';
import PostList from './components/postList/indexPost';
import Pagination from './components/pagination/indexPag';
import PostFiltersForm from './components/postFiltersForm/indexFilter';
import Clock from './components/clock/indexClock';
import BetterClock from './components/BetterClock/indexClock';
import MagicBox from './components/MagicBox/indexBox';




function App() {
  
    
    const [todoList, setTodoList]=useState([
      { id: 1, title: 'good morning'},
      { id: 2, title: 'good afternoon'},
      { id: 3, title: 'good evening'},
    ]);

    const [postList, setPostList]= useState([]);
    const [pagination, setPagination] = useState({
      _page: 1,
      _limit: 10, 
      _totalRows: 1,
    });
    const [filters, setFilters]= useState({
      _limit: 10,
      _page: 1,
      
    });



    useEffect(() => {
      async function fetchPostList() {
        try {
          const paramsString= queryString.stringify(filters);
          const requestUrl=`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
          const response= await fetch(requestUrl);
          const responseJSON = await response.json();
          console.log({responseJSON});
        

          const {data, pagination} = responseJSON;
          console.log({data});
          setPostList(data);
          setPagination(pagination);

      } catch(error){
        console.log('failed to fetch post list: ', error.message);

        }
      }
      fetchPostList();
    }, [filters]); 

    function handlePageChange(newPage) {
      console.log("newPage : ", newPage);
      setFilters({
        ...filters,
        _page: newPage,
      })
    }

    function handleTodoClick(todo){
      console.log(todo);
      const index = todoList.findIndex(x => x.id === todo.id);
       if (index <0 ) return;

       const newTodoList=[ ...todoList];
       newTodoList.splice(index, 1);
       setTodoList(newTodoList);
    }

    function handleTodoFormsubmit(formValues) {
      console.log('Form submit: ', formValues);
      const newtodo={
        id: todoList.length +1,
        ...formValues,
      };
      console.log(newtodo);

      const newTodoList=[...todoList];
      newTodoList.push(newtodo);
      setTodoList(newTodoList);
    }

    function handleFiltersChange(newFilters) {
      console.log('new filters: ', newFilters);
      setFilters({
        ...filters,
        _page: 1,
        title_like: newFilters.searchTerm,
      })
    }
    
    const [showClock, setShowClock] = useState(true);
 
  return (
    <div className="App">
      <p>Linh</p>
      {/* <Linh onSubmit={handleTodoFormsubmit}></Linh>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> 
      
      <PostFiltersForm onSubmit={handleFiltersChange}></PostFiltersForm>
      <PostList posts={postList}  ></PostList>
      <Pagination 
      pagination={pagination}
      onPageChange={handlePageChange}>
        
      </Pagination> */}
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <BetterClock></BetterClock>
      <MagicBox></MagicBox>
    </div>
  );
}

export default App;
