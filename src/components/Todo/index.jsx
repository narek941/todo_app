import React, { useState, useRef } from "react";
import BurgerSvg from "../../assets/svg/BurgerSvg";
import SaveSvg from "../../assets/svg/SaveSvg";
import useOnClickOutside from '../../hooks/useOnClickOutside';
import PropTypes from 'prop-types';
import "./Todo.css";

const Todo = ({text,id,completed,updateTodo,completeTodo,removeTodo}) => {

  const [isShow, setIsShow] = useState(false);
  const [edit, setEdit] = useState({ id: null, text: "" });
  const [value, setValue] = useState(text);
  const ref = useRef(null);
  const valueHandler=(e) => setValue(e.target.value);
  const showHandler=(e) => setIsShow(true);
  const editHandler=()=> setEdit({ id: id, text: text });
  const textHandler = (e) => {
    e.preventDefault();
    updateTodo(id, value);
    setEdit({ id: null, text: "" });
    setIsShow(false);
  };
  useOnClickOutside(ref, () => setIsShow(false));




    if (edit.id) {
    return (
      <form className="edit_wrapper">
        <input
          name="editInput"
          id="editInput"
          className="edit_input"
          type="input"
          value={value}
          onChange={valueHandler}>
          </input>
        <button className="save_edit_btn" type="submit" onClick={textHandler}>
          <SaveSvg />
        </button>
      </form>
    );
  }

  return (
    <div className="wrapper">
      <span>
        <input
          className="check_box"
          type="checkbox"
          onChange={()=>completeTodo(id)}
          checked={completed}
          value={id}
        ></input>
      </span>
      <p
        className= {completed ? "textDecoration text" : "text"}>
        {text}
      </p>
      <span onClick={showHandler}>
      <BurgerSvg />
      </span>

      <div className= {!isShow && 'display_none'} ref={ref}>
        <div className="burger_content">
          <div className="btn_wrapper">
            <div className="btn_inner">
              <button
                className="edit_btn"
                onClick={editHandler}>
                Edit
              </button>
            </div>
            <div>
              <button
                className="delete_btn"
                onClick={() => removeTodo(id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


Todo.propTypes = {

  text: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool,
  updateTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func

}



export default Todo;
