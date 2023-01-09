import React, { useState } from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 8000);
  }
  return (
    !loading && (
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    )
  );
};

export default App;
