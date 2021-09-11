<template>

</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { homeEntry } from '../../api/api'
import { useStore } from 'vuex'
export default defineComponent({
    setup() {
        const stroe = useStore()
        onMounted(()=>{
            homeEntry(`${stroe.state.location.latitude},${stroe.state.location.longitude}`)
        })
    },
})
</script>
