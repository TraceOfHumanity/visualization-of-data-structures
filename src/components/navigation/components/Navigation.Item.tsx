import { cn } from "@/utils/cn";
import { NavLink } from "react-router";

type NavigationItemProps = {
  label: string;
  path: string;
};

export const NavigationItem = ({ label, path }: NavigationItemProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "text-lg font-bold border-y border-transparent px-2 first:border-t-0 last:border-b-0",
          isActive &&
            "[&_span]:bg-linear-to-br [&_span]:from-background-from [&_span]:to-background-to [&_span]:text-transparent [&_span]:bg-clip-text border-white",
        )
      }
      to={path}
    >
      <span className="text-gray-300">{label}</span>
    </NavLink>
  );
};
