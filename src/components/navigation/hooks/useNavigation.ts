import type {
  NavigationType,
  NavigationItemType,
} from "../types/navigationTypes";

export const useNavigation = (): NavigationType => {
  const navigationItems: NavigationItemType[] = [
    {
      label: "Linked List",
      path: "/linked-list",
    },
    {
      label: "Stack",
      path: "/stack",
    },
    {
      label: "Queue",
      path: "/queue",
    },
    {
      label: "Tree",
      path: "/tree",
    },
    {
      label: "Graph",
      path: "/graph",
    },
    {
      label: "Hash Table",
      path: "/hash-table",
    },
    {
      label: "Heap",
      path: "/heap",
    },
  ];

  return { navigationItems };
};
