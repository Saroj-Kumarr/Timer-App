import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    currentTime();
  }, 1000);

  function currentTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
    {
      const heading = document.getElementById('header');
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    heading.style.color = "#" + randomColor;
    }
  }

  return (
    <div id="test">
      <h1 id="header"  >{time}</h1>
    </div>
  );
}

export default App;
