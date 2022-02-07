import ContactField from "./ContactField"

const ContactForm = () => {

    return (
        <div className="contact-form__container">
            {data && data.map (<ContactField htmlfor = {data.htmlfor} type = {data.type} />)}
        </div>
    )
}

export default ContactForm