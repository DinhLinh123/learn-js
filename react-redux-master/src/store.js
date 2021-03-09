import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

import createSagaMiddLeware from 'redux-saga';

import mySaga  from './saga/saga';


const sagaMiddLeware = createSagaMiddLeware();

const store = createStore(
      
      rootReducer, 
    
      applyMiddleware(sagaMiddLeware));

      sagaMiddLeware.run(mySaga);
export default store;