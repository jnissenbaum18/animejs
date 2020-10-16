import { FunctionComponent } from "react";

export interface IAnimation {
  title: string;
  timeline: (animationRef: any) => void;
  component: FunctionComponent;
}

export interface IAnimationList {
  listTitle: string;
  animationList: IAnimation[];
}
