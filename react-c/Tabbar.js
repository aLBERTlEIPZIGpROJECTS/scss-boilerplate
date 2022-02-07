import Link from "./Link"

const Tabbar = () => {
    return(
        <div className="tabbar">
            { data && data.map <Link link = { data.link } txt = { data.txt } /> }
        </div>
    )
}

export default Tabbar