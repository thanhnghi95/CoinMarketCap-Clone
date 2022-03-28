import { combineReducers } from "redux"
import SetPopUp  from "./setPopUp"
import SetLearnMore from "./setLearnMore"
import SetCard from "./setCard"
import SetStar  from "./setStar"

export const rootReducer = combineReducers({
    PopUpState: SetPopUp,
    LearnMoreState:SetLearnMore,
    CardState:SetCard ,
    SetStarState: SetStar
})