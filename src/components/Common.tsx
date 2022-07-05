import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export const ListSeperator: React.FC = () => {
  return <View style={styles.seperator} />;
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
    height: 1,
    backgroundColor: "#aaa"
  }
});