import { PaletteMode, Theme, ThemeOptions, colors, createTheme } from "@mui/material";

type ThemeOptionDictionaryType = { [key in PaletteMode]: ThemeOptions | undefined }

const themeOptionDictionary: ThemeOptionDictionaryType = {
  light: {
    palette: {
      mode: "light"
    }
  },
  dark: {}
};

export const getTheme = (mode: PaletteMode): Theme => {
  return createTheme(themeOptionDictionary[mode]);
};

// export const MainTheme = createTheme({
//   palette: {
//     mode: "dark",
//     favorite: {
//       main: colors.lime["A100"]
//     }
//   }
// });