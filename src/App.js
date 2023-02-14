import { useState } from "react";
import { Task } from "./Task";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const updateTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input className="input-field" type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed = {task.completed}
              updateTask = {updateTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
