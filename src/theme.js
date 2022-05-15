import { createTheme } from "@mui/material/styles";
import lightTheme from "@availity/design-tokens/dist/presets/lightTheme";
const av = require("@availity/design-tokens/dist/js/tokens.js");
// A custom theme for this app
const theme = createTheme({
  ...lightTheme,
  components: {
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableElevation: true
      },
      variants: [
        {
          props: { color: "tertiary" },
          style: {
            backgroundColor: av.colorTertiaryMain,
            textTransform: "none",
            color: av.colorTertiaryContrast,
            "&:hover": {
              backgroundColor: av.colorTertiaryDark
            },
            "&:focus": {
              backgroundColor: av.colorTertiaryDark,
              outline: "2px solid white",
              boxShadow: "0 0 0px 4px rgba(0,0,0,1)"
            },
            "&:active": {
              backgroundColor: av.colorTertiaryMain
            }
          }
        },
        {
          props: { color: "secondary" },
          style: {
            backgroundColor: av.colorSecondaryMain,
            textTransform: "none",
            color: av.colorSecondaryContrast,
            "&:hover": {
              backgroundColor: av.colorSecondaryDark
            },
            "&:focus": {
              backgroundColor: av.colorSecondaryDarker,
              outline: "2px solid white",
              boxShadow: "0 0 0px 4px rgba(0,0,0,1)"
            },
            "&:active": {
              backgroundColor: av.colorSecondaryMain
            }
          }
        },
        {
          props: { color: "primary" },
          style: {
            backgroundColor: av.colorPrimaryMain,
            textTransform: "none",
            color: av.colorPrimaryContrast,
            "&:hover": {
              backgroundColor: av.colorPrimaryDark
            },
            "&:focus": {
              backgroundColor: av.colorPrimaryMain,
              outline: "2px solid white",
              boxShadow: "0 0 0px 4px rgba(21,82,188,1)"
            },
            "&:active": {
              backgroundColor: av.colorPrimaryLight
            }
          }
        }
      ]
    }
  }
});

export default theme;
