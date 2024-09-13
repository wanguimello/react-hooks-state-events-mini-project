import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      text,
      category
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Produce");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;