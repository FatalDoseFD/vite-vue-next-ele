import {request} from '../utils/request.js'
const login = ()=>{
    return request('POST','v2/login')
}

// 通过userID进行登录
const loginByUserId = (userId)=>{
    let params = {
        user_id : userId 
    }
    return request('GET','v1/user',params)
}
// 登出
const signout = () => {
    return request('GET','/v2/signout')
}
// /v2/index_entry 获取主页
const homeEntry = (geohash , ) =>{
    let params = {
        geohash ,
        group_type: 1 , 
       "flags[]": "F"
    }
    return request("GET" , '/v2/index_entry' , params)
}


export {
    login,
    loginByUserId,
    signout,
    homeEntry
}