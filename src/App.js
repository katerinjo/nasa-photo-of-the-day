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
    function fetchData(date) {
      const dateQuery = date ? `&date=${date}` : '';
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${dateQuery}`)
        .then(response => {
          console.log('response:', response);
          setImgUrl(response.data.url);
          setExplanation(response.data.explanation);
        })
        .catch(console.log);
    }
    if (pendingDate !== date) {
      fetchData(pendingDate);
      setDate(pendingDate);
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
