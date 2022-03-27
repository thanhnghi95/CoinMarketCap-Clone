const initState = {
    mode:false
}
const SetLearnMore = (state=initState , action) =>{
    switch(action.type){
        case 'SET_LEARN_MORE':
            return{
                ...state,
                mode:action.mode
            }
        default:
            return state
    }
}
export default SetLearnMore