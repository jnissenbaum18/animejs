import React, { FunctionComponent, EffectCallback } from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./sandbox.scss";

const title = "Sandbox";

const timeline = (animationRef: any) => {
  animationRef.current = anime
    .timeline({})
    .add({
      targets: ".information-i .letter",
      translateY: ["-65px", "60px"],
      delay: 500,
      // duration: anime.stagger(1000),
      easing: "easeInOutExpo",
      duration: 1000,
    })
    .add({
      targets: ".information-n .letter",
      translateY: ["-100px", "120px"],
      // duration: anime.stagger(1000),
      easing: "easeInOutExpo",
      duration: 1000,
    });
};

const component = () => {
  return (
    <div className="sandbox">
      <div className="information">
        <div className="letters information-i">
          <div className="letter">I</div>
          <div className="letter">1</div>
          <div className="letter">0</div>
        </div>
        <div className="letters information-n">
          <div className="letter">N</div>
          <div className="letter">1</div>
          <div className="letter">0</div>
          <div className="letter">1</div>
          <div className="letter">0</div>
        </div>
        {/* <div className="letter">N</div>
          <div className="letter">F</div>
          <div className="letter">O</div>
          <div className="letter">R</div>
          <div className="letter">M</div>
          <div className="letter">A</div>
          <div className="letter">T</div>
          <div className="letter">I</div>
          <div className="letter">O</div>
          <div className="letter">N</div>
          <div className="letter">?</div> */}
      </div>
    </div>
  );
};

const animation: IAnimation = {
  title,
  timeline,
  component,
};

export default animation;
