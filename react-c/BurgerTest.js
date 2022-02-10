import { useState } from "react";


const BurgerTest = (props) => {

  return (
    <div className={`${props.class}__burger`}>
      <div className={`${props.class}__line1`}></div>
      <div className={`${props.class}__line2`}></div>
      <div className={`${props.class}__line3`}></div>
    </div>
  );
};

export default BurgerTest;
