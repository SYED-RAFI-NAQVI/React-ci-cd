import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
import { v4 as uuidv4 } from 'uuid';


import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

uuidv4();

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
