import { useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { AddProducts } from "../actions/Hobby";

const randomId = () => {

    return 1000 + Math.trunc((Math.random() * 9000));
}
function Table(props) {

    const [title, setTitle] = useState('');

    const [price, setPrice] = useState();

    const [content, setContent] = useState();
    
    const dispatch = useDispatch()
    
    const CreateProducts = () => {

        const user = {

            title: title,
            price : price,
            content : content,
          };

          dispatch(AddProducts(user));
        
       return  axios.post(`https://6013b47c54044a00172ddc4a.mockapi.io/productName`,  user )
          .then(res => {

                
            }
          )
    }
    
    function addProducts(e){

        e.preventDefault();


        CreateProducts(e);
      
    }

    return (
      
        <table className="table table-hover">

            <thead>
                <tr>
                <th>Thêm công việc</th>
                </tr>
            </thead>

            <tbody>
                
                    <tr className = "input-products">
                        <td>
                        <form method = "POST">
                            <div>Tên sản phẩm</div>
                            <input 
                                type = "text"
                                onChange = {(e) => setTitle(e.target.value)}
                                />
                            <div>Giá sản phẩm</div>
                            <input 
                                type = "number"
                                onChange = {(e) => setPrice(e.target.value)}
                                />
                            <div>Mô tả</div>
                            <input 
                                type = "text"
                                onChange = {(e) => setContent(e.target.value)}
                            />
                            <br></br>
                            <br></br>

                            <button onClick = {addProducts}>
                            Thêm
                            </button>
                            <button>Hủy </button>
                            </form>
                        </td>
                        
                    </tr>
                
            </tbody>
            
        </table>
        
    );
}

export default Table;