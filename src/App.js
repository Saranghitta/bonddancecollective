import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Featured from "./components/Featured.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Featured/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
