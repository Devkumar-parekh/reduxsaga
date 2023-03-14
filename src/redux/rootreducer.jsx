import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productreducer } from "./productreducer";
const rootReducer = combineReducers({
  cartReducer,
  productreducer,
});

export default rootReducer;
