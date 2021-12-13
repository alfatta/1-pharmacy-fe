import Axios from "axios";
import { API_URL } from "../../constants/api";

Axios.defaults.baseURL = API_URL

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config
})

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  payload: category
})

export const clearCategory = () => ({
  type: 'CLEAR_CATEGORY'
})

export const getCategory = (cb = () => {}) => {
  return (dispatch) => {
    Axios.get('/api/tes/category')
      .then((res) => {
        dispatch(setCategory(res.data))
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
