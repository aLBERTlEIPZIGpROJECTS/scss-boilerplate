import { useState } from "react";

import Navbar from "./Navbar";

const Doener = () => {
  const [doenerClass, setDoenerClass] = useState("doener__rest");

  const changeDoenerClass = () => {
    doenerClass === "doener__rest"
      ? setDoenerClass("doener__active")
      : setDoenerClass("doener__rest");
  };

  return (
    <div className={doenerClass} onClick={changeDoenerClass}>
      <div className={`${doenerClass}-line1`}></div>
      <div className={`${doenerClass}-line2`}></div>
      <div className={`${doenerClass}-line3`}></div>
      <Navbar class={`${doenerClass}-navbar`} link="youtube.com" txt="txt" />
    </div>
  );
};

export default Doener;
