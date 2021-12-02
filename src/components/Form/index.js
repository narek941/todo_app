import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Form.css";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleValue = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("Input field must be filled out.");
      return;
    }
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: value,
      completed: false,
    });
    setValue("");
  };

  return (
    <>
      <form>
        <input
          className="add_todo_input"
          type="text"
          name="todo"
          value={value}
          onChange={handleValue}
          placeholder="To Do Text"
        />
        <button className="add_todo_btn" onClick={handleSubmit}>
          +
        </button>
      </form>
    </>
  );
};
Form.propTypes = {
  addTodo: PropTypes.func,
};

export default Form;
