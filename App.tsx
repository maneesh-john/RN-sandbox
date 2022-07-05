import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

import Navigation from './src/navigation/Navigation';

const App = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="default" />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
