import { useState } from "react";
import "./App.css";
import Platform from "./Platform";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Magic Matcher</h2>
        {!started && (
          <>
          <button className="new-game" onClick={() => setStarted(true)}>
            New Game
          </button></>
        )}
        <Platform started={started} />
      </header>
    </div>
  );
}

export default App;
