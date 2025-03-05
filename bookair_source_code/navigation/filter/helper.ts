import { RouteProp } from "@react-navigation/native";

export const FilterScreen = "Filter";
export const AirlinesScreen = "Airlines";
export const DurationScreen = "Duration";
export const CabinScreen = "Cabin";

export type Params = {
  [FilterScreen]: undefined;
  [AirlinesScreen]: undefined;
  [DurationScreen]: undefined;
  [CabinScreen]: undefined;
};

export type FilterScreenRouteProps = RouteProp<Params, "Filter">;
export type AirlinesScreenRouteProps = RouteProp<Params, "Airlines">;
export type DurationScreenScreenRouteProps = RouteProp<Params, "Duration">;
export type CabinScreenScreenRouteProps = RouteProp<Params, "Cabin">;
