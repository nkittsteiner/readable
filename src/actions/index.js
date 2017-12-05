import * as API from '../utils/api'
export const SET_CATEGORIES = 'SET_CATEGORIES'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POST_BY_CATEGORIES = 'GET_POST_BY_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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

export const getCategories = categories => ({
    type: GET_CATEGORIES,
    categories  
})

export const setCategories = categories => ({
    type: SET_CATEGORIES,
    categories  
})
