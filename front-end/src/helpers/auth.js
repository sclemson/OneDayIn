export const getToken = () => {
  return window.localStorage.getItem('token')
}
  
export const setToken = (token) => {
  window.localStorage.setItem('token', token)
}
  
export const removeToken = () => {
  window.localStorage.removeItem('token')
}

export const getUserId = () => {
  return window.localStorage.getItem('userId')
}

export const setUserId = (userId) => {
  window.localStorage.setItem('userId', userId)
}

export const removeUserId = () => {
  window.localStorage.removeItem('userId')
}

export const getContinent = () => {
  return window.localStorage.getItem('continent')
}

export const setContinent = (continent) => {
  window.localStorage.setItem('continent', continent)
}

export const removeContinent = () => {
  window.localStorage.removeItem('continent')
}