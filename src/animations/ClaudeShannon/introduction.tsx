import React, { FunctionComponent, EffectCallback } from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./introduction.scss";
import { convertStringToBinary, IBinaryLetterPair } from "../../utils/string";

const title = "Intro";

const letterOffset = 500;

const letterDuration = 500;

// const easing = "easeOutBounce";
const easing = "easeOutQuad";

const timeline = (animationRef: any) => {
  animationRef.current = anime
    .timeline({})
    .add(
      {
        targets: ".W",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 4
    )
    .add(
      {
        targets: ".H",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 3
    )
    .add(
      {
        targets: ".A",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".T",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 6
    )
    .add(
      {
        targets: ".space",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 2
    )
    .add(
      {
        targets: ".I",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 7
    )
    .add(
      {
        targets: ".S",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset
    )
    .add(
      {
        targets: ".N",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".F",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 4
    )
    .add(
      {
        targets: ".O",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 7
    )
    .add(
      {
        targets: ".R",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 6
    )
    .add(
      {
        targets: ".M",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
          { translateY: ["600px", "700px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".question",
        keyframes: [
          { translateY: ["-100px", "0px"], duration: letterDuration },
          { translateY: ["0px", "100px"], duration: letterDuration },
          { translateY: ["100px", "200px"], duration: letterDuration },
          { translateY: ["200px", "300px"], duration: letterDuration },
          { translateY: ["300px", "400px"], duration: letterDuration },
          { translateY: ["400px", "500px"], duration: letterDuration },
          { translateY: ["500px", "600px"], duration: letterDuration },
        ],
        easing,
      },
      letterOffset * 8
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
              if (letter === "space") {
                return <div>&nbsp</div>;
              }
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
