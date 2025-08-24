import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { NavigationItem } from "./Navigation.Item";

export const NavigationItems = () => {
  const { navigationItems } = useContext(NavigationContext)!;

  return (
    <div className="flex flex-col gap-2">
      {navigationItems.map((item) => (
        <NavigationItem key={item.path} {...item} />
      ))}
    </div>
  );
};
