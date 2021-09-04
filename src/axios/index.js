import axios from "axios";
import nprogress from "nprogress";
const service = axios.create({
    withCredentials: true,
    timeout: 600000 
})

service.interceptors.request.use(
    config => {
        nprogress.start();
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response
        nprogress.done();
        return res
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export {service}