import React from "react";
import "./App.scss";
import AnimationFrame from "./common/animationFrame";

import { ClaudeShannon, Common } from "./animations";

function App() {
  return (
    <div className="App">
      <AnimationFrame animations={[ClaudeShannon, Common]} />
    </div>
  );
}

export default App;
