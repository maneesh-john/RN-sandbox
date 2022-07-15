import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Button, TextInput, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ClsComponent from './src/screens/ClassComponentScreen';
import FnComoponent from './src/screens/FunctionalComponentScreen';

const App = () => {
  const  [text, setText] = useState("")
  const [theList, setList] = useState<string[]>([])

  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(()=>{
      setList(["a", "b", "c"])
    }, 5000)
  },[])

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="default" />
      {/* <ClsComponent /> */}
      {/* <FnComoponent /> */}
      <TextInput 
        testID='a'
        placeholder='Enter something'
        onChangeText={(txt)=> {
          setText(txt);
        }}
      />
      <FlatList 
        data={theList}
        renderItem={({item, index})=> {
          return <Button
          testID={`txt-${index}`}
          title='Press Me'
          onPress={()=>{
            console.log("pressed")
            navigation.isFocused()
          }}
          />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
