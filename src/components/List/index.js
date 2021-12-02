import React, { useState } from "react";
import PropTypes from "prop-types";

import Todo from "../Todo";
import ArrowSvg from "../../assets/svg/ArrowSvg";

import "./List.css";

const List = ({ todos, completeTodo, updateTodo, removeTodo }) => {
  const [isShowCompleted, setIsShowCompleted] = useState(true);

  const doneTodos = [...todos].filter((todo) => todo.completed);

  const undoneTodos = [...todos].filter((todo) => !todo.completed);

  const handleArrow = () => setIsShowCompleted(!isShowCompleted);

  const renderDoneTodos = () =>
    doneTodos.map(({ id, text, completed }) => (
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

  const renderUndoneTodos = () =>
    undoneTodos.map(({ id, text, completed }) => (
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

  const isRotateClasses = !isShowCompleted ? "rotate_deg" : "";

  const isRenderOrComplated = !isShowCompleted ? "display_none" : "";

  return (
    <div>
      {renderUndoneTodos()}
      <div className="completed_wrapper" onClick={handleArrow}>
        <p>Completed</p>
        <div className={isRotateClasses}>
          <ArrowSvg />
        </div>
      </div>
      <div className={isRenderOrComplated}>{renderDoneTodos()}</div>
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
