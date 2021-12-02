import React, { useState } from "react";

import List from "./components/List";
import Form from "./components/Form";
import Header from "./components/Header";
import { getTodo } from "./assets/utils/TodoData";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(getTodo);
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (newValue.trim().length === 0) {
      return;
    }
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.text = newValue;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

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
