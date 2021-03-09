import React, { useState } from 'react';
import axios from 'axios';



function UpdateTable(props) {


    const [name , setName] = useState('');
    const [page, setPage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
     
         const user = {

            name : name,
            page : page
         }

         axios.put(`https://603ced5df4333a0017b68a5c.mockapi.io/api/newapiaxios/${props.id1}`, user )
 
        
         
     } 
    return (
        <div>
             <form >
                <h1>Sửa tt sinh viên </h1>
                <label>Nhập tên sv: </label>
                <input type="text"  onChange={e => setName(e.target.value)} /> 
                 <label>Nhập Mã sv: </label>
                <input type="text"  onChange={e => setPage(e.target.value)} /> 
                <input type="submit" onClick={e => handleSubmit(e)} placeholder='lưu'   /> 
            </form>
        </div>
    );
}

export default UpdateTable;