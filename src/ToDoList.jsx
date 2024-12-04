import React, { useState } from "react";
import './input.css';


function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function editTask(index) {}

  function moveToTheTop(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[0]] = [newTasks[0], newTasks[index]];
      setTasks(newTasks);
    }
  }

  function moveToTheBottom(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[tasks.length - 1]] = [
        newTasks[tasks.length - 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index - 1]] = [
        newTasks[index - 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => moveToTheTop(index)}>To the Top</button>
              <button onClick={() => moveToTheBottom(index)}>To the Bottom</button>
              <button onClick={() => moveTaskUp(index)}>Move Up</button>
              <button onClick={() => moveTaskDown(index)}>Move Down</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
