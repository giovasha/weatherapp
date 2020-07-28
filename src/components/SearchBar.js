import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} style={styles.icon}/>
      <TextInput
        placeholder="Search for another location"
        value={term}
        onChangeText={onTermChange}
   onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgb( 230, 230, 230)",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    marginBottom: 10
  }
, 
icon :{
  marginTop: 7
}
});

export default SearchBar;
