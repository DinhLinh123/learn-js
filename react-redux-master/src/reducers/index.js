import hobbyReducer from "./hobby";
import { combineReducers } from "redux";
import UseReducer from "./user";

const rootReducer = combineReducers({

      hobby : hobbyReducer,
      user : UseReducer
});

export default rootReducer;
