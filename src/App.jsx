import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { getTodos } from './redux/todo/selectors';
import AddTodoContainer from './containers/add-todo';
import TodoListContainer from './containers/todo-list';
import FilterButtons from './containers/filter-buttons';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import postOperations from './redux/post/thunk';
import FormModule from './containers/form';

function App() {
  const posts = useSelector(state => state.posts.list)
  const post = useSelector(state => state.posts.data)
  const create = useSelector(state => state.posts.list)
  const update = useSelector(state => state.posts.data)
  const del = useSelector(state => state.posts.data)

  const dispatch = useDispatch()

  const {fetchPosts, fetchPost, createPost, updatePost, deletePost} = postOperations

  useEffect(() => {
    dispatch(postOperations.deletePost())
  })
  console.log(del)

  useEffect(() => {
    dispatch(postOperations.fetchPosts())
  }, [])
  console.log(posts)

  useEffect(() => {
    dispatch(postOperations.fetchPost(1))
  }, [])
  console.log(post)

  useEffect(() => {
    dispatch(postOperations.createPost())
  }, [])
  console.log(create)

  useEffect(() => {
    dispatch(postOperations.updatePost())
  }, [])
  console.log(update)


  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <FilterButtons />
      <FormModule />
    </div>
  );
}

export default App;
