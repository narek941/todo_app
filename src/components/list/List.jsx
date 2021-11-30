import React from 'react';
import List_item from './list_item/List_item';
import './List.css';

const List=() =>{
  return (
    <div>



      <div className="completed_wrapper">
          <p>Completed</p>
          <svg width="24px" height="24px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#1D7EAF"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
      </div>
       <List_item />
    
  </div>
  );
}

export default List;