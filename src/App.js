import React from 'react';
import ToDoList from './ToDoList.jsx';
import './input.css';
import './output.css'

function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline p-5">TO DO LIST</h1>
      <ToDoList />
    </div>
  );
}

export default App;
