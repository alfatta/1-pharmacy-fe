import Axios from "axios";
import { API_URL } from "../../constants/api";

Axios.defaults.baseURL = API_URL

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config
})

export const setProductDetail = (product) => ({
  type: 'SET_PRODUCT_DETAIL',
  payload: product
})

export const clearProductDetail = () => ({
  type: 'CLEAR_PRODUCT_DETAIL'
})


export const getProductDetail = (id, cb = () => {}) => {
  return (dispatch) => {
    Axios.get('/api/tes/product/' + id, {
    })
      .then((res) => {
        dispatch(setProductDetail(res.data))
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

export const deleteProduct = (id, cb = () => {}) => {
  return (dispatch) => {
    Axios.delete('/api/tes/product/' + id, {
    })
      .then((res) => {
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


export const createProduct = (data, cb = () => {}) => {
  return (dispatch) => {
    Axios.post('/api/tes/product/', data)
      .then((res) => {
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