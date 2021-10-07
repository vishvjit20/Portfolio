import "./contactItem.scss";
import Card from "../card/Card";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactItem = ({ contact, email, linkedin }) => {
  return (
    <Card className="contact-item">
      <div>
        <BsFillTelephoneFill className="icon" />
        {contact}
      </div>
      <div>
        <MdEmail className="icon" />
        {email}
      </div>
      <div>
        <a href={linkedin} target="_blank">
          <BsLinkedin className="icon" />
        </a>
      </div>
    </Card>
  );
};

export default ContactItem;
