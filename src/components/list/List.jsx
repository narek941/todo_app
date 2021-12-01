import React, { useState } from "react";
import Todo from "./Todo/Todo";
import "./List.css";

const List = (props) => {
  const [showCompleted, setShowCompleted] = useState(true);
  const done_todos = [...props.todos].filter((todo) => todo.completed);
  const undone_todos = [...props.todos].filter((todo) => !todo.completed);

  return (
    <div>
      {undone_todos.map((item, i) => (
        <div>
          <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            completeTodo={props.completeTodo}
            updateTodo={props.updateTodo}
            removeTodo={props.removeTodo}
          />
        </div>
      ))}

      <div
        className="completed_wrapper"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        <p>Completed</p>
        <svg
          transform={showCompleted ? "rotate(180)": "rotate(0)" }
          width="24px"
          height="24px"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="#1D7EAF"
        >
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
        </svg>
      </div>

      <div style={{ display: showCompleted ? "block" : "none" }}>
        {done_todos.map((item) => (
          <div>
            <Todo
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              completeTodo={props.completeTodo}
              updateTodo={props.updateTodo}
              removeTodo={props.removeTodo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
