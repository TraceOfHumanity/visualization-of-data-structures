export type LinkedListNodeType<T> = {
  value: T;
  next: LinkedListNodeType<T> | null;
};

export type LinkedListType<T> = {
  head: LinkedListNodeType<T> | null;
  tail: LinkedListNodeType<T> | null;
  length: number;
  push: (value: T) => void;
};