import React, { FC, useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity, Modal, InteractionManager } from "react-native";


import http from "../utils/http";
import Button from "./Button";

const List: React.FC = () => {

  const [userList, setUserList] = useState([])
  const [error, setError] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})

  const [showModal, setShowModal] = useState(false)

  const getUserList =  async() => {
    http.get("api/?results=50")
    .then(res=> setUserList(res.data.results))
    .catch(err => setError(true))
  }

  useEffect(()=>{
    getUserList()
  },[])

  const renderUser = ({item}: any) => {
    return(
      <TouchableOpacity
        onPress={()=> {
          setShowModal(true);
          setSelectedUser(item)
        }}
        style={styles.row}
        key={item.email}
      >
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
      </TouchableOpacity>
    );
  }

  const TheModal : FC = () => {
   return <Modal
     visible={showModal}
     transparent
    >
      <View style={styles.modalConainer}>
      <Button 
       title="❌"
       onPress={()=>{
        setShowModal(false)
        setSelectedUser({})
        }} 
        style={styles.modalBtnStyle}
      />
      <View>
          <Image source={{ uri: selectedUser?.picture?.thumbnail }} style={styles.image} />
        </View>
      <View>
          <Text style={[styles.nameText, styles.modalName]}>{selectedUser?.name?.first} {selectedUser?.name?.last}</Text>
          <Text style={[styles.emailText, styles.modalEmail]}>{selectedUser?.email}</Text>
          <Text
            style={[styles.locationText, styles.modalAddress]}
            numberOfLines={1}
          >
            {selectedUser?.location?.city}, {selectedUser?.location?.state}, {selectedUser?.location?.country}
          </Text>
        </View>
      </View>
    </Modal>
  }

  return(
    <>
      <TheModal/>
      <Text style={styles.header}>Users</Text>
      <FlatList
        data={userList}
        renderItem={renderUser}
        keyExtractor={(item) => item?.email}
        style={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        ListEmptyComponent={()=> {
          return <>
          {
            error ? <Text>
              Something went wrong
            </Text> : <ActivityIndicator />
          }
          </>
        }}
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
  },
  modalConainer:{
    paddingHorizontal:20,
    paddingTop:40,
    paddingBottom:20,
    width: "100%",
    marginRight:"20%",
    marginLeft:"5%",
    backgroundColor:"darkslategrey",
    position:"absolute",
    top: "30%",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  modalName:{
    textAlign:"center"
  },
  modalEmail:{
    textAlign:"center"
  },
  modalAddress:{
    textAlign:"center",
    marginBottom:10
  },
  modalBtnStyle:{
    backgroundColor: "transparent",
    position: "absolute",
    right: 10,
    top: 5
  }
});

export default List;