import React from "react";
import Task from "./Task";
function TaskList({TASKS,handleDeleteTask}) {
  

  return (
    <div className="tasks">
      {TASKS.map((task,index) => (<Task key={'taskListItem'+index} task={task} index={index}   handleDeleteTask={() => handleDeleteTask(index)}/>))}
    </div>
  );
}

export default TaskList;
