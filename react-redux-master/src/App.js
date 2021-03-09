import React, { useEffect } from 'react';
import './App.css';
import TableVersion from './components/table';
import TableProducts from './components/table_products';
import ProductApi from './api/pruductApi';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addNewHobby } from './actions/Hobby';

function App() {

  useEffect(() => {
    
    const fetchProductList = async () => {

      try {
        
        const reponse = await ProductApi.getAll();
        dispatch(addNewHobby(reponse));
       
     
      } catch (error) {
        console.log(error);
      }
    }
   
    fetchProductList();
  }, [])

  const dispatch = useDispatch();

 
  return (

    <div className="App">
      <div  className="col-3 function">
        <TableVersion />
      </div>
      <div className = "col-9">
  
        <br></br>

        <div className = "add-work"> 
          <button 
            className="btn">
            <i className="fa fa-plus">
            </i>
            Thêm công việc
          </button>
        </div>

        <br></br>
        <br></br>

        <TableProducts 
        />
      </div>
    </div>
  );
}




export default (App);
