<template>
    <van-cell-group>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    
    </van-cell-group>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    setup() {
        const router = useRoute()
        console.log(router)
    },
}
</script>
<style scoped>

</style>
