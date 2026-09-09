import { FaLinkedin } from 'react-icons/fa';

const Contact = () => (
  <section id="contact">
    <p className="label">Get in touch</p>
    {/* <h2>Let's talk</h2> */}
    <p className="contact-text"></p>
    <div className="contact-links">
      <a href="mailto:hoishola973@gmail.com">hoishola973@gmail.com</a>
      <a
        className="social-icon-link"
        href="https://www.linkedin.com/in/hoishola/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default Contact;
