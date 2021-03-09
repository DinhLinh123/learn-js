import { useState, useEffect } from 'react';
import productApi from './api/productApi';
import './App.css';
import TableProduct from './components/table_product';
import PostTable from './components/post_table';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList =  async() => {
      try {
        const response = await productApi.getAll();
        console.log(response);
        const response2= await productApi.get();
        console.log(response2);
        
        setProductList(response2);
      } catch (error) {
        console.log('failed to fetch product list: ', error);
      }

    }

    fetchProductList();
  }, []); 
 console.log(productList);
  
  return (
    <div className="App">
      
      <TableProduct posts= { productList } />
    </div>
  );
}

export default App;
