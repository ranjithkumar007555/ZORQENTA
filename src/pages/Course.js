import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Course.css";



const courses = [
  {
    id: 1,
    title: "Python Full Stack Development",
    subtitle: "Python Full Stack Development",
    duration: "6 Months",
    lpa: "3 – 8 LPA",
    benefits: [
      "Learn Python programming from basics to advanced",
      "Build web applications using Django",
      "Learn React JS for modern frontend development",
      "Work with MySQL database",
      "Build real-time full stack projects",
      "Interview and placement preparation"
    ],
    roles: [
      "Python Developer",
      "Full Stack Developer",
      "Django Developer",
      "Backend Developer",
      "Software Developer"
    ]
  },

  {
    id: 2,
    title: "Data Analytics",
    subtitle: "Data Analytics",
    duration: "4 Months",
    lpa: "3 – 7 LPA",
    benefits: [
      "Learn Python for data analysis",
      "Master SQL and database queries",
      "Learn Excel for data analysis",
      "Create interactive dashboards using Power BI",
      "Learn data cleaning and visualization",
      "Work on real-world analytics projects"
    ],
    roles: [
      "Data Analyst",
      "Junior Data Analyst",
      "Business Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst"
    ]
  },

  {
    id: 3,
    title: "Cloud + DevOps",
    subtitle: "Cloud + DevOps",
    duration: "5 Months",
    lpa: "3 – 8 LPA",
    benefits: [
      "Learn AWS cloud fundamentals",
      "Learn Linux administration basics",
      "Understand Docker and containerization",
      "Learn CI/CD concepts and tools",
      "Understand cloud deployment",
      "Work on practical DevOps projects"
    ],
    roles: [
      "Cloud Engineer",
      "Cloud Support Engineer",
      "DevOps Engineer",
      "Cloud Administrator",
      "System Administrator"
    ]
  },

  {
    id: 4,
    title: "Testing + Automation",
    subtitle: "Testing + Automation",
    duration: "4 Months",
    lpa: "3 – 7 LPA",
    benefits: [
      "Learn software testing fundamentals",
      "Understand SDLC and STLC",
      "Learn manual testing techniques",
      "Automate web applications using Selenium",
      "Learn API testing concepts",
      "Practice real-time testing projects"
    ],
    roles: [
      "Software Tester",
      "QA Engineer",
      "Automation Tester",
      "Test Engineer",
      "Selenium Automation Tester"
    ]
  },

  {
    id: 5,
    title: "Java Full Stack Development",
    subtitle: "Java Full Stack Development",
    duration: "6 Months",
    lpa: "3 – 8 LPA",
    benefits: [
      "Learn Core and Advanced Java",
      "Build backend applications using Spring Boot",
      "Learn React JS for frontend development",
      "Work with MySQL databases",
      "Build REST APIs",
      "Develop real-time full stack projects",
      "Interview and placement preparation"
    ],
    roles: [
      "Java Developer",
      "Java Full Stack Developer",
      "Spring Boot Developer",
      "Backend Developer",
      "Software Engineer"
    ]
  },

  {
    id: 6,
    title: "AI / ML + GenAI",
    subtitle: "AI / ML + GenAI",
    duration: "5 Months",
    lpa: "4 – 10 LPA",
    benefits: [
      "Learn Python for AI and Machine Learning",
      "Understand Machine Learning algorithms",
      "Learn data preprocessing and model building",
      "Explore Generative AI concepts",
      "Work with AI APIs and LLM concepts",
      "Build practical AI/ML projects",
      "Learn prompt engineering fundamentals"
    ],
    roles: [
      "AI/ML Engineer",
      "Machine Learning Engineer",
      "AI Developer",
      "Generative AI Developer",
      "Junior Data Scientist"
    ]
  },

  {
    id: 7,
    title: "Cybersecurity",
    subtitle: "Cybersecurity",
    duration: "5 Months",
    lpa: "3 – 8 LPA",
    benefits: [
      "Learn cybersecurity fundamentals",
      "Understand networking and security concepts",
      "Learn ethical hacking fundamentals",
      "Understand vulnerability assessment",
      "Learn SOC and security monitoring concepts",
      "Practice cybersecurity labs and projects"
    ],
    roles: [
      "Cybersecurity Analyst",
      "SOC Analyst",
      "Security Analyst",
      "Information Security Analyst",
      "Junior Security Engineer"
    ]
  },

  {
    id: 8,
    title: "MERN / Modern Web Development",
    subtitle: "MERN / Modern Web Development",
    duration: "5 Months",
    lpa: "3 – 8 LPA",
    benefits: [
      "Learn modern frontend development with React",
      "Build backend applications using Node.js",
      "Learn Express.js and REST APIs",
      "Work with MongoDB database",
      "Build responsive and modern websites",
      "Develop real-time full stack projects",
      "Git, GitHub and deployment basics",
      "Interview and placement preparation"
    ],
    roles: [
      "MERN Stack Developer",
      "React JS Developer",
      "Node.js Developer",
      "Full Stack Developer",
      "Web Developer"
    ]
  }
];

function Course() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div>

      {/* Your existing Hero Section goes here */}

      {/* Courses Section */}
      <section className="courses-section" id="courses">

        <div className="section-heading center">
          <p>OUR COURSES</p>

          <h2>
            Build Your Career With
            <br />
            Industry-Ready Skills
          </h2>

          <span>
            Learn practical technologies and prepare for
            your next career opportunity.
          </span>
        </div>

        <div className="course-grid">

          {courses.map((course) => (

            <div className="course-card" key={course.id}>

              <div className="course-icon">
                💻
              </div>

              <h3>{course.title}</h3>

              {/* <p className="course-subtitle">
                {course.subtitle}
              </p> */}

              <div className="course-duration">
                <span>⏱ Duration</span>
                <strong>{course.duration}</strong>
              </div>

              <button
                className="know-more-btn"
                onClick={() => setSelectedCourse(course)}
              >
                Know More →
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Course Details Modal */}
      {selectedCourse && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedCourse(null)}
        >

          <div
            className="course-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedCourse(null)}
            >
              ✕
            </button>

            <p className="modal-label">
              COURSE DETAILS
            </p>

            <h2>{selectedCourse.name}</h2>

            <p className="modal-subtitle">
              {selectedCourse.subtitle}
            </p>

            {/* Duration */}
            <div className="detail-box">

              <span>⏱</span>

              <div>
                <h4>Duration</h4>
                <p>{selectedCourse.duration}</p>
              </div>

            </div>

            {/* LPA */}
            <div className="detail-box">

              <span>💼</span>

              <div>
                <h4>Expected Salary Range</h4>
                <p>{selectedCourse.lpa}</p>
                <small>
                  Indicative range a placement guarantee.
                </small>
              </div>

            </div>

            {/* Benefits */}
            <div className="modal-content">

              <h3>Course Benefits</h3>

              <ul>
                {selectedCourse.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

            </div>

            {/* Job Roles */}
            <div className="modal-content">

              <h3>Career Opportunities</h3>

              <ul>
                {selectedCourse.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>

            </div>

            <Link
              to="/contact"
              className="modal-contact-btn"
              onClick={() => setSelectedCourse(null)}
            >
              Enquire Now →
            </Link>

          </div>

        </div>

      )}

    </div>
  );
}

export default Course;
