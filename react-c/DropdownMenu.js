import Button from "./Button"
const DropdownMenu = (props) => {

    const data = ["option1", "option2", "option3", "option4"]

    return(
        <div className="dropdown-menu">
            <select name={ props.name } id= { props.id } className="dropdown-menu__select">
                
                { data && data.map((option) => <option className="dropdown-menu__option">{ option }</option>)
                }
            </select>
                <Button text = "send" link = "youtube.com" />
        </div>
    )
}

export default DropdownMenu