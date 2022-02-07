import { useState } from "react";

const Accordion = () => {
  const data = [
    {
      id: 0,
      title: "txt1",
      body: "111111",
    },
    {
      id: 1,
      title: "txt2",
      body: "222222",
    },
    {
      id: 2,
      title: "txt3",
      body: "333333",
    },
  ];

  /* ESTE SISTEMA ES UNA CHUSTA. Haz el favor de encontrar una solución flexible */

  const [bodyClass, setBodyClass] = useState("accordion__entry-body-hidden");

  const updateBodyClass = () => {
    bodyClass === "accordion__entry-body-hidden"
      ? setBodyClass("accordion__entry-body-show")
      : setBodyClass("accordion__entry-body-hidden");
  };

  return (
    <div className="accordion">
      {data &&
        data.map((entry) => (
          <div
            className="accordion__entry"
            key={entry.id}
            onClick={updateBodyClass}
          >
            <p className="accordion__entry-title">{entry.title}</p>
            <p className={bodyClass}>{entry.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
