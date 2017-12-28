import * as API from '../utils/api'


export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_POST = 'VOTE_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const SORT_POSTS_BY_DATE = 'SORT_POSTS_BY_DATE'
export const SORT_POSTS_BY_SCORE = 'SORT_POSTS_BY_SCORE'

export const getPosts = posts => ({
    type: GET_POSTS,
    posts
})

export const getPostsAsync = () => {
    return dispatch => {
        return API.getAllPosts().then(
            data => dispatch(getPosts(data))
        )
    }
}

export const addPost = (post) => ({
    type: ADD_POST,
    post
})

export const addPostAsync = (post) => {
    return dispatch => {
        API.insertPost(post).then(
            data => dispatch(addPost(Object.assign(data,post)))
        )
    }
}

export const editPost = (post) => ({
    type: EDIT_POST,
    post
})

export const editPostAsync = (post) => {
    return dispatch => {
        API.updatePost(post).then(data => {
            dispatch(editPost(data))            
        })
    }
}

export const getComments = (post_id, comments) => ({
    type: GET_COMMENTS,
    comments
})

export const getCommentsAsync = (post_id) => {
    return dispatch => {
        return API.getComments(post_id).then(
            data => dispatch(getComments(post_id, data))
        )
    }
}

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

export const addCommentAsync = (comment) => {
    return dispatch => {
        API.insertComment(comment).then(
            data => dispatch(addComment(Object.assign(data,comment)))
        )
    }
}

export const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

export const editCommentAsync = (comment) => {
    return dispatch => {
        API.updateComment(comment).then(data => {
            dispatch(editComment(data))            
        })
    }
}

export const votePostAsync = (id, vote) => {
    return dispatch => {
        return API.votePost(id, vote).then (
            data => dispatch(votePost(id, vote))
        )
    }
}

export const votePost = (id, vote) => ({
    type: VOTE_POST,
    id,
    vote
})

export const voteCommentAsync = (id, vote) => {
    return dispatch => {
        return API.voteComment(id, vote).then (
            data => dispatch(voteComment(id, vote))
        )
    }
}

export const voteComment = (id, vote) => ({
    type: VOTE_COMMENT,
    id,
    vote
})

export const deletePostAsync = (post) => {
    return dispatch => {
        return API.deletePost(post).then (
            data => dispatch(deletePost(post))
        )
    }
}

export const deletePost = (post) => ({
    type: DELETE_POST,
    post
})

export const deleteCommentAsync = (comment) => {
    return dispatch => {
        return API.deleteComment(comment).then (
            data => dispatch(deleteComment(comment))
        )
    }
}

export const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

export const sortPostByDate = () => ({
    type: SORT_POSTS_BY_DATE
})

export const sortPostByScore = () => ({
    type: SORT_POSTS_BY_SCORE
})