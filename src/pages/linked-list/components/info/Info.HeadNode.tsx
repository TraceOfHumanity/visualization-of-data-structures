import { useContext } from "react";
import { LinkedListContext } from "../../context/LinkedListContext";

export const InfoHeadNode = () => {
  const { head, length } = useContext(LinkedListContext)!;

  const headStringItems: Record<number, string> = {
    0: "null",
    1: `{value: ${head?.value}, next: null}`,
    2: `{value: ${head?.value}, next: {value: ${head?.next?.value}, next: null}}`,
    3: `{value: ${head?.value}, next: {value: ${head?.next?.value}, next: {...}}`,
  };

  return <div>Head: {headStringItems[length < 4 ? length : 3]}</div>;
};
