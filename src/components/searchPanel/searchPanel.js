import React, {useState} from "react";
import './searchPanel.css';

export default function SearchPanel({addNewTask}) {
    const [text, setText] = useState('');

    return (
        <div>
            <form onSubmit={(e) => addNewTask(text, e)}>
                <input type="text"
                       value={text}
                       className="searchPanel"
                       onChange={(e) => {
                           setText(e.target.value)
                       }}
                />
                <button className="searchPanelButton">Add Task</button>
            </form>
        </div>
    )
}