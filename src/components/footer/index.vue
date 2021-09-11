<template>
    <button @click="changeTheme">点击切换</button>
</template>

<script>
export default {
    setup() {
        const changeTheme = ()=>{
            navigator.geolocation.getCurrentPosition((res)=>{
                console.log(res)
            })
        }

        return {
            changeTheme
        }
    },
}
</script>

<style scoped>

</style>