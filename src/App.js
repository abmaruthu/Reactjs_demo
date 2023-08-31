import React from "react";
import Hero from "./components/Hero";
import Bottom from "./components/Hero2";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Bottom />
    </div>
  );
}

export default App;
