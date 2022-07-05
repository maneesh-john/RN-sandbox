import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackProps } from "../types/navigation";
import FnComoponent from "../screens/FunctionalComponentScreen";
import Profile from "../screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator<StackProps>();

const Navigation: React.FC = () => {

  return(
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={FnComoponent}
          options={{ headerShown: false }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;