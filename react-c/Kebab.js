import { useState } from "react";

import Navbar from "./Navbar";

const Kebab = () => {
  const [kebabClass, setKebabClass] = useState("kebab__rest");

  const changekebabClass = () => {
    kebabClass === "kebab__rest"
      ? setKebabClass("kebab__active")
      : setKebabClass("kebab__rest");
  };

  return (
    <div className={kebabClass} onClick={changekebabClass}>
      <div className={`${kebabClass}-line1`}></div>
      <div className={`${kebabClass}-line2`}></div>
      <div className={`${kebabClass}-line3`}></div>
      <Navbar class={`${kebabClass}-navbar`} link="youtube.com" text="text" />
    </div>
  );
};

export default Kebab;
