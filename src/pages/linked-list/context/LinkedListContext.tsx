import { createContext } from "react";
import type { LinkedList } from "../types/linkedListTypes";

export const LinkedListContext = createContext<LinkedList<any> | null>(null);
