import { LinkedListWrapper } from "./components/LinkedList.Wrapper";
import { LinkedListHeader } from "./components/LinkedList.Header";
import { Preview } from "./components/preview/Preview";
import { Info } from "./components/info/Info";

export const LinkedList = () => {
  return (
    <LinkedList.Wrapper>
      <LinkedList.Header />
      <LinkedList.Info />
      <LinkedList.Preview />
    </LinkedList.Wrapper>
  );
};

LinkedList.Wrapper = LinkedListWrapper;
LinkedList.Header = LinkedListHeader;
LinkedList.Preview = Preview;
LinkedList.Info = Info;
