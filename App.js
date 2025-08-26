import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import PlayerForm from "./components/PlayerForm";
import UpdateForm from "./components/UpdateForm";
import Home from "./components/Home";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Display />} />
            <Route path="/add" element={<PlayerForm />} />
            <Route path="/update/:id" element={<UpdateForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
