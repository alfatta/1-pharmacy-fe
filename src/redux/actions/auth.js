import Axios from "axios";
import { API_URL } from "../../constants/api";

Axios.defaults.baseURL = API_URL

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config
})

export const setLogin = (role, token, user) => ({
  type: 'SET_LOGIN',
  payload: { role, token, user }
})

export const setLogout = () => ({
  type: 'SET_LOGOUT'
})

export const doLogin = (email, password, cb = () => {}) => {
  return (dispatch) => {
    Axios.post('/api/tes/auth/login',
    {
     password,
     email
   })
      .then((res) => {
        console.log(res);
        const role = res.data.user.isAdmin ? "admin" : "user"
        dispatch(setLogin(role, res.data.token, res.data.user))
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

export const doLogout = (cb = () => {}) => {
  return (dispatch) => {
    Axios.post('/api/tes/auth/logout')
      .then((res) => {
        dispatch(setLogout())
        cb(null, res.data)
      })
      .catch((err) => {
        cb(err)
      })
  }
}