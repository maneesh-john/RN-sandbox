import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, ActivityIndicator, TextStyle } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ title, onPress, style, loading, textStyle }) => {

  const { theme } = useContext(ThemeContext);

  return(
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme.accent }, style]}
      activeOpacity={.7}
    >
      {loading
        ? <ActivityIndicator size="small" color="#fff" />
        : <Text style={[styles.text, { color: theme.primary }, textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5
  },
  text: {
    textAlign: "center",
    fontSize: 16
  }
});

export default Button;