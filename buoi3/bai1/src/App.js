import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Manage from './view/manage';
import TodoForm from './view/form';



function App() {
  return (
    <>
         <Switch>
         
          <Route path="/" component={Manage} exact/> 
          <Route path="/Form" component={TodoForm}/> 
        
        </Switch> 
      </>
      
    
    
  );
}

export default App;
