import  { useState } from 'react';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';
import './App.css';


function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task =>
        filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
    );

    return (
        <div className="app">
            <h1>Task Tracker</h1>
            <AddTask onAdd={addTask} />
            <div className="filter">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
            </div>
            <TaskList
                tasks={filteredTasks}
                onToggle={toggleComplete}
                onDelete={deleteTask}
            />
        </div>
    );
}

export default App;
