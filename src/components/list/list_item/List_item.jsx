import React from 'react';
import './List_item.css';

const List_item=(props) =>{
  return (
    <div className="wrapper">
    <span>
    <input className="check_box" type="checkbox" data-indeterminate="false" value=""></input>
    </span>
    <p className="text">
    lorem ipsum dolor    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    </p>
    <span>
    <svg className="burger" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
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

export default List_item;