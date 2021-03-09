
import { useSelector,useDispatch, connect } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';



function InformationProducts() {
    
    const selecter = useSelector(state => state.hobby.list);

    const  deleteProduct = (id) => {

        if(id){
            axios.delete(`https://6013b47c54044a00172ddc4a.mockapi.io/productName/${id}`)
            .then(res => {
                    
            }) 
        }  
    }

    return (
        <tbody>
            {selecter?.map((hobby,index) => 

                <tr key = {index} >
                <td> {index}</td>
                <td>{hobby.title}</td>
                <td>{hobby.price}</td>
                <td>{hobby.content}</td>
                <td>
                    <button onClick = {() => {deleteProduct(hobby.id)} } >Xóa</button>
                    <button>Sửa</button>
                </td>
            </tr>
            
            ) }
        </tbody>
    );
}

function mapDispatchToProps(dispatch) {
    
    return {
  
      onGetUsers : () => {dispatch({type : 'GET_REMOTE_SAGA'})},
      onAddRemoteUser: (user) => {dispatch({type : 'ADD_REMOTE_USER', addload: user})}
    }
  }

export default connect(mapDispatchToProps)(InformationProducts);