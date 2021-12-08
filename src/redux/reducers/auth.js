const initValue = {
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,
    token: localStorage.getItem('token') || null,
    loggedUser: JSON.parse(localStorage.getItem('loggedUser')) || null,
    role: JSON.parse(localStorage.getItem('role')) || {},
  }
  
  const auth = (state = initValue, { type, payload }) => {
    switch (type) {
      case 'SET_LOGIN':
        localStorage.setItem('token', payload.token)
        localStorage.setItem('isLogin', JSON.stringify(true))
        localStorage.setItem('loggedUser', JSON.stringify(payload.user))
        localStorage.setItem('role', JSON.stringify(payload.role))
        
        return { ...state, isLogin: true, role: payload.role, token: payload.token, loggedUser: payload.user }
      case 'SET_LOGOUT':
        localStorage.removeItem('token')
        localStorage.removeItem('isLogin')
        localStorage.removeItem('loggedUser')
        localStorage.removeItem('role')
        return initValue
      default:
        return state
    }
  }
  
  export default auth;