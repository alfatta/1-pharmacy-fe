import { combineReducers } from "redux";
import auth from "./auth";
import products from "./products";
import category from "./category";
import productDetail from "./productDetail";
import cart from "./cart";
const reducers = combineReducers({
  auth,
  products,
  category,
  productDetail,
  cart,
  })
export default reducers