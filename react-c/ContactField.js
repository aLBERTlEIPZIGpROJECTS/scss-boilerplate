const ContactField = (props) => {
  return (
    <div className="contact-field">
      <label htmlFor={props.htmlfor} className="contact-field__label">
        <input type={props.type} className="contact-field__input" />
      </label>
    </div>
  );
};

export default ContactField;
