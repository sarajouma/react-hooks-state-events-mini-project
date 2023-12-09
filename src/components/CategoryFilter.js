import React from "react";

function CategoryFilter({CATEGORIES,handleFilterTask,filterCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
      CATEGORIES.map((category) => (<button className={filterCategory==category ? 'selected':''} key={'btn'+category} onClick={() => handleFilterTask(category)}>{category}</button>))
    }
    </div>
  );
}

export default CategoryFilter;
