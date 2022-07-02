import React, { Component } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";

import Button from "../components/Button";

type Props = {};

type State = {
  name: string;
  email: string;
}

class ClsComponent extends Component<Props, State> {

  constructor(props: Props){
    super(props);

    this.state = {
      name: "",
      email: ""
    }
  }

  handleChange = (key: keyof State) => {
    return (text: string) => {
      this.setState({ [key]: text } as State);
    }
  }

  handleSubmit = () => {
    // Alert.alert("Title", "Description", [
    //   { text: "Yes", onPress: () => console.log("Pressed Yes") },
    //   { text: "No", style: "destructive", onPress: () => console.log("Pressed No") }
    // ]);
  }

  render(): React.ReactNode {
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            value={this.state.name}
            onChangeText={this.handleChange("name")}
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#16a085"
          />
          <TextInput
            value={this.state.email}
            onChangeText={this.handleChange("email")}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#16a085"
          />
          <Button
            title="Submit"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a085",
    justifyContent: "center",
    alignItems: "center"
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
    borderColor: "#16a085",
    marginBottom: 15,
    borderRadius: 5,
    color: "#16a085",
    fontSize: 16
  }
});

export default ClsComponent;