import "./contact.scss";
import ContactItem from "./ContactItem";
import MediaLinks from "./MediaLinks";
import Social from "./Social";

const Contact = () => {
  const contactData = ["singhvishwajeet1998@gmail.com", "+91-9584311671"];
  return (
    <div className="contact" id="contact">
      <div className="heading">Contact Me</div>
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
