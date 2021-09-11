const location = {
    state:({
        latitude:0,
        longitude:0

    }),
    mutations:{
        SET_LOCATION(ctx,payload){
            ctx.latitude = payload.latitude
            ctx.longitude  = payload.longitude
        }
    },
    actions:{
        GET_LOCATION(ctx){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position)=>{
                    //获取地理位置成功时所做的处理
                        console.log("获取定位成功",position)
                        ctx.commit("SET_LOCATION",position)
                    },
                    (error)=>{
                        console.log("获取定位失败",error)
                        let params = {
                            latitude:31.22299,
                            longitude:121.36025,
                        }
                        ctx.commit("SET_LOCATION",params)
                    })
                   
            }else{
                $message("抱歉，您的浏览器无法获取坐标定位")
            }
        }
    }
}

export {
    location
}