import React, { FunctionComponent, EffectCallback } from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./Intro.scss";

const title = "Intro";

const timeline = (animationRef: any) => {
  animationRef.current = anime
    .timeline({})
    .add(
      {
        targets: ".words .what",
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutExpo",
      },
      400
    )
    .add({
      targets: ".words .is",
      opacity: [0, 1],
      duration: 800,
      easing: "easeInOutExpo",
    })
    .add({
      targets: ".letters .letter",
      opacity: [0, 1],
      duration: anime.stagger(200, { start: 1200 }),
      easing: "easeInOutExpo",
    })
    .add(
      {
        targets: ".line",
        scaleX: [0, 1],
        easing: "easeInOutExpo",
      },
      "-=2000"
    );
};

const component = () => {
  return (
    <div className="intro">
      <div className="words">
        <div className="word what letter">What&nbsp;</div>
      </div>
      <div className="words">
        <div className="word is letter">is&nbsp;</div>
      </div>
      <div className="information">
        <div className="line" />
        <div className="letters">
          <div className="letter">I</div>
          <div className="letter">N</div>
          <div className="letter">F</div>
          <div className="letter">O</div>
          <div className="letter">R</div>
          <div className="letter">M</div>
          <div className="letter">A</div>
          <div className="letter">T</div>
          <div className="letter">I</div>
          <div className="letter">O</div>
          <div className="letter">N</div>
          <div className="letter">?</div>
        </div>
        <div className="line" />
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
