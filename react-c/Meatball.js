import { useState } from "react";

import Navbar from "./Navbar";

const Meatball = () => {
  const [meatballClass, setmeatballClass] = useState("meatball__rest");

  const changemeatballClass = () => {
    meatballClass === "meatball__rest"
      ? setmeatballClass("meatball__active")
      : setmeatballClass("meatball__rest");
  };

  return (
    <div className={meatballClass} onClick={changemeatballClass}>
      <div className={`${meatballClass}-line1`}></div>
      <div className={`${meatballClass}-line2`}></div>
      <div className={`${meatballClass}-line3`}></div>
      <Navbar class={`${meatballClass}-navbar`} link="youtube.com" text="text" />
    </div>
  );
};

export default Meatball;
