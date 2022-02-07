import Button from "./Button"

const Card = (props) => {

    const body = props.body
    const position = props.position
    const text = props.text
    const buttons = props.buttons

    return(
        <div className="card">
            <h3>{props.title}</h3>
            {position && <p>{position}</p>}
            {text && <p>{text}</p>}
            {buttons && buttons.map((button) => <Button type = {button.type} body = {button.body} link = {button.link} text = {button.text} />)}
        </div>
    )
}

export default Card