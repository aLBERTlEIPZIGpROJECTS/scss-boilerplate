import Link from "./Link";
const Button = (props) => {
  return (
    <div className="button">
      <p>{props.text}</p>
      <Link link={props.link} text={props.text} />
    </div>
  );
};

export default Button;
