import React from "react";
import { FlatList, View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";

import { list } from "../utils/data";

const List: React.FC = () => {

  const renderUser = (item: any) => {
    return(
      <View style={styles.row} key={item.email}>
        <View>
          <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.nameText}>{item.name.first} {item.name.last}</Text>
          <Text style={styles.emailText}>{item.email}</Text>
          <Text
            style={styles.locationText}
            numberOfLines={1}
          >
            {item.location.city}, {item.location.state}, {item.location.country}
          </Text>
        </View>
      </View>
    );
  }

  return(
    <>
      <Text style={styles.header}>Users</Text>
      {/* <FlatList
        data={list}
        renderItem={renderUser}
        keyExtractor={(item) => item.email}
        style={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      /> */}
      <ScrollView style={styles.container}>
        {list.map(renderUser)}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  header: {
    fontSize: 18,
    color: "#fff",
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
    fontSize: 17,
    color: "#eee"
  },
  emailText: {
    fontSize: 16,
    color: "#ddd"
  },
  locationText: {
    fontSize: 15,
    color: "#ccc",
    width: Dimensions.get("window").width - 120
  },
  seperator: {
    height: 1,
    backgroundColor: "#aaa"
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 20,
    borderRadius: 25
  }
});

export default List;