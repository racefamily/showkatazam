import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Freeclass from "./Freeclass";
import OurTour from "./OurEvent";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FreeClass" element={<Freeclass />} />
        <Route path="/OurEvent" element={<OurTour />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
