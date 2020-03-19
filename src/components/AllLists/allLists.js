import React from "react";
import Task from "./list";
import './allLists.css';

export default function AllLists({tasks, check, checkElement}) {

    return (
        <div>
            <ul className="allTasksList">
                {tasks.map((task, index) => {
                    return (
                        <Task
                            task={task}
                            key={task.id}
                            index={index}
                            checked={check}
                            doneTasks={checkElement}
                        />)
                })}
            </ul>
        </div>
    );
}