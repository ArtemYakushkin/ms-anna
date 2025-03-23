import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />

        <Hero />

        <About />

        <Services />

        <Reviews />

        <Footer />
      </div>
    </>
  );
};

export default App;
