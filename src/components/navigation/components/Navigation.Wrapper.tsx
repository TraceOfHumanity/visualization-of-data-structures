import { Overlay } from "@/components/Overlay";
import { NavigationContext } from "../context/NavigationContext";
import { useNavigation } from "../hooks/useNavigation";

type NavigationWrapperProps = {
  children: React.ReactNode;
};

export const NavigationWrapper = ({ children }: NavigationWrapperProps) => {
  const navigationContext = useNavigation();
  if (!navigationContext) return null;

  return (
    <NavigationContext.Provider value={navigationContext}>
      <Overlay className="col-start-1 col-end-3 row-start-1 -row-end-1 flex flex-col gap-2 overflow-hidden">
        {children}
      </Overlay>
    </NavigationContext.Provider>
  );
};
