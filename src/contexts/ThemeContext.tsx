import React, { useState } from "react";
import { Appearance } from "react-native";

import { Theme, lightTheme, darkTheme } from "../utils/themes";

type Context = {
  theme: Theme;
}

export const ThemeContext = React.createContext<Context>({ theme: lightTheme });

type Props = {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {

  const colorScheme = Appearance.getColorScheme();
  const [theme] = useState((colorScheme === "dark")? darkTheme: lightTheme);

  return(
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;