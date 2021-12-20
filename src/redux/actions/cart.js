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

export const clearCart = () => ({
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

export const checkout = ( cb = () => {}) => {
  return (dispatch, getState) => {
    const {cart : {cartItems}} = getState()
    Axios.post('/api/tes/transaction',
    {
      items : cartItems
   })
      .then((res) => {
        
        dispatch(clearCart())
        cb(null, res.data)
      })
      .catch((err) => {
        if (err.response) {
          cb(err.response.data)
        } else {
          cb(err.message)
        }
      })
  }
}
