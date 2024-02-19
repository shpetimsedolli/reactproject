import React, { useEffect } from "react";
import Aos from "aos";

import {
  Academy,
  Brands,
  Ceo,
  Footer,
  Main,
  Navbar,
  Passion,
  Services,
  Career,
} from "./components";

import "./App.css";
import "./responsive.css";
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Career />
      <Academy />
      <Passion />
      <Services />
      <Brands />
      <Ceo />
      <Footer />
    </div>
  );
};

export default App;
