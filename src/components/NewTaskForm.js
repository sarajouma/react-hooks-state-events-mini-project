import React,{useState} from "react";

function NewTaskForm({CATEGORIES,onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
    });

    function handleChange(event) {
      // name is the KEY in of the formData object we're trying to update
      const name = event.target.name;
      const value = event.target.value;

      setFormData({
        ...formData,
        [name]: value,
      });

    }
    const handleSubmit = (event) => {
      event.preventDefault();
      onTaskFormSubmit(formData); 
      setFormData({
        ...formData,
        ['text']: "",
        ['category']: ""
      });

    };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"  onChange={handleChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
             {CATEGORIES.map((category,index) =>{if (category === 'All')
              { return true;}
              else{
                return <option key={'selectcategory'+index}>{category}</option>;
              }})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
