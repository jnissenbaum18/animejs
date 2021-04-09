import React from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./introduction.scss";
import { convertStringToBinary, IBinaryLetterPair } from "../../utils/string";

const title = "Intro-v3";

const offset = 500;

const duration = 300;

const easing = "easeInOutQuart";

const keyframes = [
  {
    duration,
    opacity: [0, 1],
    easing,
  },
  {
    duration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["0px", "100px"] },
  {
    duration,
    opacity: [0, 1],
    easing,
  },
  {
    duration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["100px", "200px"] },
  {
    duration,
    opacity: [0, 1],
    easing,
  },
  {
    duration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["200px", "300px"] },
  {
    duration,
    opacity: [0, 1],
    easing,
  },
  {
    duration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["300px", "400px"] },
  {
    duration,
    opacity: [0, 1],
    easing,
  },
  {
    duration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["400px", "500px"] },
  {
    duration,
    opacity: [0, 1],
    easing,
  },
  {
    duration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["500px", "600px"] },
  {
    duration,
    opacity: [0, 1],
    easing,
  },
  {
    duration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["600px", "700px"] },
  {
    duration,
    opacity: [0, 1],
    easing,
  },
];

const timeline = (animationRef: any) => {
  animationRef.current = anime
    .timeline({})
    .add(
      {
        targets: ".W",
        keyframes: [
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["0px", "100px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["100px", "200px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["200px", "300px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["300px", "400px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["400px", "500px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["500px", "600px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["600px", "700px"] },
          {
            duration: duration * 3,
            opacity: [0, 1],

            easing,
          },
        ],
      },
      offset * 8
    )
    .add(
      {
        targets: ".H",
        keyframes,
        easing,
      },
      offset * 6
    )
    .add(
      {
        targets: ".A",
        keyframes,
        easing,
      },
      offset * 5
    )
    .add(
      {
        targets: ".T",
        keyframes,
        easing,
      },
      offset * 6
    )
    .add(
      {
        targets: ".space",
        keyframes,
        easing,
      },
      offset * 5
    )
    .add(
      {
        targets: ".I",
        keyframes,
        easing,
      },
      offset * 6
    )
    .add(
      {
        targets: ".S",
        keyframes,
        easing,
      },
      offset
    )
    .add(
      {
        targets: ".N",
        keyframes,
        easing,
      },
      offset * 4
    )
    .add(
      {
        targets: ".F",
        keyframes,
        easing,
      },
      offset * 5
    )
    .add(
      {
        targets: ".O",
        keyframes: [
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["0px", "100px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["100px", "200px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["200px", "300px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["300px", "400px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["400px", "500px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["500px", "600px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["600px", "700px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
        ],
        easing,
      },
      offset * 4
    )
    .add(
      {
        targets: ".R",
        keyframes,
        easing,
      },
      offset * 7
    )
    .add(
      {
        targets: ".M",
        keyframes,
        easing,
      },
      offset * 3
    )
    .add(
      {
        targets: ".question",
        keyframes: [
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["0px", "100px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["100px", "200px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["200px", "300px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["300px", "400px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["400px", "500px"] },
          {
            duration,
            opacity: [0, 1],
            easing,
          },
          {
            duration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["500px", "600px"] },
          {
            duration: duration * 4,
            opacity: [0, 1],
            easing: "easeInOutExpo",
          },
        ],
      },
      offset * 10
    );
};

const component = () => {
  const words = "WHAT IS INFORMATION?";
  const wordsMap: { [key: string]: IBinaryLetterPair } = convertStringToBinary(
    words
  );
  return (
    <div className="intro">
      {Object.entries(wordsMap).map((entry, index) => {
        let { letter, binary } = entry[1];
        const display = [letter, ...binary.split("")];
        if (letter === " ") {
          letter = "space";
        }
        if (letter === "?") {
          letter = "question";
        }
        return (
          <div key={`${index}-${letter}`} className={`${letter}`}>
            {display.map((item, idx) => {
              return (
                <div
                  key={`${index}-${letter}-${idx}`}
                  className={`letter ${index}-${letter}-${item}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
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
