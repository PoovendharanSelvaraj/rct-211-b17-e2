import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { getShoes } from "../Redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux";
import ShoeCard from "../Components/ShoeCard";
import styles from "styled-components";

const Shoes = () => {
  const dispatch = useDispatch();
  const shoesLists = useSelector(state=>state.shoes);
  

  useEffect(()=>{
    dispatch(getShoes())
  },[dispatch])
  console.log(shoesLists)
  return (
    <ShoesWrapper>
      <FilterWrapper>
      <Filter />
      </FilterWrapper>
      <ShoeListWrapper>
        {/* Map through the shoes list here using ShoeCard Component */}
        {shoesLists.length>0 && shoesLists.map((d)=>{
           return ( 
            <ShoeCardWrapper key={d.id} >
              <ShoeCard shoesData={d}/>
            </ShoeCardWrapper>
           
           )
        })}
      </ShoeListWrapper>
    </ShoesWrapper>
  );
};

export default Shoes;



const ShoesWrapper = styles.div`
   display: flex;
   width:95%;
   margin:auto;
`;

const FilterWrapper = styles.div`
  width:15%;
  border:1px solid black;
  padding: 0 0 0 30px;
`;

const ShoeListWrapper = styles.div`
  width:75%;
  border:1px solid black;
  display:grid;
  grid-template-columns: repeat(4,23%);
  justify-content: center;
`;

const ShoeCardWrapper=styles.div`

   border:1px solid blue;
   margin:5px 5px;
   padding:5px ;
`;