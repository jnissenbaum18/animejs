import React from "react";
import { IAnimation } from "../../types";

import anime from "animejs";
import "./pointsReduction.scss";

interface IPOINT {
  x: number;
  y: number;
  idx?: number;
}

const title = "Points-Reduction-2";

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

  const buckets: IPOINT[][] = [];
  let bucket: IPOINT[] = [];

  initialPoints.forEach((point, idx) => {
    bucket.push({ ...point, idx });
    if (bucket.length === 5) {
      buckets.push(bucket);
      bucket = [];
    }
  });

  buckets.forEach((points) => {
    const xAvg = points.reduce((acc, { x }) => acc + x, 0) / points.length;
    const yAvg = points.reduce((acc, { y }) => acc + y, 0) / points.length;
    points.forEach(({ x, y, idx }) => {
      console.log(yAvg, y, (y - yAvg) * 3, idx);
      const index: number = idx as number;
      animeTimeline.add(
        {
          targets: `.point-${idx}`,
          translateX: (xAvg - x) * 22 + 20,
          translateY: (y - yAvg) * 3 - index * 6,
          backgroundColor: "#ff1493",
          easing: "easeInQuart",
          duration: baseDuration * 4,
        },
        `-=${baseDuration * 4}`
      );
    });
  });

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
