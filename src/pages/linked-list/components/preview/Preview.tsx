import { Code } from "./components/code/Code";
import { LinkedListScene } from "./components/linked-list-scene/Linked-list-scene";
import { PreviewWrapper } from "./components/Preview.Wrapper";

export const Preview = () => {
  return (
    <Preview.Wrapper>
      <LinkedListScene />
      <Preview.Code />
    </Preview.Wrapper>
  );
};

Preview.Wrapper = PreviewWrapper;
Preview.Code = Code;
