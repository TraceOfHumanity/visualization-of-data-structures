import { LinkedListContext } from "../context/LinkedListContext";
import { useLinkedList } from "../hooks/useLinkedList";

export const LinkedListWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const linkedList = useLinkedList();


  return (
    <LinkedListContext.Provider value={linkedList}>
      {children}
    </LinkedListContext.Provider>
  );
};
