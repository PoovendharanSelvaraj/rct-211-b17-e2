import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import { getShoes } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams,setSearchParams] =useSearchParams();
  const urlCategory = searchParams.getAll('category');
  const [category , setCategory] = useState( urlCategory || []);

  const dispatch = useDispatch();
  
  const handleCheckbox=(e)=>{
    const option = e.target.value;

    let newCategory = [...category];
    if(category.includes(option)){
       newCategory.splice(newCategory.indexOf(option),1)
    }
    else{
       newCategory.push(option)
    }
    setCategory(newCategory)
  }
//  console.log(category)
  useEffect(()=>{
    if(category){
      setSearchParams({category})
      dispatch(getShoes({params:{category}}))
    }
  },[dispatch,category,searchParams,setSearchParams])

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" onChange={handleCheckbox} defaultChecked={category.includes('Sneakers')} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" onChange={handleCheckbox} defaultChecked={category.includes('Loafers')} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={handleCheckbox} defaultChecked={category.includes('Canvas')} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" onChange={handleCheckbox} defaultChecked={category.includes('Boots')} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
