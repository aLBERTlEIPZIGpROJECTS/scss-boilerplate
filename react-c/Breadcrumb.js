const Breadcrumb = () => {
  const data = ["opt1", "opt2", "opt3"];

  return (
    <div>
      <ul className="breadcrumb__container">
        {data &&
          data.map((option) => (
            <li className="breadcrumb__element" key={option}>
              {option}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
