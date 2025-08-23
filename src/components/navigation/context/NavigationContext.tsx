import { createContext } from "react";
import type { NavigationType } from "../types/navigationTypes";

export const NavigationContext = createContext<NavigationType | null>(null);
