import React from "react";
import image from "../assets/downloads/Web development CV.pdf";
import { Link } from "react-router-dom";
import "../styling/Header.css";

const Header = () => {
  return (
    <div>
      <header class="header">
        <nav class="navbar">
          <ul>
            <li className="dropdown">
              <Link to="/">
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M10 12l-6-6h12l-6 6z" />
                </svg>
                Home
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
        <a href={image} download="Web development CV" class="download-button">
          <div class="docs">
            <svg
              class="css-i6dzq1"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              height="20"
              width="20"
              viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line y2="13" x2="8" y1="13" x1="16"></line>
              <line y2="17" x2="8" y1="17" x1="16"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Download my CV
          </div>
          <div class="download">
            <svg
              class="css-i6dzq1"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              height="24"
              width="24"
              viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line y2="3" x2="12" y1="15" x1="12"></line>
            </svg>
          </div>
        </a>
      </header>
    </div>
  );
};

export default Header;
