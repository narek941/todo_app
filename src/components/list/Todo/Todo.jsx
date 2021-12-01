import React, { useState, useRef, useEffect } from "react";
import "./Todo.css";

const Todo = (props) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({ id: null, text: "" });
  const [input, setInput] = useState(props.text);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  const textHandler = (e) => {
    e.preventDefault();
    props.updateTodo(props.id, input);
    setEdit({ id: null, text: "" });
    setShow(false);
  };

  if (edit.id) {
    return (
      <div className="edit_wrapper">
        <input
          name="edit_input"
          id="edit_input"
          className="edit_input"
          type="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button className="save_edit_btn" type="submit" onClick={textHandler}>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#ffffff"
          >
            <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path>
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <span>
        <input
          className="check_box"
          type="checkbox"
          onChange={props.completeTodo}
          checked={props.completed}
          value={props.id}
        ></input>
      </span>
      <p
        className="text"
        style={{ textDecoration: props.completed ? "line-through" : "unset" }}
      >
        {props.text}
      </p>
      <span onClick={() => setShow(true)}>
        <svg
          className="burger"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </span>

      <div style={{ display: show ? "block" : "none" }} ref={ref}>
        <div className="burger_content">
          <ul>
            <li>
              <button
                className="edit_btn"
                onClick={() => setEdit({ id: props.id, text: props.text })}
              >
                Edit
              </button>
            </li>
            <li>
              <button
                className="delete_btn"
                onClick={() => props.removeTodo(props.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
