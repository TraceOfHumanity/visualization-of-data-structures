import { useContext } from "react";
import { LinkedListContext } from "../../context/LinkedListContext";

export const InfoLength = () => {
  const { length } = useContext(LinkedListContext)!;

  return <div>Length: {length}</div>;
};
