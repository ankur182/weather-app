import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
         Developed by{" "}
        <a target="_blank" href="https://www.ankurgautam.dev/">
          Ankur Gautam
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.golive.com/">
          Go Live
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
