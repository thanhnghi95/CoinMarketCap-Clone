const initState = {
    mode:true
}
const SetCard = (state=initState , action) =>{
    switch(action.type){
        case 'SET_CARD':
            return{
                ...state,
                mode:action.mode
            }
        default:
            return state
    }
}
export default SetCard 