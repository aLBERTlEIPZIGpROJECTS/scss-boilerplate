import Link from "./Link";
const Button = (props) => {
  return (
    <button className="button" type={props.type}>
      <p>{props.body}</p>
      <Link link={props.link} text={props.text} />
    </button>
  );
};

export default Button;
