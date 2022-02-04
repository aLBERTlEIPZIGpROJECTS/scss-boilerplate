const ModalOption = (props) => {
    return(
        <div className="modal-option-container">
            <h3>{ props.title }</h3>
            <p>{ props.txt }</p>
            <div className="modal-option__btn-container">
                <button><a href={ props.link1}></a>{ props.txt1 }</button>
                <button><a href={ props.link2}></a>{ props.txt2 }</button>
            </div>
        </div>
    )
}

export default ModalOption