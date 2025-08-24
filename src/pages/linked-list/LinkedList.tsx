import { LinkedListWrapper } from "./components/LinkedList.Wrapper";
import { LinkedListHeader } from "./components/LinkedList.Header";
import { LinkedListPreview } from "./components/linked-list-preview/LinkedList.Preview";

export const LinkedList = () => {
  return (
    <LinkedList.Wrapper>
      <LinkedList.Header />
      <LinkedList.Preview />
    </LinkedList.Wrapper>
  );
};

LinkedList.Wrapper = LinkedListWrapper;
LinkedList.Header = LinkedListHeader;
LinkedList.Preview = LinkedListPreview;
