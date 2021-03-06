
import { useState, useEffect } from 'react';
import productApi from './api/productApi';
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList =  async() => {
      try {
        const response = await productApi.getAll();
        console.log(response);
        const response2= await productApi.get();
        console.log(response2);
        setProductList(response.data);
      } catch (error) {
        console.log('failed to fetch product list: ', error);
      }

    }

    fetchProductList();
  }, []); 
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
