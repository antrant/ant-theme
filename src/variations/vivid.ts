import { makeMainColorsDark, makeMainColorsLight } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const vividColors: ThemeColors = {
  blue: "#00BFFF",
  green: "#00FF7F",
  greenAlt: "#ADFF2F",
  orange: "#FF6600",
  pink: "#FF00FF",
  purple: "#9D00FF",
  red: "#FF0000",
  salmon: "#FF1493",
  turquoize: "#00FFFF",
  yellow: "#FFD700",
};

const vividLevels: ThemeLevels = {
  danger: vividColors.red,
  info: vividColors.blue,
  success: vividColors.green,
  warning: vividColors.yellow,
};

export const vividPurple: Theme = {
  colors: vividColors,
  levels: vividLevels,
  ui: makeMainColorsDark({
    base: "#000000",
    primary: "#BB00FF",
  }),
};

export const vividBlack: Theme = {
  colors: vividColors,
  levels: vividLevels,
  ui: makeMainColorsDark({
    base: "#000000",
    primary: "#FFFFFF",
  }),
};

export const vividLight: Theme = {
  colors: {
    blue: "#0066FF",
    green: "#008000",
    greenAlt: "#4B8B00",
    orange: "#CC5500",
    pink: "#FF00FF",
    purple: "#7700CC",
    red: "#CC0000",
    salmon: "#CC0044",
    turquoize: "#008B8B",
    yellow: "#B8860B",
  },
  levels: vividLevels,
  ui: makeMainColorsLight({
    base: "#FFFFFF",
    primary: "#000000",
  }),
};
