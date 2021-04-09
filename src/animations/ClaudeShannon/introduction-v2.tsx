import React from "react";
import anime from "animejs";
import { IAnimation } from "../../types";
import "./introduction.scss";
import { convertStringToBinary, IBinaryLetterPair } from "../../utils/string";

const title = "Intro-v2";

const letterOffset = 500;

const letterDuration = 4000;

const timeline = (animationRef: any) => {
  animationRef.current = anime
    .timeline({})
    .add(
      {
        targets: ".W",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 4
    )
    .add(
      {
        targets: ".H",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 3
    )
    .add(
      {
        targets: ".A",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".T",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 6
    )
    .add(
      {
        targets: ".space",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 2
    )
    .add(
      {
        targets: ".I",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 7
    )
    .add(
      {
        targets: ".S",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 2
    )
    .add(
      {
        targets: ".N",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".F",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 4
    )
    .add(
      {
        targets: ".O",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 7
    )
    .add(
      {
        targets: ".R",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 6
    )
    .add(
      {
        targets: ".M",
        translateY: ["-100px", "700px"],
        duration: letterDuration,
        easing: "easeOutQuad",
      },
      letterOffset * 5
    )
    .add(
      {
        targets: ".question",
        translateY: ["-100px", "600px"],
        duration: letterDuration,
        easing: "easeOutQuad",
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
