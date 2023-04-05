import React, { useState } from "react";
// import "./FoodMenu.css";

// function AddItem({ items, title }) {
//   return (
//     <section className="col-md-4">
//       <h1>Add an Item</h1>
//     </section>
//   );
// }

function AddItem({ addItem }) {
  const [formData, setFormData] = useState({
    type: "",
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    addItem({ ...formData });
    setFormData({
      type: "",
      id: "",
      name: "",
      description: "",
      recipe: "",
      serve: "",
    });
  };

  return (
    <div className="col-md-4">
      <h1>Add an Item</h1>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="type">Item Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="drinks">Drinks</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input
            onChange={handleChange}
            type="text"
            name="id"
            value={formData.id}
            id="id"
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={formData.description}
            id="description"
          />
        </div>
        <div>
          <label htmlFor="recipe">Recipe</label>
          <input
            onChange={handleChange}
            type="text"
            name="recipe"
            value={formData.recipe}
            id="recipe"
          />
        </div>
        <div>
          <label htmlFor="serve">Serve</label>
          <input
            onChange={handleChange}
            type="text"
            name="serve"
            value={formData.serve}
            id="serve"
          />
        </div>
        <button id="newBoxButton">Add a new item!</button>
      </form>
    </div>
  );
}

export default AddItem;
