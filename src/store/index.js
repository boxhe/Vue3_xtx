import { createStore } from 'vuex'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,
        cart,
        category
    }
})