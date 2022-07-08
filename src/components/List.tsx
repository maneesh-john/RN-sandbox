import React, { useEffect, useState, useContext } from "react";
import { FlatList, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";
import { User } from "../types/user";
import { ListSeperator, EmptyComponent } from "./Common";

type Props = {
  navigate: (user: User) => void;
};

const List: React.FC<Props> = ({ navigate }) => {

  const [users, setUsers] = useState<User[]>([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => {
        res.json().then(data => setUsers(data.results));
      })
      .catch((err) => {
        console.log("Err", err)
      });
  }, []);

  const renderUser = ({ item }: { item: User, index: number }) => {
    return(
      <TouchableOpacity
        style={styles.row}
        key={item.email}
        onPress={() => navigate(item)}
      >
        <View>
          <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
        </View>
        <View>
          <Text
            style={[styles.nameText, { color: theme.header }]}
          >
            {item.name.first} {item.name.last}
          </Text>
          <Text style={[styles.emailText, { color: theme.subHeader }]}>{item.email}</Text>
          <Text
            style={[styles.locationText, { color: theme.text }]}
            numberOfLines={1}
          >
            {item.location.city}, {item.location.state}, {item.location.country}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return(
    <>
      <Text style={[styles.header, { color: theme.accent }]}>Users</Text>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.email}
        style={styles.container}
        ItemSeparatorComponent={ListSeperator}
        ListEmptyComponent={EmptyComponent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    padding: 10
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  nameText: {
    fontSize: 17
  },
  emailText: {
    fontSize: 16
  },
  locationText: {
    fontSize: 15,
    width: Dimensions.get("window").width - 120
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 20,
    borderRadius: 25
  }
});

export default List;