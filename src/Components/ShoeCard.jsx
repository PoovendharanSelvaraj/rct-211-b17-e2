import React from "react";
import styles from "styled-components";

const ShoeCard = ({shoesData}) => {
  let shoeId = shoesData.id;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} >
      <ShoeImageWrapper>
        <img data-cy="shoe-card-image" src={shoesData.image} alt="" />
      </ShoeImageWrapper>
      <div>
        <div data-cy="shoe-name">{shoesData.name}</div>
        <div data-cy="shoe-category">{shoesData.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;

const ShoeImageWrapper = styles.div`
    height:300px;
    img{
      width:100%;
      height:100%;
    }
`;
