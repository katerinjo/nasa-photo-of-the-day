import React, { useState, useEffect } from "react";
import SpacePanel from "./components/SpacePanel/SpacePanel.js";
import TimeMachine from "./components/TimeMachine/TimeMachine.js";
import axios from "axios";
import "./App.css";

function App() {
  const [explanation, setExplanation] = useState("Loading...")
  const [pendingDate, setPendingDate] = useState(null);
  const [date, setDate] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (pendingDate !== date) {
      if (pendingDate) {
        axios
          .get('https://dog.ceo/api/breeds/image/random')
          .then(response => {
            console.log('response:', response);
            setDate(pendingDate);
            setImgUrl(response.data.message);
            setExplanation('given real date')
          })
          .catch(console.log);
      } else {
        axios
          .get('https://dog.ceo/api/breeds/image/random')
          .then(response => {
            console.log('response:', response);
            setDate(null);
            setImgUrl(response.data.message);
            setExplanation('date is null/default/today')
          })
          .catch(console.log);
      }
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
      <TimeMachine setDate={setPendingDate} />
    </div>
  );
}

export default App;
