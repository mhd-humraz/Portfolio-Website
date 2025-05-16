import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:muhammadhamraz201@mail.com" data-cursor="disable">
                humraz@mail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917736863289" data-cursor="disable">
                +91 77368 63289
              </a>
            </p>
          </div>
          <div className="contact-box">
           
  <h4>Social</h4>
  <a
    href="https://github.com/mhd-humraz"
    target="_blank"
    data-cursor="disable"
    className="contact-social"
  >
    Github <MdArrowOutward />
  </a>
  <a
    href="https://www.linkedin.com/in/mhd-humraz-283a5435b"
    target="_blank"
    data-cursor="disable"
    className="contact-social"
  >
    LinkedIn <MdArrowOutward />
  </a>
  <a
    href="https://x.com"  // You didn't provide a Twitter link; update this if you have one
    target="_blank"
    data-cursor="disable"
    className="contact-social"
  >
    Twitter <MdArrowOutward />
  </a>
  <a
    href="https://www.instagram.com/muhammed_humraz_11"
    target="_blank"
    data-cursor="disable"
    className="contact-social"
  >
    Instagram <MdArrowOutward />
  </a>
</div>
<div className="contact-box">
  <h2>
    Designed and Developed <br /> by <span>Humraz Leo</span>
  </h2>
  <h5>
    <MdCopyright /> 2025
  </h5>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
