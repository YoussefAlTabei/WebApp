import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({mode}) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#00aeff",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#3c6dee",
        contrastText: "#ffffff"
      },
      background: {
        default: "#131313",
        paper: "#232323"
      }
    } : {
      primary: {
        main: "#00aeff",
      },
      secondary: {
        main: "#3c6dee",
      },
      background: {
        default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;

