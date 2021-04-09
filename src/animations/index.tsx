import { IAnimationList } from "../types";
import tangentAnimation from "./Common/tangent";
import sandboxAnimation from "./Common/sandbox";
import claudeShannonIntro from "./ClaudeShannon/introduction";
import claudeShannonIntroV2 from "./ClaudeShannon/introduction-v2";
import claudeShannonIntroV3 from "./ClaudeShannon/introduction-v3";
import claudeShannonIntroV4 from "./ClaudeShannon/introduction-v4";
import pointsReduction from "./Techblog/pointsReduction";
import titleCard from "./ClaudeShannon/titleCard";

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
    claudeShannonIntroV4,
    titleCard,
  ],
};

//ClaudeShannon
export const TechBlog: IAnimationList = {
  listTitle: "Tech Blog",
  animationList: [pointsReduction],
};
