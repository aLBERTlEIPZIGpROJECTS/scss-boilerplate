const EmployeeCard = (props) => {
  return (
    <div className="employee-card__container">
      <h3>{props.title}</h3>
      <p>{props.position}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default EmployeeCard;
