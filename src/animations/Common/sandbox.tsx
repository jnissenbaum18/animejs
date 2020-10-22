import React, { FunctionComponent, EffectCallback } from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./sandbox.scss";
import { convertStringToBinary, IBinaryLetterPair } from "../../utils/string";

const title = "Sandbox";

const letterOffset = 500;

const letterDuration = 300;

const easing = "easeInOutQuart";

const keyframes = [
  {
    duration: letterDuration,
    opacity: [0, 1],
    easing,
  },
  {
    duration: letterDuration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["0px", "100px"] },
  {
    duration: letterDuration,
    opacity: [0, 1],
    easing,
  },
  {
    duration: letterDuration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["100px", "200px"] },
  {
    duration: letterDuration,
    opacity: [0, 1],
    easing,
  },
  {
    duration: letterDuration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["200px", "300px"] },
  {
    duration: letterDuration,
    opacity: [0, 1],
    easing,
  },
  {
    duration: letterDuration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["300px", "400px"] },
  {
    duration: letterDuration,
    opacity: [0, 1],
    easing,
  },
  {
    duration: letterDuration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["400px", "500px"] },
  {
    duration: letterDuration,
    opacity: [0, 1],
    easing,
  },
  {
    duration: letterDuration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["500px", "600px"] },
  {
    duration: letterDuration,
    opacity: [0, 1],
    easing,
  },
  {
    duration: letterDuration,
    opacity: [1, 0],
    easing,
  },
  { translateY: ["600px", "700px"] },
  {
    duration: letterDuration,
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
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["0px", "100px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["100px", "200px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["200px", "300px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["300px", "400px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["400px", "500px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["500px", "600px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["600px", "700px"] },
          {
            duration: letterDuration * 3,
            opacity: [0, 1],

            easing,
          },
        ],
      },
      letterOffset * 8
    )
    .add(
      {
        targets: ".H",
        keyframes,
        easing,
      },
      letterOffset * 6
    )
    .add(
      {
        targets: ".A",
        keyframes,
        easing,
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".T",
        keyframes,
        easing,
      },
      letterOffset * 6
    )
    .add(
      {
        targets: ".space",
        keyframes,
        easing,
      },
      letterOffset * 4
    )
    .add(
      {
        targets: ".I",
        keyframes,
        easing,
      },
      letterOffset * 6
    )
    .add(
      {
        targets: ".S",
        keyframes,
        easing,
      },
      letterOffset
    )
    .add(
      {
        targets: ".N",
        keyframes,
        easing,
      },
      letterOffset * 4
    )
    .add(
      {
        targets: ".F",
        keyframes,
        easing,
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".O",
        keyframes: [
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["0px", "100px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["100px", "200px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["200px", "300px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["300px", "400px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["400px", "500px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["500px", "600px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["600px", "700px"] },
          {
            duration: letterDuration * 2,
            opacity: [0, 1],
            easing,
          },
        ],
        easing,
      },
      letterOffset * 7
    )
    .add(
      {
        targets: ".R",
        keyframes,
        easing,
      },
      letterOffset * 7
    )
    .add(
      {
        targets: ".M",
        keyframes,
        easing,
      },
      letterOffset * 3
    )
    .add(
      {
        targets: ".question",
        keyframes: [
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["0px", "100px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["100px", "200px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["200px", "300px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["300px", "400px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["400px", "500px"] },
          {
            duration: letterDuration,
            opacity: [0, 1],
            easing,
          },
          {
            duration: letterDuration,
            opacity: [1, 0],
            easing,
          },
          { translateY: ["500px", "600px"] },
          {
            duration: letterDuration * 4,
            opacity: [0, 1],
            easing: "easeInOutExpo",
          },
        ],
      },
      letterOffset * 10
    );
};

const component = () => {
  const words = "WHAT IS INFORMATION?";
  const wordsMap: { [key: string]: IBinaryLetterPair } = convertStringToBinary(
    words
  );
  return (
    <div className="sandbox">
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
    </div>
  );
};

const animation: IAnimation = {
  title,
  timeline,
  component,
};

export default animation;
