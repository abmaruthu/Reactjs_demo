import React from "react";
import Hero from "./components/Hero";
import Bottom from "./components/Hero2";
import "./App.css";
import Header from "./components/Header";

//import PeopleList from "./components/Hero3";
// import Section from "./components/Hero3";
// import { Container, Col } from "react-bootstrap";
//import { Cards } from "./components/Cards";



function App() {
  return (
    <div className="App">
      
      <Header/>
      <Hero />
      <Bottom />
      
      
    </div>
  );
}

export default App;
