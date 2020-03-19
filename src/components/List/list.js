import React from "react";
import './list.css';

export default function Task({task, index, checked, doneTasks, deleteThisTask }) {
    return (
        <li className={!task.important ? 'element' : 'element importantTask'}>

            <div className={!task.done? 'info': 'id doneInfo'}>
                {task.title}
            </div>

            <div className="buttonsBlock">

                <button className="doneButton"
                        onClick={() => doneTasks(task.id)}>✔
                </button>

                <button className="important"
                        onClick={(e) => {
                            e.stopPropagation();
                            checked(task.id)
                        }}>❗️
                </button>

                <button className="delete" onClick={() => deleteThisTask(task.id)}>❌</button>
            </div>

        </li>
    )
}