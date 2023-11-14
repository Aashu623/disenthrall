import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader } from "react-feather";
function Contact() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validatePhoneNumber = (input_str) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.phone ||
      !formData.subject
    ) {
      setErrorMessage("!Please fill in all fields");
      return false;
    }
    if (!validatePhoneNumber(formData.phone)) {
      setErrorMessage("!Please enter valid phone number");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const sendEmail = (e) => {
    setIsProcessing(true);
    e.preventDefault();
    if (validateForm()) {
      setSendButtonDisabled(true);
      emailjs
        .sendForm(
          "service_hpsv3ua",
          "template_56erwcp",
          form.current,
          "VyNNNOYUIwEMUdeaX"
        )
        .then(
          (result) => {
            setErrorMessage(
              "Thankyou for contacting us! Our team will reach out to you soon"
            );
            setSendButtonDisabled(false);
            setIsProcessing(false);
            setFormData({
              name: "",
              email: "",
              subject: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            setSendButtonDisabled(false);
            setErrorMessage(error.text);
          }
        );
    }
  };
  return (
    <section className="section contact" id="contact" aria-label="contact">
      <div className="container">
        <h2 className="h2 section-title">Let's Contact With Us</h2>

        <p className="section-text">
          "Say Hello: We're not just about business; we're about building
          relationships. Drop us a line, and let's begin the journey together.
          Contact Disenthrall today."
        </p>

        <form ref={form} action className="contact-form" onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              value={formData.name}
              aria-label="name"
              placeholder="Your name*"
              required
              className="input-field"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              aria-label="email"
              placeholder="Email address*"
              required
              className="input-field"
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              aria-label="subject"
              placeholder="Subject"
              className="input-field"
              onChange={handleChange}
            />

            <input
              type="number"
              name="phone"
              value={formData.phone}
              aria-label="phone"
              placeholder="Phone number"
              className="input-field"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            aria-label="message"
            value={formData.message}
            placeholder="Your message...*"
            required
            className="input-field"
            onChange={handleChange}
          ></textarea>

          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              name="terms_and_policy"
              id="terms"
              required
              className="checkbox"
            />

            <label for="terms" className="label">
              Accept
              <a href="/" className="label-link">
                Terms of Services
              </a>{" "}
              and
              <a href="/" className="label-link">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className={sendButtonDisabled ? "disable btn" : "btn btn-primary"}
          >
            Send Message
          </button>
        <div className="loader">{isProcessing && <Loader />}</div>
        {errorMessage && (
          <h1 style={{ textAlign: "center" }}>{errorMessage}</h1>
        )}
        </form>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>

              <div className="card-content">
                <h3 className="h3 card-title">Mail Here</h3>

                <a
                  href="mailto:disenthrall.solutions@gmail.com"
                  className="card-link"
                >
                  disenthrall.solutions@gmail.com
                </a>
              </div>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
              </div>

              <div className="card-content">
                <h3 className="h3 card-title">Visit Here</h3>

                <address className="card-address">
                  Bhopal | Indore
                  <br />
                </address>
              </div>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
              </div>

              <div className="card-content">
                <h3 className="h3 card-title">Call Here</h3>
                <a href="tel:7000759525" className="card-link">
                  91-7000759525
                </a>{" "}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
