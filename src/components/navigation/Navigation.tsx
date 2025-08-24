import { NavigationItems } from "./components/Navigation.Items";
import { NavigationWrapper } from "./components/Navigation.Wrapper";

export const Navigation = () => {
  return (
    <Navigation.Wrapper>
      <Navigation.Items />
    </Navigation.Wrapper>
  );
};

Navigation.Wrapper = NavigationWrapper;
Navigation.Items = NavigationItems;
