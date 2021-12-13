import { combineReducers } from "redux";
import auth from "./auth";
import products from "./products";
import category from "./category";
const reducers = combineReducers({
  auth,
  products,
  category,
  })
export default reducers