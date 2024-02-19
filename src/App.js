import React from "react";

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
