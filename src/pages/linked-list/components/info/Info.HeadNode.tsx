import { useContext } from "react";
import { LinkedListContext } from "../../context/LinkedListContext";

export const InfoHeadNode = () => {
  const { head, length } = useContext(LinkedListContext)!;

  const headString =
    length === 0
      ? "null"
      : `{value: ${head?.value || "null"}, next: ${
          head?.next
            ? `{value: ${head?.next?.value || "null"}, next: ${head?.next?.next?.value || "null"}}`
            : "null"
        }}`;

  return <div>Head: {headString}</div>;
};
