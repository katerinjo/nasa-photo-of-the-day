//TODO: clean up `console.log`s and remove or use the counter

import React, { useState, useEffect } from "react";
import SpacePanel from "./components/SpacePanel/SpacePanel.js";
import TimeMachine from "./components/TimeMachine/TimeMachine.js";
import { Header } from "semantic-ui-react";
import axios from "axios";
import "./App.css";

function App() {
  const [explanation, setExplanation] = useState("Loading...")
  const [pendingDate, setPendingDate] = useState(null);
  const [date, setDate] = useState("initialize");
  const [imgUrl, setImgUrl] = useState(null);
  const [axiosCount, setAxiosCount] = useState(0);

  function fetchData(date) {
    const dateQuery = date ? `&date=${date}` : '';
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${dateQuery}`)
      .then(response => {
        console.log('response:', response);
        setImgUrl(response.data.url);
        setExplanation(response.data.explanation);
        setAxiosCount(axiosCount + 1);
      })
      .catch(console.log);
  }

  function fetchDataOther() {
    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(response => {
        console.log('response:', response);
        setImgUrl(response.data.message);
        const newCount = axiosCount + 1;
        setAxiosCount(newCount);
        setExplanation(`axios count: ${newCount}`);
      })
      .catch(console.log);
  }

  useEffect(() => {
    console.log('useEffect called');
    console.log('date', date, 'pendingDate', pendingDate);
    if (pendingDate !== date) {
      fetchDataOther(pendingDate);
      setDate(pendingDate);
    }
  }, [pendingDate]);

  return (
    <div className="App">
      <Header as="h1" block textAlign="centered">NASA Daily Photos</Header>
      <SpacePanel
        imgUrl={imgUrl}
        date={date}
        explanation={explanation}
      />
      <TimeMachine setDate={setPendingDate} queryCount={axiosCount} />
    </div>
  );
}

export default App;
