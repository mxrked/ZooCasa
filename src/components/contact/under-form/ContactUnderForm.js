import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactUnderForm = () => {
  return (
    <div id="contactUnderForm">
      <div
        className="contact-under-form-cnt aos-fade"
        data-aos="fade-in"
        data-aos-delay="600"
        data-aos-duration="600"
      >
        <div className="contact-under-form-contact">
          <span>contact@basicallyeasy.com</span>

          <span>+1 202-555-0506</span>
        </div>

        <div className="contact-under-form-socials">
          <FaTwitter className="fa-icon page-transition" />

          <FaFacebook className="fa-icon page-transition" />

          <FaInstagram className="fa-icon page-transition" />

          <FaLinkedin className="fa-icon page-transition" />
        </div>
      </div>
    </div>
  );
};

export default ContactUnderForm;
