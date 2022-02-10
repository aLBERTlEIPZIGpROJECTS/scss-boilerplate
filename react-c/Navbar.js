import Link from "./Link";

const Navbar = (props) => {

  const links = props.links

  return (
    <div className={props.class} className= {props.class}>
      <Link link = {links[0].link} text = {links[0].text} className="navbar-link"/>
      <Link link = {links[1].link} text = {links[1].text} className="navbar-link"/>
      <Link link = {links[2].link} text = {links[2].text} className="navbar-link"/>
     {/*  {
        links && links.map((link) => (
          <Link link = { link.link } txt = { link.txt } key= {link.id} className="navbar-link"/>
      ))} */}
    </div>
  );
};

export default Navbar;
