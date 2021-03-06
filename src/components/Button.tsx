import React from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, ActivityIndicator } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ title, onPress, style, loading }) => {

  return(
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={.7}
    >
      {loading
        ? <ActivityIndicator size="small" color="#fff" />
        : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16a085",
    padding: 15,
    borderRadius: 5
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  }
});

export default Button;