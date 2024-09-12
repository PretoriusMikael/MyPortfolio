import React, { useState } from "react";
import webDevImg from "../assets/images/Web developer.jpg";
import softwareEngImg from "../assets/images/Software-Engineering.jpg";
import videoEditImg from "../assets/images/Video editing.jpg";
import "../styling/Home.css";
import HomeModal from "./HomeModal";

const Home = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div>
      <section className="bio">
        <h1 id="About">Get to know me...</h1>
        <p className="bio-text">
          Hi, <strong>I'm Mikael Pretorius!</strong> I’m a passionate and driven
          Full Stack Developer, with a track record of mastering web development
          technologies quickly and efficiently. With expertise in JavaScript,
          HTML, CSS, React, Node.js, Express, Python, SQL and MongoDB. I thrive
          on crafting intuitive websites and applications. Whether it's building
          a user-friendly portfolio, a Netflix sign-in page clone, or a
          full-fledged iTunes search app, I approach every project with a focus
          on clean, efficient code and a seamless user experience. A recent
          graduate of the HyperionDev Full Stack Web Development Bootcamp, I’ve
          honed my skills across both front-end and back-end development. My
          experience ranges from creating responsive, interactive web pages to
          building secure, scalable APIs and databases. I’m also a strong
          communicator and team player who enjoys collaborating to solve complex
          problems and deliver innovative solutions. I’m constantly looking for
          opportunities to grow, learn, and bring my enthusiasm for web
          development to new challenges.
        </p>
      </section>

      <div id="services">
        <h2>Services</h2>
        <section className="services-list">
          <div className="card-container">
            <div className="card">
              <img src={webDevImg} alt="Web Developer" />
              <div className="content">
                <h4>Web Development</h4>
                <p>Web applications</p>
                <a href="#services" onClick={() => openModal("webDev")}>
                  Read More
                </a>
              </div>
            </div>
            <div className="card">
              <img src={softwareEngImg} alt="Software Engineering" />
              <div className="content">
                <h4>Software Engineering</h4>
                <p>Projects using Python and SQL</p>
                <a href="#services" onClick={() => openModal("softwareEng")}>
                  Read More
                </a>
              </div>
            </div>
            <div className="card">
              <img src={videoEditImg} alt="Video Editing" />
              <div className="content">
                <h4>Video Editing</h4>
                <p>Short & Long video editing</p>
                <a href="#services" onClick={() => openModal("videoEdit")}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        <div id="skills">
          <div className="skills">
            <h3>Skills:</h3>
            <div className="skills-container">
              <ul className="skills-list">
                <li>
                  <h4>Python</h4>
                  <span className="bar">
                    <span className="python"></span>
                  </span>
                </li>
                <li>
                  <h4>HTML</h4>
                  <span className="bar">
                    <span className="html"></span>
                  </span>
                </li>
                <li>
                  <h4>CSS</h4>
                  <span className="bar">
                    <span className="css"></span>
                  </span>
                </li>
                <li>
                  <h4>JavaScript</h4>
                  <span className="bar">
                    <span className="javascript"></span>
                  </span>
                </li>
                <li>
                  <h4>SQL</h4>
                  <span className="bar">
                    <span className="sql"></span>
                  </span>
                </li>
                <li>
                  <h4>React</h4>
                  <span className="bar">
                    <span className="react"></span>
                  </span>
                </li>
                <li>
                  <h4>Express</h4>
                  <span className="bar">
                    <span className="express"></span>
                  </span>
                </li>
                <li>
                  <h4>MongoDB</h4>
                  <span className="bar">
                    <span className="mongodb"></span>
                  </span>
                </li>
              </ul>
              <ul className="other-skills">
                <li>Leadership</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Critical Thinking</li>
                <li>Ability to work under pressure</li>
                <li>Ability to work in a team</li>
                <li>Fast learner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <HomeModal content={modalContent} onClose={closeModal} />
    </div>
  );
};

export default Home;
