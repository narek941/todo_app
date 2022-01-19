import React from "react";
import { useSelector,useDispatch } from "react-redux";

import List from "./components/List";
import Form from "./components/Form";
import Header from "./components/Header";
import {setTodo,setCompleteTodo,setUpdateTodo,setRemoveTodo} from './store/todoSlice';
import "./App.css";

const App = () => {
  
  const dispatch = useDispatch();
  const todos= useSelector(state=> state.todos.todos)
  const addTodo = todo => dispatch(setTodo(todo));
  const completeTodo = id => dispatch(setCompleteTodo(id));
  const updateTodo = (todoId, newValue) => dispatch(setUpdateTodo({todoId, newValue}));
  const removeTodo = id => dispatch(setRemoveTodo(id));

  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} />
      <List
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
