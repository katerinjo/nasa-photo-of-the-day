import React, { useState, useEffect } from "react";
import SpacePanel from "./components/SpacePanel/SpacePanel.js";
import TimeMachine from "./components/TimeMachine/TimeMachine.js";
import axios from "axios";
import "./App.css";

function App() {
  const [explanation, setExplanation] = useState("Loading...")
  const [date, setDate] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (date) {
      axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(response => setImgUrl(response.message))
        .catch(console.log);
    }
  }, [date]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1>NASA Daily Photos</h1>
      <SpacePanel
        imgUrl={imgUrl}
        date={date}
        explanation={explanation}
      />
      <TimeMachine setDate={setDate} />
    </div>
  );
}

export default App;
