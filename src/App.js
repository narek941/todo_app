import React, { useState } from "react";
import { Header, Form, List } from "./components";
import "./App.css";

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, text: "Prove everyone that programming is fun", completed: false },
    { id: 2, text: "Build a beautiful To Do List app", completed: true },
    { id: 3, text: "Keep it simple", completed: true },
  ]);

  
  const addTodo = (todo) => {
    if (!todo.text.length > 0) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (e) => {
    let id = e.target.value;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === Number(id)) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (newValue.length === 0) {
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
    const removeArr = [...todos].filter((todo) => todo.id !== id);
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
