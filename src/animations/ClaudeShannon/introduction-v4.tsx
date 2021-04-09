import React from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./introduction.scss";
import { convertStringToBinary, IBinaryLetterPair } from "../../utils/string";

const title = "Intro-v4";

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
    duration: letterDuration * 2,
    opacity: [0, 1],
    easing: "easeOutExpo",
  },
];

const timeline = (animationRef: any) => {
  animationRef.current = anime
    .timeline({})
    .add(
      {
        targets: ".d",
        keyframes,
        easing,
      },
      letterOffset * 1
    )
    .add(
      {
        targets: "",
        keyframes,
        easing,
      },
      letterOffset * 2
    )
    .add(
      {
        targets: ".m",
        keyframes,
        easing,
      },
      letterOffset * 3
    )
    .add(
      {
        targets: [".i"],
        keyframes,
        easing,
      },
      letterOffset * 4
    )
    .add(
      {
        targets: [".n", ".c"],
        keyframes,
        easing,
      },
      letterOffset * 5
    )
    .add(
      {
        targets: "",
        keyframes,
        easing,
      },
      letterOffset * 6
    )
    .add(
      {
        targets: [".h", ".o"],
        keyframes,
        easing,
      },
      letterOffset * 7
    )
    .add(
      {
        targets: "",
        keyframes,
        easing,
      },
      letterOffset * 8
    )
    .add(
      {
        targets: [".t", ".e"],
        keyframes,
        easing,
      },
      letterOffset * 9
    )
    .add(
      {
        targets: ".space",
        keyframes,
        easing,
      },
      letterOffset * 10
    )
    .add(
      {
        targets: [".r", ".f"],
        keyframes,
        easing,
      },
      letterOffset * 11
    )
    .add(
      {
        targets: [".u"],
        keyframes,
        easing,
      },
      letterOffset * 12
    )
    .add(
      {
        targets: [".s", ".a"],
        keyframes,
        easing,
      },
      letterOffset * 13
    )
    .add(
      {
        targets: [".l"],
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
            easing: "easeOutExpo",
          },
        ],
        easing,
      },
      letterOffset * 14
    )
    .add(
      {
        targets: ".y",
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
            easing: "easeOutExpo",
          },
        ],
        easing,
      },
      letterOffset * 15
    )
    .add(
      {
        targets: ".line",
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: letterDuration * 3,
      },
      letterOffset * 25
    )
    .add({
      duration: letterDuration * 4,
    })
    .add({
      targets: ".letter",
      opacity: [1, 0],
      duration: letterDuration * 2,
      easing: "easeOutExpo",
    })
    .add(
      {
        targets: ".line-upper",
        translateY: "100",
        easing: "easeInOutExpo",
        duration: letterDuration * 2,
      },
      `-=${letterDuration * 2}`
    )
    .add(
      {
        targets: ".line-lower",
        translateY: "-100",
        easing: "easeInOutExpo",
        duration: letterDuration * 2,
      },
      `-=${letterDuration * 2}`
    )
    .add({
      targets: ".line",
      scaleX: [1, 0],
      duration: letterDuration,
      easing: "easeOutExpo",
    });
};

const component = () => {
  const wordsUpper = "Claude Shannon";
  const wordsLower = "The Father of Information Theory";
  const wordsMapUpper: {
    [key: string]: IBinaryLetterPair;
  } = convertStringToBinary(wordsUpper);
  const wordsMapLower: {
    [key: string]: IBinaryLetterPair;
  } = convertStringToBinary(wordsLower);
  return (
    <div className="title-card">
      <div className="line line-upper"></div>
      <div className="title-card__row title-card__row-upper">
        {Object.entries(wordsMapUpper).map((entry, index) => {
          let { letter, binary } = entry[1];
          const display = [letter, ...binary.split("")];
          if (letter === " ") {
            letter = "space";
          }
          if (letter === "?") {
            letter = "question";
          }
          return (
            <div
              key={`${index}-${letter}`}
              className={`${letter.toLowerCase()}`}
            >
              {display.map((item, idx) => {
                return (
                  <div
                    key={`${index}-${letter}-${idx}`}
                    className={`letter ${index}-${letter.toLowerCase()}-${item}`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="title-card__row title-card__row-lower">
        {Object.entries(wordsMapLower).map((entry, index) => {
          let { letter, binary } = entry[1];
          const display = [letter, ...binary.split("")];
          if (letter === " ") {
            letter = "space";
          }
          if (letter === "?") {
            letter = "question";
          }
          return (
            <div
              key={`${index}-${letter}`}
              className={`${letter.toLowerCase()}`}
            >
              {display.map((item, idx) => {
                return (
                  <div
                    key={`${index}-${letter}-${idx}`}
                    className={`letter ${index}-${letter.toLowerCase()}-${item}`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="line line-lower"></div>
    </div>
  );
};

const animation: IAnimation = {
  title,
  timeline,
  component,
};

export default animation;
