import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UpdateTable from './put_table';
import PostTable from './post_table';


TableProduct.propTypes = {
    posts: PropTypes.array,
};

TableProduct.defaultProps= {
    posts: [],
};


function TableProduct(props) {

    const {posts} = props;
   
    const [input, setInput] = useState(true);
    
    const [id1, setId1 ]= useState(0)
    function onsubmit(id){

        setInput(true);
        axios.delete(`https://603ced5df4333a0017b68a5c.mockapi.io/api/newapiaxios/${id}`)
        .then(res =>{

        })
    }

    const onsubmit1 = (id) => {
        setInput(false);
        setId1(id);
    };
    


    return (
        <div>
             {input === false ? <UpdateTable onsubmit1 = { onsubmit1 } id1 = { id1 } /> : ''}
             <PostTable></PostTable>
             
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên sv</th>
                    <th>Mã sv</th>
                    <th>Hành động</th>

                </tr>
                {posts.map((post, index) => (
                    <tr key = {post.id}>
                         <td >{index}</td>
                        <td >{post.name}</td>
                        <td >{post.page}</td>
                        <td ><button type="text" onClick={() => onsubmit(post.id) } > Xóa</button></td> 
                        <td ><button type="text" onClick={() => onsubmit1(post.id)  } > Sửa</button></td> 
                        
                    </tr>
                ))}
            </table>
            

        </div>
    );
}

export default TableProduct;