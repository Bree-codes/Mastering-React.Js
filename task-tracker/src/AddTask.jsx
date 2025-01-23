import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
function AddTask({ onAdd }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
