import React, { FunctionComponent, EffectCallback, useState } from "react";
import anime from "animejs";
import { IAnimationList, IAnimation } from "../types";
import Controls from "./controls";
import AnimationSelector from "./animationSelector";

import "./animationFrame.scss";

interface IAnimationFrameProps {
  //   animationTimeline: (animationRef: any) => void;
  //   animationComponent: FunctionComponent;
  animations: IAnimationList[];
}

const AnimationFrame: FunctionComponent<IAnimationFrameProps> = ({
  children,
  animations,
}) => {
  const [currentAnim, setCurrentAnim] = useState<IAnimation>({
    title: "",
    timeline: () => {
      return () => {};
    },
    component: () => {
      return <div></div>;
    },
  });
  const animationRef = React.useRef(anime({}));
  React.useEffect(() => {
    return currentAnim.timeline(animationRef);
  });
  return (
    <div className="animationFrame">
      <div className="frameContainer">{currentAnim.component({})}</div>
      <div className="animationControls">
        <Controls timelineRef={animationRef} />
        <AnimationSelector
          animations={animations}
          setAnimation={setCurrentAnim}
        />
      </div>
    </div>
  );
};

export default AnimationFrame;
