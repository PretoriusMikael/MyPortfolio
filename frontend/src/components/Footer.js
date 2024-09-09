import React from "react";
import "../styling/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="contact">
          <h3 id="Contact Details">Contact Details:</h3>
          <div class="contact-list">
            <ul>
              <li>
                <b>Full name: </b>Mikael Simeon Pretorius
              </li>
              <li>
                <b>Cellphone: </b>081 382 7201
              </li>
              <li>
                <b>Email address: </b>mikaelpretorius@gmail.com
              </li>
              <li>
                <b>Socials: </b>
                <li className="start-list">
                  <a
                    target="_blank"
                    href="https://linkedin.com/in/mikael-pretorius">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://instagram.com/mikael_pretorius">
                    Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/PretoriusMikael">
                    Github
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
