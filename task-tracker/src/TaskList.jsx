import 'react';

// eslint-disable-next-line react/prop-types
function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <ul>
            {/* eslint-disable-next-line react/prop-types */}
            {tasks.map((task) => (
                <li key={task.id}>
          <span
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
              onClick={() => onToggle(task.id)}
          >
            {task.text}
          </span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
