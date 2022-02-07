import { useState } from "react";

import Navbar from "./Navbar";

const AltBurger = () => {
  const [altBurgerClass, setAltBurgerClass] = useState("altBurger__rest");

  const changeAltBurgerClass = () => {
    altBurgerClass === "altBurger__rest"
      ? setAltBurgerClass("altBurger__active")
      : setAltBurgerClass("altBurger__rest");
  };

  return (
    <div className={altBurgerClass} onClick={changeAltBurgerClass}>
      <div className={`${altBurgerClass}-line1`}></div>
      <div className={`${altBurgerClass}-line2`}></div>
      <div className={`${altBurgerClass}-line3`}></div>
      <Navbar class={`${altBurgerClass}-navbar`} link="youtube.com" text="text" />
    </div>
  );
};

export default AltBurger;
