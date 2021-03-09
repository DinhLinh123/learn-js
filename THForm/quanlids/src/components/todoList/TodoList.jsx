import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps= {
    todos: [],
    onTodoClick: null,
}


function TodoList(props) {
    const {todos, onTodoClick}= props;

    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo)
        }
    }

    

    return (
        <div>
            <table>
                <tr>
                  <th>id</th>
                  <th>Tên SV</th> 
                  <th>mã sv</th>
                  <th>Hành động</th>
                </tr>
                {todos.map(todo => (
                <tr>
                    
                    <td key={todo.id}>{todo.id}</td>
                    <td key={todo.name}>{todo.name}</td>
                    <td key={todo.msv}>{todo.msv}</td>
                    <td><button onClick={() => handleClick(todo)}>Xóa</button> </td>
                    
                    
                </tr>
                ))}
            </table>
        </div>
    );
}

export default TodoList;