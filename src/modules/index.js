import { combineReducers } from "redux";
import account from './account';
import amount from './amount';

const rootReducer = combineReducers({
  account,
  amount
});

export default rootReducer;