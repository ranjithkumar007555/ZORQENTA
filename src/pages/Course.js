import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Course.css";



const courses = [
  {
    id: 1,
    name: "Full Stack Development",
    subtitle: "MERN Stack",
    duration: "6 Months",
    lpa: "3 - 8 LPA",
    benefits: [
      "Frontend and Backend Development",
      "Real-time Project Experience",
      "Database Management",
      "Interview Preparation",
      "Resume Building"
    ],
    roles: [
      "Full Stack Developer",
      "React JS Developer",
      "Node JS Developer",
      "Software Developer"
    ]
  },
  {
    id: 2,
    name: "Java Full Stack Development",
    subtitle: "Java + Spring Boot",
    duration: "6 Months",
    lpa: "3 - 8 LPA",
    benefits: [
      "Core Java and Advanced Java",
      "Spring Boot Development",
      "React JS Frontend",
      "MySQL Database",
      "Real-time Projects"
    ],
    roles: [
      "Java Developer",
      "Java Full Stack Developer",
      "Backend Developer",
      "Software Engineer"
    ]
  },
  {
    id: 3,
    name: "Cloud Engineering",
    subtitle: "AWS + DevOps",
    duration: "4 Months",
    lpa: "3 - 7 LPA",
    benefits: [
      "AWS Cloud Fundamentals",
      "Linux Administration",
      "Cloud Deployment",
      "DevOps Basics",
      "Practical Cloud Projects"
    ],
    roles: [
      "Cloud Support Engineer",
      "Cloud Engineer",
      "DevOps Engineer",
      "System Administrator"
    ]
  },
  {
    id: 4,
    name: "Data Analytics",
    subtitle: "Python + SQL + Power BI",
    duration: "4 Months",
    lpa: "3 - 7 LPA",
    benefits: [
      "Python Programming",
      "SQL Database",
      "Data Cleaning",
      "Power BI Dashboards",
      "Data Analytics Projects"
    ],
    roles: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst",
      "Junior Data Analyst"
    ]
  },
  {
    id: 5,
    name: "Full Stack Development",
    subtitle: "MERN Stack",
    duration: "6 Months",
    lpa: "3 - 8 LPA",
    benefits: [
      "Frontend and Backend Development",
      "Real-time Project Experience",
      "Database Management",
      "Interview Preparation",
      "Resume Building"
    ],
    roles: [
      "Full Stack Developer",
      "React JS Developer",
      "Node JS Developer",
      "Software Developer"
    ]
  },
  {
    id: 6,
    name: "Full Stack Development",
    subtitle: "MERN Stack",
    duration: "6 Months",
    lpa: "3 - 8 LPA",
    benefits: [
      "Frontend and Backend Development",
      "Real-time Project Experience",
      "Database Management",
      "Interview Preparation",
      "Resume Building"
    ],
    roles: [
      "Full Stack Developer",
      "React JS Developer",
      "Node JS Developer",
      "Software Developer"
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

              <h3>{course.name}</h3>

              <p className="course-subtitle">
                {course.subtitle}
              </p>

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
                  Indicative range, not a placement guarantee.
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