import { POST } from '../requests/request'
import { LoginForm, UserInfo } from '../interfaces/login'
// import { vuexStore } from '../storage/vuexs'



export const LoginAPI = async (loginForm: LoginForm) => {

  const userInfo: UserInfo = await POST("/login", loginForm)
  // To save token in store of Vuex
  // vuexStore.commit('setToken', userInfo.token)
  // To save token in borswer of session
  sessionStorage.setItem('token', userInfo.token)
  return true
} 