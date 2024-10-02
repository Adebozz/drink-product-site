// src/App.jsx
import React, { Suspense, lazy } from "react";
import './App.css';

const ThreeScene = lazy(() => import("./components/ThreeScene"));

const App = () => {
  return (
    <div className="App">
      <header className="hero-section">
        <h1>Welcome to DrinkWorld</h1>
        <p>Explore the best drinks in 3D</p>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeScene />
      </Suspense>
    </div>
  );
};

export default App;
