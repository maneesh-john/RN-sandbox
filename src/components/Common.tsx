import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";

export const ListSeperator: React.FC = () => {

  const { theme } = useContext(ThemeContext);

  return <View style={[styles.seperator, { backgroundColor: theme.border }]} />;
}

export const EmptyComponent: React.FC = () => {

  return(
    <View>
      <ActivityIndicator size="small" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: 1
  }
});