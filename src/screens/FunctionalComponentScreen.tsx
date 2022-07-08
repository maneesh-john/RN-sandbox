import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

import { ThemeContext } from "../contexts/ThemeContext";
import { StackProps } from "../types/navigation";
import { User } from "../types/user";
import List from "../components/List";

type Props = NativeStackScreenProps<StackProps, "Home">;

const FnComoponent: React.FC<Props> = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  const navigate = (user: User) => {
    navigation.navigate("Profile", { user: user });
  }
  return(
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <List navigate={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default FnComoponent;