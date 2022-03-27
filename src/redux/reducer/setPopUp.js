const initState = {
    mode:false
}

const SetPopUp = (state=initState , action) =>{
    switch(action.type){
        case 'SET_POP_UP':
            return{
                ...state,
                mode:action.mode
            }
        default:
            return state
    }
}
export default SetPopUp