import { combineReducers } from "redux";
import auth from "./auth";
import products from "./products";
import category from "./category";
import productDetail from "./productDetail";
const reducers = combineReducers({
  auth,
  products,
  category,
  productDetail,
  })
export default reducers