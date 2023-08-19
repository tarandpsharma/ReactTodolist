import React, { useState } from "react";
import './App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasksList((prevTasks) => [...prevTasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasksList(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasksList.map((taskItem, index) => (
          <li key={index} style={{ textDecoration: taskItem.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              onChange={() => toggleComplete(index)}
              checked={taskItem.completed}
            />
            {taskItem.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
