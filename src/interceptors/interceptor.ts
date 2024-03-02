import axios from "axios";
import { AxiosResponse } from "axios";
import { ApiResponse } from "../interfaces/base";
import { message } from "ant-design-vue";
import { vuexStore } from "../storage/vuexs";
import router from "../routers/router";

const baseURL = "http://localhost:8000/api/v1";
const instance = axios.create({
  baseURL,
  timeout: 5000,
});

// request interceptors
instance.interceptors.request.use(
  (config) => {
    // To handle before requrest
    // const token = vuexStore.getters.getToken || "";
    const token = sessionStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = 'application/json'
    return config;
  },
  (error) => {
    // To handle request error
    return message.error(String(error));
  },
);

// response interceptors
instance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    // To handle before response is handleed
    const _data = response.data;
    const _code = _data.code;
    if (_code === 10000) {
      return _data.data;
    } else if (_code == 10004) {
      message.error(response.data.msg || "请求失败");
    } else if (_code == 10006 || _code == 10010 || _code == 10011) {
      message.error(response.data.msg);
      router.push("/login");
    }
  },
  (error) => {
    // To handle when response was error
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      return message.error("请求超时");
    } else {
      return message.error(String(error));
    }
  },
);

export default instance;
