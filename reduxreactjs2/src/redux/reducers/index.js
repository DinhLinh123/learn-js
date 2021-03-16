import { combineReducers } from "redux";
import numberReduxcer from './reducer1';
import nameReduxcer from "./reducer2";

const rootReducer =combineReducers({
    reducer1: numberReduxcer,
    reducer2: nameReduxcer

})
export default rootReducer;