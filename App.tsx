import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

import ClsComponent from './src/screens/ClassComponentScreen';
import FnComoponent from './src/screens/FunctionalComponentScreen';

const App = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="default" />
      {/* <ClsComponent /> */}
      <FnComoponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
