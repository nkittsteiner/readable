import { combineReducers } from 'redux'
import {
    GET_POSTS, ADD_POST, EDIT_POST
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
        case ADD_POST:
            const { post } = action
            return Object.assign({}, state, {
                posts: state.posts.concat([post])
            })
        case EDIT_POST:
            return Object.assign({}, state, {
                posts: state.posts.filter(x => x.id !== action.post.id).concat([action.post])
            })
        default:
            return state
    }
}

export default reducer;