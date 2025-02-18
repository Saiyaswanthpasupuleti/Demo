import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Compliance from "./Components/Compliance";
import Eligibility from "./Components/Eligibility";
import Resource from "./Components/Resource";
import Reminder from "./Components/Reminder";
import NavbarComponent from "./Components/navbars";
import Contact from "./Components/Contact";




function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

