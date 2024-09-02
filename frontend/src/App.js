import "./App.css";
import Routes from "react-router-dom";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
