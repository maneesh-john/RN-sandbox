import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper"
import Button from "../components/Button";

// import Button from "../components/Button";
import List from "../components/List";

type State = {
  name: string;
  email: string;
}

const FnComoponent: React.FC = () => {

  const [showToolTip, setShowToolTip] = useState(false)

  // const [data, setData] = useState<State>({ name: "", email: "" });
  const [name, setName] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false)

  // const handleChange = (key: keyof State) => {
  //   return (text: string) => {
  //     setData({ ...data, [key]: text });
  //   }
  // }

  const validateForm = () => {
    if(!name.length){
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleSubmit = () => {
    setLoading(true);
    // setTimeout(() => setLoading(false), 5000);
    validateForm()
  }

  const handleInfoBtn = () => {
    setShowToolTip(!showToolTip);
  }

  return(
    <View style={styles.container}>
      <Snackbar
        visible={showToolTip}
        onDismiss={()=>{}}
        action={{
          label: "Ok",
          onPress: handleInfoBtn
        }}
      >
        Please enter your name
      </Snackbar>
      <View style={styles.inputHolder}>
        <View style={styles.titleHolder}>
          <Text style={styles.text}>
            Name
          </Text>
          <TouchableOpacity onPress={handleInfoBtn}>
            <Text style={styles.infoText}>i</Text>
          </TouchableOpacity>
          { showToolTip && <View style={styles.infoHolder}>
            <Text style={styles.infoDetailsText}>
              Please enter your Name
            </Text>
          </View>}
        </View>
        <TextInput 
          placeholder="Name"
          style={styles.input}
          onChangeText={(txt)=> setName(txt)}
      />
      {error && <Text style={styles.errorText}>Name is missing</Text>}
      </View>
      <Button
        title="Submit"
        onPress={handleSubmit}
        style={styles.button}
        loading={false}
      />
      {/* <List /> */}
      {/* <View style={styles.form}>
          <TextInput
            value={data.name}
            onChangeText={handleChange("name")}
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#2980b9"
          />
          <TextInput
            value={data.email}
            onChangeText={handleChange("email")}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#2980b9"
          />
          <Button
            title="Submit"
            onPress={handleSubmit}
            style={styles.button}
            loading={loading}
          />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  titleHolder:{
    flexDirection:"row"
  },
  infoText:{
    color:"white",
    marginLeft: 10,
    backgroundColor:"orange",
    width:20,
    borderRadius: 10,
    overflow:"hidden",
    textAlign:"center"
  },
  infoDetailsText:{
    color:"grey",
    backgroundColor:"white",
    padding:3,
    borderRadius:5
  },
  infoHolder:{
    position:"absolute",
    top: -25
  },
  errorText:{
    color:"red"
  },
  text: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 5
  },
  input: {
    width:"100%",
    padding: 15,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 15,
    borderRadius: 5,
    color: "white",
    fontSize: 16
  },
  inputHolder: {
    justifyContent:"center",
    // alignItems:"center",
    marginTop:40,
    marginHorizontal:20,
  },
  button: {
    backgroundColor: "#2980b9"
  }
});

export default FnComoponent;