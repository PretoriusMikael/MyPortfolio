import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio.js";
import Home from "./components/Home.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
