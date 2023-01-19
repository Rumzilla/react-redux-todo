import { createPostFailurePostsActionCreator, createPostReceivePostsActionCreator, createPostRequestPostsActionCreator, deletePostFailurePostsActionCreator, deletePostReceivePostsActionCreator, deletePostRequestPostsActionCreator, getPostFailurePostsActionCreator, getPostReceivePostsActionCreator, getPostsFailurePostsActionCreator, getPostsReceivePostsActionCreator, getPostsRequestPostsActionCreator, updatePostFailurePostsActionCreator, updatePostReceivePostsActionCreator, updatePostRequestPostsActionCreator } from "./actions"

const fetchPosts = () => async (dispatch) => {
    dispatch(getPostsRequestPostsActionCreator())
    try {
        const req = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(getPostsReceivePostsActionCreator(parsedData))
        }, 2000)
    } catch (e) {
        dispatch(getPostsFailurePostsActionCreator)
    }
}

const fetchPost = (id) => async (dispatch) => {
    dispatch(getPostsRequestPostsActionCreator())
    try {
        const req = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(getPostReceivePostsActionCreator(parsedData))
        }, 2000)
    }
    catch (e) {
        dispatch(getPostFailurePostsActionCreator(e))
    }
}

const createPost = () => async (dispatch) => {
    dispatch(createPostRequestPostsActionCreator())
    try {
        const req = await fetch (`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: 'Test',
                body: 'Text',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const parsedData = await req.json()
        console.log(parsedData)
        setTimeout(() => {
            dispatch(createPostReceivePostsActionCreator(parsedData))
        }, 20)
    }
    catch (e) {
        dispatch(createPostFailurePostsActionCreator(e))
    }
}

const updatePost = () => async (dispatch) => {
    dispatch(updatePostRequestPostsActionCreator())
    try {
        const req = await fetch (`https://jsonplaceholder.typicode.com/posts/1`, {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'Test update',
                body: 'body',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const parsedData = await req.json()
        console.log(parsedData)
        setTimeout(() => {
            dispatch(updatePostReceivePostsActionCreator(parsedData))
        }, 20)
    }
    catch (e) {
        dispatch(updatePostFailurePostsActionCreator(e))
    }
}

const deletePost = () => async (dispatch) => {
    dispatch(deletePostRequestPostsActionCreator())
    try {
        const req = await fetch (`https://jsonplaceholder.typicode.com/posts/1`, {
            method: 'DELETE'
        })
        const parsedData = await req.json()
        console.log(parsedData)
        setTimeout(() => {
            dispatch(deletePostReceivePostsActionCreator(parsedData))
        }, 2000)
    }
    catch (e) {
        dispatch(deletePostFailurePostsActionCreator(e))
    }
}


export default {
    fetchPosts,
    fetchPost,
    createPost,
    updatePost,
    deletePost
}