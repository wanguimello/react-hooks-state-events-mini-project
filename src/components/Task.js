import React from "react";

function Task({ text, category, id, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default Task;