import React, { useState, useEffect } from "react";
import SpacePanel from "./components/SpacePanel/SpacePanel.js";
import TimeButton from "./components/TimeButton/TimeButton.js";
import axios from "axios";
import "./App.css";

function App() {
  const [date, setDate] = useState();

  useEffect(() => {
    axios.get('');
  });

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
