import React,{useState} from 'react';
import {Header,Form,List} from './components'
import './App.css';

const App=() =>{
  const [todos, setTodos] = useState([{ id: 1,
    text: "input",
    completed:false}]);


const addTodo = todo => {
  if (!todo.text.length>0) {
    return;
  }

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
 };


 const completeTodo = e => {
  let id=e.target.value;

  
  const updatedTodos = todos.map(todo => {
      if (todo.id == id) {
          todo.completed = !todo.completed;
      }
      return todo;
  });
  setTodos(updatedTodos);
};



// const updateTodo = (todoId, newValue) => {
//   if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//   }

//   setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
// };

// const removeTodo = id => {
//   const removeArr = [...todos].filter(todo => todo.id !== id)

//   setTodos(removeArr);
// };



  return (
    <div className="App">
    <Header/>
    <Form addTodo={addTodo}/>
    <List todos={todos} completeTodo ={completeTodo}/>
    </div>
  );
}

export default App;
