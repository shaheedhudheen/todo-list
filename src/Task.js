export const Task = (props) => {
    return (
      <div className="todo-item">
        <h1 style={{color : props.completed ? "green" : "red"}}>{props.taskName}</h1>
        <button onClick={ () => props.updateTask(props.id) }>done</button>
        <button onClick={ () => props.deleteTask(props.id) }>X</button>
      </div>
    );
}
