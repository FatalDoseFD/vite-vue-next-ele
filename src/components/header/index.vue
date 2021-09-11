<template>
    <div :class="[theme,'p-2.5', 'text-xl' , 'w-screen','flex','justify-between','align-middle']">
        <div @click="goBack" class="h-6 w-6" v-if="canBack">
            <svg class="h-6 w-6" t="1631169350516"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2813" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z" p-id="2814"></path></svg>
        </div>
        <div class="h-6 w-6" v-else>
            <svg t="1631194060856" class="h-6 w-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4725" width="200" height="200"><path d="M994.112 858.368L769.152 633.408C808.32 569.984 832 496 832 416 832 186.24 645.76 0 416 0S0 186.24 0 416 186.24 832 416 832c80 0 153.984-23.68 217.344-62.784l225.024 224.96a96.021333 96.021333 0 0 0 135.744-135.808zM416 704C256.96 704 128 575.04 128 416S256.96 128 416 128 704 256.96 704 416 575.04 704 416 704z" p-id="4726" fill="#2c2c2c"></path></svg>
        </div>
        <div>
            {{title}}
        </div>
        <div @click="loginIn" v-if="!store.state.user.userId && route.name !== 'login'" class=" text-sm" style="line-height:1.75rem">
            登录
        </div>
        <div v-if="store.state.user.userId">
            <svg t="1631170241387" class="h-6 w-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3754" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M616.533333 618.666667c106.666667-42.666667 181.333333-147.2 181.333334-266.666667C797.866667 192 669.866667 64 509.866667 64c-157.866667 0-288 128-288 288 0 121.6 74.666667 224 181.333333 266.666667-134.4 38.4-241.066667 151.466667-268.8 294.4-2.133333 6.4 0 12.8 4.266667 17.066666 2.133333 4.266667 8.533333 8.533333 14.933333 8.533334h712.533333c6.4 0 12.8-2.133333 17.066667-8.533334 4.266667-4.266667 6.4-10.666667 4.266667-17.066666-29.866667-142.933333-136.533333-256-270.933334-294.4z" fill="#2c2c2c" p-id="3755"></path></svg>
        </div>
        <div v-if="route.name == 'login'" class=" text-sm" style="line-height:1.75rem">

        </div>

    </div>
</template>

<script>
import {getTheme} from '../../utils/getTheme'
import { useStore } from 'vuex'
import { useRouter , useRoute} from 'vue-router'

export default {
    props:{
        title:String,
        canBack:Boolean
    },
    setup() {
        const store = useStore()
        const theme = getTheme()
        const router = useRouter()
        const route = useRoute()
        const loginIn = ()=>{
            router.push("/login")
        }
        const goBack = ()=>{
            router.go(-1)
        }
        return {
            theme,
            store,
            route,
            loginIn,
            goBack
        }
    },
}
</script>

<style scoped>

</style>
