import { useState } from "react"

const Toggle = () => {

    const [ toggle, setToggle] = useState("toggle-rest")

    const updateToggle = () => {
        toggle === "toggle-rest" ? setToggle("toggle-active") : setToggle("toggle-rest")
    }

    return(
        <div className={ toggle } onClick={ updateToggle }>
            <div className={`${ toggle }__btn`}></div>
        </div>
    )
}

export default Toggle