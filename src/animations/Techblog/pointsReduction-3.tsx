import React from "react";
import { IAnimation } from "../../types";

import anime from "animejs";
import "./pointsReduction.scss";

interface IPOINT {
  x: number;
  y: number;
  id: string;
}

const title = "Points-Reduction-3";

const baseDuration = 300;

const initialPoints: IPOINT[] = [
  { x: 0, y: 14, id: "point-0-0" },
  { x: 1, y: 91, id: "point-0-1" },
  { x: 2, y: 77, id: "point-0-2" },
  { x: 3, y: 36, id: "point-0-3" },
  { x: 4, y: 99, id: "point-0-4" },
  { x: 5, y: 19, id: "point-0-5" },
  { x: 6, y: 66, id: "point-0-6" },
  { x: 7, y: 18, id: "point-0-7" },
  { x: 8, y: 70, id: "point-0-8" },
  { x: 9, y: 22, id: "point-0-9" },
  { x: 10, y: 0, id: "point-0-10" },
  { x: 11, y: 41, id: "point-0-11" },
  { x: 12, y: 27, id: "point-0-12" },
  { x: 13, y: 39, id: "point-0-13" },
  { x: 14, y: 45, id: "point-0-14" },
  { x: 15, y: 31, id: "point-0-15" },
  { x: 16, y: 69, id: "point-0-16" },
  { x: 17, y: 12, id: "point-0-17" },
  { x: 18, y: 58, id: "point-0-18" },
  { x: 19, y: 32, id: "point-0-19" },
];

const m = 8;

const colors = ["#ffff00", "#9932cc", "#ff7f50", "#7fffd4", "#ff1493"];

const createPairedArray = (input: any[]): any[][] => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (i === input.length - 1) {
      continue;
    }
    result.push([input[i], input[i + 1]]);
  }
  return result;
};

const pairSteps: IPOINT[][] = [];

const recursivelyPairPoints = (points: IPOINT[], m: number): IPOINT[] => {
  if (points.length % m === 0) {
    return points;
  }
  const pairedArray = createPairedArray(points);
  const averagedArray = pairedArray.map((pair, idx) => {
    if (pair.length < 2) {
      return pair[0];
    }
    return {
      x: (pair[0].x + pair[1].x) / 2,
      y: (pair[0].y + pair[1].y) / 2,
      id: `point-${pairSteps.length}-${idx}`,
    };
  });
  pairSteps.push(averagedArray);
  return recursivelyPairPoints(averagedArray, m);
};

recursivelyPairPoints(initialPoints, m);

pairSteps.unshift(initialPoints);

console.log(pairSteps);

const timeline = (animationRef: any) => {
  const animeTimeline = anime.timeline({});

  animeTimeline.add({
    duration: 1000,
  });

  pairSteps.forEach((points: IPOINT[], stepIdx) => {
    points.forEach(({ x, y }: IPOINT, idx) => {
      const nextPoint = points[idx + 1];
      const prevPoint = points[idx - 1];
      if (nextPoint) {
        const xAvg = (x + nextPoint.x) / 2;
        const yAvg = (y + nextPoint.y) / 2;
        if (stepIdx !== 0) {
          animeTimeline.add(
            {
              targets: `.point-${stepIdx}-${idx}-1`,
              opacity: [0, 1],
              easing: "easeInQuart",
              duration: 100,
            },
            `${(stepIdx + 1) * baseDuration * 4}`
          );
        }
        animeTimeline.add(
          {
            targets: `.point-${stepIdx}-${idx}-1`,
            translateX: (xAvg - x) * 22,
            translateY: (y - yAvg) * 3,
            // opacity: [1, 0],
            backgroundColor: "#ff1493",
            easing: "easeInQuart",
            duration: baseDuration * 4,
          },
          `${(stepIdx + 1) * baseDuration * 4}`
        );
        if (stepIdx !== pairSteps.length - 1) {
          animeTimeline.add(
            {
              targets: `.point-${stepIdx}-${idx}-1`,
              opacity: [1, 0],
              easing: "easeInQuart",
              duration: 100,
            },
            `${(stepIdx + 1) * baseDuration * 4 + baseDuration * 4}`
          );
        }
      }
      if (prevPoint) {
        const xAvg = (x + prevPoint.x) / 2;
        const yAvg = (y + prevPoint.y) / 2;
        if (stepIdx !== 0) {
          animeTimeline.add(
            {
              targets: `.point-${stepIdx}-${idx}-2`,
              opacity: [0, 1],
              easing: "easeInQuart",
              duration: 100,
            },
            `${(stepIdx + 1) * baseDuration * 4}`
          );
        }
        animeTimeline.add(
          {
            targets: `.point-${stepIdx}-${idx}-2`,
            translateX: (xAvg - x) * 22,
            translateY: (y - yAvg) * 3,
            // opacity: [1, 0],
            backgroundColor: "#ff1493",
            easing: "easeInQuart",
            duration: baseDuration * 4,
          },
          `${(stepIdx + 1) * baseDuration * 4}`
        );
        if (stepIdx !== pairSteps.length - 1) {
          animeTimeline.add(
            {
              targets: `.point-${stepIdx}-${idx}-2`,
              opacity: [1, 0],
              easing: "easeInQuart",
              duration: 100,
            },
            `${(stepIdx + 1) * baseDuration * 4 + baseDuration * 4 + 1}`
          );
        }
      }
    });
  });

  /* buckets.forEach((points) => {
    const xAvg = points.reduce((acc, { x }) => acc + x, 0) / points.length;
    const yAvg = points.reduce((acc, { y }) => acc + y, 0) / points.length;
    points.forEach(({ x, y, idx }) => {
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
  }); */

  animationRef.current = animeTimeline;
};

const component = () => {
  return (
    <div className="points-container">
      <div className="line x-axis"></div>
      <div className="line y-axis"></div>
      <div className="label x-axis-label">Date</div>
      <div className="label y-axis-label">Views</div>
      {pairSteps.map((points: IPOINT[], stepIdx) => {
        console.log(stepIdx !== 0 ? 0 : 1);
        return points.map(({ x, y }, idx) => (
          <div key={`point-${stepIdx}-${idx}`}>
            {idx < points.length - 1 && (
              <div style={{ position: "relative", width: 0, height: 0 }}>
                <div
                  style={{
                    left: x * 22 + 20,
                    top: -(y * 3) - 200,
                    backgroundColor: colors[stepIdx],
                    // opacity: `${stepIdx !== 0 ? 0 : 1}`,
                  }}
                  className={`point point-${stepIdx}-${idx}-1 circle`}
                ></div>
              </div>
            )}
            {idx > 0 && (
              <div style={{ position: "relative", width: 0, height: 0 }}>
                <div
                  style={{
                    left: x * 22 + 20,
                    top: -(y * 3) - 200,
                    backgroundColor: colors[stepIdx],
                    // opacity: `${stepIdx !== 0 ? 0 : 1}`,
                  }}
                  className={`point point-${stepIdx}-${idx}-2 circle`}
                ></div>
              </div>
            )}
          </div>
        ));
      })}
    </div>
  );
};

const animation: IAnimation = {
  title,
  timeline,
  component,
};

export default animation;
