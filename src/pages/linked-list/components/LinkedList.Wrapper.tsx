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
      <div className="col-start-3 -col-end-1 row-start-1 -row-end-1 flex flex-col gap-2">
        {children}
      </div>
    </LinkedListContext.Provider>
  );
};
