import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Freeclass from "./Freeclass";
import OurTour from "./Event";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/FreeClass" element={<Freeclass />} />
        <Route path="/Event" element={<OurTour />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
