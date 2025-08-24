import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { NavLink } from "react-router";

export const NavigationItems = () => {
  const { navigationItems } = useContext(NavigationContext)!;

  return (
    <div className="flex flex-col gap-2">
      {navigationItems.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
