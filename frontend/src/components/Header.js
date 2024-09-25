import React from "react";
import { useState } from "react";
import image from "../assets/downloads/MP - Web Development CV.pdf";
import { Link, useLocation } from "react-router-dom";
import "../styling/Header.css";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Header = () => {
  const [Show, setShow] = useState(false);
  const location = useLocation();

  const isPortfolioPage = location.pathname === "/portfolio";

  const toggleHeader = () => {
    setShow(!Show);
  };

  const handleDownload = (e) => {
    Swal.fire({
      icon: "success",
      title: "Download Completed",
      confirmButtonText: "Thank you!",
    });
  };

  return (
    <div>
      <header class="header">
        <button className="menu-toggle" id="menuToggle" onClick={toggleHeader}>
          &#9776;
        </button>
        <nav className={`navbar ${Show ? "show" : ""}`}>
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
                  <Link to="/portfolio" onClick={toggleHeader}>
                    Portfolio
                  </Link>
                </li>
              </ul>
            </li>
            {!isPortfolioPage && (
              <>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
              </>
            )}
            {isPortfolioPage && (
              <>
                <li>
                  <a href="#frontend-projects">Frontend</a>
                </li>
                <li>
                  <a href="#backend-projects">Backend</a>
                </li>
              </>
            )}
          </ul>
        </nav>
        <a
          href={image}
          download="Web development CV"
          class="download-button"
          onClick={handleDownload}>
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
