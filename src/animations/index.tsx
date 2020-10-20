import { IAnimationList } from "../types";
import tangentAnimation from "./Common/tangent";
import sandboxAnimation from "./Common/sandbox";
import claudeShannonIntro from "./ClaudeShannon/introduction";

//Common
export const Common: IAnimationList = {
  listTitle: "Common",
  animationList: [tangentAnimation, sandboxAnimation],
};

//ClaudeShannon
export const ClaudeShannon: IAnimationList = {
  listTitle: "Claude Shannon",
  animationList: [claudeShannonIntro],
};
