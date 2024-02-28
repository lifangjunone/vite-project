import axios from 'axios';
import {AxiosResponse} from 'axios'
import {ApiResponse} from '../interfaces/base_interface'

const baseURL = 'http://localhost:5000';

const instance = axios.create({
    baseURL,
    timeout: 5000
}) 

// request interceptors
instance.interceptors.request.use(
    (config) => {
        // To handle before requrest 
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
        if (_data.code == 10000) {
            return _data.data
        }
        alert("xxxxx")
    },
    (error) => {
        // To handle when response was error
        return Promise.reject(error)
    }
)

export default instance