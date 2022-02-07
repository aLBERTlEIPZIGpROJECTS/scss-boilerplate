import Button from "./Button"

const ProductCard = (props) => {
    return(
        <div className="product-card__container">
            <h3>{ props.title }</h3>
            <p>{ props.txt }</p>
            <div className="product-card__btn-container">
                <Button link = { props.link } text = "more info" />
                <Button link = { props.link } text = "get now"/>
            </div>
        </div>
    )
}

export default ProductCard