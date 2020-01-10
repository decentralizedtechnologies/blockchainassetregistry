import { createMuiTheme } from "@material-ui/core/styles";
import { darken, lighten } from "polished";

export const spacingUnit = 16;

export const palette = {
  pink: {
    main: "#ff40b4",
    light: lighten(0.05, "#ff40b4"),
    dark: darken(0.05, "#ff40b4"),
  },
};

export const theme = createMuiTheme({
  spacing: 8,
  palette: {
    action: {
      active: "#434343",
    },
    background: {
      default: "whitesmoke",
    },
    primary: {
      light: lighten(0.05, "#F9D53D"),
      main: "#F9D53D",
      dark: darken(0.05, "#F9D53D"),
    },
    secondary: {
      light: lighten(0.05, "#42318B"),
      main: "#42318B",
      dark: darken(0.05, "#42318B"),
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    subtitle2: {
      fontSize: "1.1rem",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        "&.Mui-focused": {
          color: "rgba(0, 0, 0, 0.87)",
        },
      },
    },
    MuiInput: {
      underline: {
        "&:after": {
          borderBottomColor: "rgba(0, 0, 0, 0.87)",
        },
      },
    },
  },
});
