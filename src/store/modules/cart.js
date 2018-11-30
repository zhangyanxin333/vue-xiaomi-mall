//状态
const state = {
    products:[]
}

//计算属性 计算总价
const getters = {
    totalPrice (state, getters) {
        
    }
}

// vue components(dispatch)  actions(commit)   mutations(mutate) state
const actions = {
    addToCart({ commit,state },{results,message}){
        let product = state.products.find(product => results.data.item_id == product.item_id)
        if(!!product){
            commit('update',product)
            
        }else{
            commit('push',{
                item_id:results.data.item_id,
                title:results.data.short_name,
                quantity:1,
                price:message.data.result.jumei_price,
                img:results.data.image_url_set.dx_image['320']
                /* attribute:message.data.result.size.attribute,
                size:message.data.result.size.size */
            })
        }
    },
    
    reduceToCart({ commit,state },{results,message}){
        let product = state.products.find(product => results.data.item_id == product.item_id)
        if(!!product){
            commit('update',product)
            
        }else{
            commit('push',{
                item_id:results.data.item_id,
                title:results.data.short_name,
                quantity:1,
                price:message.data.result.jumei_price,
                img:results.data.image_url_set.dx_image['320'],
                
            })
        }
    }
}

const mutations = {
    push (state, product) {
        state.products.push(product)
    },
    update (state, product) {
        product.quantity++
        
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
