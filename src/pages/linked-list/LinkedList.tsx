import { LinkedListWrapper } from "./components/LinkedList.Wrapper";
import { LinkedListHeader } from "./components/LinkedList.Header";
import { Preview } from "./components/preview/Preview";
import { Info } from "./components/info/Info";
import { Code } from "./components/preview/components/code/Code";

export const LinkedList = () => {
  return (
    <LinkedList.Wrapper>
      <LinkedList.Header />
      <div className="flex flex-col gap-2">
        <LinkedList.Info />
        <div className="flex gap-2">
          <LinkedList.Preview />
          <LinkedList.Code />
        </div>
      </div>
    </LinkedList.Wrapper>
  );
};

LinkedList.Wrapper = LinkedListWrapper;
LinkedList.Header = LinkedListHeader;
LinkedList.Preview = Preview;
LinkedList.Info = Info;
LinkedList.Code = Code;
