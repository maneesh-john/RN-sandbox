import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

// import Button from "../components/Button";
import List from "../components/List";

type State = {
  name: string;
  email: string;
}

const FnComoponent: React.FC = () => {

  // const [data, setData] = useState<State>({ name: "", email: "" });
  // const [loading, setLoading] = useState<boolean>(false);

  // const handleChange = (key: keyof State) => {
  //   return (text: string) => {
  //     setData({ ...data, [key]: text });
  //   }
  // }

  // const handleSubmit = () => {
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 5000);
  // }

  return(
    <View style={styles.container}>
      <List />
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
    backgroundColor: "#2980b9"
  },
  text: {
    fontSize: 16,
    color: "#fff"
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 5
  },
  input: {
    padding: 15,
    borderWidth: 2,
    borderColor: "#2980b9",
    marginBottom: 15,
    borderRadius: 5,
    color: "#2980b9",
    fontSize: 16
  },
  button: {
    backgroundColor: "#2980b9"
  }
});

export default FnComoponent;