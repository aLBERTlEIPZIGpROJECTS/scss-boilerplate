import ContactField from "./ContactField";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="contact-form__container">
      {data &&
        data.map((field) => (
          <ContactField htmlfor={data.htmlfor} type={data.type} />
        ))}
        <Button type = "string" body = "string" text = "string" link = "string" />
    </div>
  );
};

export default ContactForm;
