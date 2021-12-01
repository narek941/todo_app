import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
      completed: false,
    });
    setInput("");
  };

  return (
    <>
      <form>
        <input
          className="add_todo_input"
          type="text"
          name="todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="To Do Text"
        />
        <button className="add_todo_btn" onClick={handleSubmit}>
          +
        </button>
      </form>
    </>
  );
};

export default Form;
