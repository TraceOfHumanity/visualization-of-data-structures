import type { NavigationType } from "../types/navigationTypes";

export const useNavigation = (): NavigationType => {
  const navigationItems = [
    {
      label: "Linked List",
      path: "/linked-list",
    },
  ];

  return { navigationItems };
};
