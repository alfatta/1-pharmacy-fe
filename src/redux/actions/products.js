import Axios from "axios";
import { API_URL } from "../../constants/api";

Axios.defaults.baseURL = API_URL

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config
})

export const setProduct = (product) => ({
  type: 'SET_PRODUCT',
  payload: product
})

export const clearProduct = () => ({
  type: 'CLEAR_PRODUCT'
})

export const getProduct = (cb = () => {}) => {
  return (dispatch) => {
    Axios.get('/api/tes/product')
      .then((res) => {
        dispatch(setProduct(res.data))
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
