import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icon

const Search = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Search</Text>
        <View style={styles.iconContainer}>
          <Icon name="search" size={20} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#545151",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row", // Align content in row
    justifyContent: "space-between", // Spacing between text and icon
    alignItems: "center", // Align items vertically
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 350,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    marginLeft: 10, // Add spacing between text and icon
  },
  container: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default Search;
