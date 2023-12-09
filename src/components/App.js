import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const[taskDislplay,SetTaskDisplay]=useState(TASKS);
  const[filterCategory,SetFilterCategory]=useState(TASKS);

 const handleDeleteTask = (id) => {
  SetTaskDisplay(taskDislplay.filter((task,index) => {
    return index !== id;
}));
};
const handleFilterTask = (selectedCategory) => {
  SetFilterCategory(selectedCategory);
  const FilteredDate =[...TASKS];
  SetTaskDisplay(FilteredDate.filter((task) => {
    if (selectedCategory === 'All') {
      return true;
    }
    return task.category === selectedCategory;
  }));

}
function onTaskFormSubmit(formData){
  addTask(formData)
}
function addTask(element) {
  SetTaskDisplay([...taskDislplay, element]);
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} handleFilterTask={handleFilterTask} filterCategory={filterCategory}/>
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList TASKS={taskDislplay} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
