const EmployeeCard = (props) => {
    return(
        <div className="employee-card__container">
            <h3>{ props.title }</h3>
            <p>{ props.txt }</p>
            <div className="employee-card__btn-container">
                <button><a href={ props.link1}></a>{ props.txt1 }</button>
                <button><a href={ props.link2}></a>{ props.txt2 }</button>
            </div>
        </div>
    )
}

export default EmployeeCard