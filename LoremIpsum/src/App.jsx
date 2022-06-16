import React from "react";
import ReactDOM from "react-dom";
import LoremIpsum from "./components/LoremIpsum";

import "./index.css";

const App = () => (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <LoremIpsum/>
  </section>
);
ReactDOM.render(<App />, document.getElementById("app"));
