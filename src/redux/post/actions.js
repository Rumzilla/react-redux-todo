import {
     GET_POST,
     GET_POSTS, 
     UPDATE_POST, 
     CREATE_POST, 
     DELETE_POST,
     CLEAR_LIST,
     CLEAR_DATA
} from "./types"
////Fetch list posts

const getPostsRequestPostsActionCreator = () => ({
    type: GET_POSTS.REQUEST
})

const getPostsReceivePostsActionCreator = (data) => ({
    type: GET_POSTS.RECEIVE,
    payload: data
})

const getPostsFailurePostsActionCreator = (err) => ({
    type: GET_POSTS.FAILURE,
    payload: err
})

//// Fetch post

const getPostRequestPostsActionCreator = () => ({
    type: GET_POST.REQUEST
})

const getPostReceivePostsActionCreator = (data) => ({
    type: GET_POST.RECEIVE,
    payload: data
})

const getPostFailurePostsActionCreator = (err) => ({
    type: GET_POST.FAILURE,
    payload: err
})

//// Update post

const updatePostRequestPostsActionCreator = () => ({
    type: UPDATE_POST.REQUEST
})

const updatePostReceivePostsActionCreator = (data) => ({
    type: UPDATE_POST.RECEIVE,
    payload: data
})

const updatePostFailurePostsActionCreator = (err) => ({
    type: UPDATE_POST.FAILURE,
    payload: err
})

//// Create post

const createPostRequestPostsActionCreator = () => ({
    type: CREATE_POST.REQUEST
})

const createPostReceivePostsActionCreator = (data) => ({
    type: CREATE_POST.RECEIVE,
    payload: data
})

const createPostFailurePostsActionCreator = (err) => ({
    type: CREATE_POST.FAILURE,
    payload: err
})

//// Delete post

const deletePostRequestPostsActionCreator = () => ({
    type: DELETE_POST.REQUEST
})

const deletePostReceivePostsActionCreator = (data) => ({
    type: DELETE_POST.RECEIVE,
    payload: data
})

const deletePostFailurePostsActionCreator = (err) => ({
    type: DELETE_POST.FAILURE,
    payload: err
})

const clearPostsActionCreator = () => ({
    type: CLEAR_LIST
})

const clearDataActionCreator = () => ({
    type: CLEAR_DATA
})

export {
    getPostsRequestPostsActionCreator,
    getPostsReceivePostsActionCreator,
    getPostsFailurePostsActionCreator,

    getPostRequestPostsActionCreator,
    getPostReceivePostsActionCreator,
    getPostFailurePostsActionCreator,

    updatePostRequestPostsActionCreator,
    updatePostReceivePostsActionCreator,
    updatePostFailurePostsActionCreator,

    createPostRequestPostsActionCreator,
    createPostReceivePostsActionCreator,
    createPostFailurePostsActionCreator,

    deletePostRequestPostsActionCreator,
    deletePostReceivePostsActionCreator,
    deletePostFailurePostsActionCreator,

    clearPostsActionCreator,
    clearDataActionCreator
}