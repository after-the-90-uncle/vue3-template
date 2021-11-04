import {createStore} from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import home from './modules/home'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

const state = () => ({
    session:{}
})


const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    home,
  },
  state,
  mutations,
  actions,
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})