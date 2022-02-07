import Button from "./Button";

const ModalOffer = (props) => {
  return (
    <div className="modal-offer-container">
      <h3>{props.title}</h3>
      <p>{props.txt}</p>
      <div className="modal-offer__btn-container">
        <Button text="more info" link={props.link} />
        <Button text="get one" link={props.link} />
      </div>
    </div>
  );
};

export default ModalOffer;
