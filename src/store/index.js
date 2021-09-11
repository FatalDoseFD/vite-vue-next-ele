import { createStore } from 'vuex'
import {user} from './moudle/user'
import {location} from './moudle/location'
const store = createStore({
    modules:{user,location}
})

export  {
    store
}