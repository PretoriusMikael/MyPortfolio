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
          Hi, <strong>I'm Mikael Pretorius! </strong>I believe my achievements
          in the launch of the Stellenbosch Universities' eSports club, winning
          USSA championships and receiving a sports bursary highlight my
          leadership, teamwork and commitment to excellence. My diverse skill
          set, academic background and involvement in various clubs displays my
          determination and willingness to collaborate. I have a robust
          combination of academic excellence, practical skills and notable
          achievements in the field of eSports and Information Systems
          management. My dedication and success in team environments make me a
          valuable member of a team. I have a passion for computers and IT. I
          have excellent knowledge of hardware and software and am efficient at
          data handling and general computer operations.
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
