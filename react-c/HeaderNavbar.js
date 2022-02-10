import { useState } from "react"

import Burger from "./Burger"
import BurgerTest from "./BurgerTest"
import Navbar from "./Navbar"

const HeaderNavbar = (props) => {


    const links = props.links

    const [ headerNavClass, setHeaderNavClass] = useState("header-navbar__rest");

    const changeHeaderNavClass = () => {
        headerNavClass === "header-navbar__rest" ? setHeaderNavClass("header-navbar__active") : setHeaderNavClass("header-navbar__rest")
    }

    return(
        <div className= { headerNavClass }>
            <Navbar links = { links } class={`${headerNavClass}__navbar`}/>
            <BurgerTest class={`${headerNavClass}__burger`}  onClick={changeHeaderNavClass} />
        </div>
    )
}

export default HeaderNavbar