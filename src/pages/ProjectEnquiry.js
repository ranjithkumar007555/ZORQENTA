import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectEnquiry.css";

function ProjectEnquiry() {

  const navigate = useNavigate();

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
    projectType: "",
    budget: "",
    timeline: "",
    requirements: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.projectType
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Replace with your actual WhatsApp number
    const whatsappNumber = "916379694724";

    const message = `
*ZORQENTA - PROJECT ENQUIRY*

Hello ZORQENTA Team,

I am interested in developing a project
and would like to discuss my requirements.

*CLIENT DETAILS*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}

*PROJECT DETAILS*
Project Type: ${formData.projectType}
Budget: ${formData.budget || "To be discussed"}
Timeline: ${formData.timeline || "To be discussed"}

*PROJECT REQUIREMENTS*
${formData.requirements || "Not Provided"}

I would like to discuss my project
with your team.

Thank you,
${formData.name}
`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

  };

  return (
    <div className="project-enquiry-page">

      {/* Header */}
      <div className="enquiry-header">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <p className="enquiry-label">
          PROJECT CONSULTATION
        </p>

        <h1>
          Let's Build Your
          <br />
          Next Project.
        </h1>

        <p>
          Have a project idea? Share your requirements
          and let's discuss how we can bring your vision to life.
        </p>

      </div>

      {/* Form Section */}
      <div className="enquiry-container">

        <div className="enquiry-intro">

          <span className="intro-icon">✦</span>

          <h2>
            Tell Us About
            <br />
            Your Project
          </h2>

          <p>
            Whether you need a business website, mobile app,
            e-commerce platform, or custom software,
            our team is here to help.
          </p>

          <div className="intro-features">

            <div>✓ Professional Development</div>
            <div>✓ Customized Solutions</div>
            <div>✓ Project Consultation</div>
            <div>✓ Business-Focused Approach</div>

          </div>

        </div>

        <form
          className="project-form"
          onSubmit={sendToWhatsApp}
        >

          <div className="form-top">
            <h3>Project Enquiry</h3>

            <span>
              * Required fields
            </span>
          </div>

          {/* Name */}
          <div className="input-group">

            <label>
              Full Name <b>*</b>
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          {/* Phone */}
          <div className="input-group">

            <label>
              Phone Number <b>*</b>
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>

          {/* Email */}
          <div className="input-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          {/* Project Type */}
          <div className="input-group">

            <label>
              Project Type <b>*</b>
            </label>

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >

              <option value="">
                Select project type
              </option>

              <option value="Business Website">
                Business Website
              </option>

              <option value="E-commerce Website">
                E-commerce Website
              </option>

              <option value="Mobile Application">
                Mobile Application
              </option>

              <option value="Web Application">
                Web Application
              </option>

              <option value="Custom Software">
                Custom Software
              </option>

              <option value="Portfolio Website">
                Portfolio Website
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>

          {/* Budget */}
          <div className="input-group">

            <label>
              Estimated Budget
            </label>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >

              <option value="">
                Select your budget
              </option>

              <option value="Below ₹25,000">
                Below ₹25,000
              </option>

              <option value="₹25,000 - ₹50,000">
                ₹25,000 - ₹50,000
              </option>

              <option value="₹50,000 - ₹1,00,000">
                ₹50,000 - ₹1,00,000
              </option>

              <option value="₹1,00,000+">
                ₹1,00,000+
              </option>

              <option value="Not Decided">
                Not Decided
              </option>

            </select>

          </div>

          {/* Timeline */}
          <div className="input-group">

            <label>
              Project Timeline
            </label>

            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >

              <option value="">
                Select timeline
              </option>

              <option value="Within 1 Month">
                Within 1 Month
              </option>

              <option value="1 - 3 Months">
                1 - 3 Months
              </option>

              <option value="3 - 6 Months">
                3 - 6 Months
              </option>

              <option value="Flexible">
                Flexible
              </option>

            </select>

          </div>

          {/* Requirements */}
          <div className="input-group">

            <label>
              Project Requirements
            </label>

            <textarea
              name="requirements"
              rows="5"
              placeholder="Tell us about your project, features, design requirements, etc."
              value={formData.requirements}
              onChange={handleChange}
            ></textarea>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="submit-enquiry-btn"
          >
            <span>💬</span>
            Send Project Enquiry
            <span>→</span>
          </button>

          <p className="form-note">
            Your enquiry will open in WhatsApp for confirmation and sending.
          </p>

        </form>

      </div>

    </div>
  );
}

export default ProjectEnquiry;