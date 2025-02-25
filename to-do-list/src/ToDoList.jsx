import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Wake Up", "Eat Breakfast", "Workout"]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function handleInput(e) {
        setNewTask(e.target.value);
    }
    function delTask(index) {
        setTasks(t => t.filter((_,i) => i!=index));
    }
    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveDown(index) {
        if (index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div className="text-add">
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInput} />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{ task }</span>
                        <button className="del-btn" onClick={() => delTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveUp(index)}>☝</button>
                        <button className="move-btn" onClick={() => moveDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;