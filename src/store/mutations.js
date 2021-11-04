export default {
    login(state,user){
        state.session = {...state.session,...user}
    }
}