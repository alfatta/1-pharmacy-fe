import Axios from "axios";
import { API_URL } from "../../constants/api";

Axios.defaults.baseURL = API_URL

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config
})

export const addToCart = (product, qty) => ({
  type: 'ADD_TO_CART',
  payload: {...product, qty : parseInt(qty)}
})

export const clearCategory = () => ({
  type: 'CLEAR_CART'
})

export const updateCart = (product, qty) => ({
  type: 'UPDATE_CART',
  payload: {...product, qty : parseInt(qty)}
})

export const removeFromCart = (product) => ({
  type: 'REMOVE_FROM_CART',
  payload: product
})

