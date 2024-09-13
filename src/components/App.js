import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(deletedTaskId) {
    const updatedTasks = tasks.filter(task => task.id !== deletedTaskId);
    setTasks(updatedTasks);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;