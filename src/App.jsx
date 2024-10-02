import React from "react";
import ThreeScene from "./components/ThreeScene";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="hero-section">
        <h1>Welcome to DrinkWorld</h1>
        <p>Explore the best drinks in 3D</p>
      </header>
      <ThreeScene />
    </div>
  );
};

export default App;
