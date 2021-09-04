<template>
    123
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import {test} from '../../api/api'
export default defineComponent({
    setup() {
        onMounted(async ()=>{
            let res = await test()
            console.log(res)
        })
    },
})
</script>
