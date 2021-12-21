import React, { useState } from "react";
import PropTypes from "prop-types";

import Todo from "../Todo";
import ArrowSvg from "../../assets/svg/ArrowSvg";

import "./List.css";

const List = ({ todos, completeTodo, updateTodo, removeTodo }) => {
  const [isToggleArrow, setIsToggleArrow] = useState(true);

  const doneTodos = todos.filter((todo) => todo.completed);

  const undoneTodos = todos.filter((todo) => !todo.completed);

  const handleArrow = () => setIsToggleArrow(!isToggleArrow);

  const renderTodos = (todos) => {
    return todos.map(({ id, text, completed }) => (
      <Todo
        key={id}
        id={id}
        text={text}
        completed={completed}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    ));
  };

  const isRotateClasses = !isToggleArrow ? "rotate_deg" : "";

  const isRenderOrComplated = !isToggleArrow ? "display_none" : "";

  return (
    <div>
      {renderTodos(undoneTodos)}
      <div className="completed_wrapper" onClick={handleArrow}>
        <p>Completed</p>
        <div className={isRotateClasses}>
          <ArrowSvg />
        </div>
      </div>
      <div className={isRenderOrComplated}>{renderTodos(doneTodos)}</div>
    </div>
  );
};

List.propTypes = {
  todos: PropTypes.array,
  updateTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func,
};

export default List;
