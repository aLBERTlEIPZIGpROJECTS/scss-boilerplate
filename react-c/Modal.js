import Button from "./Button";

const Modal = (props) => {
  return (
    <div className="modal__container">
      <h3 className="modal__title">{props.title}</h3>
      <p className="modal__body">{props.text}</p>
      <div className="modal__btn-container">
        <Button type={props.type} body={props.body} text="more info" link={props.link} />
        <Button type={props.type} body="get one" text="more info" link={props.link} />
      </div>
    </div>
  );
};

export default Modal;