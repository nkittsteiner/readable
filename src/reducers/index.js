import { combineReducers } from 'redux'
import {
    GET_POSTS,
    ADD_POST,
    EDIT_POST,
    GET_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT,
    VOTE_POST,
    VOTE_COMMENT,
    DELETE_POST,
    DELETE_COMMENT
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
        case VOTE_POST:
            let _post = state.posts.filter(x => x.id === action.id)[0]
            if(action.vote === 'upVote')
                _post.voteScore = _post.voteScore + 1
            else
                _post.voteScore = _post.voteScore - 1

            return Object.assign({}, state, {
                posts: state.posts.filter(x => x.id !== action.id).concat([_post])
            })
        case VOTE_COMMENT:
            let _comment = state.comments.filter(x => x.id === action.id)[0]
            if(action.vote === 'upVote')
                _comment.voteScore = _comment.voteScore + 1
            else
                _comment.voteScore = _comment.voteScore - 1

            return Object.assign({}, state, {
                comments: state.comments.filter(x => x.id !== action.id).concat([_comment])
            })
        case DELETE_POST:
            return Object.assign({}, state, {
                posts: state.posts.filter(x => x.id !== action.post.id)
            })
        case DELETE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(x => x.id !== action.comment.id)
            })
        default:
            return state
    }
}

export default reducer;