const state = () => ({
    session:{}
})

// getters
const getters = {
    name:(state, getters, rootState) => {
        console.log(state, getters, rootState)
        return state;
    }
}

// actions
const actions = {
    login({commit}){
        commit("login",{id:1,name:"惊鸿一瞥",age:30,sex:"男"})
    }
}

// mutations
const mutations = {
    login(state,user){
        state.session = {...state.session,...user}
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}