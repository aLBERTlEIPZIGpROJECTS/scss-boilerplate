import Button from "./Button"

const ModalOption = (props) => {
    return(
        <div className="modal-option-container">
            <h3>{ props.title }</h3>
            <p>{ props.txt }</p>
            <div className="modal-option__btn-container">
                <Button text = "more info" link = { props.link }/>
                <Button text = "get one" link = { props.link }/>
            </div>
        </div>
    )
}

export default ModalOption