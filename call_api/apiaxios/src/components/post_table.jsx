import React, { useState } from 'react';
import axios from 'axios';





function PostTable(props) {

    
    const [name , setName] = useState('');
    const [page, setPage] = useState('');

    

     function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
         const user = {

            name : name,
            page : page
         }
 
         axios.post(`https://603ced5df4333a0017b68a5c.mockapi.io/api/newapiaxios`, user )
         .then(res => {
           console.log("res",res);
           console.log(res.data);
         })
         
     } 
    return (
        <div>
             <form >
                <h1>Thêm sinh viên</h1>
                <label>Nhập tên sv: </label>
                <input type="text"  onChange={e => setName(e.target.value)} /> 
                 <label>Nhập Mã sv: </label>
                <input type="text"  onChange={e => setPage(e.target.value)} /> 
                <input type="submit" onClick={handleSubmit} placeholder='lưu'/> 
               
            </form>
        </div>
    );
}

export default PostTable;