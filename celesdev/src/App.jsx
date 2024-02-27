import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GlobalStyles />
    </>
  );
}

export default App;
