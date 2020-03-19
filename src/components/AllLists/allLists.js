import React from "react";
import Task from "../List/list";
import './allLists.css';

export default function AllLists({activeTasks, doneTasks, check, checkElement, deleteTask}) {

    return (
        <div>
            <ul className="allTasksList">
                {[...activeTasks, ...doneTasks].map((task, index) => {
                    return (
                        <Task
                            task={task}
                            key={task.id}
                            index={index}
                            checked={check}
                            doneTasks={checkElement}
                            deleteThisTask={deleteTask}
                        />)
                })}
            </ul>
        </div>
    );
}