import DropdownMenu from "./DropdownMenu"
import Button from "./Button"

const DatePicker = () => {
    return(
        <div className="date-picker">
            <h3>Pick a date</h3>
            <DropdownMenu />
            <DropdownMenu />
            <DropdownMenu />
            <Button txt = "send" />
        </div>
    )
}