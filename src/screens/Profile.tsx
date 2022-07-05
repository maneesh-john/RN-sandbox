import React  from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from "react-native";

import { StackProps } from "../types/navigation";
import { months } from "../utils/data";
import Button from "../components/Button";

type Props = NativeStackScreenProps<StackProps, "Profile">;

const Profile: React.FC<Props> = ({ navigation, route }) => {

  const { user: { email, picture, name, phone, cell, registered, dob, location } } = route.params;

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  return(
    <View style={styles.container}>
      <ImageBackground source={{ uri: picture.large }} style={{ flex: 1 }}>
        <ScrollView style={{ zIndex: 3 }}>
          <Image source={{ uri: picture.large }} style={styles.image} />
          <View style={styles.profileContainer}>
            <View>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{name.first} {name.last}</Text>
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{email}</Text>
            </View>
            <View>
              <Text style={styles.label}>Mobile</Text>
              <Text style={styles.value}>{cell}</Text>
            </View>
            <View>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{phone}</Text>
            </View>
            <View>
              <Text style={styles.label}>Date of birth</Text>
              <Text style={styles.value}>{formatDate(dob.date)}</Text>
            </View>
            <View>
              <Text style={styles.label}>Joining date</Text>
              <Text style={styles.value}>{formatDate(registered.date)}</Text>
            </View>
            <View>
              <Text style={styles.label}>Address</Text>
              <Text style={styles.value}>{location.city} {location.state} {location.country}</Text>
            </View>
          </View>
          <Button
            title="Back"
            onPress={navigation.goBack}
            style={ styles.button}
            textStyle={styles.buttonText}
          />
        </ScrollView>
        <View style={styles.overlay} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  imgContainer: {
    flex: 1
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#8e44adaa",
    top: 0,
    left: 0
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 75,
    borderWidth: 7,
    borderColor: "#fffa"
  },
  profileContainer: {
    backgroundColor: "#fffa",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  label: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5
  },
  value: {
    color: "#8e44ad",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15
  },
  button: {
    backgroundColor: "#fffc",
    marginHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    color: "#8e44ad"
  }
});

export default Profile;