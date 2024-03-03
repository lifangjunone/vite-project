export interface LoginForm {
  username: string,
  password: string,
  remember: boolean
}

export interface UserInfo {
  token: string,
  vertical_menu: Array<any>,
  horizontal_menu: Array<any>
}