import {request} from '../utils/request.js'
const test = ()=>{
    return request('GET','v1/user')
}


export {
    test
}