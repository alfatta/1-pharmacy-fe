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

export const setPage = (page,previousPage,nextPage) => ({
  type: 'SET_PAGE',
  payload : {
    page,previousPage,nextPage
  }
})

export const getProduct = (page = 1, cb = () => {}) => {
  return (dispatch) => {
    Axios.get('/api/tes/product', {
      params : {
        page,
        perPage : 20,
      }
    })
      .then((res) => {
        dispatch(setProduct(res.data.rows))
        dispatch(setPage(page, res.data.previousPage, res.data.nextPage))
        cb(null, res.data.rows)
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
