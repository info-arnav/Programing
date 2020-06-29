import React, { FunctionComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sub from "./sub";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Sub></Sub>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>the changes have started to be emitted</h1>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
