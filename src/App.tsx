import React from "react";
import "./App.scss";
import AnimationFrame from "./common/animationFrame";

import { ClaudeShannon } from "./animations";

function App() {
  return (
    <div className="App">
      <AnimationFrame animations={[ClaudeShannon]} />
    </div>
  );
}

export default App;
