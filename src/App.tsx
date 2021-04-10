import React from "react";
import "./App.scss";
import AnimationFrame from "./common/animationFrame";

import { ClaudeShannon, Common, TechBlog } from "./animations";

function App() {
  return (
    <div className="App">
      <AnimationFrame
        animations={[ClaudeShannon, Common, TechBlog]}
        defaultListTitle={"Tech Blog"}
        defaultAnimationTitle={"Points-Reduction-3"}
      />
    </div>
  );
}

export default App;
