import React from "react";
import webDevImg from "../assets/images/Web developer.jpg";
import softwareEngImg from "../assets/images/Software-Engineering.jpg";
import videoEditImg from "../assets/images/Video editing.jpg";
import "../styling/Home.css";

const Home = () => {
  return (
    <div>
      <section class="bio">
        <h1 id="About">Get to know me...</h1>
        <p class="bio-text">
          Hi, <strong>I'm Mikael Pretorius! </strong>I’m a passionate and driven
          Full Stack Developer, with a track record of mastering web development
          technologies quickly and efficiently. With expertise in JavaScript,
          HTML, CSS, React, Node.js, Express and MongoDB, I thrive on crafting
          intuitive websites and applications. Whether it's building a
          user-friendly portfolio, a Netflix sign-in page clone, or a
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
        <section class="services-list">
          <div class="card-container">
            <div class="card">
              <img src={webDevImg} alt="Web Developer" />
              <div class="content">
                <h4>Web Development</h4>
                <p>Lorem ipsum dolor</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="card">
              <img src={softwareEngImg} />
              <div class="content">
                <h4>Software Engineering</h4>
                <p>Lorem ipsum dolor</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="card">
              <img src={videoEditImg} />
              <div class="content">
                <h4>Video Editing</h4>
                <p>Lorem ipsum dolor</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </section>
        <div id="skills">
          <div class="skills">
            <h3>Skills:</h3>
            <div class="skills-container">
              <ul class="skills-list">
                <li>
                  <h4>Python</h4>
                  <span class="bar">
                    <span class="python"></span>
                  </span>
                </li>
                <li>
                  <h4>HTML</h4>
                  <span class="bar">
                    <span class="html"></span>
                  </span>
                </li>
                <li>
                  <h4>CSS</h4>
                  <span class="bar">
                    <span class="css"></span>
                  </span>
                </li>
                <li>
                  <h4>JavaScript</h4>
                  <span class="bar">
                    <span class="javascript"></span>
                  </span>
                </li>
                <li>
                  <h4>SQL</h4>
                  <span class="bar">
                    <span class="sql"></span>
                  </span>
                </li>
                <li>
                  <h4>React</h4>
                  <span class="bar">
                    <span class="react"></span>
                  </span>
                </li>
                <li>
                  <h4>Express</h4>
                  <span class="bar">
                    <span class="express"></span>
                  </span>
                  <li>
                    <h4>MongoDB</h4>
                    <span class="bar">
                      <span class="mongodb"></span>
                    </span>
                  </li>
                </li>
              </ul>
              <ul class="other-skills">
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
    </div>
  );
};

export default Home;
