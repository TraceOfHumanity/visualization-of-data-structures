import { NavigationHeader } from "./components/Navigation.Header";
import { NavigationItems } from "./components/Navigation.Items";
import { NavigationWrapper } from "./components/Navigation.Wrapper";

export const Navigation = () => {
  return (
    <Navigation.Wrapper>
      <Navigation.Header />
      <Navigation.Items />
    </Navigation.Wrapper>
  );
};

Navigation.Wrapper = NavigationWrapper;
Navigation.Header = NavigationHeader;
Navigation.Items = NavigationItems;
