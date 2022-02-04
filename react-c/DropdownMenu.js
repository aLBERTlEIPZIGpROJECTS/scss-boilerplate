import SelectOption from "./SelectOption"

const DropdownMenu = (props) => {
    return(
        <div className="dropdown">
            <h3>{ props.title }</h3>
            <select name="" id="" className="dropdown__options">
                <DropdownOption var = "" />
            </select>
        </div>
    )
}

export default DropdownMenu