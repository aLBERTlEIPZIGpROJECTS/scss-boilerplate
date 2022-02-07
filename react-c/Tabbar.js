import Link from "./Link";

const Tabbar = () => {
  return (
    <div className="tabbar">
      {data && data.map((link) => <Link link={link.link} text={link.text} />)}
    </div>
  );
};

export default Tabbar;
