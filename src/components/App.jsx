import React, { useState } from "react";

function App() {
  setInterval(Update, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function Update() {
    let newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Update}>Get Time</button>
    </div>
  );
}

export default App;
