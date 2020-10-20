import React from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./tangent.scss";

const title = "Tangent";

const timeline = (animationRef: any) => {
  animationRef.current = anime
    .timeline({})
    .add({
      targets: ".tangent .letters .letter",
      opacity: [0, 1],
      duration: anime.stagger(200, { start: 1200 }),
      easing: "easeInOutExpo",
    })
    .add(
      {
        targets: ".tangent .line",
        scaleX: [0, 1],
        easing: "easeInOutExpo",
      },
      "-=2000"
    );
};

const component = () => {
  return (
    <div className="tangent">
      <div className="line" />
      <div className="letters">
        <div className="letter">T</div>
        <div className="letter">A</div>
        <div className="letter">N</div>
        <div className="letter">G</div>
        <div className="letter">E</div>
        <div className="letter">N</div>
        <div className="letter">T</div>
      </div>
      <div className="line" />
    </div>
  );
};

const animation: IAnimation = {
  title,
  timeline,
  component,
};

export default animation;
