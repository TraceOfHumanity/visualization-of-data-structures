import { useContext } from "react";
import { LinkedListContext } from "./context/LinkedListContext";
import { LinkedListWrapper } from "./components/LinkedList.Wrapper";
import { LinkedListHeader } from "./components/LinkedList.Header";
import { LinkedListPreview } from "./components/LinkedList.Preview";

export const LinkedList = () => {
  const linkedList = useContext(LinkedListContext);

  if (!linkedList) {
    return null;
  }

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
