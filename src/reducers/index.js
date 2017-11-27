import { combineReducers } from 'redux'
import * as API from '../utils/api'
import {
    GET_CATEGORIES
} from '../actions'


const reducer = (state = {}, action) =>{
    switch(action.type){
        case GET_CATEGORIES:            
            return [
                ...state,
                action.categories
            ]
        default:
            return state
    }
}

export default reducer;