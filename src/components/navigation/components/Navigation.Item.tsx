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
          "text-lg font-bold border-transparent px-2 relative",
          isActive &&
            "[&_span]:bg-linear-to-br [&_span]:from-background-from [&_span]:to-background-to [&_span]:text-transparent [&_span]:bg-clip-text after:content-[''] after:top-1/2 after:left-0 after:size-2 after:bg-white after:absolute after:-translate-y-1/2 after:-translate-x-1/2 after:rotate-45",
        )
      }
      to={path}
    >
      <span className="text-gray-300">{label}</span>
    </NavLink>
  );
};
