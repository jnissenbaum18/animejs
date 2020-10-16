import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Dropdown } from "react-bootstrap";
import { IAnimationList, IAnimation } from "../types";

interface IAnimationSelectorProps {
  animations: IAnimationList[];
  setAnimation: Dispatch<SetStateAction<IAnimation>>;
}

const AnimationSelector: FunctionComponent<IAnimationSelectorProps> = ({
  animations,
  setAnimation,
}) => {
  return (
    <div className="AnimationSelector">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Animation
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {animations.map(({ listTitle, animationList }: IAnimationList) => {
            return (
              <React.Fragment key={listTitle}>
                {animationList.map((animation) => {
                  const { title } = animation;
                  return (
                    <Dropdown.Item
                      key={`${listTitle}-${title}`}
                      onSelect={() => {
                        setAnimation(animation);
                      }}
                    >{`${listTitle}-${title}`}</Dropdown.Item>
                  );
                })}
              </React.Fragment>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AnimationSelector;
