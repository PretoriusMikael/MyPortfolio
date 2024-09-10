import React from "react";
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
import "../styling/Portfolio.css";
import iTunesFiles from "../assets/downloads/L3T08.zip";

const Portfolio = () => {
  return (
    <div className="whole">
      <h2>Frontend</h2>
      <div id="portfolio">
        <div class="portfolio-card-container">
          <div class="portfolio-card">
            <h4>
              <b>Chef's Favourite Meals</b>
            </h4>
            <img src={chefMealImg} alt="Chef's favourite meals" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a target="_blank" href="app.html">
                    View "Chef's Favourite Meals"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "Chef's Favourite Meals"
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div class="portfolio-card">
            <h4>
              <b>Netflix sign in page clone</b>
            </h4>
            <img src={netflixBackground} alt="Netflix clone" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a target="_blank" href="app.html">
                    View "Netflix clone"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "Netflix clone"
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
                  <a target="_blank" href="app.html">
                    View "Weather App"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "Weather App"
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
                  <a target="_blank" href="app.html">
                    View "Nationality Predictor"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "Nationality Predictor"
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
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "Online Store"
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
                  <a target="_blank" href="app.html">
                    View "To Do App"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "To Do App"
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
                  <a target="_blank" href="app.html">
                    View "Cash Manipulator"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "Cash Manipulator"
                  </a>
                </li>
              </p>
            </div>
          </div>

          <h2>Backend</h2>

          <div class="portfolio-card">
            <h4>
              <b>iTunes Search App (Downloadable)</b>
            </h4>
            <img src={iTunesSearchImg} alt="iTunes Search App" />
            <div class="portfolio-content">
              <p>
                <li>
                  <a target="_blank" href="app.html">
                    View "iTunes Search App"
                  </a>
                </li>
                <li>
                  <a target="_blank" href={iTunesFiles} download>
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
                  <a target="_blank" href="app.html">
                    View "Car Inventory"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "Car Inventory"
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
                  <a target="_blank" href="app.html">
                    View "To Do App"
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="Attachments/Chef's Favourite Meals.zip"
                    download>
                    Download "To Do App"
                  </a>
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
