import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/stores';
import RdxA from './views/RdxA';
import RdxB from './views/RdxB';

function App() {
  return (
    <Provider store= {store}>
      <div className="App" style= {{ display: 'inline-flex', width: '100%'}}>
        <RdxA />
        <RdxB />
      </div>
    </Provider>
    
  );
}

export default App;
