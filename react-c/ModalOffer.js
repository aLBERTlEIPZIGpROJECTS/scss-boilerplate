const ModalOffer = (props) => {
    return(
        <div className="modal-offer-container">
            <h3>{ props.title }</h3>
            <p>{ props.txt }</p>
            <div className="modal-offer__btn-container">
                <button><a href={ props.link1}></a>{ props.txt1 }</button>
                <button><a href={ props.link2}></a>{ props.txt2 }</button>
            </div>
        </div>
    )
}

export default ModalOffer