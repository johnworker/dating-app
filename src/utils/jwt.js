const TOKEN_KEY = 'app_jwt'
export const setToken   = token => localStorage.setItem(TOKEN_KEY, token)
export const getToken   = ()    => localStorage.getItem(TOKEN_KEY)
export const clearToken = ()    => localStorage.removeItem(TOKEN_KEY)
