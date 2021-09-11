import {service} from '../axios/index'
export function request(method = "GET",api,data = {}){
    return new Promise((resolve,reject)=>{
        service({
            method,
            url: api,
            params:data
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}