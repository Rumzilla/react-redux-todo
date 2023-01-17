import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { getTodos } from './redux/todo/selectors';
import AddTodoContainer from './containers/add-todo';
import TodoListContainer from './containers/todo-list';
import FilterButtons from './containers/filter-buttons';

function App() {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <FilterButtons />
    </div>
  );
}

export default App;
