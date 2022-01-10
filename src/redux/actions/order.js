import Axios from "axios";
import { API_URL } from "../../constants/api";

Axios.defaults.baseURL = API_URL

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config
})

export const setOrder = (order) => ({
  type: 'SET_ORDER',
  payload: order
})

export const clearOrder = () => ({
  type: 'CLEAR_ORDER'
})

export const getMyOrder = (cb = () => {}) => {
  return (dispatch) => {
    Axios.get('/api/tes/transaction/user',{
        params : {
            page : 1,
            perPage : 1000
        }
    })
      .then((res) => {
        dispatch(setOrder(res.data.rows))
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



export const getAllOrder = (cb = () => {}) => {
  return (dispatch) => {
    Axios.get('/api/tes/transaction',{
        params : {
            page : 1,
            perPage : 1000
        }
    })
      .then((res) => {
        dispatch(setOrder(res.data.rows))
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

export const updateOrderStatus = (id,status,cb = () => {}) => {
  return (dispatch) => {
    Axios.patch('/api/tes/transaction/' + id,{
      statusTransaksi : status
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