import React from 'react';
import './Form.css';

const Form=() =>{
  return (
    <form>
      
        <label>
      <input className="add_todo_input" type="text" name="name" />
    </label>
  
        <button className="add_todo_btn" type="submit">
    +
        </button>
  
    
    
  </form>
  );
}

export default Form;