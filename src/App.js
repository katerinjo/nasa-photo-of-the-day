import React, { useState, useEffect } from "react";
import SpacePanel from "./components/SpacePanel/SpacePanel.js";
import TimeMachine from "./components/TimeMachine/TimeMachine.js";
import axios from "axios";
import "./App.css";

function App() {
  const [date, setDate] = useState();
  const [pendingDate, setPendingDate] = useState();
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => setImgUrl(response.message))
      .catch(console.log);
  });

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1>NASA Daily Photos</h1>
      <SpacePanel />
      <TimeMachine />
    </div>
  );
}

export default App;
