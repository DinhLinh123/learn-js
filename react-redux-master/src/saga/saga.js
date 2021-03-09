import { call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function getRemoteUsers() {

      return axios.get('https://6013b47c54044a00172ddc4a.mockapi.io/productName')
}

function addRemoteUsers(user) {

      return axios.post('https://6013b47c54044a00172ddc4a.mockapi.io/productName', user)
}

function* sagaGetremotrUsers(action){

      try {

            let response = yield call(getRemoteUsers);
            yield put({type : 'Add_Products', addload: [...response.data]})

      }catch (err){
            console.log(err);
      }
}

function* sagaAddRemoteUsers(action){

      try {

      console.log(action);
      let reponse = yield call(addRemoteUsers, action.addload);
      yield put({type: 'ADD_USER', addload: reponse.data});
      } catch (error) {
            
            console.log(error)
      }

}

function* mySaga(){

      yield takeEvery('GET_REMOTE_SAGA', sagaGetremotrUsers);
      yield takeEvery('ADD_REMOTE_USER', sagaAddRemoteUsers);
}

export default mySaga;