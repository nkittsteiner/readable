import { combineReducers } from 'redux'
import {
    GET_POSTS
} from '../actions'

const initialState = {
    posts: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POSTS:
            const { posts } = action
            return Object.assign({}, state, {
                posts: posts
            })
        default:
            return state
    }
}

export default reducer;