import { useState } from "react";
import type { LinkedListType, LinkedListNodeType } from "../types/linkedListTypes";

export const useLinkedList = <T>(): LinkedListType<T> => {
  const [head, setHead] = useState<LinkedListNodeType<T> | null>(null);
  const [tail, setTail] = useState<LinkedListNodeType<T> | null>(null);
  const [length, setLength] = useState(0);

  const push = (value: T) => {
    const newNode: LinkedListNodeType<T> = { value, next: null };
    if (!head) {
      setHead(newNode);
      setTail(newNode);
    } else {
      setTail((prev) => {
        if (!prev) return null;
        prev.next = newNode;
        return newNode;
      });
    }
    setLength((prev) => prev + 1);
  };

  return { length, head, tail, push };
};
