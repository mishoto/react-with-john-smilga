import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./component/Navbar";

import "./index.css";

const App = () => (
  <div style={{textAlign:'center'}}>
    <h2>Navbar Demo</h2>
    <Navbar/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
