import axios from 'axios';
import {AxiosResponse} from 'axios'
import {ApiResponse} from '../interfaces/base_interface'
import { message } from 'ant-design-vue';
import {vuexStore} from '../storage/vuexs'
import router from '../routers/router'

const baseURL = 'http://localhost:5000';
const instance = axios.create({
    baseURL,
    timeout: 5000
}) 

// request interceptors
instance.interceptors.request.use(
    (config) => {
        // To handle before requrest 
        config.headers.Authorization = vuexStore.getters.getToken || ""
        return config
    },
    (error) => {
        // To handle request error
        return Promise.reject(error)
    }
)


// response interceptors
instance.interceptors.response.use(
    (response: AxiosResponse<ApiResponse<any>>) => {
        // To handle before response is handleed
        const _data = response.data
        const _code = _data.code   
        if (_code === 10000) {
            return _data.data
        } else if (_code == 10001) {
            message.error(response.data.msg || '请求失败')
        } else if (_code == 10002) {
            message.error(response.data.msg)
            router.push('/login')

        }
    },
    (error) => {
        // To handle when response was error
        return Promise.reject(error)
    }
)

export default instance