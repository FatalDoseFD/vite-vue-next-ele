<template>
<cus-header v-if="!route.meta.fullScreen" :canBack="route.meta.canBack" :title="route.meta.title"></cus-header>
  <keep-alive>
    <router-view v-if="route.meta.keepLive" />
  </keep-alive>
  <router-view v-if="!route.meta.keepLive" />
<cus-footer></cus-footer>

</template>

<script>
import { defineComponent , onMounted, provide  } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import CusFooter from './components/footer/index.vue'
import CusHeader from './components/header/index.vue'
export default defineComponent({
    components:{
      CusFooter,
      CusHeader
    },
    setup() {
      const store = useStore()
      // 使用userId自动登录
      const autoLogin =async ()=>{
        store.dispatch("LOGIN_BY_USERID")
      }
      // 获取坐标
      const getLocation = ()=>{
        console.log("huoqu")
        store.dispatch("GET_LOCATION")
      }
      onMounted(()=>{
        autoLogin()
        getLocation()
      })
      const route = useRoute()
      provide("theme",'blue')
      provide("color-weight","400")
      return {
        route
      }
    },
})
</script>

<style scoped>

</style>>
