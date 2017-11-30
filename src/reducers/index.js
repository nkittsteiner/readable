import { combineReducers } from 'redux'
import {
    GET_CATEGORIES,
    SET_CATEGORIES
} from '../actions'


const initialCategories = {    
}

const reducer = (state = initialCategories, action) =>{
    switch(action.type){
        case GET_CATEGORIES:
            return [
                ...state,
                action.categories
            ]
        case SET_CATEGORIES:
        return [
            ...state,
            action.categories
        ]            
        default:
            return state
    }
}

export default reducer;