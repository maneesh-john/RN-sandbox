import React, { useContext }  from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";
import { StackProps } from "../types/navigation";
import { months } from "../utils/data";
import Button from "../components/Button";

type Props = NativeStackScreenProps<StackProps, "Profile">;

const Profile: React.FC<Props> = ({ navigation, route }) => {

  const { theme } = useContext(ThemeContext);
  const { user: { email, picture, name, phone, cell, registered, dob, location } } = route.params;

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  const labelStyle = [styles.label, { color: theme.text }];
  const valueStyle = [styles.value, { color: theme.accent }];

  return(
    <View style={styles.container}>
      <ImageBackground source={{ uri: picture.large }} style={{ flex: 1 }}>
        <ScrollView style={{ zIndex: 3 }}>
          <Image source={{ uri: picture.large }} style={[styles.image, { borderColor: `${theme.primary}aa` }]} />
          <View style={[styles.profileContainer, { backgroundColor: `${theme.primary}aa` }]}>
            <View>
              <Text style={labelStyle}>Name</Text>
              <Text style={valueStyle}>{name.first} {name.last}</Text>
            </View>
            <View>
              <Text style={labelStyle}>Email</Text>
              <Text style={valueStyle}>{email}</Text>
            </View>
            <View>
              <Text style={labelStyle}>Mobile</Text>
              <Text style={valueStyle}>{cell}</Text>
            </View>
            <View>
              <Text style={labelStyle}>Phone</Text>
              <Text style={valueStyle}>{phone}</Text>
            </View>
            <View>
              <Text style={labelStyle}>Date of birth</Text>
              <Text style={valueStyle}>{formatDate(dob.date)}</Text>
            </View>
            <View>
              <Text style={labelStyle}>Joining date</Text>
              <Text style={valueStyle}>{formatDate(registered.date)}</Text>
            </View>
            <View>
              <Text style={labelStyle}>Address</Text>
              <Text style={valueStyle}>{location.city} {location.state} {location.country}</Text>
            </View>
          </View>
          <Button
            title="Back"
            onPress={navigation.goBack}
            style={[styles.button, { backgroundColor: `${theme.accent}aa` }]}
          />
        </ScrollView>
        <View style={[styles.overlay, { backgroundColor: `${theme.primary}aa` }]} />
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
    top: 0,
    left: 0
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 75,
    borderWidth: 7
  },
  profileContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5
  },
  value: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15
  },
  button: {
    marginHorizontal: 20,
    borderRadius: 10
  }
});

export default Profile;