import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Featured from "./components/Featured.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js"
import Talent from "./components/Talent.js";

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Featured/>
      <About/>
      <Talent/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
