import { loginByUserId } from '../../api/api'

const user = {
    state: () => ({ 
        userId:localStorage.getItem("user_id")
    }),
    mutations: { 
        SET_USER_INFO(ctx,payload){
            ctx.userName = payload.username
            ctx.userId = payload.user_id
            ctx.registeTime = payload.registe_time
            ctx.point = payload.point
            ctx.mobile = payload.mobile
            ctx.isMobileValid = payload.is_mobile_valid
            ctx.isEmailValid = payload.is_email_valid
            ctx.isActive = payload.is_active
            ctx.id = payload.id
            ctx.giftAmount = payload.gift_amount
            ctx.email = payload.email
            ctx.avatar = payload.avatar
            ctx.balance = payload.balance
            ctx.brandMemberNew = payload.brand_member_new
            ctx.city = payload.city
            ctx.columnDesc = payload.column_desc
            ctx.currentAddressId = payload.current_address_id
            ctx.currentInvoiceId = payload.current_invoice_id
            ctx.deliveryCardExpireDays = payload.delivery_card_expire_days
        }
    },
    actions: { 
        LOGIN_BY_ACCOUNT(context){
            context.commit("SET_USER_INFO",1)
        },
        async LOGIN_BY_USERID(context){
            if(localStorage.getItem("user_id")){
                try{
                  let res =await loginByUserId(localStorage.getItem("user_id"))
                  context.commit("SET_USER_INFO",res.data)
                }catch(err){
      
                }
            }
        }
    },
    getters: {  }
}

export  {
    user
}