import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../Components/images/logo12.png"

function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="home">

      {/* HERO */}

      <section className="hero">
        <div className="hero-content">

          <div className="hero-badge">
            ● ZORQENTA TECHNOLOGY
          </div>

          <h2>
            Transform Your Skills. Build Your Future.
            <h3> Learn Technology. Develop Skills. Explore Opportunities.</h3>
          </h2>

          <p>
            ZORQENTA delivers technology solutions, IT consulting, and skill development services designed to help individuals and businesses move forward in a digital world.
            From software development and IT solutions to practical technology training, we bring ideas, people, and technology together.We also provide real-time project training to help you gain practical experience and develop your skills.
          </p>

          <div className="hero-buttons">

            {/* <Link to="/contact" className="primary-btn">
              Start a Project →
            </Link> */}

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="floating-card card-one">
            <strong>01</strong>
            <span>Innovative</span>
          </div>

          <div className="circle">
            <div className="circle-inner">
              <img className="circle-inner-logo"
            src={logo}
            alt="" 
             />
            </div>
          </div>

          <div className="floating-card card-two">
            <strong>24/7</strong>
            <span>Support</span>
          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="about">

        <div className="section-heading">
          <span>ABOUT ZORQENTA</span>

          <h2>
            100% Placement Assistance
            <br />
            Your Learning. Your Skills. Your Career.
          </h2>
        </div>

        <div className="about-text">
          <h2> Our career support includes:</h2> 
          <p>
           <li>Resume preparation and profile building</li>
           <li>Technical interview guidance</li> 
           <li>HR interview preparation</li> 
           <li>Mock interviews</li> 
           <li>Job opportunity sharing</li>
           <li>Placement coordination</li> 
            <li>Career guidance and support</li>
          </p>

          <p>
            Learn → Practice → Build Projects → Prepare → Attend Interviews → Get Career Support.
            <p>Our goal is to help every eligible learner confidently take the next step toward their IT career.</p>
          </p>

              <h2> If you want to view the course details,</h2> 

          <Link to="/course" className="nav-button1">
                    Know More
                  </Link>

        </div>

      </section>


      {/* SERVICES */}

      <section className="services" id="services">

        <div className="section-title">
          <span>WHAT WE DO</span>

          <h2>
            Our Technology Services
          </h2>

          <p>
            Digital solutions designed around your business needs.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">01</div>
            <h3>IT Training</h3>
            <p>
              Practical learning programs
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">02</div>
            <h3>Software Solutions Placement </h3>
            <p>
              Career preparation and assistance
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">03</div>
            <h3>IT Solutions</h3>
            <p>
              Software and web development
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">04</div>
            <h3>Career Guidance</h3>
            <p>
              Professional growth support
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <div>
          <h2>Start Your Career Journey</h2>

          <h4>
            Discover opportunities to develop your technical skills, improve your professional profile, and prepare for the IT industry.
          </h4>
        </div>

        <Link to="/contact" className="cta-button">
          Contact ZORQENTA →
        </Link>

      </section>

      <section className="about">

        <div className="section-heading">

          <h2>
            Client Project Development
            <h5> Build your business</h5>
          </h2>
        </div>

        <div className="about-text">
          <p>
          We develop high-quality websites, mobile applications, and customized software solutions for clients, startups, and businesses. Whether you need a business website, e-commerce application, or a complete digital solution, we help bring your ideas to life with professional design and reliable development.
          </p>


              <h2> Have a project idea or business requirement? Click the "Enquire Now" to share your details and discuss your project with our team. We are here to turn your ideas into professional digital solutions.</h2> 

          <Link to="/project-enquiry" className="nav-button1">
                Enquire Now
                  </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;