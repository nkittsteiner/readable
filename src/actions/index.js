import * as API from '../utils/api'
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

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

export const editPost = (post) => ({
    type: EDIT_POST,
    post
})

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

export const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})