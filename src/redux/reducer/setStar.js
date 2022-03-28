const initState = {
    star:''
}
const SetStar = (state=initState , action) =>{
    switch(action.type){
        case 'SET_STAR':
            return{
                ...state,
                star:action.star
            }
        default:
            return state
    }
}
export default SetStar