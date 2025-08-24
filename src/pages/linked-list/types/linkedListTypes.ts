export type LinkedListNode<T> = {
  value: T;
  next: LinkedListNode<T> | null;
};

export type LinkedList<T> = {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: number;
  push: (value: T) => void;
};