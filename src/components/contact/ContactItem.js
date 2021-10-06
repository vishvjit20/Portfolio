import "./contactItem.scss";
import Card from "../card/Card";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactItem = ({ contact, email }) => {
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
    </Card>
  );
};

export default ContactItem;
