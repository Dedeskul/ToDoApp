import React from "react";
import './title.css'

export default function Title({tasks}) {
    return (
        <div className="title">
            <h2>Active Tasks {tasks}</h2>
        </div>
    )
}