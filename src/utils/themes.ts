type Colors = {
  black: string;
  white: string;
  lightText1: string;
  lightText2: string;
  lightText3: string;
  darkText1: string;
  darkText2: string;
  darkText3: string;
  darkBorder: string;
  lightBorder: string;
}

export type Theme = {
  primary: string
  accent: string;
  header: string;
  subHeader: string;
  text: string;
  border: string;
}

export const colors: Colors = {
  black: "#000000",
  white: "#ffffff",
  lightText1: "#eeeeee",
  lightText2: "#dddddd",
  lightText3: "#cccccc",
  darkText1: "#333333",
  darkText2: "#555555",
  darkText3: "#777777",
  darkBorder: "#444444",
  lightBorder: "#cccccc"
}

export const lightTheme: Theme = {
  primary: colors.white,
  accent: colors.black,
  header: colors.darkText1,
  subHeader: colors.darkText2,
  text: colors.darkText3,
  border: colors.lightBorder
}

export const darkTheme: Theme = {
  primary: colors.black,
  accent: colors.white,
  header: colors.lightText1,
  subHeader: colors.lightText2,
  text: colors.lightText3,
  border: colors.darkBorder
}