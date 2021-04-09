import React from "react";
import { IAnimation } from "../../types";

import anime from "animejs";
import "./pointsReduction.scss";

interface IPOINT {
  x: number;
  y: number;
}

const title = "Points-Reduction";

const baseDuration = 300;

const initialPoints: IPOINT[] = [
  { x: 0, y: 14 },
  { x: 1, y: 91 },
  { x: 2, y: 77 },
  { x: 3, y: 36 },
  { x: 4, y: 99 },
  { x: 5, y: 19 },
  { x: 6, y: 66 },
  { x: 7, y: 18 },
  { x: 8, y: 70 },
  { x: 9, y: 22 },
  { x: 10, y: 0 },
  { x: 11, y: 41 },
  { x: 12, y: 27 },
  { x: 13, y: 39 },
  { x: 14, y: 45 },
  { x: 15, y: 31 },
  { x: 16, y: 69 },
  { x: 17, y: 12 },
  { x: 18, y: 58 },
  { x: 19, y: 32 },
];

const timeline = (animationRef: any) => {
  const animeTimeline = anime.timeline({});

  animeTimeline.add({
    duration: 1000,
  });
  initialPoints.forEach((point, idx) => {
    animeTimeline.add(
      {
        targets: `.point-${idx}`,
        opacity: [0, 1],
        easing: "easeInExpo",
        duration: baseDuration,
      },
      `-=${baseDuration / 2}`
    );
  });
  animeTimeline
    .add({
      targets: ".x-axis",
      scaleY: [0, 1],
      translateY: 20,
      easing: "easeInOutExpo",
      duration: baseDuration * 3,
    })
    .add(
      {
        targets: ".y-axis",
        scaleX: [0, 1],
        translateX: -20,
        duration: baseDuration * 3,
        easing: "easeInOutExpo",
      },
      `-=${baseDuration * 3}`
    )
    .add(
      {
        targets: ".y-axis-label",
        opacity: [0, 1],
        duration: baseDuration * 3,
        easing: "easeInOutExpo",
      },
      `-=${baseDuration}`
    )
    .add(
      {
        targets: ".x-axis-label",
        opacity: [0, 1],
        duration: baseDuration * 3,
        easing: "easeInOutExpo",
      },
      `-=${baseDuration * 3}`
    );

  animationRef.current = animeTimeline;
};

const component = () => {
  return (
    <div className="points-container">
      <div className="line x-axis"></div>
      <div className="line y-axis"></div>
      <div className="label x-axis-label">Date</div>
      <div className="label y-axis-label">Views</div>
      {initialPoints.map(({ x, y }, idx) => (
        <div
          style={{
            left: x * 22 + 20,
            top: -(y * 3) - 200,
          }}
          key={`point-${idx}`}
          className={`point point-${idx} circle`}
        ></div>
      ))}
    </div>
  );
};

const animation: IAnimation = {
  title,
  timeline,
  component,
};

export default animation;
