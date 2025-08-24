import { LinkedListWrapper } from "./components/LinkedList.Wrapper";
import { LinkedListHeader } from "./components/LinkedList.Header";
import { Info } from "./components/info/Info";
import { Code } from "./components/preview/components/code/Code";
import { Preview } from "./components/preview/Preview";

export const LinkedList = () => {
  return (
    <LinkedList.Wrapper>
      <LinkedList.Header />
      <div className="flex flex-col gap-2">
        <LinkedList.Info />
        <LinkedList.Preview />
      </div>
    </LinkedList.Wrapper>
  );
};

LinkedList.Wrapper = LinkedListWrapper;
LinkedList.Header = LinkedListHeader;
LinkedList.Preview = Preview;
LinkedList.Info = Info;
LinkedList.Code = Code;
