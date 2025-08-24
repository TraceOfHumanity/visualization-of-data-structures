import { InfoHeadNode } from "./Info.HeadNode";
import { InfoLength } from "./Info.length";
import { InfoTailNode } from "./Info.TailNode";

export const Info = () => {
  return (
    <div>
      <InfoLength />
      <InfoHeadNode />
      <InfoTailNode />
    </div>
  );
};
