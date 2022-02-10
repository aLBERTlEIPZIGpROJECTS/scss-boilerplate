const Link = (props) => {
  return <a href={props.link} target="_blank">
    {props.text} <img src={props.src} alt={props.text} />
    {props.img && <img src={props.src} alt={props.text} className="iconMed" />}
  </a>;
};

export default Link;
