import React, { useState } from "react";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [category , setCategory] = useState([]);
  
  const handleCheckbox=()=>{
    
  }


  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" onChange={handleCheckbox} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" onChange={handleCheckbox} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={handleCheckbox} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" onChange={handleCheckbox} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
