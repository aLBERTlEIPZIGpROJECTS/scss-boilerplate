import Link from "./Link";

const Tabbar = () => {
  return (
    <div className="tabbar">
      {data && data.map((link) => <Link link={link.link} txt={link.txt} />)}
    </div>
  );
};

export default Tabbar;
