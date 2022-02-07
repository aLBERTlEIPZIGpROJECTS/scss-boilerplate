import { useState } from "react";

import Navbar from "./Navbar";

const Burger = () => {
  const [burgerClass, setBurgerClass] = useState("burger__rest");

  const changeBurgerClass = () => {
    burgerClass === "burger__rest"
      ? setBurgerClass("burger__active")
      : setBurgerClass("burger__rest");
  };

  return (
    <div class={burgerClass} onClick={changeBurgerClass}>
      <div className={`${burgerClass}-line1`}></div>
      <div className={`${burgerClass}-line2`}></div>
      <div className={`${burgerClass}-line3`}></div>
      <Navbar class={`${burgerClass}-navbar`} link="youtube.com" text="text" />
    </div>
  );
};

export default Burger;
