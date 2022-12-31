import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter"
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import About from "./components/About";
// import { Container } from "postcss";
import Video from "./components/Video";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Tour from "./components/Tour";
import Footer from "./components/Footer";
import Landing from "./components/Pages/Landing";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Destinations />
        <Container />
        <Tour />
        <About />
        <Video />
        <Review />
        <Counter/>
        <Contact />
        <Footer />
        <Routes>
          <Route path="/" exact component={Landing} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
