import React from "react";
import './title.css';

export default function Title({tasks, importantTasks, doneTasks}) {
    return (
        <div className="title">
            <h2>Active Tasks {tasks}</h2>
            <h2 className="importantTasks">Important Tasks: {importantTasks}</h2>
            <h2>Done tasks: {doneTasks}</h2>
        </div>
    )
}