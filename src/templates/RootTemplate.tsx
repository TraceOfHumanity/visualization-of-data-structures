import { Navigation } from "@/components/navigation/Navigation";
import { Outlet } from "react-router";

export const RootTemplate = () => {
  return (
    <div className="grid grid-cols-[repeat(16,1fr)] h-screen w-screen grid-rows-[auto_1fr_auto] gap-2 p-2">
      <Navigation />
      <Outlet />
    </div>
  );
};
