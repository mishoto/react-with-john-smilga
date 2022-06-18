import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";

import "./index.css";

const App = () => (
  <main>
    <Carousel/>
  </main>
);
ReactDOM.render(<App />, document.getElementById("app"));
