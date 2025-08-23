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
      {children}
    </NavigationContext.Provider>
  );
};
