import { POST } from '../requests/request'
import { LoginForm, UserInfo } from '../interfaces/login'


export const LoginAPI = async (loginForm: LoginForm) => {

  const userInfo: UserInfo = await POST("/login", loginForm)
  // To save token in store of Vuex
  // vuexStore.commit('setToken', userInfo.token)
  // To save token in borswer of session
  sessionStorage.setItem('token', userInfo.token)
  // vuexStore.commit('setMenu', userInfo.menu)
  sessionStorage.setItem('verticalMenu', JSON.stringify(userInfo.vertical_menu))
  sessionStorage.setItem('horizontalMenu', JSON.stringify(userInfo.horizontal_menu))
  return true
} 