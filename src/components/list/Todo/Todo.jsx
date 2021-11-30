import React from 'react';
import './Todo.css';

const Todo = (props) => {

  console.log(props)
  return (
    <div className="wrapper">
      <span>
        <input 
        className="check_box" 
        type="checkbox" 
        data-indeterminate="false" 
        onChange={props.completeTodo}
        value={props.id}>
        
        </input>
      </span>
      <p className="text">
        {props.text}
      </p>
      <span>
        <svg
          className="burger"
          focusable="false"
          viewBox="0 0 24 24"

          aria-hidden="true">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </span>
      <div className="burger_content">
        <ul>
          <li className="edit_btn">
            Edit
          </li>
          <li className="delete_btn">
            Delete

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;