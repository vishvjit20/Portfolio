import { consts, contactData } from "../../data";
import "./contact.scss";
import ContactItem from "./ContactItem";
import MediaLinks from "./MediaLinks";
import Social from "./Social";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="heading">{consts[4]}</div>
      <div className="header">
        <ContactItem contact={contactData[1]} email={contactData[0]} />
      </div>
      <div className="footer">
        <Social />
        <MediaLinks />
      </div>
    </div>
  );
};

export default Contact;
