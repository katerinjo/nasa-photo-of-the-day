import React, { useState, useEffect } from "react";
import SpacePanel from "./components/SpacePanel/SpacePanel.js";
import TimeMachine from "./components/TimeMachine/TimeMachine.js";
import axios from "axios";
import "./App.css";

function App() {
  const [explanation, setExplanation] = useState("Loading...")
  const [date, setDate] = useState(null);
  const [pendingDate, setPendingDate] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  function validDate(plainText) {
    return plainText === "2019-07-15"
  }

  useEffect(() => {
    if (validDate(pendingDate)) {
      axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(response => setImgUrl(response.message))
        .catch(console.log);
    }
  }, [pendingDate]);

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
      <TimeMachine />
    </div>
  );
}

export default App;
