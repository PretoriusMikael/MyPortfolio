import React, { useState, useRef, useEffect } from "react";
import chefMealImg from "../assets/images/htmlcssjs.png";
import netflixBackground from "../assets/images/Netflix-Background.jpg";
import WeatherAppImg from "../assets/images/Apple-Weather-app.webp";
import NationalityImg from "../assets/images/nationality-predtictor.jpg";
import OnlineStoreImg from "../assets/images/online-store.png";
import FrontTodoApp from "../assets/images/frontend-todo-app.png";
import CashManImg from "../assets/images/cash-manipulator.jpg";
import BackTodoApp from "../assets/images/backend-todo-app.png";
import CarInvImg from "../assets/images/car-inventory.png";
import iTunesSearchImg from "../assets/images/itunes-search.png";
import NetflixSigninImg from "../assets/images/netflix-signin.png";
import weatherAppPreview from "../assets/images/WeatherAppPreview.png";
import nationalityPredImg from "../assets/images/natpredimg.png";
import cashManipImg from "../assets/images/cashManip.png";
import "../styling/Portfolio.css";
import ImageModal from "./ImageModal.js";
import iTunesFiles from "../assets/downloads/L3T08.zip";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollLeft = () => {
    const cardWidth =
      scrollRef.current.querySelector(".portfolio-card").offsetWidth;
    scrollRef.current.scrollBy({
      left: -cardWidth - 21, // Scroll by two card widths
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const cardWidth =
      scrollRef.current.querySelector(".portfolio-card").offsetWidth;
    scrollRef.current.scrollBy({
      left: cardWidth + 21, // Adjust this value based on card width
      behavior: "smooth",
    });
  };

  const openModal = (imageSrc) => {
    console.log(imageSrc);
    setSelectedImage([imageSrc]);
    const images = [netflixBackground, chefMealImg];
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage([]);
  };

  const backendHeading = () => {
    window.location.hash = "#backend-projects";
  };

  return (
    <div className="whole">
      <div class="button-container">
        <button class="button button-dark" onClick={backendHeading}>
          View Backend
        </button>
        <button class="button button-link">
          <Link to="/">Back to Home</Link>
        </button>
      </div>

      <h2 id="frontend-projects">Frontend Projects</h2>
      <div id="portfolio">
        <div class="portfolio-card-container" ref={scrollRef}>
          <div class="portfolio-card">
            <h4>
              <b>Netflix sign in page clone</b>
            </h4>
            <img src={netflixBackground} alt="Netflix clone" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(NetflixSigninImg)}>
                    View "Netflix clone"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/PretoriusMikael/netflix-clone.git">
                    Visit "Netflix clone" on GitHub
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Online Store (Viewable as website)</b>
            </h4>
            <img src={OnlineStoreImg} alt="Online Store" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a target="_blank" href="https://mock-web-store.onrender.com">
                    View "Online Store"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/PretoriusMikael/online-store.git"
                    download>
                    Visit "Online Store" on GitHub
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Weather App</b>
            </h4>
            <img src={WeatherAppImg} alt="Weather app" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(weatherAppPreview)}>
                    View "Weather App"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/PretoriusMikael/weather-app.git">
                    Visit "Weather App" on GitHub
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Nationality Predictor</b>
            </h4>
            <img src={NationalityImg} alt="Nationality Predictor" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(nationalityPredImg)}>
                    View "Nationality Predictor"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/PretoriusMikael/nationality-predictor.git">
                    Visit "Nationality Predictor" on GitHub
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Frontend - To Do App</b>
            </h4>
            <img src={FrontTodoApp} alt="To Do App" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(FrontTodoApp)}>
                    View "To Do App"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/PretoriusMikael/to-do-app.git">
                    Visit "To Do App" on GitHub
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Cash Manipulator</b>
            </h4>
            <img src={CashManImg} alt="Cash Manipulator" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(cashManipImg)}>
                    View "Cash Manipulator App"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/PretoriusMikael/cash-manipulator.git">
                    Visit "Cash Manipulator App" on GitHub
                  </a>
                </li>
              </p>
            </div>
          </div>
        </div>
        <div className="directional-buttons">
          <button className="button button-secondary" onClick={scrollLeft}>
            &#10094;
          </button>
          <button className="button button-secondary" onClick={scrollRight}>
            &#10095;
          </button>
        </div>

        <h2 id="backend-projects">Backend Projects</h2>

        <div class="portfolio-card-container-backend">
          <div class="portfolio-card">
            <h4>
              <b>iTunes Search App (Downloadable)</b>
            </h4>
            <img src={iTunesSearchImg} alt="iTunes Search App" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(iTunesSearchImg)}>
                    View "iTunes Search App"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={iTunesFiles}
                    download="iTunes-search-app">
                    Download "iTunes Search App"
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Car Inventory</b>
            </h4>
            <img src={CarInvImg} alt="Car Inventory" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(CarInvImg)}>
                    View "Car Inventory App"
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Backend - To Do App</b>
            </h4>
            <img src={BackTodoApp} alt="To Do App" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a href="#" onClick={() => openModal(BackTodoApp)}>
                    View "Cash Manipulator App"
                  </a>
                </li>
                <li></li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        images={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};

export default Portfolio;
