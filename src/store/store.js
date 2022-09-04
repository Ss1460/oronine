import { createStore } from 'vuex'
import regist from './modules/regist'
import createPersistedState from 'vuex-persistedstate'
import globals from './modules/globals'
export const store = createStore({
  modules:[
    globals
  ],
})