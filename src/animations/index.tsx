import { IAnimationList } from "../types";
import tangentAnimation from "./Common/tangent";
import sandboxAnimation from "./Common/sandbox";
import claudeShannonIntro from "./ClaudeShannon/introduction";
import claudeShannonIntroV2 from "./ClaudeShannon/introduction-v2";
import claudeShannonIntroV3 from "./ClaudeShannon/introduction-v3";

//Common
export const Common: IAnimationList = {
  listTitle: "Common",
  animationList: [tangentAnimation, sandboxAnimation],
};

//ClaudeShannon
export const ClaudeShannon: IAnimationList = {
  listTitle: "Claude Shannon",
  animationList: [
    claudeShannonIntro,
    claudeShannonIntroV2,
    claudeShannonIntroV3,
  ],
};
