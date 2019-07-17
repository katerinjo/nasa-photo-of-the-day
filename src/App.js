import React from "react";
import SpacePanel from "./components/SpacePanel/SpacePanel.js";
import TimeButton from "./components/TimeButton/TimeButton.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1>NASA Daily Photos</h1>
      <SpacePanel />
      <TimeButton />
    </div>
  );
}

export default App;
