import { combineReducers } from 'redux'
import {
    GET_POSTS,
    ADD_POST,
    EDIT_POST,
    GET_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT
} from '../actions'

const initialState = {
    posts: [],
    comments: []
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
        case GET_COMMENTS:
            return Object.assign({}, state, {
                comments: action.comments
            })
        case ADD_COMMENT:
            const { comment } = action
            return Object.assign({}, state, {
                comments: state.comments.concat([comment])
            })
            case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(x => x.id !== action.comment.id).concat([action.comment])
            })
        default:
            return state
    }
}

export default reducer;