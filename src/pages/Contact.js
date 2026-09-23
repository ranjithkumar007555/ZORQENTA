import React, { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const whatsappNumber = "916379694724";

    const whatsappMessage = `
Hello ZORQENTA,

New Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message || "No message provided"}
`;

    const url =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(url, "_blank");
  };

  return (

    <div className="contact-page">

      <section className="contact-header">

        <span>CONTACT ZORQENTA</span>

        <h2>
          Let's Build Your Future with ZORQENTA
          {/* <strong> Have questions about our courses, placement assistance, or IT services? Our team is ready to hear your requirements.</strong> */}
        </h2>

        <p>
          Have questions about our courses, placement assistance, or IT services? Our team is ready to hear your requirements.
        </p>

      </section>


      <section className="contact-container">

        <div className="contact-info">

          <h2>Get in touch</h2>

          <p>
            We are ready to understand your requirements and
            help you find the right technology solution.
          </p>

          <div className="info-item">
            <div className="info-icon">✉</div>
            <div>
              <small>Email</small>
              <p>zorqentatechnologies@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">☎</div>
            <div>
              <small>Phone</small>
              <p>+91 6379694724</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">⌁</div>
            <div>
              <small>Availability</small>
              <p>Mon - Sat | 9:30 AM - 6:30 PM</p>
            </div>
          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>Name *</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-row">

            <div className="input-group">

              <label>Phone *</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            <div className="input-group">

              <label>Email *</label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          <div className="input-group">

            <label>Message</label>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project (optional)"
              value={formData.message}
              onChange={handleChange}
            />

          </div>


          <button
          to="/"
            type="submit"
            className="whatsapp-btn"
          >
            Send Enquiry on WhatsApp →
          </button>

          <small className="form-note">
            Your details will open in WhatsApp for sending.
          </small>

        </form>

      </section>

    </div>
  );
}

export default Contact;