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
    DELETE_COMMENT,
    SORT_POSTS_BY_DATE,
    SORT_POSTS_BY_SCORE
} from '../actions'

const initialState = {
    posts: [],
    comments: [],
    sortByDateAscending: true,
    sortByScoreAscending: true
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
            let __post = state.posts.filter(x => x.id === comment.parentId)[0]
            __post.commentCount++ 
            return Object.assign({}, state, {
                comments: state.comments.concat([comment]),
                posts: state.posts.filter(x => x.id !== __post.id).concat([__post])
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
                comments: Array.from(state.comments, x => x.id === action.id ? _comment : x)
            })
        case DELETE_POST:
            return Object.assign({}, state, {
                posts: state.posts.filter(x => x.id !== action.post.id)
            })
        case DELETE_COMMENT:
            let dPost = state.posts.filter(x => x.id === action.comment.parentId)[0]
            dPost.commentCount--
            return Object.assign({}, state, {
                comments: state.comments.filter(x => x.id !== action.comment.id),
                posts: state.posts.filter(x => x.id !== dPost.id).concat([dPost])
            })
        case SORT_POSTS_BY_DATE:
            if(state.sortByDateAscending){
                return Object.assign({}, state, {
                    posts: Array.from(state.posts).sort((a,b)=> a.timestamp - b.timestamp),
                    sortByDateAscending: !state.sortByDateAscending
                })
            }
            else{
                return Object.assign({}, state, {
                    posts: Array.from(state.posts).sort((a, b)=> b.timestamp - a.timestamp),
                    sortByDateAscending: !state.sortByDateAscending
                })
            }
        case SORT_POSTS_BY_SCORE:
            if(state.sortByScoreAscending)
                return Object.assign({}, state, {
                    posts: Array.from(state.posts).sort((a,b) => a.voteScore - b.voteScore ),
                    sortByScoreAscending: !state.sortByScoreAscending
                })
            
            else 
                return Object.assign({}, state, {
                    posts: Array.from(state.posts).sort((b,a) => a.voteScore - b.voteScore ),
                    sortByScoreAscending: !state.sortByScoreAscending
                })

        default:
            return state
    }
}

export default reducer;