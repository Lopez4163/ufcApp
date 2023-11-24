import { useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
