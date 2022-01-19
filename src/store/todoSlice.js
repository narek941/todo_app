import {createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice( {
    name: 'todos',
    initialState : {
        todos:
        [
        { id: 1, text: "Prove everyone that programming is fun", completed: false },
        { id: 2, text: "Build a beautiful To Do List app", completed: true },
        { id: 3, text: "Keep it simple", completed: true },
        ]
    },
      reducers: {
        setTodo(state,action) {
            state.todos.push(
                action.payload
            )
        },
        setCompleteTodo(state,action){
            const updatedTodo = state.todos.find(todo => todo.id === action.payload)
            updatedTodo.completed = !updatedTodo.completed
        },
        setUpdateTodo(state,action){
              const updatedTodo = state.todos.find(todo => todo.id === action.payload.todoId)
              updatedTodo.text = action.payload.newValue;
              
        },
        setRemoveTodo(state,action){
            state.todos= state.todos.filter((todo) => todo.id !== action.payload);
        },
      }
});

export const {setTodo,setCompleteTodo,setUpdateTodo,setRemoveTodo} = todoSlice.actions;
export default todoSlice.reducer;